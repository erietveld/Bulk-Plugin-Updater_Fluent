// useValidationStatus.ts
// Custom hook for fetching system validation status
// Only triggers when URL parameter check_status=true is present
// Uses existing API service following established patterns

import { useState, useEffect, useCallback } from 'react';
import { apiService } from '../lib/api/apiService';
import { logger, createLogContext } from '../lib/logging/logger';

// Types for validation response
interface ValidationResponse {
  validation: {
    flow_exists: boolean;
    credentials_exist: boolean;
    alias_exists: boolean;
    all_ready: boolean;
  };
  timestamp: string;
}

interface UseValidationStatusReturn {
  validationData: ValidationResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
  shouldShow: boolean;
}

/**
 * Custom hook for system validation status
 * Only fetches data when URL contains ?check_status=true
 */
export const useValidationStatus = (): UseValidationStatusReturn => {
  const [validationData, setValidationData] = useState<ValidationResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if validation should be shown based on URL parameter
  const shouldShow = new URLSearchParams(window.location.search).get('check_status') === 'true';

  // Fetch validation status from API
  const fetchValidationStatus = useCallback(async () => {
    if (!shouldShow) {
      return; // Don't fetch if not needed
    }

    setLoading(true);
    setError(null);

    try {
      logger.info('Fetching validation status', createLogContext({
        shouldShow,
        endpoint: '/api/x_snc_store_upda_1/install_updates'
      }));

      // Call the existing REST API with check_status parameter
      const response = await apiService.get<ValidationResponse>(
        '/api/x_snc_store_upda_1/install_updates',
        { 
          params: { check_status: 'true' },
          timeout: 10000 // 10 second timeout for validation
        }
      );

      if (response.result) {
        setValidationData(response.result);
        logger.info('Validation status fetched successfully', createLogContext({
          allReady: response.result.validation.all_ready,
          flowExists: response.result.validation.flow_exists,
          credentialsExist: response.result.validation.credentials_exist,
          aliasExists: response.result.validation.alias_exists
        }));
      } else {
        throw new Error('No validation data returned from API');
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch validation status';
      setError(errorMessage);
      
      logger.error('Failed to fetch validation status', 
        err instanceof Error ? err : new Error(String(err)),
        createLogContext({
          shouldShow,
          errorMessage
        })
      );
    } finally {
      setLoading(false);
    }
  }, [shouldShow]);

  // Auto-fetch on mount if should show
  useEffect(() => {
    if (shouldShow) {
      fetchValidationStatus();
    }
  }, [shouldShow, fetchValidationStatus]);

  return {
    validationData,
    loading,
    error,
    refetch: fetchValidationStatus,
    shouldShow
  };
};

export default useValidationStatus;