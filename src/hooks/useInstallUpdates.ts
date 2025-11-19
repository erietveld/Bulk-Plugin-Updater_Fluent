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
  const { showHttpError, showAuthError, showServerError, showNetworkError, modalOpened, modalError, closeModal } = useApiErrorModal(); // NEW: Enhanced error handling
  
  // Progress polling ref
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const consecutiveErrorsRef = useRef<number>(0);
  const maxConsecutiveErrors = 3; // Stop after 3 consecutive errors

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

        // Reset consecutive errors on successful response
        consecutiveErrorsRef.current = 0;

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
        
        // Increment consecutive error count for tracking
        consecutiveErrorsRef.current += 1;
        
        // ENHANCED: Comprehensive error detection for stopping polling
        const shouldStopPolling = () => {
          // 404 errors - progress ID doesn't exist
          if (error instanceof Error && 
              ((error as any).status === 404 || 
               error.message.includes('404') || 
               error.message.includes('Not Found'))) {
            return { stop: true, reason: '404_progress_not_found', message: 'Progress ID does not exist' };
          }
          
          // Authentication/Permission errors - should not retry
          if (error instanceof Error && 
              ((error as any).status === 401 || (error as any).status === 403 ||
               error.message.includes('401') || error.message.includes('403') ||
               error.message.includes('Unauthorized') || error.message.includes('Forbidden'))) {
            return { stop: true, reason: 'auth_error', message: 'Authentication or permission error' };
          }
          
          // Network/Connection errors that indicate polling should stop
          if (error instanceof Error && 
              (error.message.includes('Failed to fetch') ||
               error.message.includes('Network error') ||
               error.message.includes('ERR_NETWORK') ||
               error.message.includes('ERR_INTERNET_DISCONNECTED'))) {
            return { stop: true, reason: 'network_error', message: 'Network connection failed' };
          }
          
          // Timeout errors - ServiceNow may be overloaded
          if (error instanceof Error && 
              (error.message.includes('timeout') || error.message.includes('TIMEOUT') ||
               (error as any).code === 'TIMEOUT' || (error as any).name === 'TimeoutError')) {
            return { stop: true, reason: 'timeout_error', message: 'Request timeout - service unavailable' };
          }
          
          // Too many consecutive errors - ServiceNow may be down
          if (consecutiveErrorsRef.current >= maxConsecutiveErrors) {
            return { stop: true, reason: 'max_consecutive_errors', message: `${maxConsecutiveErrors} consecutive polling errors` };
          }
          
          // Server errors (5xx) - but only stop after multiple attempts
          if (error instanceof Error && 
              ((error as any).status >= 500 || error.message.includes('500') || error.message.includes('Internal Server Error')) &&
              consecutiveErrorsRef.current >= 2) { // Stop after 2 server errors
            return { stop: true, reason: 'server_error', message: 'Multiple server errors - service may be down' };
          }
          
          return { stop: false, reason: 'transient_error', message: 'Transient error - continue polling' };
        };
        
        const errorDecision = shouldStopPolling();
        
        if (errorDecision.stop) {
          logger.info(`🛑 PROGRESS POLLING: Stopping due to ${errorDecision.reason}`, createLogContext({
            progressId,
            reason: errorDecision.reason,
            consecutiveErrors: consecutiveErrorsRef.current,
            maxConsecutiveErrors,
            errorMessage: error instanceof Error ? error.message : String(error),
            decision: 'stop_polling'
          }));
          
          batchProgressStore.errorOperation(`Installation failed - ${errorDecision.message}`, {
            httpStatus: (error as any).status ? String((error as any).status) : 'unknown',
            statusMessage: errorDecision.message,
            errorCode: errorDecision.reason.toUpperCase(),
            isFromResponseBody: false,
            consecutiveErrors: consecutiveErrorsRef.current
          });
          
          // CRITICAL: Show error modal to user for terminal API failures
          const httpStatus = (error as any).status ? String((error as any).status) : 'unknown';
          const errorMessage = `Installation failed - ${errorDecision.message}`;
          
          // Show appropriate modal based on error type for all terminal failures
          if (errorDecision.reason === '404_progress_not_found') {
            showHttpError(
              'Progress Tracking Failed',
              'The installation progress could not be tracked. The installation may still be running in the background.',
              '404',
              'Progress ID not found',
              progressId
            );
          } else if (errorDecision.reason === 'auth_error') {
            if (httpStatus === '401') {
              showAuthError(
                errorMessage,
                progressId,
                'servicenow-progress-api', // Error source for progress API
                '' // No specific credential object for progress API
              );
            } else {
              showHttpError(
                'Progress Tracking Permission Error',
                errorMessage,
                httpStatus,
                'Access denied to progress API',
                progressId
              );
            }
          } else if (errorDecision.reason === 'network_error') {
            showHttpError(
              'Progress Tracking Connection Failed',
              'Network connection lost during progress tracking. The installation may still be running in the background.',
              undefined,
              undefined,
              progressId
            );
          } else if (errorDecision.reason === 'timeout_error') {
            showHttpError(
              'Progress Tracking Timeout',
              'Progress tracking timed out. The ServiceNow instance may be overloaded. The installation may still be running.',
              undefined,
              'Request timeout',
              progressId
            );
          } else if (errorDecision.reason === 'server_error') {
            showServerError(
              'Progress tracking failed due to server errors. The installation may still be running in the background.',
              progressId
            );
          } else if (errorDecision.reason === 'max_consecutive_errors') {
            showHttpError(
              'Progress Tracking Failed',
              `Multiple consecutive errors occurred during progress tracking (${consecutiveErrorsRef.current}/${maxConsecutiveErrors}). The installation may still be running.`,
              undefined,
              'Multiple consecutive errors',
              progressId
            );
          } else {
            // Generic terminal error modal
            showHttpError(
              'Progress Tracking Error',
              errorMessage,
              httpStatus !== 'unknown' ? httpStatus : undefined,
              errorDecision.message,
              progressId
            );
          }
          
          stopProgressPolling();
          return; // Exit the polling loop
        } else {
          // Transient error - log but continue polling
          logger.warn(`⚠️ PROGRESS POLLING: Transient error ${consecutiveErrorsRef.current}/${maxConsecutiveErrors}`, createLogContext({
            progressId,
            reason: errorDecision.reason,
            consecutiveErrors: consecutiveErrorsRef.current,
            maxConsecutiveErrors,
            errorMessage: error instanceof Error ? error.message : String(error),
            decision: 'continue_polling'
          }));
          
          // Continue polling - the interval will retry automatically
        }
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

      // ENHANCED: Extract original ServiceNow error from TanStack Query wrapper with comprehensive unwrapping
      let originalError = error;
      
      // Multiple unwrapping strategies to find the original ServiceNow error with critical properties
      const unwrappingStrategies = [
        // Strategy 1: Direct ServiceNow error detection (already enhanced)
        () => {
          if (error && typeof error === 'object' && 
              (error.isServiceNowNested || error.errorSource || error.credentialObject)) {
            return error; // This is already our enhanced ServiceNow error
          }
          return null;
        },
        
        // Strategy 2: TanStack Query patterns
        () => error.cause && typeof error.cause === 'object' ? error.cause : null,
        () => error.originalError && typeof error.originalError === 'object' ? error.originalError : null,
        () => error.request && error.request.error ? error.request.error : null,
        
        // Strategy 3: Additional unwrapping patterns for ServiceNow errors
        () => error.inner && typeof error.inner === 'object' ? error.inner : null,
        () => error.original && typeof error.original === 'object' ? error.original : null,
        () => error.sourceError && typeof error.sourceError === 'object' ? error.sourceError : null,
        
        // Strategy 4: Nested error in response data
        () => error.response && error.response.data && typeof error.response.data === 'object' ? error.response.data : null,
        () => error.data && typeof error.data === 'object' ? error.data : null,
        
        // Strategy 5: Deep nested patterns
        () => {
          // Check multiple levels deep for TanStack Query wrappers
          let current = error;
          for (let i = 0; i < 5 && current; i++) {
            if (current.isServiceNowNested || current.errorSource || current.credentialObject) {
              return current;
            }
            current = current.cause || current.originalError || current.inner || current.original;
          }
          return null;
        }
      ];
      
      // Try each unwrapping strategy until we find the original ServiceNow error
      for (const strategy of unwrappingStrategies) {
        const candidate = strategy();
        if (candidate && typeof candidate === 'object') {
          // Verify this looks like our enhanced ServiceNow error
          if (candidate.isServiceNowNested || candidate.errorSource || candidate.credentialObject || 
              candidate.responseBody || candidate.shouldStopPolling) {
            originalError = candidate;
            break;
          }
        }
      }
      
      // CRITICAL: Ensure all ServiceNow error properties are preserved by copying from any level
      // Sometimes properties are at different levels in the error chain
      const preserveProperty = (propName: string) => {
        if (!originalError[propName]) {
          // Search through the error chain for this property
          let current = error;
          for (let i = 0; i < 5 && current; i++) {
            if (current[propName]) {
              originalError[propName] = current[propName];
              break;
            }
            current = current.cause || current.originalError || current.inner || current.original;
          }
        }
      };
      
      // Preserve critical properties needed for authentication button
      preserveProperty('errorSource');
      preserveProperty('credentialObject');
      preserveProperty('isServiceNowNested');
      preserveProperty('shouldStopPolling');
      preserveProperty('responseBody');
      preserveProperty('correlationId');

      // ENHANCED: Type-safe error handling with proper guards and safety checks
      let errorTitle = 'Installation Failed';
      let errorMessage = 'Failed to start installation process';
      let httpStatus: string = '';
      let statusMessage: string = '';
      
      // TYPE GUARD: Safe property access with type checking
      const safeGetProperty = (obj: any, prop: string, defaultValue: any = '') => {
        if (!obj || typeof obj !== 'object') return defaultValue;
        const value = obj[prop];
        return value !== undefined && value !== null ? value : defaultValue;
      };
      
      // TYPE GUARD: Check if object has response body structure
      const hasResponseBody = (obj: any): boolean => {
        return obj && typeof obj === 'object' && obj.responseBody && typeof obj.responseBody === 'object';
      };
      
      // TYPE GUARD: Check if object looks like an HTTP error
      const isHttpError = (obj: any): boolean => {
        return obj && typeof obj === 'object' && (
          typeof obj.httpStatus === 'number' || typeof obj.httpStatus === 'string' ||
          typeof obj.status === 'number' || typeof obj.status === 'string'
        );
      };
      
      // TYPE GUARD: Safe HTTP status extraction and conversion
      const safeGetHttpStatus = (obj: any): string => {
        if (!obj || typeof obj !== 'object') return '';
        
        // Check multiple possible status properties with type safety
        const statusSources = [
          obj.responseBody?.http_status,
          obj.httpStatus,
          obj.status,
          obj.response?.status
        ];
        
        for (const status of statusSources) {
          if (typeof status === 'number' && status > 0) return String(status);
          if (typeof status === 'string' && status.trim() !== '') return status.trim();
        }
        
        return '';
      };
      
      // ENHANCED: Type-safe error detail extraction with comprehensive fallbacks
      if (hasResponseBody(originalError)) {
        // Response body exists - extract details safely
        errorMessage = getString(
          safeGetProperty(originalError.responseBody, 'message') || 
          safeGetProperty(originalError, 'message'),
          errorMessage
        );
        httpStatus = safeGetHttpStatus(originalError);
        statusMessage = getString(
          safeGetProperty(originalError.responseBody, 'status_message') || 
          safeGetProperty(originalError, 'statusMessage'),
          ''
        );
      } else if (isHttpError(originalError)) {
        // HTTP error without response body - extract available details
        httpStatus = safeGetHttpStatus(originalError);
        statusMessage = getString(safeGetProperty(originalError, 'statusMessage'), '');
        errorMessage = getString(safeGetProperty(originalError, 'message'), errorMessage);
      } else {
        // Fallback to basic error extraction with type safety
        errorMessage = getString(
          safeGetProperty(originalError, 'message') || 
          safeGetProperty(error, 'message'),
          errorMessage
        );
        httpStatus = safeGetHttpStatus(originalError) || safeGetHttpStatus(error);
        statusMessage = getString(
          safeGetProperty(originalError, 'statusMessage') ||
          safeGetProperty(error, 'statusMessage'),
          ''
        );
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

      // ENHANCED: Type-safe error modal display with comprehensive property checking
      const safeGetErrorSource = (): string => getString(safeGetProperty(originalError, 'errorSource'), '');
      const safeGetCredentialObject = (): string => getString(safeGetProperty(originalError, 'credentialObject'), '');
      
      // TYPE GUARD: Check if authentication button should be shown
      const shouldShowAuthButton = (): boolean => {
        const hasAuthHttpStatus = httpStatus === '401' || httpStatus === '403';
        const hasSubflowSource = safeGetErrorSource() === 'servicenow-subflow';
        const hasCredentialObject = safeGetCredentialObject() !== '';
        
        return hasAuthHttpStatus && hasSubflowSource && hasCredentialObject;
      };
      
      // ENHANCED: Type-safe error modal routing with better error categorization
      if (httpStatus === '401') {
        showAuthError(
          errorMessage,
          undefined, // Progress ID not available at this stage
          safeGetErrorSource(),
          safeGetCredentialObject()
        );
      } else if (httpStatus === '403') {
        showHttpError(
          shouldShowAuthButton() ? 'Subflow Permission Error' : 'Permission Error',
          errorMessage,
          httpStatus,
          statusMessage,
          undefined,
          safeGetErrorSource(),
          safeGetCredentialObject()
        );
      } else if (httpStatus === '404') {
        showHttpError(
          'Service Not Found',
          errorMessage,
          httpStatus,
          statusMessage,
          undefined,
          safeGetErrorSource(),
          safeGetCredentialObject()
        );
      } else if (httpStatus === '500' || (error instanceof Error && error.message.includes('HTTP 500'))) {
        showServerError(
          errorMessage,
          undefined // Progress ID not available
        );
      } else if (error instanceof Error && error.message.includes('Failed to fetch')) {
        showHttpError(
          'Connection Error',
          'Network connection failed. Please check your connection and try again.',
          undefined,
          undefined,
          undefined,
          safeGetErrorSource(),
          safeGetCredentialObject()
        );
      } else {
        // Generic error - use the enhanced modal with available details
        showHttpError(
          errorTitle,
          errorMessage,
          httpStatus || undefined, // Don't pass empty string
          statusMessage || undefined, // Don't pass empty string
          undefined,
          safeGetErrorSource(),
          safeGetCredentialObject()
        );
      }

      // ENHANCED: Type-safe store error update with comprehensive property extraction
      batchProgressStore.errorOperation(errorMessage, {
        httpStatus,
        statusMessage,
        errorCode: getString(
          safeGetProperty(originalError.responseBody, 'error') || 
          safeGetProperty(originalError, 'errorCode'),
          ''
        ),
        isFromResponseBody: hasResponseBody(originalError),
        consecutiveErrors: consecutiveErrorsRef.current
      });

      // ENHANCED: Type-safe polling control with comprehensive error checking
      const shouldStopPollingOnError = (): boolean => {
        // Check shouldStopPolling property with type safety
        const explicitStop = safeGetProperty(originalError, 'shouldStopPolling', false);
        if (explicitStop === true) return true;
        
        // Check HTTP status codes that should stop polling
        const stopStatusCodes = ['401', '403', '404'];
        if (stopStatusCodes.includes(httpStatus)) return true;
        
        // Check for network errors that should stop polling
        if (error instanceof Error) {
          const networkErrorPatterns = ['Failed to fetch', 'Network error', 'ERR_NETWORK'];
          for (const pattern of networkErrorPatterns) {
            if (error.message.includes(pattern)) return true;
          }
        }
        
        return false;
      };

      // CRITICAL: Stop progress polling based on enhanced error analysis
      if (shouldStopPollingOnError()) {
        logger.info('🛑 INSTALL UPDATES: Stopping progress polling due to critical error', createLogContext({
          correlationId,
          httpStatus,
          shouldStopPolling: safeGetProperty(originalError, 'shouldStopPolling', false),
          errorSource: safeGetErrorSource(),
          reason: 'authentication_or_critical_error',
          errorAnalysis: {
            hasExplicitStop: safeGetProperty(originalError, 'shouldStopPolling', false),
            isStopStatusCode: ['401', '403', '404'].includes(httpStatus),
            isNetworkError: error instanceof Error && ['Failed to fetch', 'Network error'].some(p => error.message.includes(p))
          }
        }));
        
        stopProgressPolling(); // Stop any polling that may have started
      }

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