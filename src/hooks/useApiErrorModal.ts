// src/hooks/useApiErrorModal.ts
// Custom hook for managing API error modal state
// Following Architecture.md separation of concerns - Business logic and local state
// Provides user-friendly error modals for different HTTP status codes

import { useState, useCallback } from 'react';
import { logger, createLogContext } from '../monitoring/logger';

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
    progressId?: string
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

    // Add actionable items for specific errors
    if (httpStatus === '401') {
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
      progressId
    }));
  }, [closeModal]);

  // Show authentication error (401)
  const showAuthError = useCallback((message: string, progressId?: string) => {
    showHttpError(
      'Authentication Error',
      message,
      '401',
      'Authentication failed',
      progressId
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