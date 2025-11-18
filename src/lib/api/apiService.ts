// src/api/apiService.ts
// Type-safe API client with advanced error handling and comprehensive ServiceNow integration
// Following Architecture.md Section 6 specifications
// DEBUG: Added logging to getTableRecords method
// INSTALL UPDATES: Added installUpdates method for batch operations

import { logger, createLogContext } from '../logging/logger';
import { debugService } from '../../services/debugService'; // NEW: For debug-only logging
import { nanoid } from 'nanoid';
import { executeServiceNowRequest, ServiceNowClientConfig } from './servicenowClient'; // NEW: Enhanced transport layer
import type {
  ServiceNowRecord,
  ApiResponse,
  ApiListResponse,
  ApiRequestConfig,
  ApiError,
  PerformanceMetrics,
  RequestInterceptor
} from '../../types/api';
import { createApiRequestConfig, createPerformanceMetrics, createRequestInterceptor } from '../../types/api';

// STEP 4: Response processing imports removed - using 3rd party libraries instead

// Install Updates API types
interface InstallUpdatesRequest {
  apps: string; // Comma-separated sys_ids
}

interface InstallUpdatesResponse {
  success: boolean;
  progress_id: string;
  status_message: string;
  http_status: number; // NEW: HTTP status from CICD API
  app_count: number;
  apps_requested: string;
  timestamp: string;
}

interface InstallUpdatesErrorResponse {
  success: false;
  error: string;
  message: string;
  http_status?: number; // NEW: HTTP status from failed API call
  status_message?: string; // NEW: Additional status info
  timestamp: string;
}

interface InternalRequestConfig extends ApiRequestConfig {
  url: string;
}

class ServiceNowApiService {
  private static instance: ServiceNowApiService;
  private baseUrl: string;
  private interceptors: RequestInterceptor[] = [];
  private performanceMetrics: PerformanceMetrics[] = [];
  private readonly slowRequestThreshold = 2000; // 2 seconds

  // Cleaned up: Removed over-engineered ResponseProcessor system
  // Using 3rd party libraries for error handling instead

  private constructor() {
    // ServiceNow instance base URL - will be set dynamically
    this.baseUrl = this.getServiceNowBaseUrl();
    this.setupDefaultInterceptors();

    // Cleaned up: ResponseProcessor initialization removed
    // Will implement 3rd party libraries in next step
  }

  /**
   * Get the singleton instance - TRUE SINGLETON PATTERN
   */
  public static getInstance(): ServiceNowApiService {
    if (!ServiceNowApiService.instance) {
      ServiceNowApiService.instance = new ServiceNowApiService();
      
      if (debugService.isDebugMode()) {
        logger.info('🏗️ ServiceNow API Service singleton created', createLogContext({
          timestamp: new Date().toISOString(),
          instanceId: 'singleton'
        }));
      }
    }
    return ServiceNowApiService.instance;
  }

  private getServiceNowBaseUrl(): string {
    // Extract base URL from current window location for ServiceNow instance
    if (typeof window !== 'undefined') {
      return `${window.location.protocol}//${window.location.host}`;
    }
    return '';
  }

  private setupDefaultInterceptors(): void {
    // Request interceptor for authentication and tracking
    this.addInterceptor(createRequestInterceptor('default-request', {
      enabled: true,
      order: 0,
      onRequest: (config) => {
        // Add ServiceNow session authentication
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserToken': this.getSessionToken(),
          ...config.headers
        };

        // DEBUG: Enhanced logging for API requests (only in debug mode)
        if (debugService.isDebugMode()) {
          logger.info(`🔍 API Request: ${config.method} ${config.url}`, createLogContext({
            method: config.method,
            url: config.url,
            headers: Object.keys(headers),
            params: config.params,
            data: config.data // FIXED: Add request payload for debugging
          }));
        }

        return { ...config, headers };
      },
      onResponse: (response) => {
        // DEBUG: Enhanced response logging with payload (only in debug mode)
        if (debugService.isDebugMode()) {
          logger.info('🔍 API Response received', createLogContext({
            hasResult: !!response.result,
            hasError: !!response.error,
            responsePayload: response // NEW: Include full response payload in debug
          }));
        } else {
          logger.info('API Response received', createLogContext({
            hasResult: !!response.result,
            hasError: !!response.error
          }));
        }
        return response;
      },
      onError: (error) => {
        // FIX: TypeScript error - logger.error expects (message, error, context)
        logger.error('API Request failed', 
          error instanceof Error ? error : new Error(String(error)), 
          createLogContext({
            url: error.request?.url || 'unknown',
            method: error.request?.method || 'unknown',
            status: error.status || 0,
            code: error.code || 'unknown'
          })
        );
        return error;
      }
    }));
  }

  private getSessionToken(): string {
    // ServiceNow session token from global context
    return (window as any).g_ck || '';
  }

  private generateRequestId(): string {
    return `req_${nanoid(10)}`;
  }

  /**
   * Build URL with query parameters from config.params
   */
  private buildUrlWithParams(baseUrl: string, params?: Record<string, any>): string {
    if (!params || Object.keys(params).length === 0) {
      return baseUrl;
    }

    // Filter out undefined/null values and convert to strings
    const validParams: Record<string, string> = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        validParams[key] = String(value);
      }
    });

    if (Object.keys(validParams).length === 0) {
      return baseUrl;
    }

    const queryString = new URLSearchParams(validParams).toString();
    const separator = baseUrl.includes('?') ? '&' : '?';
    const finalUrl = `${baseUrl}${separator}${queryString}`;
    
    // DEBUG: Log URL construction (only in debug mode)
    if (debugService.isDebugMode()) {
      logger.info('🔍 URL Construction', createLogContext({
        baseUrl,
        params,
        validParams,
        queryString,
        finalUrl
      }));
    }
    
    return finalUrl;
  }

  private async performRequest<T = any>(
    url: string,
    config: Partial<ApiRequestConfig> = {}
  ): Promise<ApiResponse<T>> {
    const requestId = this.generateRequestId();
    const startTime = performance.now();
    
    // Build full URL with base URL and query parameters
    let fullUrl = url.startsWith('http') ? url : `${this.baseUrl}${url}`;
    fullUrl = this.buildUrlWithParams(fullUrl, config.params);
    
    // Create complete config with defaults
    const baseConfig = createApiRequestConfig(config);
    const requestConfig: InternalRequestConfig = {
      ...baseConfig,
      url: fullUrl
    };

    // Apply request interceptors
    let processedConfig = requestConfig;
    for (const interceptor of this.interceptors) {
      if (interceptor.enabled && interceptor.onRequest) {
        processedConfig = interceptor.onRequest(processedConfig) as InternalRequestConfig;
      }
    }

    let lastError: ApiError | null = null;
    let retryCount = 0;

    // Cleaned up: Removed parallel testing logic
    // Will implement smart error handler in next step

    // ORIGINAL LOGIC (when parallel testing disabled or failed)
    // Retry logic with exponential backoff
    while (retryCount <= requestConfig.retries) {
      try {
        const response = await this.executeRequest<T>(processedConfig);
        
        // Apply response interceptors
        let processedResponse = response;
        for (const interceptor of this.interceptors) {
          if (interceptor.enabled && interceptor.onResponse) {
            processedResponse = interceptor.onResponse(processedResponse);
          }
        }

        // Record performance metrics
        const endTime = performance.now();
        const duration = endTime - startTime;
        this.recordPerformanceMetric(createPerformanceMetrics(
          requestId,
          fullUrl,
          processedConfig.method,
          startTime,
          endTime,
          {
            success: true,
            retryCount,
            cacheHit: false,
            size: 0 // Could be calculated from response
          }
        ));

        // Check for slow requests
        if (duration > this.slowRequestThreshold) {
          logger.warn('Slow API request detected', createLogContext({
            requestId,
            url: fullUrl,
            method: processedConfig.method,
            duration: Math.round(duration),
            threshold: this.slowRequestThreshold
          }));
        }

        return processedResponse;

      } catch (error) {
        lastError = this.createApiError(error, processedConfig);
        
        // Apply error interceptors
        for (const interceptor of this.interceptors) {
          if (interceptor.enabled && interceptor.onError) {
            lastError = await Promise.resolve(interceptor.onError(lastError));
          }
        }

        if (retryCount < requestConfig.retries) {
          retryCount++;
          const delay = requestConfig.retryDelay * Math.pow(2, retryCount - 1); // Exponential backoff
          
          logger.warn(`API request retry ${retryCount}/${requestConfig.retries}`, createLogContext({
            requestId,
            url: fullUrl,
            method: processedConfig.method,
            error: lastError.message,
            delay
          }));

          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          break;
        }
      }
    }

    // Record failed request metrics
    const endTime = performance.now();
    const duration = endTime - startTime;
    this.recordPerformanceMetric(createPerformanceMetrics(
      requestId,
      fullUrl,
      processedConfig.method,
      startTime,
      endTime,
      {
        success: false,
        retryCount,
        error: lastError?.message || 'Unknown error',
        cacheHit: false,
        size: 0
      }
    ));

    throw lastError;
  }

  private async executeRequest<T>(config: InternalRequestConfig): Promise<ApiResponse<T>> {
    const { url, method, data, headers, timeout } = config;

    try {
      // ENHANCED: Use servicenowClient transport layer instead of native fetch
      // Preserves all existing functionality while adding ServiceNow nested error detection
      const transportConfig: ServiceNowClientConfig = {
        method,
        url,
        data,
        headers,
        timeout
      };

      const responseData = await executeServiceNowRequest<T>(transportConfig);
      
      // ServiceNow API response format (preserved from original implementation)
      return {
        result: responseData.result || responseData,
        status: 'success'
      };

    } catch (error) {
      // Enhanced error handling - preserved original logic with transport layer enhancements
      if (error && typeof error === 'object') {
        // Check if this is a ServiceNow nested error from transport layer
        if ((error as any).isServiceNowNested) {
          // FIXED: Preserve ALL properties from the enhanced ApiError, not just selected ones
          const enhancedError = new Error((error as any).message) as any;
          
          // Copy all enumerable properties from the original error
          for (const key in error) {
            if (error.hasOwnProperty(key) && key !== 'message' && key !== 'name' && key !== 'stack') {
              enhancedError[key] = (error as any)[key];
            }
          }
          
          // Ensure critical ServiceNow nested error properties are preserved
          enhancedError.responseBody = (error as any).responseBody;
          enhancedError.httpStatus = (error as any).status;
          enhancedError.statusMessage = (error as any).responseBody?.status_message;
          enhancedError.errorCode = (error as any).responseBody?.error;
          enhancedError.isFromResponseBody = true;
          enhancedError.correlationId = (error as any).correlationId;
          enhancedError.shouldStopPolling = (error as any).shouldStopPolling;
          enhancedError.originalHttpStatus = 200; // ServiceNow nested errors come via HTTP 200
          
          // CRITICAL: Ensure errorSource and credentialObject are preserved
          enhancedError.errorSource = (error as any).errorSource;
          enhancedError.credentialObject = (error as any).credentialObject;
          
          throw enhancedError;
        }
      }
      
      throw error;
    }
  }

  private createApiError(error: any, config: InternalRequestConfig): ApiError {
    const apiError = new Error(error.message || 'API request failed') as ApiError;
    apiError.name = 'ApiError';
    apiError.code = error.code || 'UNKNOWN_ERROR';
    apiError.status = error.status || 0;
    apiError.timestamp = new Date().toISOString();

    // ENHANCED: Copy ALL properties from the original error to preserve enhanced error context
    // This ensures any enhanced properties (like errorSource, credentialObject) are preserved
    for (const key in error) {
      if (error.hasOwnProperty(key) && key !== 'message' && key !== 'name' && key !== 'stack') {
        (apiError as any)[key] = error[key];
      }
    }

    // Create immutable copies for the readonly properties
    const requestCopy = {
      url: config.url,
      method: config.method,
      data: config.data,
      headers: config.headers
    };

    if (error.response) {
      const responseCopy = {
        data: error.response.data,
        status: error.response.status,
        statusText: error.response.statusText,
        headers: error.response.headers || {}
      };
      // Assign to the error after creating immutable copy
      (apiError as any).response = responseCopy;
    }

    // Assign request after creating immutable copy
    (apiError as any).request = requestCopy;

    return apiError;
  }

  private recordPerformanceMetric(metric: PerformanceMetrics): void {
    this.performanceMetrics.push(metric);
    
    // Keep only last 100 metrics to prevent memory leaks
    if (this.performanceMetrics.length > 100) {
      this.performanceMetrics = this.performanceMetrics.slice(-100);
    }
  }

  // Public API methods

  public addInterceptor(interceptor: RequestInterceptor): void {
    this.interceptors.push(interceptor);
  }

  public removeInterceptor(id: string): void {
    this.interceptors = this.interceptors.filter(i => i.id !== id);
  }

  public async get<T = any>(url: string, config?: Partial<ApiRequestConfig>): Promise<ApiResponse<T>> {
    return this.performRequest<T>(url, { ...config, method: 'GET' });
  }

  public async post<T = any>(url: string, data?: any, config?: Partial<ApiRequestConfig>): Promise<ApiResponse<T>> {
    return this.performRequest<T>(url, { ...config, method: 'POST', data });
  }

  public async put<T = any>(url: string, data?: any, config?: Partial<ApiRequestConfig>): Promise<ApiResponse<T>> {
    return this.performRequest<T>(url, { ...config, method: 'PUT', data });
  }

  public async patch<T = any>(url: string, data?: any, config?: Partial<ApiRequestConfig>): Promise<ApiResponse<T>> {
    return this.performRequest<T>(url, { ...config, method: 'PATCH', data });
  }

  public async delete<T = any>(url: string, config?: Partial<ApiRequestConfig>): Promise<ApiResponse<T>> {
    return this.performRequest<T>(url, { ...config, method: 'DELETE' });
  }

  // ServiceNow-specific methods

  public async getRecord<T extends ServiceNowRecord = ServiceNowRecord>(
    table: string,
    sysId: string,
    fields?: string[]
  ): Promise<ApiResponse<T>> {
    const params: Record<string, string> = {};
    if (fields?.length) params.sysparm_fields = fields.join(',');

    return this.get<T>(`/api/now/table/${table}/${sysId}`, { params });
  }

  public async createRecord<T extends ServiceNowRecord = ServiceNowRecord>(
    table: string,
    data: Partial<T>
  ): Promise<ApiResponse<T>> {
    const url = `/api/now/table/${table}`;
    return this.post<T>(url, data);
  }

  public async updateRecord<T extends ServiceNowRecord = ServiceNowRecord>(
    table: string,
    sysId: string,
    data: Partial<T>
  ): Promise<ApiResponse<T>> {
    const url = `/api/now/table/${table}/${sysId}`;
    return this.patch<T>(url, data);
  }

  public async deleteRecord(table: string, sysId: string): Promise<ApiResponse<void>> {
    const url = `/api/now/table/${table}/${sysId}`;
    return this.delete(url);
  }

  // STEP 6: INSTALL UPDATES - Cleaned up, removing centralized processor
  public async installUpdates(apps: string[]): Promise<InstallUpdatesResponse> {
    const startTime = performance.now();
    
    // Generate correlation ID for cross-layer tracking
    const correlationId = `install_${nanoid(10)}`;
    
    // Source logging - API Service layer
    logger.info('🚀 INSTALL UPDATES: Starting at API Service layer', createLogContext({
      correlationId,
      appCount: apps.length,
      apps: apps.slice(0, 3).join(',') + (apps.length > 3 ? '...' : ''), // Log first 3 IDs
      layer: 'api_service',
      operation: 'install_updates_start',
      debugMode: debugService.isDebugMode()
    }));

    try {
      const requestData: InstallUpdatesRequest = {
        apps: apps.join(',')
      };

      // Execute API call - will implement smart error handler in next step
      const response = await this.post<InstallUpdatesResponse | InstallUpdatesErrorResponse>(
        `/api/x_snc_store_upda_1/install_updates`,
        requestData,
        { retries: 0 } // No retries on any error
      );

      const successResult = response.result as InstallUpdatesResponse;
      const duration = performance.now() - startTime;

      // Enhanced success logging
      logger.info('✅ INSTALL UPDATES: Completed successfully', createLogContext({
        correlationId,
        layer: 'api_service',
        operation: 'install_success',
        progressId: successResult.progress_id,
        appCount: successResult.app_count,
        statusMessage: successResult.status_message,
        duration: Math.round(duration)
      }));

      return successResult;

    } catch (error) {
      const duration = performance.now() - startTime;
      
      logger.info('❌ INSTALL UPDATES: Error occurred', createLogContext({
        correlationId,
        layer: 'api_service',
        operation: 'install_error',
        duration: Math.round(duration),
        errorType: typeof error
      }));
      
      // Add correlation ID to error if not already present
      if (error && typeof error === 'object' && !(error as any).correlationId) {
        (error as any).correlationId = correlationId;
      }
      
      throw error;
    }
  }

  // Parallel processing utilities

  public async parallel<T>(requests: Promise<ApiResponse<T>>[]): Promise<ApiResponse<T>[]> {
    const startTime = performance.now();
    
    try {
      const results = await Promise.all(requests);
      const duration = performance.now() - startTime;
      
      logger.info(`Parallel API requests completed`, createLogContext({
        requestCount: requests.length,
        duration: Math.round(duration),
        successCount: results.filter(r => !r.error).length,
        errorCount: results.filter(r => !!r.error).length
      }));
      
      return results;
    } catch (error) {
      const duration = performance.now() - startTime;
      
      logger.error('Parallel API requests failed', 
        error instanceof Error ? error : new Error(String(error)),
        createLogContext({
          requestCount: requests.length,
          duration: Math.round(duration)
        })
      );
      
      throw error;
    }
  }

  // Performance monitoring

  public getPerformanceMetrics(): PerformanceMetrics[] {
    return [...this.performanceMetrics];
  }

  public getSlowRequests(threshold: number = this.slowRequestThreshold): PerformanceMetrics[] {
    return this.performanceMetrics.filter(metric => metric.duration > threshold);
  }

  public clearPerformanceMetrics(): void {
    this.performanceMetrics = [];
  }
}

// TRUE SINGLETON PATTERN - Prevents multiple instances
export const apiService = ServiceNowApiService.getInstance();
export default apiService;

// Export the class for type checking only (constructor is private)
export { ServiceNowApiService };