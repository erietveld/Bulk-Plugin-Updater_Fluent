// ValidationStatusCard.tsx
// Displays validation status for ServiceNow backend dependencies
// Only shows when URL parameter ?check_status=true is present
// Following atomic design principles and Mantine UI styling

import React from 'react';
import { 
  Card, 
  Title, 
  Text, 
  Group, 
  Badge, 
  Stack, 
  Alert, 
  Loader,
  ActionIcon,
  Tooltip
} from '@mantine/core';
import { 
  IconCheck, 
  IconX, 
  IconAlertTriangle, 
  IconRefresh,
  IconSettings,
  IconKey,
  IconGitBranch
} from '@tabler/icons-react';

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

interface ValidationStatusCardProps {
  validationData?: ValidationResponse | null;
  loading?: boolean;
  error?: string | null;
  onRefresh?: () => void;
  className?: string;
}

// Status indicator component
const StatusIndicator: React.FC<{
  status: boolean;
  label: string;
  icon: React.ReactNode;
  description: string;
}> = ({ status, label, icon, description }) => (
  <Group justify="space-between" wrap="nowrap">
    <Group gap="sm" wrap="nowrap">
      {icon}
      <div>
        <Text size="sm" fw={500}>{label}</Text>
        <Text size="xs" c="dimmed">{description}</Text>
      </div>
    </Group>
    <Badge 
      color={status ? 'green' : 'red'}
      variant="light"
      size="sm"
      leftSection={status ? <IconCheck size={12} /> : <IconX size={12} />}
    >
      {status ? 'Ready' : 'Missing'}
    </Badge>
  </Group>
);

export const ValidationStatusCard: React.FC<ValidationStatusCardProps> = ({
  validationData,
  loading = false,
  error = null,
  onRefresh,
  className = undefined
}) => {
  // Loading state
  if (loading) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder {...(className && { className })}>
        <Group justify="space-between" mb="xs">
          <Title order={4}>🔍 System Validation</Title>
          <Loader size="sm" />
        </Group>
        <Text size="sm" c="dimmed">
          Checking ServiceNow backend dependencies...
        </Text>
      </Card>
    );
  }

  // Error state
  if (error) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder {...(className && { className })}>
        <Group justify="space-between" mb="xs">
          <Title order={4}>🔍 System Validation</Title>
          {onRefresh && (
            <Tooltip label="Retry validation">
              <ActionIcon 
                variant="light" 
                color="blue" 
                onClick={onRefresh}
                size="sm"
              >
                <IconRefresh size={16} />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
        
        <Alert 
          icon={<IconAlertTriangle size={16} />} 
          title="Validation Failed" 
          color="red"
          variant="light"
        >
          <Text size="sm">{error}</Text>
          {onRefresh && (
            <Text size="xs" c="dimmed" mt="xs">
              Click the refresh button to try again.
            </Text>
          )}
        </Alert>
      </Card>
    );
  }

  // No data state
  if (!validationData) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder {...(className && { className })}>
        <Group justify="space-between" mb="xs">
          <Title order={4}>🔍 System Validation</Title>
          {onRefresh && (
            <Tooltip label="Check validation status">
              <ActionIcon 
                variant="light" 
                color="blue" 
                onClick={onRefresh}
                size="sm"
              >
                <IconRefresh size={16} />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
        <Text size="sm" c="dimmed">
          Click refresh to check system readiness status.
        </Text>
      </Card>
    );
  }

  const { validation } = validationData;
  const allReady = validation.all_ready;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder {...(className && { className })}>
      {/* Header */}
      <Group justify="space-between" mb="md">
        <Title order={4}>🔍 System Validation</Title>
        <Group gap="xs">
          <Badge 
            color={allReady ? 'green' : 'orange'}
            variant="filled"
            size="sm"
          >
            {allReady ? 'All Systems Ready' : 'Setup Required'}
          </Badge>
          {onRefresh && (
            <Tooltip label="Refresh validation status">
              <ActionIcon 
                variant="light" 
                color="blue" 
                onClick={onRefresh}
                size="sm"
              >
                <IconRefresh size={16} />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
      </Group>

      {/* Overall Status Alert */}
      {!allReady && (
        <Alert 
          icon={<IconAlertTriangle size={16} />} 
          title="Setup Required" 
          color="orange"
          variant="light"
          mb="md"
        >
          <Text size="sm">
            Some backend dependencies are missing. Install updates may not work properly.
          </Text>
        </Alert>
      )}

      {/* Individual Status Items */}
      <Stack gap="md">
        <StatusIndicator
          status={validation.flow_exists}
          label="Process Plugin Updates Flow"
          icon={<IconGitBranch size={18} color={validation.flow_exists ? '#51cf66' : '#ff6b6b'} />}
          description="ServiceNow Flow Designer workflow for processing updates"
        />
        
        <StatusIndicator
          status={validation.credentials_exist}
          label="Plugin CICD Auth Credentials"
          icon={<IconKey size={18} color={validation.credentials_exist ? '#51cf66' : '#ff6b6b'} />}
          description="Authentication credentials for ServiceNow Store API"
        />
        
        <StatusIndicator
          status={validation.alias_exists}
          label="Plugin CICD Auth Alias"
          icon={<IconSettings size={18} color={validation.alias_exists ? '#51cf66' : '#ff6b6b'} />}
          description="Connection alias for secure API access"
        />
      </Stack>

      {/* Timestamp */}
      <Text size="xs" c="dimmed" mt="md">
        Last checked: {new Date(validationData.timestamp).toLocaleString()}
      </Text>
    </Card>
  );
};

export default ValidationStatusCard;