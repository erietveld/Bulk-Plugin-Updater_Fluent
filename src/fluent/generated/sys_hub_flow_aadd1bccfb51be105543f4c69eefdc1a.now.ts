import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['bedd9fccfb51be105543f4c69eefdc57'],
    table: 'sys_documentation',
    data: {
        element: 'apps',
        label: 'Applications',
        language: 'en',
        name: 'var__m_sys_hub_flow_input_aadd1bccfb51be105543f4c69eefdc1a',
    },
})
Record({
    $id: Now.ID['76dd9fccfb51be105543f4c69eefdc81'],
    table: 'sys_documentation',
    data: {
        element: 'progress_id',
        label: 'Progress ID',
        language: 'en',
        name: 'var__m_sys_hub_flow_output_aadd1bccfb51be105543f4c69eefdc1a',
    },
})
Record({
    $id: Now.ID['7edd9fccfb51be105543f4c69eefdc62'],
    table: 'sys_documentation',
    data: {
        element: 'http_status',
        label: 'HTTP Status',
        language: 'en',
        name: 'var__m_sys_hub_flow_output_aadd1bccfb51be105543f4c69eefdc1a',
    },
})
Record({
    $id: Now.ID['fedd9fccfb51be105543f4c69eefdc86'],
    table: 'sys_documentation',
    data: {
        element: 'status_message',
        label: 'Status Message',
        language: 'en',
        name: 'var__m_sys_hub_flow_output_aadd1bccfb51be105543f4c69eefdc1a',
    },
})
Record({
    $id: Now.ID['0bedd300fb91be105543f4c69eefdc60'],
    table: 'sys_documentation',
    data: {
        element: 'apps',
        label: 'Applications',
        language: 'en',
        name: 'var__m_sys_hub_flow_input_0fedd300fb91be105543f4c69eefdc4c',
    },
})
Record({
    $id: Now.ID['47edd300fb91be105543f4c69eefdc79'],
    table: 'sys_documentation',
    data: {
        element: 'progress_id',
        label: 'Progress ID',
        language: 'en',
        name: 'var__m_sys_hub_flow_output_0fedd300fb91be105543f4c69eefdc4c',
    },
})
Record({
    $id: Now.ID['4bedd300fb91be105543f4c69eefdc6e'],
    table: 'sys_documentation',
    data: {
        element: 'http_status',
        label: 'HTTP Status',
        language: 'en',
        name: 'var__m_sys_hub_flow_output_0fedd300fb91be105543f4c69eefdc4c',
    },
})
Record({
    $id: Now.ID['93edd300fb91be105543f4c69eefdc84'],
    table: 'sys_documentation',
    data: {
        element: 'status_message',
        label: 'Status Message',
        language: 'en',
        name: 'var__m_sys_hub_flow_output_0fedd300fb91be105543f4c69eefdc4c',
    },
})
Record({
    $id: Now.ID['7edd9fccfb51be105543f4c69eefdc82'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=2767f2b6-f277-478d-85af-70e9744cde51',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'status_message',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Status Message',
        mandatory: 'false',
        max_length: '8000',
        model: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_id: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_output_aadd1bccfb51be105543f4c69eefdc1a',
        order: '3',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['b2dd9fccfb51be105543f4c69eefdc5d'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=94738cb6-9d35-4e6e-bdc1-79faeb4eb33c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'http_status',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'HTTP Status',
        mandatory: 'false',
        max_length: '65000',
        model: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_id: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_output_aadd1bccfb51be105543f4c69eefdc1a',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['f2dd9fccfb51be105543f4c69eefdc7d'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=79c0b774-7b89-4c5e-89e2-eb5099acb3aa',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'progress_id',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Progress ID',
        mandatory: 'false',
        max_length: '8000',
        model: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_id: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_output_aadd1bccfb51be105543f4c69eefdc1a',
        order: '2',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['c3edd300fb91be105543f4c69eefdc72'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=79c0b774-7b89-4c5e-89e2-eb5099acb3aa',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'progress_id',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Progress ID',
        mandatory: 'false',
        max_length: '8000',
        model: '0fedd300fb91be105543f4c69eefdc4c',
        model_id: '0fedd300fb91be105543f4c69eefdc4c',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_output_0fedd300fb91be105543f4c69eefdc4c',
        order: '2',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['cfedd300fb91be105543f4c69eefdc66'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=94738cb6-9d35-4e6e-bdc1-79faeb4eb33c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'http_status',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'HTTP Status',
        mandatory: 'false',
        max_length: '65000',
        model: '0fedd300fb91be105543f4c69eefdc4c',
        model_id: '0fedd300fb91be105543f4c69eefdc4c',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_output_0fedd300fb91be105543f4c69eefdc4c',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['cfedd300fb91be105543f4c69eefdc7c'],
    table: 'sys_hub_flow_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=2767f2b6-f277-478d-85af-70e9744cde51',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'status_message',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Status Message',
        mandatory: 'false',
        max_length: '8000',
        model: '0fedd300fb91be105543f4c69eefdc4c',
        model_id: '0fedd300fb91be105543f4c69eefdc4c',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_output_0fedd300fb91be105543f4c69eefdc4c',
        order: '3',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['36dd9fccfb51be105543f4c69eefdcb6'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'f354b10d3b8672503c23c4c964e45af7',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        flow_variables_assigned: 'batch_manifest',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'f6059c89-6d01-4263-9ab5-782f5212e37e',
        values: 'H4sIAAAAAAAA/+1XXW/aMBT9K1GeQHwotDBa+tSpqlRpW6W160tTRca+AauO7doOlCH++67jBBjrpm57JS8h536de3KdK9axKp0unb1Xl9bymYwnj0/dmEuP4e91LEkB8SSeEkfnWUEkz8G6uBsviCi9AX8ybrUgq4cdQudcMAN1Nk0MJnFg4sn6wORWGjJBpiAw8M4ZLmcYzhk+ATA2yinNp6PBFAbJaDQ8zYf0wzlAzuhoin5N4C/kfkfal0PcNoWUYZ7VoBvDqwPJAAvnRFjoxhjFiFNmtUUMEHYrxQ6Yc+lCvwV5tfw7pj5LksR75oAt0lqN7WNWK9WIpDiFW+24kgFxZCoaBZUoC/kl9OE1hpyUwu1pXFrMB9qz9jRqTvndXC2/NgWvuawarI1CUSK2T8ShDNPSgfXvpeT3B+IE5NPhywEBBVZEWbVGJNNGLXhVBUkX/ZnAh34u1BLZ+YnqE+o77KOapH+N+FUFPxDDfbufMQ0G+3LfJH8p4ca//HFCSM7gvJfQ4bg3PBtCj7Bp0suHZ6eUJmM4+ZDEm0ra7KX0TQWRajmyoCg6WGq4dpdIYYHNOVNCg/mmDwYEkT/548ybSJOVUIRFaZkkp+F2Ml6n1cil8SRKUSllILrUOvro00c30joiBJg07qJZKlQ8eNYWVDEiC8KF1wMLYBDYKDeqiNwcoipfiNWEPpNZCH8MpS9S6WkJpXTDKUFsiccMWjnLKtmzQZahx3NW6swAxbG3/eYucfRb7XbqUrlOZYQXz1s+XacTEkKUtIOhtvurkaHzkw7dLSfvswm3t11RMs6CDAGIOtF76M4gHIJWiLKqNHiwcIgyTFdB7ahT1wii+UMfCqGX4JT4caxM+2TfZpnGHsRJLlRFzecJxwfTGcBxtQ5YtgBjq6T/206T6K1G3sN2b7j+lsbV3le8tV96s62ML/Ttwk87HwOuNLIheBFvNpsnvy3CaQ875b3f9+PuOe6e4+457p7j7jnunn/fPQwo943d+xG/af7ZeMMKDw6n+9BSmWf//dhhmx/a7+gzIw0AAA==',
    },
})
Record({
    $id: Now.ID['3edd9fccfb51be105543f4c69eefdcb8'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '3f54f10d3b8672503c23c4c964e45a08',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '4',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        values: 'H4sIAAAAAAAA/+1U227TQBD9lWqfE8uXxLR5q0AVSEARjfoClTXeHScr1rtmd500RPl3Zn1JIxoEQn3kzXPmdmbmrPfMtL5pvVuaa+fkSrPFl4cJkzpg9L1nGmpkC8aNFtJLo9mEbUC1AdvveY5XMH+VTy/T+Go6y3M+JRungsMMRZrn8ySO1t43hfPgW3c4fG3jOBNpHFMdIV2jYHf/QuX4WiphcRihAUvMPVq22P/i8rsGCwUlKup6563UK0qXgixqV1GTOc/SPKOy6eUsKfOsTFKRAc5yihsTX59s5MySQhOC3FjeWBG4pPGE4aNHLZD6VaAcTlgNWoA3dscW3rYEWARxq9XuGLGW2lM1FmIfnfyBoVIch8gKaTCOvfdoFsNye5ivjeR423TcOsRDqYYcblRb64/9COEsWEGr/HgWQlpH9bAJpAONgVN1tzbbz2PDG6m7AQenMhzU0QJPayhbjy5cAxXWVKiooWloOUVjzUZ2ycSljlaKjKhSZktNgyYj4IF4RDuC6IbwNx18D1aGKT5QGUqmC7rCcSubcbauOTt0Wym+t4FPP98wSdEvgwL6tGtqs8GB9GHyXPtFBzw9gLfL5aeLs1o+8byELKsYquSKJ+dlCdk5WV6875Dn4hyn+I1Ckz8odED+SqLz+X+Fnio00CzBSV50f1gqF977P0v0IUixb+F6DQnk0hGTZcDejX/x4NjR1SU/hbbGfgszPGGHn9OagAgPBgAA',
    },
})
Record({
    $id: Now.ID['76dd9fccfb51be105543f4c69eefdccc'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'c864f10d3b8672503c23c4c964e45a15',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '8',
        ui_id: 'b7a7fdb7-091c-4108-9db6-b66eda7385c5',
        values: 'H4sIAAAAAAAA/+1YbU/jOBD+K6eIj9BL37l+Q7CVOB0gXQtfrihy4knxnhtnE6fAov3vN2M7aZICu+x2kU5bqYqSmcl4/MwzM06fPFXotND5XJ3kuVgm3uSf20NPJCTD+ycvYSvwJl4Q5JrpIg8C79BbM1mQ8GnhrSHLhUoW3mThdTv+wjtceJFapRIersKPEOlZdAcrhno0nkp1fwa0DGST6dnJ6fz86nI2P5lfz6xBpDgYV+eJhiVkzh2HzkEsQPIgZhHo3BrPBC1zwdIpCc1rT4vFwivE/DGFv1gIkh4ndCn9LcgjXjJgPFCJfKwsYiZzqPR3ItGVqpJaz5VctJxyiFkhdWDg2X5bNiI6pa2WKhZpBDGALFNZYDNSGeqs2BiuWMKZVtlLcauM24CMrlt77yGQkCz1XaUc+HT9gj/EeAV5zpYW+5nORLI00Dvxj6LvPO4U/Lzp803YX7jd/mT4e6/D71cJoAy8UhudA407/yb0c1VkEZzzbQTeBNCJAeS3mSn53cNUiOtEfCrqcbLBkA9G3f7RmA2HR4PBAI5Cfzg+Oh6NeBzGYY/xcYsKTY7ZblOZRCowoFH7qmxaLae0BQkrSHSwYmmKnArSTK1FPZHY0DpLiaJOjFkKuElTx8LRwZ2yziZ7NywTLDS5Sd/QcGzirreBaVk0auBtFaOaCDW52n+Nq6Nhi6yNDt9o3Xh3EK3LG0PMj2zNOpIly06tsxysjc7527Sf73ifHOSAqEvxmVFKpipbMVsUf86uLtEGZxYXeSrZ481+dNFlP7r2o2s/uvajaz+6/gejK7oTkmeQmO8xwXF6odB9l1HstS+ypjV+yeVRJlJNRbFGvUlcKcRAMYAtj25DP+IUTVKWoTsNGQqaGzD92NQ+8oy0tZLAxdy4wzWfqVnUU7Vi368H95Vw2tEX4syeBWhZ9CCqFU3Zya1ASoBKzanFvJkB3XZmSOpNuocePGhIOPAqtqrJVBKqsSsssUpAZWFXRVLn4jP6HvhkFwNuJHI7rx4Dd7wps6VEBFcp4WclmuraKZUsVsmlDZ4ORra73mzwdJKz5okJFUWOC0FKm6HoXKjx7E7d/11GMhWJ2bdTShUxWT0xjWUQFhpymxiMP/hUkIFd17kObNhEzq+wxZbVO5IlLxdscKUKo02Vi6qYtqpLtxw6vvR2yBf/l2PMbSsxts2XifHjcY8NWW8Ydvs9v+uHoy4wvOmPj7vRePBHLXEfiEjuFLHJXuNfMJdAVS5RFjyhvqMUHr9fCnebKVemdXiahVslpn7aQXnznIP6l044pvN+79nG+4be81ynoI7kAoWE3PHamOxuf2Wa/tNuKS+NxjZ35/jy71NatuQv52O/ezyOov4IiL/D4bAfjgc+4wOfcx7V+LsJbytex9tQKQks+TnEfZ9ZFTtwnm8/pfbdp9azzLklolgO5jbZHCJBf0DMSXZe/uNOikfMmYjqonuV/Usk38i+/AdE1cNUuxcAAA==',
    },
})
Record({
    $id: Now.ID['7add9fccfb51be105543f4c69eefdcce'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '0464f10d3b8672503c23c4c964e45a18',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '9',
        outputs_assigned: 'status_message,progress_id',
        parent_ui_id: 'b7a7fdb7-091c-4108-9db6-b66eda7385c5',
        ui_id: 'a0562527-3050-483d-9175-dfb874751878',
        values: 'H4sIAAAAAAAA/+1VTY/aMBT8KyufCcqGBBNuSBQJabdbdeleqipy7Gew6sTZ2IGliP/eZxI+REW1qnrooUeP38fMeKLsiGlc1Ti7MBNr1bIk4687ogQZEwpCpJJzmSf3OdyHSRIPZMyHKYAUfBSRHilZAVhpHXONzQqwli0B8TXTjb+YTeYPH6YICGUrzbYv1zhfKS1q8Fu/9UjFahzooCbj3dWV21aQaZaDxvZnV6tyie3v5Xlu9ETvHk9Ebwnw6w54t8jUwrMa9Ai8OSgF4GLJtIUeKVgpmDP19oTUwMRTqc/ASpUOpxFf/GbVDxw9CsPQV0pAiRza29Mx6/xqYb4yisNT5ZQpW8SxXHc93OimKD+2OrzTIFmj3dFpRBqL86DyrD2NjpN8XpnN5+PCmSoPArtLbTjTpxNzaEPeOLD+XRq1uDKnRR6uHwc0FLgxK1hVIZJVtVmrwxYkXfSXGg99qc0G2fnk9Rn3CvvoJuvPEJ8e4BdWKy/3Ecdgs1/3pVSvDcz940d0SGWUDwMZURrEdCSCUcJkQENIaRxzAck92R+szV4bL6o1qbMjax3FAstrVbkJUlhDp3zf674EGf0uYVScg4QalzWmKFPi4jMIf/0Cwr8U/ndQOzZ+6rjdzae3CN+IffQ/9v9Y7GnKw5zSOKD5KA1inkAwSiEKIE/CNGU8HzD2x7HHxKnS/xPa9K07Jt1RAFcWCS88Nr+oE1vMlOKX0MbU373UM7b/CasSsTJxBgAA',
    },
})
Record({
    $id: Now.ID['7edd9fccfb51be105543f4c69eefdcca'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '8864f10d3b8672503c23c4c964e45a11',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        outputs_assigned: 'status_message,http_status,progress_id',
        parent_ui_id: 'f647ab12-e83a-429f-b130-cb3755109adb',
        ui_id: '0fbd5dfb-9a4a-4e91-8ccb-f204699a71a1',
        values: 'H4sIAAAAAAAA/+1WyW7bMBD9lUBny5C1UfItQBA0QNMEjZtLUQhcRjZRaolIOXEN/3uHlrzUqIOk9qGHHPk4y5vHebaWTtWaujV6Ul1qLaelM/6+dKRwxg4BIdKc85xFIwYjL4rCIA95nALkgie+M3BKWgBGakNNq7MCtKZTQHxOVWsvlkseQ0ojEruJ76VuGMfcxTO4gtMQhB/H0cgb/pm/WmEFIXWt6OLx5EJ8JpVowM71Y+DUtEHKBhpnvDy4MosaMkUZKOz3YBpZTjH9rUrsEi2Di9utFMcksu3WeN+oaoRlFQwceDFQCsDGOVUaBk5BS0FN1Sy2SANU3JVqB8xkabCaY4NftPyFpRPP82xkDjgih+52e8x6gTuYzyrJ4a42sio7xFCm+hxeqbYov3Rz2KeBnLbKbJ4GkVZjPagta0uj55Q/zKrnr5uG17JcD9hfqopTtT1RgzKw1oC279LKyYE4HfL58HFAQYEds4LWNSJZ3VRzue6CpIvhVOFhmKvqGdnZ3R5Sbiccopp0eI341Rp+pI20495iGUy27b6V8qmFG/v4PolJ7rPYzX1C3JAkwk0imrvEg5SEIRcQjZzVWtrsqbVDdSL1cmSdohigeSNrc4kU5tBPvhr0XmP+axsWid0izYyps26b3m+0veQTXHZY5RwWe4MAm8RPk8n9xcNGgb/KcsRco7OZK44+3HUWd6UhCRKO7kpFELkhxOAywUcuSXMKLAQWBPxkd+WvLhfZcxfOOG3wNzqT4v3u2ks+wV2HVc7hrjcIsEm879tf3Fwdk+WIu/yPv67/zFwk5R4jJHQJS3DfOK5akoLvAou8NKWcBZT+s7lw42Rpvxy77Zv3TPqjAC41Ep5Y7GYvTixwpyTfh56r5qcddYetfgNVi+jQlwoAAA==',
    },
})
Record({
    $id: Now.ID['badd9fccfb51be105543f4c69eefdcc8'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '7354f10d3b8672503c23c4c964e45a0f',
        connected_to: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        logic_definition: '666e5545c3e232002841b63b12d3ae99',
        order: '6',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'f647ab12-e83a-429f-b130-cb3755109adb',
        values: 'H4sIAAAAAAAA/+1UTW/TQBD9K2HPSWQ7iWlyq0AVSNAiGvUClTXeHScr1rtmd500RPnvnfVHGrVBIIQ4cfO8+Xoz89Z7Zmpf1d4tzaVzcqXZ4sv9kEkdMPreMw0lsgXjRgvppdFsyDag6oDt9zzFOcxep6OLJJqPpmnKR2TjSHCYokjSdBZH47X3VeY8+NodDq++1lE0EUkUUSEhXaVgd/e36vG1VMJiN0QFlrh7tGyxf+byuwozBTkqanvrrdQrSpeCrCKCIp7zmE+SdEJlk4tpnKeTPE7EBBBiiusT35zs5MyaQhOCXF/eWBG4JNGQ4YNHLZD6FaAcDlkJWoA3dscW3tYEWARxo9XuGLGW2lM1FmIfnPyBoVIUhcgCaTCOrfdoZt12W5ivjeR4UzXcGsRDrrocblRd6ut2hHAXLKBWvr8LIbWjelgF0oFGx6m4XZvt577hldTNgJ1TGQ7qaIGnNeS1RxeugQpLKpSVUFW0nKyyZiObZOJSjleKjHGhzJaaBlWOgQfiY9oRjK8If9vAd2BlmOIjlaFkuqDLHLey6mdrmrNDs5Xsex34tPN1k2TtMiigTbukNhvsSB+GL9WfNcDTE7g2fvBuufw0OCvoZ95/IM/knDwHHxrkpUj7aX6i1PgXSu2Q35LqbPZfqadKDTRzcJJnzb+WyoV3/8dSvQ+SbFu4VkMCuXTEZBmw9/3/PDh2dHXJT6Gtsd/CDE/Y4RGmtagUGQYAAA==',
    },
})
Record({
    $id: Now.ID['fadd9fccfb51be105543f4c69eefdcba'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '7754f10d3b8672503c23c4c964e45a0b',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '5',
        outputs_assigned: 'status_message,http_status,progress_id',
        parent_ui_id: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        ui_id: '08d4a2b2-6a38-421b-9c6b-f4790d57ef25',
        values: 'H4sIAAAAAAAA/+1WyW7bMBD9lUBny5C1UfItQBA0QNMEjZtLUQhcRjZRaolIOXEN/3uHlrzUqIOk9qGHHPk4y5vHebaWTtWaujV6Ul1qLaelM/6+dKRwxg4BIdKc85xFIwYjL4rCIA95nALkgie+M3BKWgBGakNNq7MCtKZTQHxOVWsvlkseQ0ojEruJ76VuGMfcxTO4gtMQhB/H0cgb/pm/WmEFIXWt6OLx5EJ8JpVowM71Y+DUtEHKBhpnvDy4MosaMkUZKOz3YBpZTjH9rUrsEi2Di9utFMcksu3WeN+oaoRlFQwceDFQCsDGOVUaBk5BS0FN1Sy2SANU3JVqB8xkabCaY4NftPyFpRPP82xkDjgih+52e8x6gTuYzyrJ4a42sio7xFCm+hxeqbYov3Rz2KeBnLbKbJ4GkVZjPagta0uj55Q/zKrnr5uG17JcD9hfqopTtT1RgzKw1oC279LKyYE4HfL58HFAQYEds4LWNSJZ3VRzue6CpIvhVOFhmKvqGdnZ3R5Sbiccopp0eI341Rp+pI20495iGUy27b6V8qmFG/v4PolJ7rPYzX1C3JAkwk0imrvEg5SEIRcQjZzVWtrsqbVDdSL1cmSdohigeSNrc4kU5tBPvhr0XmP+axsWid0izYyps26b3m+0veQTXHZY5RwWe4MAm8RPk8n9xcNGgb/KcsRco7OZK44+3HUWd6UhCRKO7kpFELkhxOAywUcuSXMKLAQWBPxkd+WvLhfZcxfOOG3wNzqT4v3u2ks+wV2HVc7hrjcIsEm879tf3Fwdk+WIu/yPv67/zFwk5R4jJHQJS3DfOK5akoLvAou8NKWcBZT+s7lw42Rpvxy77Zv3TPqjAC41Ep5Y7GYvTixwpyTfh56r5qcddYetfgNVi+jQlwoAAA==',
    },
})
Record({
    $id: Now.ID['fedd9fccfb51be105543f4c69eefdcb3'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'b354b10d3b8672503c23c4c964e45af1',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['5fedd300fb91be105543f4c69eefdcb6'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '3f54f10d3b8672503c23c4c964e45a08',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '4',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8lYBnWZAlW018CxwELdA2RWPkkgbCiqRsopSo8mFHFfzvXephG42BNmiOvYnD3eHMaii1RDlbO2tW6toYsa7I4vEpIKLyGD63pIKSkwWhqmLCClWRgGxBOo+1LU35FczfpZPLOLqazNKUTnDNJ4zCjLM4TefTKNxYW2fGgnVmv//moihhcRQhDxOmltA8vBEd3QjJNB8s1KBRueWaLNrftgTD05C4QLo5TeI0QYL4cjbN0ySfxiwBPkuRUELOJZYuT7yfGYdtag8Zq0W1HtYfh9b7EVSaeSlxFBD+bHnFOIooQBoekBIqBlbphiysdghoDuyuks2hYiMqi2zE1z4b8ZN7pijylQVHX5T3u4dlNsy2h4sbsIBSHLVOD6V0owTlpp8I4wU4aZenWF9wV3cuuxYLuRy7lXRl9bkfBjkQjK8SEWdQBK+9U699MFLcb9Tu66jyVlTdVIZNqSjIwwoszi531utpCZe8RKKshLrGiWa1VlvRNaOWMlxLXISFVDs81Oc4BOqFhzhYCG8Rv+ngB9DCu/iENNiMWTCZoVrUo7fucLIPiGnMUoIxR4843OyH8wp7x4O3rB+Pb+mIrvHgLR9s7IOXNyjrgOM1er9afbk4eyNOdl4X7iKCYnpFp+fDDcm5cF/0mX0Z8VHva3I+/UPOB+Svgj6f/8/5P+fcy8zBCJp133ak85+aNwz6kw90f+hh2FQY1Lby2Ifxj+I3GkyUoKfQTunv3tUR2/8Cd383GpsGAAA=',
    },
})
Record({
    $id: Now.ID['93edd300fb91be105543f4c69eefdce3'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'c864f10d3b8672503c23c4c964e45a15',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '8',
        ui_id: 'b7a7fdb7-091c-4108-9db6-b66eda7385c5',
        values: 'H4sIAAAAAAAA/+1ZbU/jOBD+K6eIj6WXvnP9huAqcVqodC375YoiJ3aKd904azsFFvHfb/wSN2kAHVzRcVIkFCUz48nMM8+MY/oY8ELlhZJLfiolXWfB9K+bTkAzLYP7xyBDGxJMgyiSCqlCRlHQCbaIFVr4uAq2REjKs1UwXQW9brgKOqsg4Zuckft5/I0kapHckg0CPRjPGL87J/o1RExn56dny4v51WJ5urxeWIOEY2JcXWSKrIlw7jDpHqWUMBylKCFKWuMF1a+5RPlMC82yx9VqFRR0+ZCTLygmTD9O9aX0t9Ie4SIIwhHP2IO3SBGTxOtvaaa8ykutZy+ne04xSVHBVGTgaa5mtYjOdKqlCiUKQIyIEFxEtiLeUIliZ7hBGUaKi5fi5gLbgIyuV1l3HzGSrdWtVw5DfX2CP8B4Q6REa4v9QgmarQ30Tvxv0XceDwq+rPt8E/aXLtsPhr//OvyhL4CuwCu90T1SkPk/Ql/yQiTkAjcReBNApwaQXxam5Q8PU0GvM/qjqMaJhiM8HPcGxxM0Gh0Ph0NyHIejyfHJeIzTOI37CE/2qFDnmJ023iThkQFNjy9vszdySlvCyIZkKtqgPAdORbngW1otJAy07pqBqJtClSJsytS1cHQhU9TdVe8rEhTFpjb5GwaOLdx1E5g9i1oPvK1jeB2hOlcHr3F1PNoja23C10Y33B0l2/LGEPMb2qIuQ9m6W5ksR1ujc/524+cd67UDSQB1Rn8iXZIZFxtkm+KPxfwKbGDPwlTmDD18bbcufWm3rnbrareudutqt67/wdaV3FKGBcmq5zEdM6hyJOBZEQFvDcykM10FFdSCCtlgidtIYNUz3QB63QcwUf3prrlpgkQmguZKN9kWJIYIpRDe+NQxO4vIEPtCs+92SSV8OFoW9Nw61aGBAfVRGdKzRrAUWzel5sxmXsdBPeesmbghTjDtdQJyr0iGCfY5+Mb3Es37OdDeCzRVbSxANEl/whuHobZLCaSXOIT8Y+TQs+L0HJoNWFAkqhCkRIbThEgLjH2Y57o0Vq10MzpLzopNdmVz1oWxI7FSGCc5b1SskBAJyXW2OnyXS7q45Xd/lqHOaGaAcUrGE8T8E1LA3bhQOlBdYfkgzxiSchcNpBz9KPQSG4l7WWQTeXqWNU8dz2XXQm+ks+2oT8ZmWQZVI7MPdZ/Llz7zBhTqGYeN1B2f+wfkc9gy+r2MvtkjcG1ut8O5Hc6fksrtoG0H7adl540rZZhO+miE+qO4N+iHvTAe9wiCm8HkpJdMhr9VSv27pqc7/+3qXfv9wpXcnir2Sj4vheU40nU6UNFPDll0V7WzAxLhsPV2Y6QKdH2weKirJ16Q18+6oH/plGu2mPeeb4OP+JQlmX4BrvxG1mvOQzMx9wfcS18OZQdgPAl7J5MkGYyJ7oDRaDSIJ8MQ4WGIMU4qHbALohGVY37MOSMo26P+EuL6daYz+hj6H3A/PjT5U5f186Ow1P738/DFD8+t47bHJ6H6n9tLLbsof83VigfgBE2qojsuvuvm2cme/gZzi6PLFx4AAA==',
    },
})
Record({
    $id: Now.ID['93edd300fb91be105543f4c69eefdce5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '0464f10d3b8672503c23c4c964e45a18',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '9',
        outputs_assigned: 'status_message,progress_id',
        parent_ui_id: 'b7a7fdb7-091c-4108-9db6-b66eda7385c5',
        ui_id: 'a0562527-3050-483d-9175-dfb874751878',
        values: 'H4sIAAAAAAAA/+1VUU/bMBD+K5OfmyqEhDS8ITqkSjCmwXiZpuhin4uF44TYLnSI/75zk6YViIlJPE17iz/f+b7vuzvliTXetd7Z6+bEWrU07PjHE1OCHbMchSgk57LKDio8iLMsPZQpPyoQpeCzhE2YgRop0jpw3pY1WgtLJHwF2oeLs5PF+ec5AULZVsP65iXOb5UWHYaqPyeshY4edNixY+Jg6MOAPlfmjlJeBb+Xo4YKNYVebUh+uhhJvkXerdse75RZDufz8ZEBbDoRaB5OGD46NAKJjQRtccJqMAJc061HpEMQl0bvgFsS12uq4dGqX1RvFsdxiJRICjn2t+OxHAzsYTkHB0TFc+c73JrTKI6290agBK/d6T7WB1y2TjWmT3FQ6W12o31tvvSOsPGBbb8I8ZZIYBukBu6DEHl12zx827I8U2bjynCpGw56PIEj7yrvAp8n5tX1C5t75JXRqLGmimUNbUtI2XbNSm2qEOl6utR0mErdPBC7ML9T4EHhlFoA0zPC5xv4BjoV5F7QM5Qcyn036t7jIoxRkh/lMqmOIpnkeZTmMxHNMpBRHmORpykXmB2w5wmza3uqwdqdUdSh8t4Hmb1tg0Fl73FI4Z1q3QmRWuHgxfNk2DCZ/Gl6c7EbUlK97GhCSyX21it+vVnxByzVO2htl+rrwOvTYv4W2b9Zp+T/Ov0L65QXPK7yPI3yalZEKc8wmhWYRFhlcVEArw4BPnCdwtya8A/rO7MauI3N48qShOuALfbixJrmVfF96KHp7oL4Hfb8G0VeVrYhBwAA',
    },
})
Record({
    $id: Now.ID['9bedd300fb91be105543f4c69eefdcba'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '7354f10d3b8672503c23c4c964e45a0f',
        connected_to: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        logic_definition: '666e5545c3e232002841b63b12d3ae99',
        order: '6',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'f647ab12-e83a-429f-b130-cb3755109adb',
        values: 'H4sIAAAAAAAA/+1VXW/aMBT9K8zPECUBssJbRVVt0tZOK+rLVkUX2wFrTpz5A5pF/Pde5wNQi7RN43Fv8fG9x+fcHCc1Uc6WzpqlujZGrAsy//Y0JKLwGD7XpICckzmhqmDCClWQIdmCdB6ra5rwGUzfJ6OrOJyNJklCR7jmI0ZhwlmcJNMoDDbWlqmxYJ3Z7999d2E4ZnEYIhETppRQPV6Kj26EZJp3JkrQqN1yTeb1qy3B8LgshCya0YiO42SMBPHVJFol41UUszFwiJBQwopLLF2cuD8zEFuVHjJWi2LdrT91rQ89qDTzUuJwSPiz5QXjKCIDafiQ5FAwsEpXZG61Q0BzYPeFrA4VG1FYZCO+9tmIX9wzhaGvzDj6orzdPSzTbrgtnN2ABZTiqHW6K6UbJSg37UQYz8BJuzjF2oL7snHZtFhYyb5bSZcXd+0wyIGgf5eIOIMieOmdeu2dkexho3Zfe5W3omim0m1KRUEeVmBxditnvZ6acMlzJEpzKEucaFpqtRVNM2rJg7XERZBJtcNDfZIDoF54gIOF4BbxmwZ+BC28i89Ig82YBZMaqkXZe2sOJ/shMZVZSDDm6BGHm/50XmHruPOWtuPxLQ3RNR685Z2N/fDtHUob4HiR7pQdfFguvwzOXotXuxcNeXwu5IM2u2+j3uv+m7xHv8l7h/xR4KfT/3n/57x7mSswgqbNVx7p/CfngoF/8sFuDz0MmwqD2pYe+9j/W/xGhYkS9BTaKf3Duzpi+xe73kdCpQYAAA==',
    },
})
Record({
    $id: Now.ID['9fedd300fb91be105543f4c69eefdce1'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '8864f10d3b8672503c23c4c964e45a11',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        outputs_assigned: 'status_message,http_status,progress_id',
        parent_ui_id: 'f647ab12-e83a-429f-b130-cb3755109adb',
        ui_id: '0fbd5dfb-9a4a-4e91-8ccb-f204699a71a1',
        values: 'H4sIAAAAAAAA/+1WXU/bMBT9KyjPTZWmSdzwhkBoSDDQ6HiZpujGvmktnA9ip6yr+t933aQfg4GoyjRp4q0+vl/n+B6lC6dsTNUYPS5PtJaTwjn+tnCkcI4dhkLEGedZGg5SHHhhGAyzgEcxYib4yHd6TgE5UqQ2YBqd5Kg1TJDwGajGXiwWPMIYQha5I9+L3SCKuEtndAWHAIUfReHA6/+ev1xSBSF1pWB+d3AhPpVK1Gh5fe85FdQ0ssHaOSaWBf0oQF3K4p56PAt+qwoKUlQUervqfnS1keElecy8avFaFpPufLkp0oFlLeyYw56DPwwWAmmaDJTGnpNDIcCU9XyD1AjiulBbYErkWk45/NDyJ/UbeZ5nIzMkhhzb280x6RRv4ewMDNAoDTdNjWtxSslRt9oIzKBR5nQXawOuKyPLok0xkKp1dqmavPjcKuJsCqwfmJBG0xBYWap29o5IdjstH7+spzyXxUqV7lKVHNTmBIa0Sxtj51k4jRw/kblFngmNCnPqmORQVYQkVV3O5KoLDZ33J4oO/UyVjzSddUgfuGXYpyeA/jnhZyv4Dmpp6V5RGUq27b4W8qHBC7tGPotY5qeRm/mMuQEbCXcUQuYyD2MWBFxgOHCWPUfP9akCrbdC0QslD42l2crWCZS0GtsUXsvKnNBQM+y0WPY6D6f+a9sbiu2STo2pknZT9zfwTvIB7n1a5VDrvoH82rqfxuObo9s1+z9Kso9pB+9m2ij8cO2/c20csOGIk2tjMQzdACN0U8EHLoszwDTAdDjkf8G12auLy3ZcS6wnNX1XEin2d+1O8gGufVrlUNe+gfzatTdd66OLs5ck2ce1/sen9n8wLYu5lzIWuCwd0dZyWthRjL6LaejFMfB0CPCOprV7W9h/0O3LzLrZNo/HpSYKY4td7MSJOe2r5LvQY1nfW/JbbPkLvW0WiZ8LAAA=',
    },
})
Record({
    $id: Now.ID['d3edd300fb91be105543f4c69eefdcb5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'f354b10d3b8672503c23c4c964e45af7',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        flow_variables_assigned: 'batch_manifest',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'f6059c89-6d01-4263-9ab5-782f5212e37e',
        values: 'H4sIAAAAAAAA/+1XUW/aMBD+K5GfQFAUWhgtfepaVaq0rdLa9aWpImNfwKpjp7YDZYj/vnOcAOvY1GlPk8hL8Hfnu+8+38ViRXTpitLZe31hrZgqMn586hKhPIa/V0RwMiYAnA8zxrLJsD+BfjwcDk6yAftwBpBxNpyQLlE0B/ScUMdmaU6VyMA6xOdUlt6AP7mwhaTLhy3CZkJyA3XWghoM4sCQ8eqN6b0sJJ2A3Efjd/TcsvC4dUaoab3+VAe5a0BtuCfV7xJ4daA4IJuMSgtdgqE4ddosN4gBym+V3AIzoVwoN6evVnzHfKdxHHvPDLBCVouxWaa1UAHOrqijSKVkrjQb3bRgYIM2HDJaSne5iwWH28IJrcIWRyey2a1lmasvQRGyCbBzLqVFElD4Uj33upDsbqYXXxuW10JVqtRGqRmVmxV1qN2kdJ7PipTi/o3MAflFaJCQY0Y8oKJAJC2MnosqC5LOe1OJi14m9QLZ+W7tUeYr7OER0N414lcV/ECN8OV+xjC42af7psRLCTe+jUYxpRmHs6OYDUZHg9MBHFE+iY+ywekJY/EIjj/EZN0ldmkvJbV2KxSeUPpS+jKDbLVAadDYb2FGFO4CSc1xC54ZNJiX4U3zIfInf5wcExV0KTXlUVLG8Ul4HY9WSdXOCRlHCWqnDUQXRRF99OGjG2UdlRJMQrpoVhrPIHjWFtQ1onMqpFcIE+AmsFFmdB65GURVvLC3oOyZTsP2x5D6PFGeltS6aDjFiC1wWKGV8bQ6iLSfpujxnJZFaoDh9Nhe81Y4Qa12O3GJWiUqwkdkLR+u0wkBIYrbwVDb/dPI0PlJh+6Gk/dZh9d+V5RM8CBDAKJO9B66Uwhj0Qq7rC4Nzie2VYrhKqgddeocQTT/AQmJ0EsKRn2DVqZdsvtZJsSD2Nu5rqj5OGGgMJwBbGDrgKdzMLYK+q/lNIH2FfIetjvN9bc0rnbugtZu6vUmMx7o/sRPWx8D+FFUDcFzsl6vn/ydE+b/cIMdbrDDDXa4wQ432OEG+79uMA5M+MLufYvfNP/GvGGJgyPYLrTQ5tl/UbbY+gd18xa91w0AAA==',
    },
})
Record({
    $id: Now.ID['dbedd300fb91be105543f4c69eefdcb3'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: 'b354b10d3b8672503c23c4c964e45af1',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        logic_definition: 'e9060aa2c3013010ace8b740ad40dd51',
        order: '0',
        ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        values: 'H4sIAAAAAAAA/6tWyi8tKSgtKQ7JdywuzkzPU7KKjtVRyswDiUHYZYlFmYlJOalQbkpqcmZxZn5eCEjME0ldSmVeYm5mMrJQeX5RdlpOfjlCrBYAD1ouqHEAAAA=',
    },
})
Record({
    $id: Now.ID['dbedd300fb91be105543f4c69eefdcb8'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '7754f10d3b8672503c23c4c964e45a0b',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '5',
        outputs_assigned: 'status_message,http_status,progress_id',
        parent_ui_id: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        ui_id: '08d4a2b2-6a38-421b-9c6b-f4790d57ef25',
        values: 'H4sIAAAAAAAA/+1WXU/bMBT9KyjPTZWmSdzwhkBoSDDQ6HiZpujGvmktnA9ip6yr+t933aQfg4GoyjRp4q0+vl/n+B6lC6dsTNUYPS5PtJaTwjn+tnCkcI4dhkLEGedZGg5SHHhhGAyzgEcxYib4yHd6TgE5UqQ2YBqd5Kg1TJDwGajGXiwWPMIYQha5I9+L3SCKuEtndAWHAIUfReHA6/+ev1xSBSF1pWB+d3AhPpVK1Gh5fe85FdQ0ssHaOSaWBf0oQF3K4p56PAt+qwoKUlQUervqfnS1keElecy8avFaFpPufLkp0oFlLeyYw56DPwwWAmmaDJTGnpNDIcCU9XyD1AjiulBbYErkWk45/NDyJ/UbeZ5nIzMkhhzb280x6RRv4ewMDNAoDTdNjWtxSslRt9oIzKBR5nQXawOuKyPLok0xkKp1dqmavPjcKuJsCqwfmJBG0xBYWap29o5IdjstH7+spzyXxUqV7lKVHNTmBIa0Sxtj51k4jRw/kblFngmNCnPqmORQVYQkVV3O5KoLDZ33J4oO/UyVjzSddUgfuGXYpyeA/jnhZyv4Dmpp6V5RGUq27b4W8qHBC7tGPotY5qeRm/mMuQEbCXcUQuYyD2MWBFxgOHCWPUfP9akCrbdC0QslD42l2crWCZS0GtsUXsvKnNBQM+y0WPY6D6f+a9sbiu2STo2pknZT9zfwTvIB7n1a5VDrvoH82rqfxuObo9s1+z9Kso9pB+9m2ij8cO2/c20csOGIk2tjMQzdACN0U8EHLoszwDTAdDjkf8G12auLy3ZcS6wnNX1XEin2d+1O8gGufVrlUNe+gfzatTdd66OLs5ck2ce1/sen9n8wLYu5lzIWuCwd0dZyWthRjL6LaejFMfB0CPCOprV7W9h/0O3LzLrZNo/HpSYKY4td7MSJOe2r5LvQY1nfW/JbbPkLvW0WiZ8LAAA=',
    },
})
Record({
    $id: Now.ID['27ed1700fb91be105543f4c69eefdc2d'],
    table: 'sys_flow_subflow_plan',
    data: {
        plan: 'com.snc.process_flow.engine.ProcessPlan@6ff21d05',
        plan_id: 'aadd1bccfb51be105543f4c69eefdc1a',
        snapshot: '0fedd300fb91be105543f4c69eefdc4c',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
Record({
    $id: Now.ID['62dd1bccfb51be105543f4c69eefdc1c'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: 'aadd1bccfb51be105543f4c69eefdc1a',
        name: 'Process Plugin Updates V2',
    },
})
Record({
    $id: Now.ID['cfedd300fb91be105543f4c69eefdc4d'],
    table: 'sys_flow_cat_variable_model',
    data: {
        id: '0fedd300fb91be105543f4c69eefdc4c',
        name: 'Process Plugin Updates V2',
    },
})
Record({
    $id: Now.ID['66dd9fccfb51be105543f4c69eefdc39'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=2f87da3c-f077-4108-9df1-821a45ea18dc',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'apps',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Applications',
        mandatory: 'true',
        max_length: '8000',
        model: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_id: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_input_aadd1bccfb51be105543f4c69eefdc1a',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['4fedd300fb91be105543f4c69eefdc4f'],
    table: 'sys_hub_flow_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=2f87da3c-f077-4108-9df1-821a45ea18dc',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'apps',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Applications',
        mandatory: 'true',
        max_length: '8000',
        model: '0fedd300fb91be105543f4c69eefdc4c',
        model_id: '0fedd300fb91be105543f4c69eefdc4c',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_input_0fedd300fb91be105543f4c69eefdc4c',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['b6dd9fccfb51be105543f4c69eefdcd0'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '43400a1587003300663ca1bb36cb0b4b',
        action_type_parent: 'd1c56ec50b30030085c083eb37673a50',
        compiled_snapshot: '43400a1587003300663ca1bb36cb0b4b',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        order: '1',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'b276c5b2-8a5b-4fb8-bf69-c3b2f5eb7eb8',
        values: 'H4sIAAAAAAAA/9VXTU/jMBD9K1XOUZU20BZuCITEAZBgxQUhy7Gd1lrXydpOS6n633ccOyGkpZRudxekXjyfb8ZvJu7jMuA0OA3iUTRkLDqJkjiK4Dc6JtEoZkk8HAxjHI2CMJB4ysDS4EQwOM6wKOxZLzTCeY5mTGmeSdBQrnOBFw/e4CzPBSfYgLLzUBuRCRdUMRmcPj6FQY4VRDdMBafLlsoscoYETpiAWD9s8s6NRRLuDPyN83ohNkF1RNKFzhS1WKIwYM+GScogVYqFZmEwxZJik6lFLVEM01spXgUTLg1EDKzxs+YvEH4UWbuUQVmEOV19RL5hTkwmGSfsNrf9chIH1CkzUUzljSvAtpqluBCmajVICg3xWG4xWxAeUXo/yeZ3VcJLLsvyvFJkBIv6hI1RPCkM0/YumGBTCISmcMVcjlGushkvnQHLtDsWcOimIptDUs3HsouJBd6FFuHuJcgvSvEDVtxWcQ1hwBkAcQG3jVzTdVaosiszREShS4XCUrtYwarsFfpVWJSual8fci0CA00Uz80ZOMyYL2UVem5Hx9so0m9QgmSScptTtwjO6dXNcqmLxJbahSL0arXO9C2W+9H9vIln11o2Om8q0BP/jcwTv3cw4h9F0X+ivlHF12P+R1zmMi+M7rq6P+D1MY7T9IT2RkOgAnBhMIgJ7iVJPCBJlNDGztaZMsg1sEFsv+taJPbS/Qh7yZmgb/bzDiAr51vLvU6yeA+352tqc7QWdf/bL+ovyVYARJHrN5eCy/I7CUAPS+PBNoawNo1LFjS2s5VhTdaJjDsm67zsv3vL661p/DHIyvEeEHV+OJQbgFdbtwrvGRwfjMFx/3MMBv48Lmv0ddc2NLh6Fdmrq+xfrD1u2wPJGg691VM9Aef75ex9Nmff5myNaPypGW0yy2ku3iHYgd9c78xc+DeHfAKuPh9yw4rmnI6Zec1eWdHMzLH4uUnv2VXPUFneH7/fCN325olPXucMZgAppuGqmg+4HjxB1tdDL3Ti/bbDlTRsXDZvV4iV5zV+7tzVGDcC9yuC1zk8p48O+Cr7F1+5qvEbp6fq/7f4w7IvhZ9+A0PqEkBgDwAA',
    },
})
Record({
    $id: Now.ID['fadd9fccfb51be105543f4c69eefdcd3'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '89f446ebc3031010ca199a038a40dd7b',
        action_type_parent: '468535e3c3031010ca199a038a40dd3d',
        compiled_snapshot: '89f446ebc3031010ca199a038a40dd7b',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        order: '3',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'c6e9a576-8209-466c-9a5e-dca4ed266510',
        values: 'H4sIAAAAAAAA/+2W227bOBCGX8XQ1RawFJ1l+S6bokCKbhM029x0C4GkhjYLmlJJyok38Lvv6GDl7AZpkEWBXhkaDjnzz8xH+suVI0pn7uQRpTQhGYv8KPADn5Egz4kfzUjsl2U5c6aOIitAT6ahBGUFkQWRghhcWRPZtEtpmFEIIeI0zmka+EkSRzxmaQ7AS0YoupbC1JJszocdl4VRrDC20lA0dUmKwDuVzUKo4uj46G1x2NglbmJLIUsNypl/+Tp1aqIxEwvamV/dWbKbGgpJKEg8+xNwwBUGeMJTNe72Ho0iJ4eDyMflt1FxRd+IV+myzS+cOnBpQZWA8TmRBqbOiqiSoOCNM7e6QYMGUp4ouRk9lkJZPM9pfS+N+BcPj8LpjfPnjtmYMfxoL4bitvlXSgGzolKTfxrfD9PJXUVgusJWgsFJ3Tr2ES2h8m4AVslmpT72+tseAieNtLseoqUxGBzqVmib+qCDny2ri7EL74TqajIsyooROX4Ra7WgjcWssKmN+Pt+SXvjhweaCxJWGLdYkboWalHUulqLLhamvvIWEj88LqsLzNGIhfJIVxkP20C8d2h/25nPiRat+r/wGNzcRvysxPcGjrvhmYVBSgPmlhkL3DiD1M1j8N2Q8pLzJGBpFjrbrhvF96aV1pdqKErRFxgdDNOitoeYwhoG/dvpjsJs34SCfz2GQhlL2p43Wt4gcGltbeYHB6DXRHkGf7C/rqouPKzEwX3+fuj/PPTOsJtqMXL3Y1W7jceDrMnnTx8eFTvwZnZBBtiil4Jt5vv+bdweoWwvQf8rOGNtblMz9uVVkEkI5TnLqJuzmLhxHMYuCaLYzXNK8tCPeEDZM5DpG9nbWtG3pgO/93k7Ew220WqyMN4C7KmuMG+7+aO7JLNedkuBBOs1WvTmN852OyKaZDPUkAU+j6MQhxnCLGF4MZQ8S/FS4NdTS2pRrEGbdjKuCb3P4AtR9oTEdhsPT48n52NmD6b7CGPxfsYGy2/IXg+yMk/KDF8fN0iBuzEn1KU+z91ZRmKeRMGs5NFPv0vB3hu8e4SHKaLEsmWBrbs581dXncr1IMTrnXBuBAdjt9v7TDxhx/OYeX928nFHzBNU7bb92cafnPayHpI68PLNdPQMtAQv9SLFvz4sQ2VuozJ041VASZM4j4OcuEmOf3HiMERG0ix1SeYHfJbk+CrNng3K1/8AeuZX7kgNAAA=',
    },
})
Record({
    $id: Now.ID['17edd300fb91be105543f4c69eefdce9'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '89f446ebc3031010ca199a038a40dd7b',
        action_type_parent: '468535e3c3031010ca199a038a40dd3d',
        compiled_snapshot: '89f446ebc3031010ca199a038a40dd7b',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        order: '3',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'c6e9a576-8209-466c-9a5e-dca4ed266510',
        values: 'H4sIAAAAAAAA/+2W227jNhCGX8XQVRewFB2ok+/SBAFSbDfBppub7UIYUqTNgqa0FOXENfzuHVmK4py8DZAGBdorQcMhOf/P+UR93TiydGZOHlFKY0hZ5EeBH/gMgjwHP8qA+GVZZs7U0bDkmMkML7m2ElQBSkKDIytQbTeUhCnlIY8EJTlNAj+OSSQIS3LORcmAYmopm1rB+nqYcVs0mhWNrQwv2rqEIvAuVTuXujg5Pzktjlu7wElsIVVpuHZmX79NnRoMVmK5cWabR0M7KX4pCEk4fV5KFuKCCihXmHoyapkcD1peVmnXdTdiuOC4IeND6OOw1ue9eGXKrrxw6vBby3XJsS4BquFTZwm6BNS7dmbWtBgwHMoLrdZjxkJqi+s5Xe5tI//ETaNwurfvzGnWzVjWGC8GbztdldacWVnpye+t74fJ5LFS3k0Vp2DhCstgtjW835MtKslwdOdnyQW0yp7sx/qEi7pbvZ9igarHVbFKtUv9qTfTGVe6O3eMtA1WzOvOnU7vIF5cLaqb0cozqXdGDoOqYqD2UjkYtjiTXHXHjmc/dcBaI2lru2I3Tit/e3pmffC5U+OKL7GWYgl1LfW8qE21krv9Uc7Smyt88YSqbrDuRs61BzuLPTxP8M4wfroLX4ORnSO/4jI4udvxi5bfW36+Ay0Lg4QGzC1TFrgk5YmbE+67IRWlEHHAkjR0ttPOzBMFTXNvIYoovredAb2hg3VFfwzdFGZkbY+xqBUfXNpO7/hOD/HN/fvOl7qx0LVTa9Qe2wtr62Z2dMTNCrTX4AO7wNXVjYfeHD0l+4f5r4Q6Pwg17EF9PgiYfPn88UVZA8wNtouePyL56i44YBy9FcaZ7/sPQX6B37dn832QfAG/0eWH7I0+vwt4MVCRs5S6OSPgEhISF4KIuHlOIQ/9SASUvQl4fT/0sc6GB52H74eynYnheN56Mm+8ObeXpkIldv3T7iue9kZ0LCluvdbIPvzB2W5H0OM0Q1Vp4AsShQgKD9OY4QenFGmCHxtxTwTUslhx03S9cs/5U5JfzSrN8oC+WAKN91g9vjyfXI81PFvYa0glh0kdIv+j+i9HtczjMsWb0A0SLlwigLrUF7mbpUBEHAVZKaJ/4I4MDt6Ru1+EoUMpWLYosAP2ydlsdrpXgzSvT8L2k4I3drt9StbfmPE68sjBX9+U7ZH3c7fX5LKX8Jysgbs/mpHCu2b45eri0z1zwVvdjuQ/itzg8EPgBo/fBbckJjkJcnDjHH/RSBgiaUmauJD6gcjiHG/I7A1x+/YXOqLPxXQOAAA=',
    },
})
Record({
    $id: Now.ID['5fedd300fb91be105543f4c69eefdce6'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '43400a1587003300663ca1bb36cb0b4b',
        action_type_parent: 'd1c56ec50b30030085c083eb37673a50',
        compiled_snapshot: '43400a1587003300663ca1bb36cb0b4b',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        order: '1',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'b276c5b2-8a5b-4fb8-bf69-c3b2f5eb7eb8',
        values: 'H4sIAAAAAAAA/+VX22rjMBD9leBnE+w4176VlkKhF2hLX8oiZElOxCq2V5KTpiH/viNLdozjZgmk0LKQF8+MpDMz54yUt63HqXfhRdNgwlgwC+IoCOA3HZFgGrE4mownEQ6mnu+leMkgUuNYMPhcYVGYb7VRCOc5WjGpeJaCh3KVC7x5dQGXeS44wRqcvdc6iCy4oJKl3sXbL9/LsYTdNZPexbblKuFNk2EQ4HA0nQA6gDceRwSHcRyNSRzEwxg2FDhmAkJfHL4WXL3J609U+qztrrms92AdmaQGSuB77F2zlDLAkGChmO8tcUqxzuSmtkiG6WMq9oYFTzXs6Jngd8U/4NxpYOISBlkRZn31J3L1subkGmv8rGVBdCFdKFlknDBl60FZgguhr5o2G/CYmxrbJTZtuzoTxTJ9sOXw6g2q9oClUACC5SZRg9ylkTwvsvVThfKGp2VNnFNkBIv6C2steVxog2frMcGWsBFaAi14Oke5zFa8XAxYlv25gI9+IrI1HKr4PO1jYoD3oa64fwP269L8iiU3WdzDNrAYAHEBDEG2hSorZFnKFSKiUKVD4lTZvbydb4h5JbBS+8yh5OhPYXDbOriMkS2aWUIkz/UlbLFiLrmd7xQSjI4pZNCgHMlSyg0K1ZIJp7cP260qYpN8H9JSu92hXo5EnlM0o6Ahmqsm5K40nHwObHddGzj5hGeTD+TxkwQEh38//ZyuCFuCf8hihKMkmdGwm2S0cXGoTGpka9nQhRvFLQ0462l8J5OjfB81+P5oGNqLN5+hc3RPOBO067a4MY7WbTH4P2+Lb0l2AESR7R5PBU/Lqx+AfpkKxsdUwNoqKOnVuBuMDStyqAPc01nv42QlBMcn/6yhhGc4u/di8XRArOZ+SZn2zK+MTgDR2QQQDc4jgG2dZl3IjppXrz3TzSr+w8TjdjxQsLEg3HUJ7KQzw1PPHOwOBRydpOAm2azn+hPOnflZ+Iki/a8cAQtY6s5DVr9ozemc6f3pVRTN9BqL311+xzhUNapM7wuemIQee2JGs71EQSlIMgXNa74xQ3gmHc6Q0Lfm00bI8OgIGYeNEXKP33tPNZhOhG6MgNLZvOxNc47c1lZH8uEZH47f9iatmtWpwapnP+Kf2fmE8OsvMEDlaI8QAAA=',
    },
})
Record({
    $id: Now.ID['eedd5fccfb51be105543f4c69eefdc5b'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=70aafde9-0c47-484e-adb0-f483cc07e260',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'batch_manifest',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'batch_manifest',
        mandatory: 'false',
        max_length: '8000',
        model: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_id: 'aadd1bccfb51be105543f4c69eefdc1a',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_variable_aadd1bccfb51be105543f4c69eefdc1a',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['d7edd300fb91be105543f4c69eefdc91'],
    table: 'sys_hub_flow_variable',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=70aafde9-0c47-484e-adb0-f483cc07e260',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'batch_manifest',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'batch_manifest',
        mandatory: 'false',
        max_length: '8000',
        model: '0fedd300fb91be105543f4c69eefdc4c',
        model_id: '0fedd300fb91be105543f4c69eefdc4c',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_variable_0fedd300fb91be105543f4c69eefdc4c',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['0fedd300fb91be105543f4c69eefdc4c'],
    table: 'sys_hub_flow_snapshot',
    data: {
        access: 'public',
        active: 'true',
        attributes:
            'browserActivatedIn=chrome,integrationActivatedIn=standalone,labelCacheCleanUpExecuted=true,timeFromCreateToActivate=97234000,viewActivatedIn=naturalLanguage',
        authored_on_release_version: '28100',
        callable_by_client_api: 'false',
        copied_from: 'fc2cbc1bfb0d72105543f4c69eefdca0',
        description: 'Plugin Updater',
        flow_priority: 'MEDIUM',
        internal_name: 'process_plugin_updates_v2',
        label_cache:
            '[{"name":"subflow.apps","label":"Input➛Applications","type":"string","base_type":"string","usedInstances":{"b276c5b2-8a5b-4fb8-bf69-c3b2f5eb7eb8":["conditions"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"2f87da3c-f077-4108-9df1-821a45ea18dc"}},{"name":"c6e9a576-8209-466c-9a5e-dca4ed266510.progress_id","label":"3 - Batch Install➛Progress ID","reference_display":"Progress ID","type":"string","base_type":"string","usedInstances":{},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"93f6a70e-6c6b-4246-8d9a-b5bb1b1dee5d"}},{"name":"c6e9a576-8209-466c-9a5e-dca4ed266510.http_status","label":"3 - Batch Install➛HTTP Status","reference_display":"HTTP Status","type":"string","base_type":"string","usedInstances":{},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"87747bb3-3e9b-44e4-b858-8809483dc7cd"}},{"name":"c6e9a576-8209-466c-9a5e-dca4ed266510.status_message","label":"3 - Batch Install➛Status Message","reference_display":"Status Message","type":"string","base_type":"string","usedInstances":{},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"565282e5-1ee6-4b04-9a6b-7a6d47a4da5b"}},{"name":"flow_variable.batch_manifest","label":"Flow Variables➛Batch Manifest","type":"string","base_type":"string","usedInstances":{"c6e9a576-8209-466c-9a5e-dca4ed266510":["batch_plan"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"70aafde9-0c47-484e-adb0-f483cc07e260"}}]',
        master: 'true',
        name: 'Process Plugin Updates V2',
        parent_flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        run_as: 'user',
        sc_callable: 'false',
        status: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        type: 'subflow',
        version: '2',
    },
})
