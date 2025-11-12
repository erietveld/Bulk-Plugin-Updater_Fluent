import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3f827597fb09b2105543f4c69eefdcb9'],
    table: 'sn_flow_summary',
    data: {
        document: 'fc2cbc1bfb0d72105543f4c69eefdca0',
        document_table: 'sys_hub_flow',
        domain: 'global',
        summary:
            'This subflow, designed for batch plugin updates, takes a list of applications as input and automates the process of updating their plugins. It first looks up the current versions of the specified applications, prepares the necessary data, and then initiates a batch installation of updates using a designated ServiceNow instance and credentials. Throughout the process, it tracks progress and status, providing a progress identifier and a status message as outputs. The subflow also includes error handling to ensure that if any issues occur during the update process, a clear failure message and progress indicator are returned. This helps streamline and monitor plugin updates across multiple applications efficiently.',
    },
})
