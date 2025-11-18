// src/services/debugService.ts
// Debug functionality service
// Following atomic design principle: ServiceNow Services handle logic

import { logger, createLogContext } from '../lib/logging/logger';

export class DebugService {
  private static instance: DebugService;
  
  static getInstance(): DebugService {
    if (!DebugService.instance) {
      DebugService.instance = new DebugService();
    }
    return DebugService.instance;
  }
  
  isDebugMode(): boolean {
    return new URLSearchParams(window.location.search).get('sn_debug') === 'true';
  }
  
  logThemeSwitch(from: string, to: string, metrics: any): void {
    if (this.isDebugMode()) {
      logger.info('Theme switch performance', createLogContext({
        from,
        to,
        switchTime: Math.round(metrics.switchTime),
        averageSwitchTime: Math.round(metrics.averageSwitchTime),
        totalSwitches: metrics.totalSwitches
      }));
    }
  }
  
  logColorSchemeToggle(from: string, to: string, toggleTime: number, totalToggles: number): void {
    if (this.isDebugMode()) {
      logger.info('Color scheme toggled', createLogContext({
        from,
        to,
        toggleTime: Math.round(toggleTime),
        totalToggles
      }));
    }
  }
  
  logSystemPreferenceChange(newScheme: string): void {
    if (this.isDebugMode()) {
      logger.info('System preference changed, but user preference takes precedence', createLogContext({
        systemPreference: newScheme,
        note: 'User can manually toggle if desired'
      }));
    }
  }
  
  logValidationResult(themeKey: string, result: any): void {
    if (this.isDebugMode()) {
      logger.info('Theme validation completed', createLogContext({
        themeKey,
        validationScore: result.score,
        isValid: result.isValid,
        errorCount: result.errors.length,
        warningCount: result.warnings.length
      }));
    }
  }
  
  // NEW: API debugging methods
  logApiRequest(method: string, url: string, params?: any, headers?: any): void {
    if (this.isDebugMode()) {
      logger.info(`🔍 API Request: ${method} ${url}`, createLogContext({
        method,
        url,
        params,
        headers: headers ? Object.keys(headers) : undefined
      }));
    }
  }
  
  logApiResponse(url: string, success: boolean, duration?: number, error?: string): void {
    if (this.isDebugMode()) {
      logger.info(`🔍 API Response: ${url}`, createLogContext({
        url,
        success,
        duration: duration ? Math.round(duration) : undefined,
        error
      }));
    }
  }
}

export const debugService = DebugService.getInstance();