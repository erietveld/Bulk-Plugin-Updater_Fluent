// src/client/components/error/ApiErrorModal.tsx
// API Error Modal component
// Following Architecture.md separation of concerns - UI rendering only
// Integrates with Mantine UI design system and theme

import React from 'react';
import {
  Modal,
  Stack,
  Alert,
  Text,
  Button,
  Group,
  Badge,
  Code,
  Divider,
  List,
  Box,
  useMantineColorScheme
} from '@mantine/core';
import {
  IconAlertTriangle,
  IconLock,
  IconServer,
  IconWifi,
  IconExclamationCircle,
  IconCopy,
  IconExternalLink
} from '@tabler/icons-react';
import type { ApiErrorDetails } from '../../../hooks/useApiErrorModal';
import { logger, createLogContext } from '../../../monitoring/logger';

interface ApiErrorModalProps {
  opened: boolean;
  error: ApiErrorDetails | null;
  onClose: () => void;
}

export const ApiErrorModal: React.FC<ApiErrorModalProps> = ({ opened, error, onClose }) => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  if (!error) return null;

  // Get error icon based on type
  const getErrorIcon = () => {
    switch (error.errorType) {
      case 'auth':
        return <IconLock size={20} />;
      case 'server':
        return <IconServer size={20} />;
      case 'network':
        return <IconWifi size={20} />;
      case 'http':
        return <IconExclamationCircle size={20} />;
      default:
        return <IconAlertTriangle size={20} />;
    }
  };

  // Get error color based on type
  const getErrorColor = () => {
    switch (error.errorType) {
      case 'auth':
        return 'red';
      case 'server':
        return 'orange';
      case 'network':
        return 'blue';
      case 'http':
        return 'yellow';
      default:
        return 'red';
    }
  };

  // Copy error details to clipboard
  const copyErrorDetails = async () => {
    const errorText = [
      `Error: ${error.title}`,
      `Message: ${error.message}`,
      error.httpStatus ? `HTTP Status: ${error.httpStatus}` : '',
      error.statusMessage ? `Status Message: ${error.statusMessage}` : '',
      error.progressId ? `Progress ID: ${error.progressId}` : '',
      `Error Type: ${error.errorType}`,
      `Timestamp: ${new Date().toISOString()}`
    ].filter(Boolean).join('\n');

    try {
      await navigator.clipboard.writeText(errorText);
      logger.info('Error details copied to clipboard', createLogContext({
        errorType: error.errorType,
        progressId: error.progressId
      }));
    } catch (err) {
      logger.warn('Failed to copy error details to clipboard', createLogContext({
        error: err instanceof Error ? err.message : String(err)
      }));
    }
  };

  // Get troubleshooting suggestions based on error type
  const getTroubleshootingSteps = () => {
    switch (error.errorType) {
      case 'auth':
        return [
          'Verify the API user credentials in the Subflow configuration',
          'Check that the API user account is active and not locked',
          'Ensure the API user has the required roles and permissions',
          'Contact your system administrator for API user verification'
        ];
      case 'server':
        return [
          'Wait a few minutes and try the operation again',
          'Check ServiceNow instance status and health',
          'Verify that the installation service is running properly',
          'Contact support if the issue persists'
        ];
      case 'network':
        return [
          'Check your internet connection',
          'Verify that you can access the ServiceNow instance',
          'Try refreshing the page and attempting the operation again',
          'Contact your network administrator if connectivity issues persist'
        ];
      case 'http':
        return [
          'Review the error details below',
          'Check ServiceNow logs for additional information',
          'Verify the service configuration and endpoints',
          'Contact your system administrator if the issue continues'
        ];
      default:
        return [
          'Try refreshing the page and attempting the operation again',
          'Check the error details for more specific information',
          'Contact support if the problem persists'
        ];
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Group gap="xs">
          {getErrorIcon()}
          <Text fw={600}>{error.title}</Text>
        </Group>
      }
      size="lg"
      centered
    >
      <Stack gap="md">
        {/* Main Error Alert */}
        <Alert 
          icon={getErrorIcon()} 
          color={getErrorColor()} 
          variant="light"
        >
          <Text fw={500} mb="xs">
            {error.message}
          </Text>
          
          {/* HTTP Status Badge */}
          {error.httpStatus && (
            <Group gap="xs" mb="xs">
              <Text size="sm" c="dimmed">HTTP Status:</Text>
              <Badge color={getErrorColor()} variant="light">
                {error.httpStatus}
              </Badge>
            </Group>
          )}
          
          {/* Additional Status Message */}
          {error.statusMessage && error.statusMessage !== error.message && (
            <Text size="sm" c="dimmed">
              Service Response: {error.statusMessage}
            </Text>
          )}
        </Alert>

        {/* Troubleshooting Steps */}
        <Box>
          <Text fw={500} mb="xs">Troubleshooting Steps:</Text>
          <List spacing="xs" size="sm">
            {getTroubleshootingSteps().map((step, index) => (
              <List.Item key={index}>{step}</List.Item>
            ))}
          </List>
        </Box>

        {/* Technical Details */}
        {(error.httpStatus || error.progressId) && (
          <>
            <Divider />
            <Box>
              <Text fw={500} mb="xs">Technical Details:</Text>
              <Stack gap="xs">
                {error.httpStatus && (
                  <Group gap="xs">
                    <Text size="sm" c="dimmed" w={100}>HTTP Status:</Text>
                    <Code>{error.httpStatus}</Code>
                  </Group>
                )}
                {error.progressId && (
                  <Group gap="xs">
                    <Text size="sm" c="dimmed" w={100}>Progress ID:</Text>
                    <Code>{error.progressId}</Code>
                  </Group>
                )}
                <Group gap="xs">
                  <Text size="sm" c="dimmed" w={100}>Error Type:</Text>
                  <Code>{error.errorType}</Code>
                </Group>
                <Group gap="xs">
                  <Text size="sm" c="dimmed" w={100}>Timestamp:</Text>
                  <Code>{new Date().toISOString()}</Code>
                </Group>
              </Stack>
            </Box>
          </>
        )}

        <Divider />

        {/* Action Buttons */}
        <Group justify="space-between">
          <Group gap="xs">
            {/* Copy Error Details */}
            <Button
              variant="light"
              size="sm"
              leftSection={<IconCopy size={16} />}
              onClick={copyErrorDetails}
            >
              Copy Details
            </Button>
            
            {/* Custom Actions */}
            {error.actions?.map((action: { label: string; action: () => void }, index: number) => (
              <Button
                key={index}
                variant="light"
                size="sm"
                leftSection={<IconExternalLink size={16} />}
                onClick={action.action}
              >
                {action.label}
              </Button>
            ))}
          </Group>

          {/* Close Button */}
          <Button
            onClick={onClose}
          >
            Close
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};