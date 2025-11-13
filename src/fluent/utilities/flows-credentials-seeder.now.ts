import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

/**
 * Self-Contained Flow Designer and Credentials Seeder Utility
 * 
 * This utility creates or updates Flow Designer subflows and credentials
 * from XML export data using the Fluent Record API.
 * 
 * Usage: Run this utility when forking/cloning the application
 * to ensure all required flows and credentials exist.
 * 
 * IMPORTANT: This is a standalone utility separate from the main app.
 * Use this when setting up the application on a new instance.
 */

// Flow Designer Subflow - Process Plugin Updates
Record({
    $id: Now.ID['flow_process_plugin_updates'],
    table: 'sys_hub_flow',
    data: {
        sys_id: 'fc2cbc1bfb0d72105543f4c69eefdca0',
        access: 'public',
        active: true,
        authored_on_release_version: 28100,
        callable_by_client_api: false,
        compiler_build: 'glide-zurich-07-01-2025__patch3-10-16-2025_10-24-2025_0919.zip',
        copied_from: '02007f75fb813a14e80bf602beefdccd',
        copied_from_name: 'Plugin Updater',
        description: 'Plugin Updater',
        flow_priority: 'MEDIUM',
        internal_name: 'process_plugin_updates',
        label_cache: '[{"name":"subflow.apps","label":"Input➛Applications","type":"string","base_type":"string","usedInstances":{"b276c5b2-8a5b-4fb8-bf69-c3b2f5eb7eb8":["conditions"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"2f87da3c-f077-4108-9df1-821a45ea18dc"}},{"name":"c6e9a576-8209-466c-9a5e-dca4ed266510.progress_id","label":"3 - Batch Install➛Progress ID","reference_display":"Progress ID","type":"string","base_type":"string","usedInstances":{},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"93f6a70e-6c6b-4246-8d9a-b5bb1b1dee5d"}},{"name":"c6e9a576-8209-466c-9a5e-dca4ed266510.http_status","label":"3 - Batch Install➛HTTP Status","reference_display":"HTTP Status","type":"string","base_type":"string","usedInstances":{},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"87747bb3-3e9b-44e4-b858-8809483dc7cd"}},{"name":"c6e9a576-8209-466c-9a5e-dca4ed266510.status_message","label":"3 - Batch Install➛Status Message","reference_display":"Status Message","type":"string","base_type":"string","usedInstances":{},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"565282e5-1ee6-4b04-9a6b-7a6d47a4da5b"}},{"name":"flow_variable.batch_manifest","label":"Flow Variables➛Batch Manifest","type":"string","base_type":"string","usedInstances":{"c6e9a576-8209-466c-9a5e-dca4ed266510":["batch_plan"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"70aafde9-0c47-484e-adb0-f483cc07e260"}}]',
        latest_snapshot: 'd52c4fa3fb01f6105543f4c69eefdc51',
        master_snapshot: 'fc4cb45bfb0d72105543f4c69eefdcde',
        name: 'Process Plugin Updates',
        pre_compiled: false,
        run_as: 'user',
        sc_callable: false,
        show_draft_actions: false,
        show_triggered_flows: false,
        status: 'published',
        sys_class_name: 'sys_hub_flow',
        sys_package: 'a0a02e10fbcd72d0e80bf602beefdc21',
        sys_scope: 'a0a02e10fbcd72d0e80bf602beefdc21',
        type: 'subflow',
        version: '2',
        version_record: '741fa623fb89b6105543f4c69eefdce9'
    }
})

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
        user_name: 'Plugin Installer'
    }
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
        type: 'credential'
    }
})