// src/components/diagnostics/StatusDiagnostics.tsx
// Comprehensive system status diagnostics page - loads independently from main app
// Activated with ?check_status=true URL parameter for fast troubleshooting

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
  Code,
  Divider,
  Progress,
  Alert,
  Tabs,
  List,
  Grid,
  Paper
} from '@mantine/core';
import { 
  IconCircleCheck, 
  IconCircleX, 
  IconClock, 
  IconUser, 
  IconServer, 
  IconApi, 
  IconSettings,
  IconDownload,
  IconAlertCircle,
  IconRefresh
} from '@tabler/icons-react';
import { nanoid } from 'nanoid';
import { getString, getBoolean, getInteger } from '../../utils/typeRefinements';

// Status check result interface
interface StatusCheck {
  id: string;
  name: string;
  status: 'success' | 'error' | 'warning' | 'checking';
  message: string;
  details?: string;
  duration?: number;
  suggestions?: string[];
}

// Comprehensive status categories
interface SystemStatus {
  user: StatusCheck[];
  api: StatusCheck[];
  system: StatusCheck[];
  performance: StatusCheck[];
}

export const StatusDiagnostics: React.FC = () => {
  const [status, setStatus] = useState<SystemStatus>({
    user: [],
    api: [],
    system: [],
    performance: []
  });
  const [isRunning, setIsRunning] = useState(false);
  const [jsonMode, setJsonMode] = useState(false);
  const [overallStatus, setOverallStatus] = useState<'success' | 'error' | 'warning' | 'checking'>('checking');
  const correlationId = nanoid(10);

  // Check if JSON output mode is requested
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setJsonMode(urlParams.get('check_status') === 'json');
  }, []);

  // Run comprehensive status checks
  const runStatusChecks = async () => {
    setIsRunning(true);
    const startTime = Date.now();

    try {
      // Initialize all checks
      const userChecks: StatusCheck[] = [];
      const apiChecks: StatusCheck[] = [];
      const systemChecks: StatusCheck[] = [];
      const performanceChecks: StatusCheck[] = [];

      // USER CHECKS
      await checkUserStatus(userChecks);
      
      // API CHECKS  
      await checkApiStatus(apiChecks);
      
      // SYSTEM CHECKS
      await checkSystemStatus(systemChecks);
      
      // PERFORMANCE CHECKS
      await checkPerformanceStatus(performanceChecks, startTime);

      // Update state
      const newStatus = {
        user: userChecks,
        api: apiChecks,
        system: systemChecks,
        performance: performanceChecks
      };

      setStatus(newStatus);

      // Determine overall status
      const allChecks = [...userChecks, ...apiChecks, ...systemChecks, ...performanceChecks];
      const hasErrors = allChecks.some(check => check.status === 'error');
      const hasWarnings = allChecks.some(check => check.status === 'warning');
      
      if (hasErrors) {
        setOverallStatus('error');
      } else if (hasWarnings) {
        setOverallStatus('warning');
      } else {
        setOverallStatus('success');
      }

    } catch (error) {
      console.error('Status check failed:', error);
      setOverallStatus('error');
    } finally {
      setIsRunning(false);
    }
  };

  // User status checks
  const checkUserStatus = async (checks: StatusCheck[]) => {
    const userCheckStart = Date.now();

    try {
      // Get user context from window (Pattern 2A immediate data)
      const userData = (window as any).snImmediateData?.userContext;
      const appData = (window as any).snImmediateData?.appContext;
      
      // Check 1: User Authentication
      if (userData?.user_name) {
        checks.push({
          id: 'user_auth',
          name: 'User Authentication',
          status: 'success',
          message: `Authenticated as: ${userData.display_name} (${userData.user_name})`,
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

      // Check 2: Admin Role
      const isAdmin = getBoolean(userData?.is_admin || appData?.has_admin_role, false);
      checks.push({
        id: 'admin_role',
        name: 'Administrator Role',
        status: isAdmin ? 'success' : 'warning',
        message: isAdmin ? 'User has administrator privileges' : 'User does not have administrator role',
        details: isAdmin ? 'Can perform plugin installations' : 'Limited functionality - installations may not be permitted',
        suggestions: isAdmin ? [] : ['Contact administrator for role assignment', 'Verify plugin installation permissions'],
        duration: Date.now() - userCheckStart
      });

      // Check 3: Plugin Installation Permissions
      const canInstall = getBoolean(appData?.can_bulk_update, false) || isAdmin;
      checks.push({
        id: 'install_permissions',
        name: 'Plugin Installation Permissions',
        status: canInstall ? 'success' : 'error',
        message: canInstall ? 'User can install plugins' : 'User cannot install plugins',
        details: canInstall ? 'Bulk update permissions available' : 'Missing bulk update permissions',
        suggestions: canInstall ? [] : ['Contact administrator for permissions', 'Verify role assignments'],
        duration: Date.now() - userCheckStart
      });

      // Check 4: User Roles
      const roles = userData?.roles || [];
      checks.push({
        id: 'user_roles',
        name: 'User Roles',
        status: Array.isArray(roles) && roles.length > 0 ? 'success' : 'warning',
        message: `User has ${roles.length} role(s)`,
        details: Array.isArray(roles) ? `Roles: ${roles.slice(0, 3).join(', ')}${roles.length > 3 ? '...' : ''}` : 'No role information available',
        duration: Date.now() - userCheckStart
      });

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

  // API status checks
  const checkApiStatus = async (checks: StatusCheck[]) => {
    const apiCheckStart = Date.now();

    try {
      // Check 1: Install Updates API Validation
      const validationStart = Date.now();
      try {
        const response = await fetch('/api/x_snc_store_upda_1/install_updates', {
          method: 'GET',
          headers: {
            'X-UserToken': getString((window as any).g_ck, ''),
            'Content-Type': 'application/json',
            'X-Correlation-ID': correlationId
          }
        });

        if (response.ok) {
          const data = await response.json();
          const allReady = getBoolean(data.validation?.all_ready, false);
          
          checks.push({
            id: 'api_validation',
            name: 'Install Updates API',
            status: allReady ? 'success' : 'warning',
            message: allReady ? 'API validation successful - all systems ready' : 'API accessible but some components not ready',
            details: `Flow exists: ${getBoolean(data.validation?.flow_exists, false)}, Credentials: ${getBoolean(data.validation?.credentials_exist, false)}, Alias: ${getBoolean(data.validation?.alias_exists, false)}`,
            suggestions: allReady ? [] : ['Check SubFlow configuration', 'Verify credentials setup', 'Check alias configuration'],
            duration: Date.now() - validationStart
          });
        } else {
          checks.push({
            id: 'api_validation',
            name: 'Install Updates API',
            status: 'error',
            message: `API request failed: HTTP ${response.status}`,
            details: `Status: ${response.statusText}`,
            suggestions: ['Check API permissions', 'Verify REST API is active', 'Check network connectivity'],
            duration: Date.now() - validationStart
          });
        }
      } catch (apiError) {
        checks.push({
          id: 'api_validation',
          name: 'Install Updates API',
          status: 'error',
          message: 'API request failed',
          details: apiError instanceof Error ? apiError.message : String(apiError),
          suggestions: ['Check network connectivity', 'Verify API endpoint exists', 'Check browser console for errors'],
          duration: Date.now() - validationStart
        });
      }

      // Check 2: ServiceNow Store API Connectivity
      const storeApiStart = Date.now();
      try {
        // Test virtual table data access
        const hasImmediateData = !!(window as any).snImmediateData;
        checks.push({
          id: 'store_api',
          name: 'ServiceNow Store Data Access',
          status: hasImmediateData ? 'success' : 'warning',
          message: hasImmediateData ? 'Store data access working' : 'Store data not immediately available',
          details: hasImmediateData ? 'Pattern 2A immediate data operational' : 'May require API calls for data',
          duration: Date.now() - storeApiStart
        });
      } catch (storeError) {
        checks.push({
          id: 'store_api',
          name: 'ServiceNow Store Data Access',
          status: 'error',
          message: 'Store data access failed',
          details: storeError instanceof Error ? storeError.message : String(storeError),
          duration: Date.now() - storeApiStart
        });
      }

    } catch (error) {
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

  // System status checks
  const checkSystemStatus = async (checks: StatusCheck[]) => {
    const systemCheckStart = Date.now();

    try {
      // Check 1: ServiceNow Platform
      const platformData = (window as any).snImmediateData?.systemContext;
      if (platformData) {
        checks.push({
          id: 'platform_info',
          name: 'ServiceNow Platform',
          status: 'success',
          message: `ServiceNow ${getString(platformData.version)} (${getString(platformData.instance_name)})`,
          details: `Build: ${getString(platformData.build_date)}, Patch: ${getString(platformData.instance_patchlevel)}`,
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

      // Check 2: Application Configuration
      const appData = (window as any).snImmediateData?.appContext;
      if (appData) {
        checks.push({
          id: 'app_config',
          name: 'Application Configuration',
          status: 'success',
          message: `${getString(appData.app_name)} v${getString(appData.app_version)}`,
          details: `Scope: ${getString(appData.app_scope)}, Table: ${getString(appData.table_name)}`,
          duration: Date.now() - systemCheckStart
        });
      } else {
        checks.push({
          id: 'app_config',
          name: 'Application Configuration',
          status: 'error',
          message: 'Application configuration not available',
          suggestions: ['Check application installation', 'Verify metadata configuration'],
          duration: Date.now() - systemCheckStart
        });
      }

      // Check 3: Debug Mode
      const debugEnabled = new URLSearchParams(window.location.search).get('sn_debug') === 'true';
      checks.push({
        id: 'debug_mode',
        name: 'Debug Mode',
        status: debugEnabled ? 'success' : 'success',
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

  // Performance checks
  const checkPerformanceStatus = async (checks: StatusCheck[], overallStart: number) => {
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

  // JSON output for automation
  if (jsonMode) {
    return (
      <Container size="lg" py="xl">
        <Paper p="md">
          <Group justify="space-between" mb="md">
            <Title order={3}>Status Check JSON Output</Title>
            <Button onClick={runStatusChecks} loading={isRunning} leftSection={<IconRefresh size={16} />}>
              Run Checks
            </Button>
          </Group>
          <Code block>
            {JSON.stringify({ 
              correlationId, 
              timestamp: new Date().toISOString(),
              overallStatus,
              status 
            }, null, 2)}
          </Code>
          <Text size="sm" mt="md" c="dimmed">
            Correlation ID: {correlationId} | Use ?check_status=true for UI mode
          </Text>
        </Paper>
      </Container>
    );
  }

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

  return (
    <Container size="lg" py="xl">
      {/* Header */}
      <Group justify="space-between" mb="xl">
        <div>
          <Title order={1}>System Status Diagnostics</Title>
          <Text c="dimmed">Comprehensive system health and configuration check</Text>
        </div>
        <Group>
          <Button 
            onClick={runStatusChecks} 
            loading={isRunning} 
            leftSection={<IconRefresh size={16} />}
          >
            Run Checks
          </Button>
          <Button 
            variant="light" 
            onClick={() => window.location.href = '?check_status=json'}
            leftSection={<IconDownload size={16} />}
          >
            JSON Output
          </Button>
        </Group>
      </Group>

      {/* Overall Status */}
      <Card withBorder mb="xl" bg={overallStatus === 'success' ? 'green.0' : overallStatus === 'error' ? 'red.0' : 'yellow.0'}>
        <Group justify="space-between">
          <div>
            <Text fw={500} size="lg">Overall System Status</Text>
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
          ServiceNow Batch Plugin Updater - System Diagnostics
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