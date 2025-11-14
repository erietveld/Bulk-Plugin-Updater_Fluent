import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_snc_store_upda_1_store_updates',
    view: default_view,
    columns: [
        'name',
        'application',
        'available_version',
        'batch_level',
        'installed_version',
        'latest_major_version',
        'latest_minor_version',
        'latest_patch_version',
        'latest_version_level',
        'level',
    ],
})
