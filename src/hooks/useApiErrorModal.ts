// src/hooks/useApiErrorModal.ts
// Custom hook for managing API error modal state
// Following Architecture.md separation of concerns - Business logic and local state
// Provides user-friendly error modals for different HTTP status codes

import { useState, useCallback } from 'react';
import { logger, createLogContext } from '../lib/logging/logger';

export interface ApiErrorDetails {
  title: string;
  message: string;
  httpStatus?: string;
  statusMessage?: string;
  progressId?: string;
  errorType: 'http' | 'auth' | 'server' | 'network' | 'generic';
  actionable?: boolean;
  actions?: {
    label: string;
    action: () => void;
  }[];
}

export const useApiErrorModal = () => {
  const [modalError, setModalError] = useState<ApiErrorDetails | null>(null);
  const [modalOpened, setModalOpened] = useState(false);

  // Close modal
  const closeModal = useCallback(() => {
    setModalOpened(false);
    setModalError(null);
    
    logger.info('API error modal closed');
  }, []);

  // Show HTTP error with specific status code
  const showHttpError = useCallback((
    title: string, 
    message: string, 
    httpStatus?: string, 
    statusMessage?: string, 
    progressId?: string,
    errorSource?: string,
    credentialObject?: string
  ) => {
    const errorDetails: ApiErrorDetails = {
      title,
      message,
      errorType: 'http',
      actionable: httpStatus === '401' || httpStatus === '403'
    };

    // Only set optional properties if they have values
    if (httpStatus) errorDetails.httpStatus = httpStatus;
    if (statusMessage) errorDetails.statusMessage = statusMessage;
    if (progressId) errorDetails.progressId = progressId;

    // DEBUG: Log parameters for button debugging
    logger.info('🔧 DEBUG: useApiErrorModal showHttpError parameters', createLogContext({
      title,
      httpStatus,
      errorSource,
      credentialObject,
      willCreateButton: (httpStatus === '401' || httpStatus === '403') && errorSource === 'servicenow-subflow' && !!credentialObject,
      httpStatusCheck: httpStatus === '401' || httpStatus === '403',
      errorSourceCheck: errorSource === 'servicenow-subflow',
      credentialObjectCheck: !!credentialObject
    }));

    // Enhanced actions for subflow authentication errors
    if ((httpStatus === '401' || httpStatus === '403') && errorSource === 'servicenow-subflow' && credentialObject) {
      const baseUrl = window.location.origin; // e.g., https://crstudio.service-now.com
      const credentialUrl = `${baseUrl}/now/nav/ui/classic/params/target/basic_auth_credentials_list.do%3Fsysparm_query%3Dname%253DPlugin%2520CICD%2520Auth%26sysparm_first_row%3D1%26sysparm_view%3D`;
      
      errorDetails.title = httpStatus === '401' 
        ? 'Subflow Authentication Error' 
        : 'Subflow Permission Error';
        
      errorDetails.actions = [
        {
          label: 'Fix ServiceNow Credentials',
          action: () => {
            logger.info('User opening ServiceNow credentials page', createLogContext({
              httpStatus,
              progressId,
              credentialObject,
              credentialUrl: credentialUrl.substring(0, 100) // Log first 100 chars
            }));
            window.open(credentialUrl, '_blank');
          }
        }
      ];
      
      logger.info('🔧 DEBUG: ServiceNow credentials button created', createLogContext({
        title: errorDetails.title,
        hasActions: !!errorDetails.actions,
        actionsCount: errorDetails.actions?.length || 0,
        credentialUrl: credentialUrl.substring(0, 100)
      }));
    } else if (httpStatus === '401') {
      errorDetails.actions = [
        {
          label: 'Check API User Setup',
          action: () => {
            logger.info('User requested API user setup guidance', createLogContext({
              httpStatus: '401',
              progressId
            }));
            // This could open documentation or a help modal
          }
        }
      ];
    }

    setModalError(errorDetails);
    setModalOpened(true);

    logger.info('API error modal shown', createLogContext({
      title,
      httpStatus,
      errorType: 'http',
      progressId,
      errorSource,
      credentialObject
    }));
  }, []);

  // Show authentication error (401) - enhanced for subflow support
  const showAuthError = useCallback((
    message: string, 
    progressId?: string, 
    errorSource?: string, 
    credentialObject?: string
  ) => {
    showHttpError(
      'Authentication Error',
      message,
      '401',
      'Authentication failed',
      progressId,
      errorSource,
      credentialObject
    );
  }, [showHttpError]);

  // Show server error (500)
  const showServerError = useCallback((message: string, progressId?: string) => {
    showHttpError(
      'Server Error',
      message,
      '500',
      'Internal server error',
      progressId
    );
  }, [showHttpError]);

  // Show network error
  const showNetworkError = useCallback((message: string, progressId?: string) => {
    const errorDetails: ApiErrorDetails = {
      title: 'Network Error',
      message,
      errorType: 'network',
      actionable: true,
      actions: [
        {
          label: 'Retry Connection',
          action: () => {
            logger.info('User requested connection retry', createLogContext({
              errorType: 'network',
              progressId
            }));
            closeModal();
            // This could trigger a retry mechanism
          }
        }
      ]
    };

    // Only set progressId if it has a value
    if (progressId) errorDetails.progressId = progressId;

    setModalError(errorDetails);
    setModalOpened(true);

    logger.info('Network error modal shown', createLogContext({
      title: 'Network Error',
      errorType: 'network',
      progressId
    }));
  }, []);

  // Show generic error
  const showGenericError = useCallback((title: string, message: string, progressId?: string) => {
    const errorDetails: ApiErrorDetails = {
      title,
      message,
      errorType: 'generic',
      actionable: false
    };

    // Only set progressId if it has a value
    if (progressId) errorDetails.progressId = progressId;

    setModalError(errorDetails);
    setModalOpened(true);

    logger.info('Generic error modal shown', createLogContext({
      title,
      errorType: 'generic',
      progressId
    }));
  }, []);

  return {
    // Modal state
    modalOpened,
    modalError,
    
    // Actions
    showHttpError,
    showAuthError,
    showServerError,
    showNetworkError,
    showGenericError,
    closeModal
  };
};