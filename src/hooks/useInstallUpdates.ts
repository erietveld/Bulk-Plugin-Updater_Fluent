// src/hooks/useInstallUpdates.ts
// Custom hook for install updates business logic
// Following Architecture.md separation of concerns - Business logic and local state
// Integrates with service layer, TanStack Query, and Zustand store
// ADDED: Automatic data refresh after successful installation completion

import { useCallback, useRef, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import { getString } from '../utils/typeRefinements';
import { apiService } from '../lib/api/apiService';
import { useBatchProgressStore } from '../stores/batchProgressStore';
import { logger, createLogContext } from '../lib/logging/logger';
import { useNotifications } from './useNotifications';
import { useApiErrorModal } from './useApiErrorModal'; // NEW: For enhanced error handling
import type { useStoreUpdatesSelection } from './useStoreUpdatesSelection';
import { storeUpdatesQueryKeys } from './useStoreUpdatesHybrid'; // NEW: For correct cache invalidation

// Install updates response interface
export interface InstallUpdatesResponse {
  success: boolean;
  progress_id: string;
  status_message: string;
  http_status: number; // NEW: HTTP status from CICD API
  app_count: number;
  apps_requested: string;
  timestamp: string;
}

// Install updates error interface
export interface InstallUpdatesError {
  success: false;
  error: string;
  message: string;
  http_status?: number; // NEW: HTTP status from failed API call
  status_message?: string; // NEW: Additional status info
  timestamp: string;
}

// ServiceNow CI/CD Progress API response interface
export interface CICDProgressResponse {
  status: string; // "0" = running, "2" = successful, "3" = failed, etc.
  status_label: string; // "Running", "Successful", "Failed", etc.
  status_message: string;
  status_detail: string;
  error: string;
  links: {
    progress: {
      id: string;
      url: string;
    };
  };
  percent_complete: number; // 0-100
}

// Confirmation modal state interface
export interface ConfirmationModalState {
  open: boolean;
  actionLabel: string;
  selectedCount: number;
}

// Hook configuration
interface UseInstallUpdatesConfig {
  onSuccess?: (response: InstallUpdatesResponse) => void;
  onError?: (error: any) => void;
  onInstallationComplete?: () => Promise<void>; // NEW: Callback for data refresh after installation
  enableProgressPolling?: boolean;
  pollingInterval?: number;
}

export const useInstallUpdates = (
  selectionHook: ReturnType<typeof useStoreUpdatesSelection>,
  config: UseInstallUpdatesConfig = {}
) => {
  const {
    onSuccess,
    onError,
    onInstallationComplete, // NEW: Data refresh callback
    enableProgressPolling = true,
    pollingInterval = 5000 // 5 seconds as requested
  } = config;

  // Dependencies
  const queryClient = useQueryClient();
  const batchProgressStore = useBatchProgressStore();
  const { showSuccess, showError, showInfo } = useNotifications(); // showError for non-API errors
  const { showHttpError, showAuthError, showServerError, modalOpened, modalError, closeModal } = useApiErrorModal(); // NEW: Enhanced error handling
  
  // Progress polling ref
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Confirmation modal state
  const [confirmationModal, setConfirmationModal] = useState<ConfirmationModalState>({
    open: false,
    actionLabel: '',
    selectedCount: 0
  });

  // STEP 6: Service layer method with correlation tracking
  const callInstallUpdatesApi = useCallback(async (selectedIds: string[], correlationId?: string): Promise<InstallUpdatesResponse> => {
    // STEP 6: Enhanced source logging with correlation at hook layer
    logger.info('🎯 INSTALL UPDATES: Starting at Hook layer', createLogContext({
      correlationId,
      selectedCount: selectedIds.length,
      selectedIds: selectedIds.slice(0, 3).join(',') + (selectedIds.length > 3 ? '...' : ''), // Log first 3 IDs
      layer: 'react_hook',
      operation: 'install_updates_hook_start',
      hookName: 'useInstallUpdates'
    }));

    // STEP 6: Legacy log for compatibility (will be removed in Step 9)
    logger.info('Calling install updates API', createLogContext({
      selectedCount: selectedIds.length,
      selectedIds: selectedIds.slice(0, 5) // Log first 5 IDs only
    }));

    const response = await apiService.installUpdates(selectedIds);
    
    // STEP 6: Source logging - API response at hook layer
    logger.info('📨 INSTALL UPDATES: API response received at Hook layer', createLogContext({
      correlationId,
      layer: 'react_hook',
      operation: 'api_response_received_hook',
      hookName: 'useInstallUpdates',
      success: response.success,
      progressId: response.progress_id,
      appCount: response.app_count
    }));
    
    return response;
  }, []);

  // ServiceNow CI/CD Progress API polling method
  const pollCICDProgress = useCallback(async (progressId: string): Promise<CICDProgressResponse> => {
    logger.info('Polling CI/CD progress API', createLogContext({
      progressId,
      endpoint: `/api/sn_cicd/progress/${progressId}`
    }));

    const response = await apiService.get<CICDProgressResponse>(
      `/api/sn_cicd/progress/${progressId}`
    );

    return response.result;
  }, []);

  // Start progress polling using ServiceNow CI/CD Progress API
  const startProgressPolling = useCallback((progressId: string) => {
    if (!enableProgressPolling) return;

    // Clear any existing polling
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
    }

    logger.info('Starting CI/CD progress polling', createLogContext({
      progressId,
      pollingInterval,
      endpoint: `/api/sn_cicd/progress/${progressId}`
    }));

    pollingIntervalRef.current = setInterval(async () => {
      try {
        const progressState = await pollCICDProgress(progressId);
        
        logger.info('CI/CD progress update received', createLogContext({
          progressId,
          status: progressState.status,
          statusLabel: progressState.status_label,
          percentComplete: progressState.percent_complete,
          statusMessage: progressState.status_message
        }));

        // UX IMPROVEMENT: Override progress and status message for better user experience
        const rawProgress = progressState.percent_complete || 0;
        const rawStatusMessage = progressState.status_message || progressState.status_label || 'Processing...';
        
        // Override 0% progress to show 5% to indicate activity
        const displayProgress = rawProgress === 0 ? 5 : rawProgress;
        
        // Enhance status message for long-running queued operations and finishing stages
        const displayStatusMessage = rawStatusMessage === 'Executing queued operation' 
          ? 'Executing queued operation -- This may take a long time.'
          : (rawStatusMessage === 'Running' && rawProgress >= 90)
            ? 'Running -- Finishing up, this may take a longer time.'
            : rawStatusMessage;

        // Update store with enhanced progress values
        batchProgressStore.updateProgress(displayProgress, displayStatusMessage);

        // Handle completion states
        if (progressState.status_label === 'Successful' && progressState.percent_complete === 100) {
          batchProgressStore.completeOperation('Installation completed successfully');
          stopProgressPolling();
          
          // INSTALL FIX: Follow exact same pattern as sync operations
          try {
            logger.info('Installation completed - starting data refresh like sync operations', {
              progressId,
              refreshPattern: 'sync-like-refresh',
              step: '1-clear-selections'
            });

            // Step 1: Clear selections (like sync operations)
            selectionHook.clearSelection();
            
            // Step 2: Invalidate TanStack Query cache (like sync operations)
            logger.info('Install refresh - invalidating TanStack Query cache', {
              progressId,
              refreshPattern: 'sync-like-refresh',
              step: '2-invalidate-cache'
            });
            
            await queryClient.invalidateQueries({ 
              queryKey: storeUpdatesQueryKeys.lists(),
              exact: true 
            });
            
            // Step 3: Trigger stale-while-revalidate refresh (like sync operations)
            logger.info('Install refresh - triggering stale-while-revalidate refresh', {
              progressId,
              refreshPattern: 'sync-like-refresh',
              step: '3-stale-while-revalidate'
            });
            
            if (onInstallationComplete) {
              await onInstallationComplete(); // Uses stale-while-revalidate pattern
            }
            
            // Step 4: Single success notification
            showSuccess({
              title: 'Installation Complete',
              message: `Installation of ${batchProgressStore.selectedIds.length} updates completed successfully.`
            });
            
            logger.info('Install refresh completed successfully', {
              progressId,
              refreshPattern: 'sync-like-refresh',
              step: '4-completed'
            });
            
          } catch (refreshError) {
            logger.error('Install data refresh failed', 
              refreshError instanceof Error ? refreshError : new Error(String(refreshError)),
              createLogContext({ progressId, refreshPattern: 'sync-like-refresh' })
            );
            
            showError({
              title: 'Installation Complete',
              message: `Installation completed, but data refresh failed. Please refresh the page manually.`
            });
          }
          
        } else if (progressState.status_label === 'Failed' || progressState.error) {
          const errorMessage = progressState.error || progressState.status_message || 'Installation failed';
          batchProgressStore.errorOperation('Installation failed', progressState);
          stopProgressPolling();
          
          // NEW: Show enhanced error modal instead of simple toast
          showHttpError(
            'Installation Failed',
            errorMessage,
            progressState.status || 'unknown',
            progressState.status_message,
            progressId
          );

          logger.error('Installation failed', 
            new Error(errorMessage),
            createLogContext({
              progressId,
              status: progressState.status,
              statusLabel: progressState.status_label,
              error: progressState.error,
              statusDetail: progressState.status_detail
            })
          );
        }
        // If status is still running or in progress, continue polling

      } catch (error) {
        logger.error('CI/CD progress polling failed', 
          error instanceof Error ? error : new Error(String(error)),
          createLogContext({ progressId })
        );
        
        // Don't stop polling on single error - ServiceNow might be temporarily unavailable
        // But if we get multiple consecutive errors, we should consider stopping
      }
    }, pollingInterval);

  }, [enableProgressPolling, pollingInterval, pollCICDProgress, batchProgressStore, queryClient, showSuccess, showError, showInfo, onInstallationComplete, selectionHook.clearSelection]);

  // Stop progress polling
  const stopProgressPolling = useCallback(() => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
      
      logger.info('Stopped CI/CD progress polling', createLogContext({}));
    }
  }, []);

  // TanStack Query mutation for install updates
  const installUpdatesMutation = useMutation({
    mutationFn: (args: { selectedIds: string[], correlationId?: string }) => {
      return callInstallUpdatesApi(args.selectedIds, args.correlationId);
    },
    onMutate: (args: { selectedIds: string[], correlationId?: string }) => {
      const { selectedIds } = args;
      // STEP 6: Generate beautiful correlation ID for end-to-end tracking
      const correlationId = `api_${nanoid(10)}`;
      
      // Start operation in store
      const operationId = batchProgressStore.startOperation('install-all', selectedIds);
      
      // STEP 6: Enhanced source logging with correlation at mutation start
      logger.info('🚀 INSTALL UPDATES: Mutation started at Hook layer', createLogContext({
        correlationId,
        operationId,
        selectedCount: selectedIds.length,
        layer: 'react_hook',
        operation: 'mutation_start',
        hookName: 'useInstallUpdates',
        mutationType: 'install_updates'
      }));
      
      // STEP 6: Legacy log for compatibility (will be removed in Step 9)
      logger.info('Install updates mutation started', createLogContext({
        operationId,
        selectedCount: selectedIds.length
      }));
      
      return { operationId, correlationId };
    },
    onSuccess: (response: InstallUpdatesResponse, args: { selectedIds: string[], correlationId?: string }, context?: { operationId: string; correlationId: string }) => {
      const { selectedIds } = args;
      const correlationId = context?.correlationId || 'unknown';
      
      // STEP 6: Enhanced source logging with correlation at success
      logger.info('✅ INSTALL UPDATES: API call successful at Hook layer', createLogContext({
        correlationId,
        progressId: response.progress_id,
        appCount: response.app_count,
        statusMessage: response.status_message,
        httpStatus: response.http_status,
        layer: 'react_hook',
        operation: 'api_success_hook',
        hookName: 'useInstallUpdates'
      }));
      
      // STEP 6: Legacy log for compatibility (will be removed in Step 9)
      logger.info('Install updates API call successful', createLogContext({
        progressId: response.progress_id,
        appCount: response.app_count,
        statusMessage: response.status_message,
        httpStatus: response.http_status // NEW: Log http_status
      }));

      // REMOVED: Hook layer error handling now handled by centralized processor
      // Central processor detects and handles nested http_status errors correctly

      // Update store with progress worker ID
      batchProgressStore.setProgressWorkerId(response.progress_id);
      
      // STEP 6: Source logging - Starting progress polling with correlation
      logger.info('🔄 INSTALL UPDATES: Starting progress polling at Hook layer', createLogContext({
        correlationId,
        progressId: response.progress_id,
        layer: 'react_hook',
        operation: 'progress_polling_start',
        hookName: 'useInstallUpdates',
        pollingInterval
      }));
      
      // Start progress polling using CI/CD Progress API
      startProgressPolling(response.progress_id);
      
      showInfo({
        title: 'Installation Started',
        message: `Started installation of ${response.app_count} updates. Tracking progress...`
      });

      // Call custom success handler
      onSuccess?.(response);
    },
    onError: (error: any, args: { selectedIds: string[], correlationId?: string }, context?: { operationId: string; correlationId: string }) => {
      const { selectedIds } = args;
      const correlationId = context?.correlationId || 'unknown';
      
      // STEP 6: Enhanced error logging with correlation at hook error handler
      logger.info('❌ INSTALL UPDATES: Error at Hook layer', createLogContext({
        correlationId,
        selectedCount: selectedIds.length,
        layer: 'react_hook',
        operation: 'mutation_error_hook',
        hookName: 'useInstallUpdates',
        errorType: typeof error,
        hasResponseBody: !!error.responseBody,
        httpStatus: error.responseBody?.http_status || error.httpStatus || 'unknown'
      }));
      
      // STEP 6: Legacy log for compatibility (will be removed in Step 9) - reduced verbosity
      logger.info('Displaying error to user', createLogContext({
        selectedCount: selectedIds.length,
        httpStatus: error.responseBody?.http_status || error.httpStatus || 'unknown',
        errorType: error.responseBody?.error || error.errorCode || 'unknown'
      }));

      // FIXED: Extract original ApiError from TanStack Query wrapper
      // TanStack Query wraps our ApiError in a basic Error, losing custom properties
      let originalError = error;
      
      // Check for TanStack Query error patterns
      if (error.cause && typeof error.cause === 'object') {
        originalError = error.cause; // TanStack Query stores original in 'cause'
      } else if (error.originalError && typeof error.originalError === 'object') {
        originalError = error.originalError; // Alternative pattern
      } else if (error.request && error.request.error) {
        originalError = error.request.error; // Another possible location
      }

      // FIXED: Enhanced error handling with better logging and type safety
      let errorTitle = 'Installation Failed';
      let errorMessage = 'Failed to start installation process';
      let httpStatus: string;
      let statusMessage: string;
      
      // FIXED: Check if originalError contains structured response body information with detailed logging
      if (originalError.responseBody) {
        // Use the actual error details from the response body with type safety
        errorMessage = getString(originalError.responseBody.message || originalError.message, errorMessage);
        httpStatus = getString(originalError.responseBody.http_status || originalError.httpStatus, '');
        statusMessage = getString(originalError.responseBody.status_message || originalError.statusMessage, '');
      } else if (originalError.httpStatus) {
        // Fallback to error properties if no response body with type safety
        httpStatus = getString(originalError.httpStatus, '');
        statusMessage = getString(originalError.statusMessage, '');
        errorMessage = getString(originalError.message, errorMessage);
      } else {
        errorMessage = getString(originalError.message || error.message, errorMessage);
        httpStatus = '';
        statusMessage = '';
      }

      // DEBUG: Log error properties for button debugging - ENHANCED to show all error properties
      logger.info('🔧 DEBUG: useInstallUpdates error analysis', createLogContext({
        correlationId,
        layer: 'react_hook',
        operation: 'error_analysis_debug',
        hookName: 'useInstallUpdates',
        // Original TanStack Query wrapped error
        errorType: typeof error,
        errorConstructor: error.constructor.name,
        errorKeys: Object.keys(error || {}),
        // Extracted original error
        originalErrorType: typeof originalError,
        originalErrorConstructor: originalError.constructor.name,
        originalErrorKeys: Object.keys(originalError || {}),
        // Error properties from original error
        errorSource: originalError.errorSource,
        credentialObject: originalError.credentialObject,
        httpStatus,
        statusMessage,
        errorMessage: errorMessage.substring(0, 50) + '...',
        hasErrorSource: !!originalError.errorSource,
        hasCredentialObject: !!originalError.credentialObject,
        willShowButton: (httpStatus === '401' || httpStatus === '403') && originalError.errorSource === 'servicenow-subflow' && !!originalError.credentialObject,
        // ADDED: Check if properties exist with different case or structure
        errorSourceAlt: getString(originalError.error_source || originalError.source),
        credentialObjectAlt: getString(originalError.credential_object || originalError.credentials),
        responseBodyKeys: originalError.responseBody ? Object.keys(originalError.responseBody) : []
      }));

      // FIXED: Display appropriate error modal based on the actual HTTP status from response body
      if (httpStatus === '401') {
        showAuthError(
          errorMessage,
          undefined, // Progress ID not available at this stage
          getString(originalError.errorSource), // Use type-safe getter
          getString(originalError.credentialObject) // Use type-safe getter
        );
      } else if (httpStatus === '403') {
        showHttpError(
          getString(originalError.errorSource) === 'servicenow-subflow' ? 'Subflow Permission Error' : 'Permission Error',
          errorMessage,
          httpStatus,
          statusMessage,
          undefined,
          getString(originalError.errorSource), // Use type-safe getter
          getString(originalError.credentialObject) // Use type-safe getter
        );
      } else if (httpStatus === '404') {
        showHttpError(
          'Service Not Found',
          errorMessage,
          httpStatus,
          statusMessage,
          undefined,
          getString(originalError.errorSource), // Use type-safe getter
          getString(originalError.credentialObject) // Use type-safe getter
        );
      } else if (httpStatus === '500' || error.message.includes('HTTP 500')) {
        showServerError(
          errorMessage,
          undefined // Progress ID not available
        );
      } else if (error.message && error.message.includes('Failed to fetch')) {
        showHttpError(
          'Connection Error',
          'Network connection failed. Please check your connection and try again.',
          undefined,
          undefined,
          undefined,
          getString(originalError.errorSource), // Use type-safe getter
          getString(originalError.credentialObject) // Use type-safe getter
        );
      } else {
        // Generic error - use the enhanced modal with available details
        showHttpError(
          errorTitle,
          errorMessage,
          httpStatus || undefined, // Don't pass empty string
          statusMessage || undefined, // Don't pass empty string
          undefined,
          getString(originalError.errorSource), // Use type-safe getter
          getString(originalError.credentialObject) // Use type-safe getter
        );
      }

      // Update store with error - use enhanced error message with type safety
      batchProgressStore.errorOperation(errorMessage, {
        httpStatus,
        statusMessage,
        errorCode: getString(originalError.responseBody?.error || originalError.errorCode),
        isFromResponseBody: originalError.isFromResponseBody || false
      });

      // STEP 6: Final error logging with correlation
      logger.info('💥 INSTALL UPDATES: Final error handling at Hook layer', createLogContext({
        correlationId,
        layer: 'react_hook',
        operation: 'final_error_handling',
        hookName: 'useInstallUpdates',
        errorMessage,
        httpStatus,
        statusMessage,
        errorCode: getString(originalError.responseBody?.error || originalError.errorCode),
        isFromResponseBody: originalError.isFromResponseBody || false
      }));

      // Call custom error handler
      onError?.(error);
    }
  });

  // Modal management functions
  const showConfirmationModal = useCallback((actionLabel: string, selectedCount: number) => {
    setConfirmationModal({
      open: true,
      actionLabel,
      selectedCount
    });
  }, []);

  const hideConfirmationModal = useCallback(() => {
    setConfirmationModal(prev => ({
      ...prev,
      open: false
    }));
  }, []);

  const handleConfirmInstallation = useCallback(() => {
    const selectedIds = selectionHook.selection.selectedIds;
    
    if (selectedIds.length === 0) {
      logger.warn('No items selected for installation');
      hideConfirmationModal();
      return;
    }

    // Hide modal and start installation
    hideConfirmationModal();
    installUpdatesMutation.mutate({ selectedIds });
  }, [selectionHook.selection.selectedIds, hideConfirmationModal, installUpdatesMutation.mutate]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopProgressPolling();
    };
  }, [stopProgressPolling]);

  // Public interface
  return {
    // Mutation
    installUpdates: (selectedIds: string[]) => installUpdatesMutation.mutate({ selectedIds }),
    installUpdatesAsync: (selectedIds: string[]) => installUpdatesMutation.mutateAsync({ selectedIds }),
    installAllMutation: installUpdatesMutation, // Legacy alias for backward compatibility
    
    // Mutation state
    isLoading: installUpdatesMutation.isPending,
    error: installUpdatesMutation.error,
    data: installUpdatesMutation.data,
    isError: installUpdatesMutation.isError,
    isSuccess: installUpdatesMutation.isSuccess,
    
    // Modal state and actions
    confirmationModal,
    showConfirmationModal,
    hideConfirmationModal,
    handleConfirmInstallation,
    
    // Progress state (from Zustand store)
    batchProgress: batchProgressStore,
    
    // Progress control
    startProgressPolling,
    stopProgressPolling,
    
    // API Error Modal state (NEW: expose modal state for rendering)
    apiErrorModal: {
      opened: modalOpened,
      error: modalError,
      onClose: closeModal
    },
    
    // Actions
    reset: useCallback(() => {
      installUpdatesMutation.reset();
      batchProgressStore.resetOperation();
      stopProgressPolling();
      hideConfirmationModal();
      closeModal(); // NEW: Also close API error modal on reset
    }, [installUpdatesMutation.reset, batchProgressStore.resetOperation, stopProgressPolling, hideConfirmationModal, closeModal])
  };
};