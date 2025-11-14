import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
// Basic Auth Credentials - Plugin CICD Auth
Record({
    $id: Now.ID['cred_plugin_cicd_auth'],
    table: 'basic_auth_credentials',
    data: {
        sys_id: 'a8cb2627fb49b6105543f4c69eefdc09',
        active: true,
        application: 'a0a02e10fbcd72d0e80bf602beefdc21',
        applies_to: 'all',
        classification: 'basic_auth',
        credential_store_type: 'other',
        credential_storage_vault: '2bb9bebab7462010eca29a85de11a96d',
        lookup_key: 'credential_id',
        name: 'Plugin CICD Auth',
        order: 100,
        sys_class_name: 'basic_auth_credentials',
        tag: '627be2e3fb49b6105543f4c69eefdcab',
        type: 'basic_auth',
        use_context: false,
        use_high_security: false,
        user_name: 'Plugin Installer',
    },
})

// Connection Alias - Plugin CICD Auth
Record({
    $id: Now.ID['alias_plugin_cicd_auth'],
    table: 'sys_alias',
    data: {
        sys_id: '627be2e3fb49b6105543f4c69eefdcab',
        connection_type: 'http_connection',
        id: 'x_snc_store_upda_1.Plugin_CICD_Auth',
        is_internal: false,
        multiple_connections: false,
        name: 'Plugin CICD Auth',
        retry_policy: 'ef751ff07301330025d71afe2ff6a7f9',
        sys_class_name: 'sys_alias',
        sys_name: 'x_snc_store_upda_1.Plugin_CICD_Auth',
        sys_package: 'a0a02e10fbcd72d0e80bf602beefdc21',
        sys_scope: 'a0a02e10fbcd72d0e80bf602beefdc21',
        type: 'credential',
    },
})
