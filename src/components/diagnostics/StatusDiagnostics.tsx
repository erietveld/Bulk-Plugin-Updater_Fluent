// src/components/diagnostics/StatusDiagnostics.tsx
// REFACTORED: Uses enterprise libraries and existing architecture patterns
// Comprehensive system status diagnostics page - activated with ?check_status=true
// ENTERPRISE LIBRARIES: ky (via apiService), zod validation, structured logging, nanoid correlation

import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Title, 
  Card, 
  Group, 
  Text, 
  Badge, 
  Stack, 
  Button, 
  Divider,
  Progress,
  Alert,
  Tabs,
  List,
  Grid
} from '@mantine/core';
import { 
  IconCircleCheck, 
  IconCircleX, 
  IconClock, 
  IconUser, 
  IconServer, 
  IconApi, 
  IconSettings,
  IconAlertCircle,
  IconRefresh
} from '@tabler/icons-react';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { logger, createLogContext } from '../../lib/logging/logger';
import { getString, getBoolean, getInteger } from '../../utils/typeRefinements';

// ENTERPRISE: Import existing architecture components
import useValidationStatus from '../../hooks/useValidationStatus';
import { ValidationStatusCard } from '../../components/molecules/ValidationStatusCard/ValidationStatusCard';
import { useEnhancedUserContext } from '../../hooks/useUserContext';

// ENTERPRISE: Zod schemas for type safety
const StatusCheckSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(['success', 'error', 'warning', 'checking']),
  message: z.string(),
  details: z.string().optional(),
  duration: z.number().optional(),
  suggestions: z.array(z.string()).optional()
});

const SystemStatusSchema = z.object({
  user: z.array(StatusCheckSchema),
  api: z.array(StatusCheckSchema),
  system: z.array(StatusCheckSchema),
  performance: z.array(StatusCheckSchema)
});

type StatusCheck = z.infer<typeof StatusCheckSchema>;
type SystemStatus = z.infer<typeof SystemStatusSchema>;

export const StatusDiagnostics: React.FC = () => {
  const [status, setStatus] = useState<SystemStatus>({
    user: [],
    api: [],
    system: [],
    performance: []
  });
  const [isRunning, setIsRunning] = useState(false);
  const [overallStatus, setOverallStatus] = useState<'success' | 'error' | 'warning' | 'checking'>('checking');
  
  // ENTERPRISE: Use nanoid for correlation tracking
  const [correlationId] = useState(() => nanoid(10));

  // ENTERPRISE: Use existing architecture hooks
  const validationStatus = useValidationStatus();
  const userContext = useEnhancedUserContext();

  // Check if component should show (only when URL parameter check_status=true)
  useEffect(() => {
    // ENTERPRISE: Structured logging with correlation
    logger.info('Status diagnostics initialized', createLogContext({
      correlationId,
      checkStatusParam: new URLSearchParams(window.location.search).get('check_status'),
      userFirstName: userContext.firstName,
      isAdmin: userContext.isAdmin
    }));
  }, [correlationId, userContext.firstName, userContext.isAdmin]);

  // Run comprehensive status checks
  const runStatusChecks = async () => {
    setIsRunning(true);
    const startTime = Date.now();

    // ENTERPRISE: Structured logging for operation start
    logger.info('🔍 STATUS DIAGNOSTICS: Starting comprehensive checks', createLogContext({
      correlationId,
      startTime,
      operation: 'comprehensive_status_check',
      userContext: userContext.firstName,
      component: 'StatusDiagnostics'
    }));

    try {
      // Initialize all checks with enterprise validation
      const userChecksRaw: any[] = [];
      const apiChecksRaw: any[] = [];
      const systemChecksRaw: any[] = [];
      const performanceChecksRaw: any[] = [];

      // USER CHECKS - Enhanced with existing user context
      await checkUserStatus(userChecksRaw);
      
      // API CHECKS - Uses existing validation hook (ky + apiService)
      await checkApiStatus(apiChecksRaw);
      
      // SYSTEM CHECKS - Enhanced with existing architecture
      await checkSystemStatus(systemChecksRaw);
      
      // PERFORMANCE CHECKS
      await checkPerformanceStatus(performanceChecksRaw, startTime);

      // ENTERPRISE: Validate all checks with zod schemas
      const userChecks = z.array(StatusCheckSchema).parse(userChecksRaw);
      const apiChecks = z.array(StatusCheckSchema).parse(apiChecksRaw);
      const systemChecks = z.array(StatusCheckSchema).parse(systemChecksRaw);
      const performanceChecks = z.array(StatusCheckSchema).parse(performanceChecksRaw);

      // Update state with validated data
      const newStatus = SystemStatusSchema.parse({
        user: userChecks,
        api: apiChecks,
        system: systemChecks,
        performance: performanceChecks
      });

      setStatus(newStatus);

      // Determine overall status
      const allChecks = [...userChecks, ...apiChecks, ...systemChecks, ...performanceChecks];
      const hasErrors = allChecks.some(check => check.status === 'error');
      const hasWarnings = allChecks.some(check => check.status === 'warning');
      
      const finalStatus = hasErrors ? 'error' : hasWarnings ? 'warning' : 'success';
      setOverallStatus(finalStatus);

      // ENTERPRISE: Structured logging for completion
      logger.info('✅ STATUS DIAGNOSTICS: Checks completed', createLogContext({
        correlationId,
        duration: Date.now() - startTime,
        overallStatus: finalStatus,
        totalChecks: allChecks.length,
        errorCount: allChecks.filter(c => c.status === 'error').length,
        warningCount: allChecks.filter(c => c.status === 'warning').length,
        operation: 'comprehensive_status_check_complete'
      }));

    } catch (error) {
      // ENTERPRISE: Structured error logging
      logger.error('❌ STATUS DIAGNOSTICS: Check failed', 
        error instanceof Error ? error : new Error(String(error)),
        createLogContext({
          correlationId,
          duration: Date.now() - startTime,
          component: 'StatusDiagnostics',
          operation: 'comprehensive_status_check_failed'
        })
      );
      setOverallStatus('error');
    } finally {
      setIsRunning(false);
    }
  };

  // User status checks - ENHANCED with existing user context
  const checkUserStatus = async (checks: any[]) => {
    const userCheckStart = Date.now();

    try {
      // ENTERPRISE: Use existing enhanced user context
      const userData = userContext;
      
      // Check 1: User Authentication - Enhanced
      if (userData.displayName) {
        checks.push({
          id: 'user_auth',
          name: 'User Authentication',
          status: 'success',
          message: `Authenticated as: ${userData.displayName} (${userData.fullName})`,
          details: `Email: ${userData.email}`,
          duration: Date.now() - userCheckStart
        });
      } else {
        checks.push({
          id: 'user_auth',
          name: 'User Authentication',
          status: 'error',
          message: 'User not authenticated or user context unavailable',
          suggestions: ['Refresh the page', 'Check ServiceNow session', 'Verify UI Page configuration'],
          duration: Date.now() - userCheckStart
        });
      }

      // Check 2: Admin Role with Installation Warning - ENHANCED
      checks.push({
        id: 'admin_role',
        name: 'Administrator Role',
        status: userData.isAdmin ? 'success' : 'warning',
        message: userData.isAdmin ? 'User has administrator privileges' : 'User does not have administrator role - installation buttons will be disabled',
        details: userData.isAdmin ? 'Can perform plugin installations' : 'Limited functionality - installations not permitted without admin role',
        suggestions: userData.isAdmin ? [] : ['Contact administrator for role assignment', 'Installation features will be disabled in the interface'],
        duration: Date.now() - userCheckStart
      });

      // Check 3: Plugin Installation Permissions - Enhanced
      const canInstall = userData.capabilities.canBulkUpdate || userData.isAdmin;
      checks.push({
        id: 'install_permissions',
        name: 'Plugin Installation Permissions',
        status: canInstall ? 'success' : 'error',
        message: canInstall ? 'User can install plugins' : 'User cannot install plugins',
        details: canInstall ? 'Bulk update permissions available' : 'Missing bulk update permissions - installation buttons disabled',
        suggestions: canInstall ? [] : ['Contact administrator for permissions', 'Verify role assignments', 'Installation features will be unavailable'],
        duration: Date.now() - userCheckStart
      });

      // REMOVED: Redundant User Roles check as requested

    } catch (error) {
      checks.push({
        id: 'user_error',
        name: 'User Context Error',
        status: 'error',
        message: 'Failed to retrieve user information',
        details: error instanceof Error ? error.message : String(error),
        suggestions: ['Refresh the page', 'Check browser console for errors'],
        duration: Date.now() - userCheckStart
      });
    }
  };

  // API status checks - Individual validation checks as separate CheckCard entries
  const checkApiStatus = async (checks: any[]) => {
    const apiCheckStart = Date.now();

    try {
      // ENTERPRISE: Use existing validation hook (uses ky via apiService)
      logger.info('🔌 API STATUS: Using ValidationStatusCard for validation display', createLogContext({
        correlationId,
        component: 'StatusDiagnostics',
        operation: 'api_status_check_start',
        useValidationCard: true
      }));

      // Individual validation checks based on ValidationStatusCard data
      if (validationStatus.validationData) {
        const validation = validationStatus.validationData.validation;
        
        // Check 1: Process Plugin Updates Flow
        checks.push({
          id: 'subflow_check',
          name: 'Process Plugin Updates Flow',
          status: validation.flow_exists ? 'success' : 'error',
          message: validation.flow_exists ? 'SubFlow found and active' : 'SubFlow not found or not active',
          details: validation.flow_exists ? 
            'Flow Designer workflow "Process Plugin Updates V2" is available' : 
            'Flow Designer workflow "Process Plugin Updates V2" is missing',
          suggestions: validation.flow_exists ? [] : [
            'Check Flow Designer for "Process Plugin Updates V2"',
            'Verify flow is published and active',
            'Ensure flow has correct scope permissions'
          ],
          duration: Date.now() - apiCheckStart
        });

        // Check 2: Plugin CICD Auth Credentials
        checks.push({
          id: 'credentials_check',
          name: 'Plugin CICD Auth Credentials',
          status: validation.credentials_exist ? 'success' : 'error',
          message: validation.credentials_exist ? 'Authentication credentials found' : 'Authentication credentials not found',
          details: validation.credentials_exist ? 
            'Basic Auth credentials "Plugin CICD Auth" are configured' : 
            'Basic Auth credentials "Plugin CICD Auth" are missing',
          suggestions: validation.credentials_exist ? [] : [
            'Create basic auth credentials named "Plugin CICD Auth"',
            'Configure ServiceNow Store API credentials',
            'Verify credentials have proper permissions'
          ],
          duration: Date.now() - apiCheckStart
        });

        // Check 3: Plugin CICD Auth Alias
        checks.push({
          id: 'alias_check',
          name: 'Plugin CICD Auth Alias',
          status: validation.alias_exists ? 'success' : 'error',
          message: validation.alias_exists ? 'Connection alias found' : 'Connection alias not found',
          details: validation.alias_exists ? 
            'Connection alias "Plugin CICD Auth" is configured' : 
            'Connection alias "Plugin CICD Auth" is missing',
          suggestions: validation.alias_exists ? [] : [
            'Create connection alias named "Plugin CICD Auth"',
            'Link alias to authentication credentials',
            'Test connection from alias configuration'
          ],
          duration: Date.now() - apiCheckStart
        });

      } else if (validationStatus.loading) {
        checks.push({
          id: 'validation_loading',
          name: 'System Validation',
          status: 'checking',
          message: 'Loading validation status...',
          details: 'Checking Flow, Credentials, and Alias configuration',
          duration: Date.now() - apiCheckStart
        });
      } else if (validationStatus.error) {
        checks.push({
          id: 'validation_error',
          name: 'System Validation',
          status: 'error',
          message: `Validation check failed: ${validationStatus.error}`,
          details: 'Unable to verify Flow, Credentials, and Alias status',
          suggestions: ['Check API permissions', 'Verify REST API is active', 'Check network connectivity'],
          duration: Date.now() - apiCheckStart
        });
      }

      // ServiceNow Store Data Access - Uses existing architecture
      const hasImmediateData = userContext.pattern2A.isAvailable;
      checks.push({
        id: 'store_api',
        name: 'ServiceNow Store Data Access',
        status: hasImmediateData ? 'success' : 'warning',
        message: hasImmediateData ? 'Store data access working (Pattern 2A)' : 'Store data not immediately available',
        details: hasImmediateData ? 
          `Pattern 2A operational - ${userContext.pattern2A.dataAge}ms age` : 
          'May require API calls for data - using fallback patterns',
        duration: Date.now() - apiCheckStart
      });

    } catch (error) {
      // ENTERPRISE: Structured error logging
      logger.error('❌ API STATUS: Check failed', 
        error instanceof Error ? error : new Error(String(error)),
        createLogContext({
          correlationId,
          component: 'StatusDiagnostics',
          operation: 'api_status_check_failed',
          duration: Date.now() - apiCheckStart
        })
      );

      checks.push({
        id: 'api_error',
        name: 'API Status Error',
        status: 'error',
        message: 'Failed to check API status',
        details: error instanceof Error ? error.message : String(error),
        duration: Date.now() - apiCheckStart
      });
    }
  };

  // System status checks - ENHANCED with existing architecture
  const checkSystemStatus = async (checks: any[]) => {
    const systemCheckStart = Date.now();

    try {
      // Check 1: ServiceNow Platform - Uses existing system context
      const systemInfo = userContext.system;
      if (systemInfo.instanceName) {
        checks.push({
          id: 'platform_info',
          name: 'ServiceNow Platform',
          status: 'success',
          message: `${systemInfo.instanceName} ${systemInfo.version}`,
          details: `Instance: ${systemInfo.instanceVersion}, Patch: ${systemInfo.instancePatchlevel}`,
          duration: Date.now() - systemCheckStart
        });
      } else {
        checks.push({
          id: 'platform_info',
          name: 'ServiceNow Platform',
          status: 'warning',
          message: 'Platform information not available',
          suggestions: ['Check UI Page configuration', 'Verify Pattern 2A data injection'],
          duration: Date.now() - systemCheckStart
        });
      }

      // Check 2: Application Configuration - Uses existing app context
      const appInfo = userContext.app;
      checks.push({
        id: 'app_config',
        name: 'Application Configuration',
        status: 'success',
        message: `${appInfo.name} v${appInfo.version}`,
        details: `Scope: ${appInfo.scope}`,
        duration: Date.now() - systemCheckStart
      });

      // Check 3: Debug Mode
      const debugEnabled = new URLSearchParams(window.location.search).get('sn_debug') === 'true';
      checks.push({
        id: 'debug_mode',
        name: 'Debug Mode',
        status: 'success',
        message: debugEnabled ? 'Debug mode enabled (?sn_debug=true)' : 'Debug mode disabled',
        details: debugEnabled ? 'Enhanced logging and diagnostics active' : 'Production mode - minimal logging',
        duration: Date.now() - systemCheckStart
      });

    } catch (error) {
      checks.push({
        id: 'system_error',
        name: 'System Status Error',
        status: 'error',
        message: 'Failed to check system status',
        details: error instanceof Error ? error.message : String(error),
        duration: Date.now() - systemCheckStart
      });
    }
  };

  // Performance checks - Enhanced with enterprise logging
  const checkPerformanceStatus = async (checks: any[], overallStart: number) => {
    const perfStart = Date.now();

    try {
      // Check 1: Overall Performance
      const totalDuration = Date.now() - overallStart;
      checks.push({
        id: 'overall_performance',
        name: 'Overall Check Duration',
        status: totalDuration < 2000 ? 'success' : totalDuration < 5000 ? 'warning' : 'error',
        message: `Total diagnostic time: ${totalDuration}ms`,
        details: totalDuration < 2000 ? 'Excellent performance' : totalDuration < 5000 ? 'Acceptable performance' : 'Slow performance - investigate',
        suggestions: totalDuration >= 5000 ? ['Check network connectivity', 'Review API response times', 'Consider caching improvements'] : [],
        duration: totalDuration
      });

      // Check 2: Browser Performance
      if (typeof performance !== 'undefined' && (performance as any).memory) {
        const memory = (performance as any).memory;
        const memoryUsed = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        const memoryLimit = Math.round(memory.jsHeapSizeLimit / 1024 / 1024);
        const memoryPercentage = Math.round((memoryUsed / memoryLimit) * 100);

        checks.push({
          id: 'browser_memory',
          name: 'Browser Memory Usage',
          status: memoryPercentage < 50 ? 'success' : memoryPercentage < 80 ? 'warning' : 'error',
          message: `Memory: ${memoryUsed}MB / ${memoryLimit}MB (${memoryPercentage}%)`,
          details: memoryPercentage < 50 ? 'Good memory usage' : memoryPercentage < 80 ? 'Moderate memory usage' : 'High memory usage',
          suggestions: memoryPercentage >= 80 ? ['Close unused browser tabs', 'Refresh the page', 'Clear browser cache'] : [],
          duration: Date.now() - perfStart
        });
      }

      // Check 3: Connection Quality
      if (typeof navigator !== 'undefined' && 'connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          const effectiveType = connection.effectiveType || 'unknown';
          const rtt = connection.rtt || 0;
          
          checks.push({
            id: 'connection_quality',
            name: 'Network Connection',
            status: effectiveType === '4g' || rtt < 100 ? 'success' : effectiveType === '3g' || rtt < 300 ? 'warning' : 'error',
            message: `Connection: ${effectiveType.toUpperCase()}, RTT: ${rtt}ms`,
            details: `Effective type: ${effectiveType}, Round-trip time: ${rtt}ms`,
            duration: Date.now() - perfStart
          });
        }
      }

    } catch (error) {
      checks.push({
        id: 'performance_error',
        name: 'Performance Check Error',
        status: 'error',
        message: 'Failed to check performance metrics',
        details: error instanceof Error ? error.message : String(error),
        duration: Date.now() - perfStart  
      });
    }
  };

  // Status badge component
  const StatusBadge: React.FC<{ status: StatusCheck['status'] }> = ({ status }) => {
    const config = {
      success: { color: 'green', icon: <IconCircleCheck size={16} /> },
      error: { color: 'red', icon: <IconCircleX size={16} /> },
      warning: { color: 'yellow', icon: <IconAlertCircle size={16} /> },
      checking: { color: 'blue', icon: <IconClock size={16} /> }
    };

    return (
      <Badge color={config[status].color} leftSection={config[status].icon}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  // Check card component
  const CheckCard: React.FC<{ check: StatusCheck }> = ({ check }) => (
    <Card withBorder mb="sm">
      <Group justify="space-between" mb="xs">
        <Text fw={500}>{check.name}</Text>
        <Group gap="xs">
          {check.duration && <Text size="xs" c="dimmed">{check.duration}ms</Text>}
          <StatusBadge status={check.status} />
        </Group>
      </Group>
      
      <Text size="sm" mb="xs">{check.message}</Text>
      
      {check.details && (
        <Text size="xs" c="dimmed" mb="xs">{check.details}</Text>
      )}
      
      {check.suggestions && check.suggestions.length > 0 && (
        <Alert icon={<IconAlertCircle size={16} />} color="blue" variant="light" mt="xs">
          <Text size="xs" fw={500} mb="xs">Suggestions:</Text>
          <List size="xs">
            {check.suggestions.map((suggestion, index) => (
              <List.Item key={index}>{suggestion}</List.Item>
            ))}
          </List>
        </Alert>
      )}
    </Card>
  );

  // Run checks on component mount
  useEffect(() => {
    runStatusChecks();
  }, []);

  // Re-run checks when validation data becomes available (fixes initial load timing issue)
  useEffect(() => {
    if (validationStatus.validationData && status.api.length <= 1) {
      // Validation data is now available but we only have Store Data Access check
      // Re-run to get individual validation checks
      runStatusChecks();
    }
  }, [validationStatus.validationData, status.api.length]);

  return (
    <Container size="lg" py="xl">
      {/* Header */}
      <Group justify="space-between" mb="xl">
        <div>
          <Title order={1}>System Status Diagnostics</Title>
          <Text c="dimmed">
            Comprehensive system health check for {userContext.displayName}
            {!userContext.isAdmin && ' (Limited access - installation buttons will be disabled)'}
          </Text>
        </div>
        <Group>
          <Button 
            onClick={runStatusChecks} 
            loading={isRunning} 
            leftSection={<IconRefresh size={16} />}
          >
            Run Checks
          </Button>
        </Group>
      </Group>



      {/* Overall Status */}
      <Card withBorder mb="xl">
        <Group justify="space-between">
          <div>
            <Text fw={500} size="lg">Comprehensive System Status</Text>
            <Text size="sm" c="dimmed">Correlation ID: {correlationId}</Text>
          </div>
          <StatusBadge status={overallStatus} />
        </Group>
        
        {isRunning && (
          <Progress value={75} animated mt="md" />
        )}
      </Card>

      {/* Status Checks by Category */}
      <Tabs defaultValue="user">
        <Tabs.List>
          <Tabs.Tab value="user" leftSection={<IconUser size={16} />}>
            User & Permissions
            {status.user.length > 0 && (
              <Badge size="xs" ml="xs" color={status.user.some(c => c.status === 'error') ? 'red' : status.user.some(c => c.status === 'warning') ? 'yellow' : 'green'}>
                {status.user.length}
              </Badge>
            )}
          </Tabs.Tab>
          
          <Tabs.Tab value="api" leftSection={<IconApi size={16} />}>
            API Status
            {status.api.length > 0 && (
              <Badge size="xs" ml="xs" color={status.api.some(c => c.status === 'error') ? 'red' : status.api.some(c => c.status === 'warning') ? 'yellow' : 'green'}>
                {status.api.length}
              </Badge>
            )}
          </Tabs.Tab>
          
          <Tabs.Tab value="system" leftSection={<IconServer size={16} />}>
            System Info
            {status.system.length > 0 && (
              <Badge size="xs" ml="xs" color={status.system.some(c => c.status === 'error') ? 'red' : status.system.some(c => c.status === 'warning') ? 'yellow' : 'green'}>
                {status.system.length}
              </Badge>
            )}
          </Tabs.Tab>
          
          <Tabs.Tab value="performance" leftSection={<IconSettings size={16} />}>
            Performance
            {status.performance.length > 0 && (
              <Badge size="xs" ml="xs" color={status.performance.some(c => c.status === 'error') ? 'red' : status.performance.some(c => c.status === 'warning') ? 'yellow' : 'green'}>
                {status.performance.length}
              </Badge>
            )}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="user" pt="md">
          {status.user.map(check => (
            <CheckCard key={check.id} check={check} />
          ))}
        </Tabs.Panel>

        <Tabs.Panel value="api" pt="md">
          {/* ValidationStatusCard - visually disabled, keeping individual checks
              Uncomment if individual checks regress due to file reversion issues
          <div style={{ marginBottom: '1rem' }}>
            <ValidationStatusCard
              validationData={validationStatus.validationData}
              loading={validationStatus.loading}
              error={validationStatus.error}
              onRefresh={validationStatus.refetch}
            />
          </div>
          */}
          {status.api.map(check => (
            <CheckCard key={check.id} check={check} />
          ))}
        </Tabs.Panel>

        <Tabs.Panel value="system" pt="md">
          {status.system.map(check => (
            <CheckCard key={check.id} check={check} />
          ))}
        </Tabs.Panel>

        <Tabs.Panel value="performance" pt="md">
          {status.performance.map(check => (
            <CheckCard key={check.id} check={check} />
          ))}
        </Tabs.Panel>
      </Tabs>

      {/* Footer */}
      <Divider my="xl" />
      <Group justify="space-between">
        <Text size="sm" c="dimmed">
          ServiceNow Batch Plugin Updater - System Diagnostics (Enterprise Libraries)
        </Text>
        <Group gap="xs">
          <Text size="sm" c="dimmed">
            {new Date().toLocaleString()}
          </Text>
          <Text size="sm" c="dimmed">•</Text>
          <Button 
            size="xs" 
            variant="subtle" 
            onClick={() => window.location.href = window.location.pathname}
          >
            Return to Dashboard
          </Button>
        </Group>
      </Group>
    </Container>
  );
};