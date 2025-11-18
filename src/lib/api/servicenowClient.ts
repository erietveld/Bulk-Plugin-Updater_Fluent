// src/api/servicenowClient.ts
// ServiceNow-compatible HTTP transport layer using ky with error detection
// Reuse-First Approach: Transport layer that enhances existing apiService.ts

import ky from 'ky';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { getString } from '../../utils/typeRefinements';
import { logger, infoLogWithContext } from '../logging/logger';

// ServiceNow response validation schema for nested error detection
const ServiceNowResponseSchema = z.object({
  result: z.object({
    success: z.boolean().optional(),
    http_status: z.number().optional(),
    status_message: z.string().optional()
  }).passthrough()
});

/**
 * ServiceNow-compatible HTTP client with correlation tracking and error detection
 * Designed as transport layer for existing apiService.ts (reuse-first approach)
 */
export const servicenowApi = ky.create({
  retry: {
    limit: 3,
    methods: ['get', 'post', 'put', 'patch'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504]  // Retry transient errors only, exclude auth errors
  },
  timeout: 30000,
  hooks: {
    beforeRequest: [
      request => {
        const correlationId = nanoid(10);
        request.headers.set('X-Correlation-ID', correlationId);
        request.headers.set('X-UserToken', getString((window as any).g_ck, ''));
        
        // Performance-optimized debug logging (only when sn_debug=true) 
        infoLogWithContext('🚀 ServiceNow API Request', () => ({
          correlationId, 
          url: request.url.toString(),
          method: request.method,
          timestamp: new Date().toISOString()
        }));
      }
    ],
    afterResponse: [
      async (request, options, response) => {
        const correlationId = request.headers.get('X-Correlation-ID');
        
        if (!response.ok) {
          // Always log HTTP transport errors (production + debug)
          logger.error('❌ HTTP Transport Error', {
            correlationId,
            status: response.status,
            statusText: response.statusText,
            url: request.url.toString(),
            timestamp: new Date().toISOString()
          });
          return response;
        }
        
        // Parse response for ServiceNow nested error detection only when needed
        // Most successful responses skip parsing entirely = zero overhead
        
        // Only check for nested errors on specific ServiceNow API endpoints
        const isServiceNowApi = request.url.toString().includes('/api/now/') || 
                               request.url.toString().includes('/api/x_snc_') ||
                               request.url.toString().includes('/api/sn_cicd/') ||
                               request.url.toString().includes('/api/sn_appclient/');
        
        if (!isServiceNowApi) {
          return response; // Skip parsing for non-ServiceNow APIs
        }
        
        // For ServiceNow APIs: peek for nested errors without consuming body unnecessarily
        const responseClone = response.clone();
        const data = await responseClone.json();
        const validation = ServiceNowResponseSchema.safeParse(data);
        
        if (validation.success) {
          const { result } = validation.data;
          
          // CRITICAL: Detect ServiceNow nested error pattern (HTTP 200 with http_status !== 200)
          if (result.success === true && result.http_status && result.http_status !== 200) {
            // Always log nested errors (production + debug)
            logger.error('❌ ServiceNow Nested Error Detected', {
              correlationId,
              nestedStatus: result.http_status,
              message: result.status_message,
              endpoint: request.url.toString(),
              fullResponse: data,
              timestamp: new Date().toISOString(),
              errorType: 'SERVICENOW_NESTED_ERROR'
            });
            
            // Throw error with ServiceNow context to trigger error handling
            let errorMessage;
            let errorSource = 'servicenow-api';
            let credentialObject = '';
            
            // Determine if this is from subflow (install_updates API)
            const isSubflowError = request.url.toString().includes('/api/x_snc_store_upda_1/install_updates');
            if (isSubflowError) {
              errorSource = 'servicenow-subflow';
              credentialObject = 'Plugin CICD Auth';
            }
            
            if (result.http_status === 401) {
              errorMessage = isSubflowError 
                ? 'Subflow authentication failed. The ServiceNow subflow cannot authenticate with the plugin installation service.'
                : 'Authentication required. Please check your ServiceNow credentials and permissions.';
            } else if (result.http_status === 403) {
              errorMessage = isSubflowError
                ? 'Subflow permission denied. The ServiceNow subflow does not have the required permissions for plugin installation.'
                : 'Permission denied. You do not have the required permissions for this operation.';
            } else if (result.http_status === 404) {
              errorMessage = 'Service not found. The requested ServiceNow service may not be available.';
            } else {
              errorMessage = `ServiceNow Error: HTTP ${result.http_status} - ${getString(result.status_message, 'Unknown error')}`;
            }
            
            const error = new Error(errorMessage) as any;
            error.status = result.http_status;
            error.correlationId = correlationId;
            error.isServiceNowNested = true;
            error.shouldStopPolling = [401, 403, 404].includes(result.http_status);
            error.responseBody = result;
            error.httpStatus = result.http_status; // For useInstallUpdates compatibility
            error.statusMessage = getString(result.status_message);
            error.isFromResponseBody = true;
            error.errorSource = errorSource; // NEW: Source context
            error.credentialObject = credentialObject; // NEW: Credential object name
            
            // CRITICAL: Prevent ky retries by making this look like an HTTP error
            // ky won't retry if response.status is set to the error status
            error.name = 'HTTPError'; // ky recognizes HTTPError as non-retryable
            
            // Generate status text with type safety
            let statusText = 'Error';
            if (result.http_status === 401) statusText = 'Unauthorized';
            else if (result.http_status === 403) statusText = 'Forbidden';
            else if (result.http_status === 404) statusText = 'Not Found';
            else if (result.http_status >= 500) statusText = 'Server Error';
            
            error.response = { 
              status: result.http_status,
              statusText
            };
            
            // DEBUG: Log error properties for button debugging
            logger.info('🔧 DEBUG: ServiceNow nested error properties', {
              correlationId,
              errorSource,
              credentialObject,
              httpStatus: result.http_status,
              isSubflowError,
              hasErrorSource: !!error.errorSource,
              hasCredentialObject: !!error.credentialObject,
              errorProperties: Object.keys(error)
            });
            
            throw error;
          }
        }
        
        // Performance-optimized success logging (only when sn_debug=true)
        infoLogWithContext('✅ ServiceNow API Success', () => ({
          correlationId,
          endpoint: request.url.toString(),
          timestamp: new Date().toISOString()
        }));
        
        return response;
      }
    ]
  }
});

/**
 * Enhanced HTTP request method for apiService.ts integration
 * Preserves existing apiService interface while adding transport layer capabilities
 */
export interface ServiceNowClientConfig {
  method: string;
  url: string;
  data?: any;
  headers?: Record<string, string>;
  timeout?: number;
}

export async function executeServiceNowRequest<T>(config: ServiceNowClientConfig): Promise<any> {
  try {
    const { method, url, data, headers, timeout } = config;
    
    // Build ky options with proper type handling
    const kyOptions: any = {
      method: method.toLowerCase(),
      timeout: timeout || 30000
    };
    
    // Only add properties if they exist to avoid TypeScript strict optional issues
    if (data !== undefined) {
      kyOptions.json = data;
    }
    
    if (headers !== undefined) {
      kyOptions.headers = headers;
    }
    
    const response = await servicenowApi(url, kyOptions).json();
    
    return response;
  } catch (error) {
    // Enhanced error with correlation context
    if (error && typeof error === 'object') {
      (error as any).transportLayer = 'servicenowClient';
      (error as any).timestamp = new Date().toISOString();
    }
    throw error;
  }
}

/**
 * Utility function to determine API type for error handling strategies
 */
export function getApiType(endpoint: string): string {
  if (endpoint.includes('install_updates')) return 'install_updates';
  if (endpoint.includes('store_updates')) return 'data_loading';
  if (endpoint.includes('progress')) return 'progress_polling';
  if (endpoint.includes('validation')) return 'validation';
  return 'data_loading';
}