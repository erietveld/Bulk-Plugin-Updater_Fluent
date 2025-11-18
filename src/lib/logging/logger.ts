// src/monitoring/logger.ts
// Advanced logging system with loglevel integration for ServiceNow compatibility
// Enhanced with performance optimization and automatic log level management
// FIXED: Updated to check correct Pattern 2A data variables and error handling

import log from 'loglevel';

interface LogContext {
  [key: string]: any;
  userAgent?: string;
  timestamp?: string;
  url?: string;
  componentStack?: string;
  errorBoundary?: string;
  hybridDataContext?: {
    hasImmediateData: boolean;
    hasEnhancedData: boolean;
  };
  reactVersion?: string;
  mantineVersion?: string;
}

interface Logger {
  info: (message: string, context?: LogContext) => void;
  warn: (message: string, context?: LogContext) => void;
  error: (message: string, errorOrContext?: Error | LogContext, context?: LogContext) => void;
  debug: (message: string, context?: LogContext) => void;
  trackUserAction: (action: string, context?: LogContext) => void;
  isDebugEnabled: () => boolean;
}

class EnterpriseLogger implements Logger {
  
  constructor() {
    // Initialize loglevel integration with ServiceNow URL parameter detection
    this.updateLogLevel();
    
    // Update log level when URL changes (ServiceNow SPA routing)
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', () => this.updateLogLevel());
      
      // Check periodically for programmatic URL changes in ServiceNow
      setInterval(() => this.updateLogLevel(), 5000);
    }
  }

  /**
   * Update loglevel based on ServiceNow URL parameter detection
   */
  private updateLogLevel(): void {
    const isDebug = this.isDebugEnabled();
    const currentLevel = log.getLevel();
    const targetLevel = isDebug ? log.levels.DEBUG : log.levels.ERROR;
    
    if (currentLevel !== targetLevel) {
      log.setLevel(targetLevel);
      if (isDebug) {
        log.debug('🐛 Enhanced logger debug mode enabled via sn_debug=true');
      }
    }
  }

  private formatMessage(level: string, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${context ? ` | Context: ${JSON.stringify(context, null, 2)}` : ''}`;
  }

  private logToConsole(level: 'info' | 'warn' | 'error' | 'debug', message: string, context?: LogContext, error?: Error) {
    const formattedMessage = this.formatMessage(level, message, context);
    
    switch (level) {
      case 'info':
        console.info(formattedMessage);
        break;
      case 'warn':
        console.warn(formattedMessage);
        break;
      case 'error':
        // FIXED: Single comprehensive error log entry instead of double logging
        if (error) {
          const enhancedContext = {
            ...context,
            errorMessage: error.message,
            errorStack: error.stack,
            errorName: error.name
          };
          const enhancedMessage = this.formatMessage(level, message, enhancedContext);
          console.error(enhancedMessage);
        } else {
          console.error(formattedMessage);
        }
        break;
      case 'debug':
        console.debug(formattedMessage);
        break;
    }
  }

  private sendToServiceNow(level: string, message: string, error?: Error, context?: LogContext) {
    // Future implementation: Send to ServiceNow REST API for centralized logging
    // This would integrate with ServiceNow's logging table for enterprise monitoring
  }

  /**
   * Check if debug logging is enabled via URL parameter sn_debug=true
   * Enhanced with loglevel integration for performance
   */
  isDebugEnabled(): boolean {
    if (typeof window === 'undefined') return false;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('sn_debug') === 'true';
  }

  /**
   * Info logging with performance optimization
   * Only processes when debug enabled (sn_debug=true)
   */
  info(message: string, context?: LogContext): void {
    // Performance guard: Only process when loglevel allows
    if (log.getLevel() <= log.levels.INFO) {
      this.logToConsole('info', message, context);
    }
    this.sendToServiceNow('info', message, undefined, context);
  }

  /**
   * Warning logging - always visible (production + debug)
   */
  warn(message: string, context?: LogContext): void {
    // Warnings always visible (ERROR level and above)
    this.logToConsole('warn', message, context);
    this.sendToServiceNow('warn', message, undefined, context);
  }

  /**
   * Error logging - always visible (production + debug)
   * FIXED: Better error method signature handling
   */
  error(message: string, errorOrContext?: Error | LogContext, context?: LogContext): void {
    let actualError: Error | undefined;
    let actualContext: LogContext | undefined;

    // Handle different call patterns
    if (errorOrContext instanceof Error) {
      actualError = errorOrContext;
      actualContext = context;
    } else {
      actualError = undefined;
      actualContext = errorOrContext;
    }

    // Errors always visible (ERROR level and above)
    this.logToConsole('error', message, actualContext, actualError);
    this.sendToServiceNow('error', message, actualError, actualContext);
  }

  /**
   * Debug logging with loglevel performance optimization
   * Zero overhead when sn_debug=false
   */
  debug(message: string, context?: LogContext): void {
    // Performance guard: Only process when loglevel allows (DEBUG level)
    if (log.getLevel() <= log.levels.DEBUG) {
      this.logToConsole('debug', message, context);
    }
  }

  /**
   * Track user actions with performance optimization
   */
  trackUserAction(action: string, context?: LogContext): void {
    const actionContext = {
      ...context,
      action,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    // Use performance-optimized info logging
    this.info(`User action: ${action}`, actionContext);
  }
}

// Export singleton instance
export const logger = new EnterpriseLogger();

// Utility function for creating context - FIXED to check correct Pattern 2A data
export const createLogContext = (additionalContext?: LogContext): LogContext => ({
  timestamp: new Date().toISOString(),
  userAgent: navigator.userAgent,
  url: window.location.href,
  hybridDataContext: {
    hasImmediateData: !!(window as any).snImmediateData,
    hasEnhancedData: !!(window as any).snImmediateData?.quickStats
  },
  reactVersion: '19.2.0',
  mantineVersion: '8.3.6',
  ...additionalContext
});

// Utility function for conditional debug logging
export const debugLog = (message: string, context?: LogContext) => {
  logger.debug(message, context);
};

/**
 * Performance-optimized debug logging with expensive context builder
 * Only executes context builder when debug is enabled (sn_debug=true)
 * Based on logging-performance-optimization.md patterns
 */
export const debugLogWithContext = (message: string, expensiveContextBuilder: () => LogContext) => {
  // Performance guard: Only execute expensive operations when debug enabled
  if (log.getLevel() <= log.levels.DEBUG) {
    logger.debug(message, expensiveContextBuilder());
  }
};

/**
 * Performance-optimized info logging with expensive context builder
 * Only executes context builder when info logging is enabled (sn_debug=true)
 */
export const infoLogWithContext = (message: string, expensiveContextBuilder: () => LogContext) => {
  // Performance guard: Only execute expensive operations when info enabled
  if (log.getLevel() <= log.levels.INFO) {
    logger.info(message, expensiveContextBuilder());
  }
};