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
        block: '084f0459fbfd3210cbc0ff3f45efdc1a',
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
        block: '444f0459fbfd3210cbc0ff3f45efdc2d',
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
        block: '504f0459fbfd3210cbc0ff3f45efdc47',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '8',
        ui_id: 'b7a7fdb7-091c-4108-9db6-b66eda7385c5',
        values: 'H4sIAAAAAAAA/+1YUW+jOBD+KyfUxzYHCSS9vFXtRerp2kiXtC9HhQweEu85mAWTthvlv98YGwKk7W53s5VOFymKYGYYj+f7ZsawsUQh00Lmc3GR52yRWOO/H04tligZXm+shKzAGltBkEsiizwIrFNrTXihhBvfWkOWM5H41ti3nJ7tW6e+FYlVyuFpGn6CSKJmo0QU9NVJtK4uyoc+kTXpcZIsejOZsWRRejhZlzrf2m7xbgV5Thbf+fy2G9AsWsKKaB8TLh6vQO0bsvHk6uJyfj29nc0v5nezVty+dZ1IWEBm9kehdxIz4DSISQQy18Yzppa5IelECcvHNr7vWwWbP6fwJwmBq9ux+qv8+coj/mVAaCAS/lxbxITnUOuXLJG1qpZqz7WcdZxSiEnBZVDitf80b0V0qbZaqUgkEdUAskxkgaZIbSizYme4IgklUmSvxS0yqgMqdU7juaeAQ7KQy1rp2up/i78W5pjXHbBG/KPZNx4Pmvy87fNdub8xu/3J6e+/nX67BkAh8EZt9E4k7vybsp+LIovgmu5n4F0JuigT8sus7EGHT1PB7hL2uWjGSVyPukNncDYinnfmui6chbY3OjsfDmkcxmGf0FGHCm2OmfZXmUQiKJOm+mlt02k5lS1wWEEigxVJU+RUkGZizZpAYkPrLTiKejGiFNASpp5ORw93Sno79O5JxkhYYpO+o+Fo4O72E9OxaNXA+ypGtDPU5urgLa4OvQ5Zc8BNcvaFqAxMRLYimoN/zKa3aIIzi7I85eT5/ji6jqPrOLqOo+s4uo6j6z8yuqIl4zSDpHwfYxSnFwrNe5lq6I03srY1vsnlUcZSqTi4Rn2Zp0qI5McA9jyaPvUjTtEkJRm6k5ChoL2Bsv2VpYawKm2DgbiYmS645gslgnpVHNhmm8F9JZxu9AW70mcBtSx6YPWKJcv5XiBVgirNpc55GwHZdVZywho7pxY8SUgo0Dq2uqZriaL0FBldCxQL9arIoZx9Qd+urexiwI1EZuf1bWCONxVagkUwTVX+tESqMjJKwYtVcquDVwcj3czud/k0kqv2iQkVRY4LQao2o6IzocazpXj8q4pkwpJy30bJRUR4fUckTpqwkJBrYDD+4HOhDPS6xnWgw1bk/Apb9DT8QLLk1YItrtRhdKlyUxfTXnXJjkPDl/4B+WL/7xjz0AFGT7IKGDse9YlH+l7oDPq2Y4dDBwheDEbnTjRyf2sA97sikhnaO/RaX8EMgKJaoip4lfUDQXj+cRAeFilTps30tAu3BqZ5uEB5+1iB+tcOFGXn/d6jhPUNveelTqE6kgkUEuWONsaks/+WWfafbkt5bTR2uTvHh3+dqGUr/lI6sp3zURQNhqD463neIBy5NqGuTSmNGvzdhbcXr+FtKAQHkvwc4n7MrIpNcl5uP5X2w6fWi8x5UETRHMw12BQipj5AzJXsuvrirhTPiBmLmqJHkf2jSL6Tbf8FS3ewrrsXAAA=',
    },
})
Record({
    $id: Now.ID['7add9fccfb51be105543f4c69eefdcce'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '184f0459fbfd3210cbc0ff3f45efdc49',
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
        block: '8c4f0459fbfd3210cbc0ff3f45efdc42',
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
        block: '004f0459fbfd3210cbc0ff3f45efdc34',
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
        block: '804f0459fbfd3210cbc0ff3f45efdc30',
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
        block: '404f0459fbfd3210cbc0ff3f45efdc15',
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
        block: '444f0459fbfd3210cbc0ff3f45efdc2d',
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
        block: '504f0459fbfd3210cbc0ff3f45efdc47',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        logic_definition: '35d60003e6022010a5e40cdd1254dd23',
        order: '8',
        ui_id: 'b7a7fdb7-091c-4108-9db6-b66eda7385c5',
        values: 'H4sIAAAAAAAA/+1Z227jNhD9lULIo+PK99RvQVIDKTYxUDv7UgUCJVIOd2lJS1JOvIb/vUORonVxgiZ10BQQEBjSDEnNnHM4I0Y7J8lkmkmxTC6FoKvYmf710HForGxwvXNitCbO1PF9IZHMhO87HWeDWKaMO8/ZEC5oEnvO1HN6XddzOp4TJuuUked58I2EEjw7ZcJEX52Fm+Iin/QNbVCXoXjVXUhO41W+wtkm93nOfg93ayIEWr1z/r4e0CJ8JGuk15ix5OmaqLwJn86uL6+WN/O7xfJyeb+oxO05N7EkK8JNfph0zyJKGPYjFBIp9OAFVY+5RelMGfNpO8/znIwutyn5ggLC1O1U/RTreWpF+OEEYT+J2daOiBATxPofaSyty1r1ytZOa4tiEqGMST/nqzmbVSK6UqkWLhRKYNUnnCfc1xKxAyXPDgPXKMZIJvyluBOOdUC5r1ea9+wzEq/ko3UOXfW7h78K54DrgVhj/rfomxVPCr6orvkm7G9Nth8Mf/91+F1LgGLglb3RPZOQ+T9CXyQZD8kNbiLwJoAuc0B+WeQ16PQwZfQ+pj+ycpxoOMLDcW9wPkGj0flwOCTngTuanF+MxzgKoqCP8KQmharGTPkrhoSJn4Om6qkdUys5xVjCyJrE0l+jNAVN+SlPNrRMJBS07oqBqRsBSz7OaepqOLqQKeoe2PuKOEVBzk36hoKjibtvAlMbUdkDb9sxSRWhqlYHr2l1PKqJVRBIktGfSCEwS/gaaQ3+sZjfwRDoWZiKlKHt17Z1ta2rbV1t62pbV9u6/ietK3ykDHMSl89jqpCDK0Uc7iXhoGQnLyy5iAEwZShxC1NM3YZZR8QHfiU7KGD2dNdsmmARIaepVJregCXHvTDCE/edvJDzGLEvNP6up5TCh6NlRq/1oio0GEBtVLnGWCNYivUyhedKZ17FQR5brJl4zpMz7XUc8ixJjAm2Odh9Zi1KZnNQmTUoZehYgFdBf8ITh64aFxFILzQI2VvfoKfN0TVoG4p3FsqMkwKZhIZEaGD0zTxV1Gi3VNo3IxOWreM7nbMiRlegEjHGct1gLBMQCUlVtip8k0u0eEye/ixCndE4B8Y4WRIiZu+QhPYQZFIFqhgWW3HFkBCHaCBl/0empuhIzMN8ncj+qGr2Hatl0xnfKGfdCD+ZmkURVEXMNtS6lm9t5g0o5JEFG6kbPfdPqGe3VfR7Ff1QE3ClbrfFuS3On1LKbaFtC+2nVeeDodKNJn00Qv1R0Bv03Z4bjHsEwcVgctELJ8PfSlT/ruRpjlsHvivfLwzl+iW+Rvm8MBblSPF0ItIvTkm6Ye3qhEI4Ld+mjJSBrhYWC3X5gAn26tES/C8dKvMW897jpPMRr7IkVg/ApW9kvWY9zCtmvcC99OZQ7ACMJ27vYhKGgzFRO2A0Gg2CydBFeOhijMPSDjgE0YjKKD9IEkZQXJP+EuL6daYy+hj5n7Afn1r8kcn6eCksvP99PXzxxXNjtG3xCan65/ZS2W6Kr7nKsQVN0LBsekr4d7V5Drb93y3KjEAXHgAA',
    },
})
Record({
    $id: Now.ID['93edd300fb91be105543f4c69eefdce5'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '184f0459fbfd3210cbc0ff3f45efdc49',
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
        block: '004f0459fbfd3210cbc0ff3f45efdc34',
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
        block: '8c4f0459fbfd3210cbc0ff3f45efdc42',
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
        block: '084f0459fbfd3210cbc0ff3f45efdc1a',
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
        block: '404f0459fbfd3210cbc0ff3f45efdc15',
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
        block: '804f0459fbfd3210cbc0ff3f45efdc30',
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
        plan: '{"type":"PlanProxy","persistor":{"@class":".ChunkingPlanPersistor","table":"sys_flow_subflow_plan","id":"27ed1700fb91be105543f4c69eefdc2d","name":"plan","plan_signature":null}}',
        plan_id: 'aadd1bccfb51be105543f4c69eefdc1a',
        snapshot: 'fa8fc899fbfd3210cbc0ff3f45efdcf3',
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
        action_type: 'd1c56ec50b30030085c083eb37673a50',
        action_type_parent: 'd1c56ec50b30030085c083eb37673a50',
        compiled_snapshot: '43400a1587003300663ca1bb36cb0b4b',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        order: '1',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'b276c5b2-8a5b-4fb8-bf69-c3b2f5eb7eb8',
        values: 'H4sIAAAAAAAA/9VXTU/jMBD9K1HOUZWQUlhuCITEAZAAcUHIchKntdZ1srbTUqr+9x3HdtqmoZRudxeOns834zcT53nu08w/80/zfhji6Pj0JAzjOAwHgzjFUZLEgzQJk37iBz7HYwKWCieMwHGCWaXPciYRLks0IULSgoMmo7JkePZkDc7LktEUK1B6T41ROqIsE4T7Z88vgV9iAdEVEf7ZvKVSs5IghhPCINajTu7daiTBzsDXnDcL0QncEXETuhCZxhIGPnlVhGcEUuWYSRL4Y8wzrAoxaySC4OyOs6VgRLmCiL42fpX0DcKfhtouJ1BWSoyuOSLbMCNORwVNyV2p+2UkBqhRFqwa81tTgG41yXHFlGs1SCoJ8UipMWsQFlH+MCqm9y7hFeV1eVbJihSz5oSVEjSpFJH6LggjYwiExnDFlA9RKYoJrZ0By7g3ZHDo5ayYQlJJh7yHUw28By3CvSuQX9biJyyoruIGwoAzAKIMbhuZpsuiEnVXJihllawVAnNpYvmLulfoV6VRmqptfci0CAxkKmipzsFhQmwpi2Anbh+HS0qkBc+ozilbBKfZ9e18LqtEl9qDIuRiscn0LZb70f1iFc+utXQ6dxVoib8ms8SPDkZ8gPufqK9E9fWY/xGXTcEfEDo92UqC4+V9y0IoZDq3wmi75FrstdL9mHpFCcvWFvMOIJ3znSadl8zew22JmuscrQ199O039JekKQDKkOk35Yzy+gMJQA/D33D7EvvR4kF9/Sv7WMuwTDcZjD1VeG/7b9v6Xh1/dwDpHB8AkfdoUHYAd3vWhbfUjQ9G3fjoc9QF4jzPG/RN1zoa7N5B+uqc/Zu2x217YNeKQ7R4aah/sV/O6LM5j3TO1mzGnxrOVWYZzeU7BDvwK+udYQv+5nSPwNXmQ2ZY0ZRmQ6KW2Z1VVqgpZj+79JZdzQzV5f3xi62/dfYG0XLOYAaQIBKuavXJFsGjY3M9RIER77cdrrkiw7p5u0J0njf41btvMHYCtyuCNjksp/sHfIf9i8+ba3zn9Lj+f4tflH0p/PIbi6xul1IPAAA=',
    },
})
Record({
    $id: Now.ID['fadd9fccfb51be105543f4c69eefdcd3'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '468535e3c3031010ca199a038a40dd3d',
        action_type_parent: '468535e3c3031010ca199a038a40dd3d',
        compiled_snapshot: '89f446ebc3031010ca199a038a40dd7b',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        order: '3',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'c6e9a576-8209-466c-9a5e-dca4ed266510',
        values: 'H4sIAAAAAAAA/+1WbW/bNhD+K4Q+bZkl682S5X3y2hXL0DVBs+ZLUwgUdbRZyJRKUk68wP99R0l23tMgCzIM2CdDxzvePffcc/TnS0eUzszxSx7HCRQs8qPAD3xGgyyjfjSlsV+W09AZOZKuAD2ZghKkEbTKaSWoxpM1rVp7lIRpASFEvIizIgn8ySSOeMySDICXjBboWgrdVHRzOkRc5FqyXJtaQd42Jc0D77hqF0Lmbw7fvM3nrVliEFuKqlQgndnnLyOnoQorMaCc2eWtI7NpIK9oARXe/RE44AkDvOGpGHexb/YgyXwA+TB8mxVP1LV8tSptfeHIgQsDsgTMz2mlYeSsqCwpAt44M6NaNCig5ZGsNnuPpZAG73Os74UWf+HlUTi6dv/M0Ru9T7+350Nzbf21lMCMqCU5a30/TMhtRKC7xtaCwVFjHfuMhhbV7QSsrtqV/NDjtxwCp21ldhyipdWYHBoL1JY+4OAny/p8z8I7IbueDIdVzWi1/6LGKFG0BqtCUlvx592W9sb395ALFawwb76iTSPkIm9UvRZdLix95S0q/PB4VZ9jjVospEe7znhIA/Xeof1tZz6lSlj0f+A1GGwzfpLiWwuHdniyaRgkRcDcMmWBG6eQuFkMvhsWvOR8ErAkDZ1tx0b+rbXQ+lYNTcn7BqODZko0Zo4lrGHAvx3tVJg9OqH0agyF1IZazltVXVPg0phGz8ZjUGsqPY0/yK8r63MPOzG+q7/v+j9PeifIplzsdfd9VLvAwwEW+fTx/YNgB73pXZJBbNFLiW3q+/5NuT2gskcV9K8KZ9+bm6rZ8/IqkpnQgmcsLdyMxdSN4zB2aRDFbpYVNAv9iAcFe4ZkeiJ7mwV9Yzrw+zFvZ3xwJg8O5oyB1sQCGc/7NWmRkVZjM4hZAuFl3lnq4ivuUY+cdBeQVasNUWBaJQklneo8Ym88sjNIZLsq8EdoUnOuwZBiQ34KiJDkV6VqRX7DcaxsipN+OXtdMWsqKttFUndjpMkwYaRtsLBGYak25szxzhxCOcpvV54Nhwu6aiqYYTWK6GWtDHLDurUflTtHD4lfLEB5rFU4VMbrHC25HS7M+rO9a0C2v8Uax2f4hsgd6IX2FmCOVY18m80P3eOS9uNit0cFxmuV6M0/OtvtfrUV0ywo4jTweRyFuAQgTCcMF2rJ0ySFYnKldtqIfA1KW0Vdbba7u+uFttMTCtsFzo8Pyem+snvLfWA3xY/vpsHy/3J6veVUZpMyxVfbDRLgbsxp4RY+z9xpSmM+iYJpyaN//J7Hj/7jTNnVFBXUsGWO1F2f+cvLDuV6AOL1Tjg3goM22+1dTTwh4nma+f3k6MNOMU9AtQv7xeYnxz2s+6AOevmqO/UMagle6iWP//tiGTpzUyoDG68ilGQSZ3GQUXeS4V/DOAxRI0mauDT1Az6dZPiaT58tlC9/A8EhT3OADgAA',
    },
})
Record({
    $id: Now.ID['17edd300fb91be105543f4c69eefdce9'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '89f446ebc3031010ca199a038a40dd7b',
        action_type_parent: '',
        compiled_snapshot: '89f446ebc3031010ca199a038a40dd7b',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        order: '3',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'c6e9a576-8209-466c-9a5e-dca4ed266510',
        values: 'H4sIAAAAAAAA/+2W227bOBCGX8XQteXoQJ18lzoIkEW3CZo2N91CGJLDmAuaUiXKSTbIu+/IVmzn5G6ANFhg9yrwcEjO/898ob7delp6Uy+QirEUuYiDOAzCQEBYFBDEObBAyjzyxp6FBVKmaFCidRpMCUZDSytLMF2/lEYZxwhjxVnB0zBIEhYrJtICUUkBnFKlbmsDNxfDjuuytaJsXdVg2dUSynByZrpLbcvZyeyoPOzcnDaJuTayQetNv30fezU0VInDxpvePlpaSSliznkC2fNSZE4HGuBoKHW20TI6HLS8rNLd1P1KgwrpQoFD6ONw1uedeNXIvrxo7OG1QyuR6lJgWhx7C7ASSO+NN3VNR4EGQZ5ac7PJmGvr6Dyvz71u9V90aRyNd+6deu1NuylrEy8Hb3tdlbUonK7s6I8uCKJ09Fgp9lvVETg4pzKE6xpc3ynmlRa0uvJTooLOuNlubJ1wWvenr7c44OZxVaIy3cJ+WpvpbU667ztFupYqxrp3p9c7iFfn8+pqY+Wxtisjh0VTCTA7qQiNmB9rNH3bqfdjD5xrNO9cX+yt1+kvT3u2Dj7XNTS4oFrKBdS1tpdl3VRLvbqf5Cwml4Z+TJSprqjuVl/aCawsnlA/YXJM8aNV+AIa3TvyOx1Dm/sbv1r9o8OT1XTmUZjyUPgyE6HPMkz9gmHgR1xJpZJQpFnk3Y17M2cG2nZrIYkof3S9AWtDB+vKdRv6LaLRtTukopY4uHQ3vue72Ms3bCdf29ZBP05dY3bYnjtXt9ODA2yWYCct/aEp8G11NSFvDp6S/dP8V0Kd7YMagx2oTwYBo6+fP74oa4C5pXGxl49IPr8PDhjHb4VxHgTBQ5Bf4Pft2XwfJF/Ab+PyQ/Y2Pr8LeAlwVYiM+4Vg4DMWMR/CmPlFwaGIgliFXPwC8HhehJxlYaBYHNHgYpQlgv4BSJWlGfJkO6FQ63KJTdv3bsvdU7JezU6S5ST0pRJStcPO4dnJ6GJTw7OFvYYctp+cIfI/Ov9ydGSRyIxeJj9MUflMAfd5oAo/z4CpJA5zqeJfgA7b+02aie2EcnBiXtIE7JJze7vSvRykTdZJNH5aYevu7p6S9Q92vI68cO+rtfrouCfvQ3/X6Gwt4TlZA3d/thsK74fht/PTT1vmwrd6rdh/FLnB4YfADR6/C25pwgoWFuAnBX0ysSgi0tIs9SELQpUnBb1Y+Rvi9v1v2CJRYgQOAAA=',
    },
})
Record({
    $id: Now.ID['5fedd300fb91be105543f4c69eefdce6'],
    table: 'sys_hub_action_instance_v2',
    data: {
        action_type: '43400a1587003300663ca1bb36cb0b4b',
        action_type_parent: '',
        compiled_snapshot: '43400a1587003300663ca1bb36cb0b4b',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        order: '1',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'b276c5b2-8a5b-4fb8-bf69-c3b2f5eb7eb8',
        values: 'H4sIAAAAAAAA/+VX22rjMBD9leDnEOQ6176VlkKhF2hLX0oxsiQnYhXbK8lJ05B/35ElO8Zxs2tIoWXBL5oZjc5cjkZ+3XqceufeNB4ihP3RdIJQECA0HgcE+1EUjEmEomHk9b0ELxlYahwJBssVFrlZq40KcZaFKyYVTxPQUK4ygTcvzuAiywQnWIOy91IZkQUXVLLEO39963sZluBdM+mdbxuqAl4wRRPG0AxFgA2+6YigacCiYDKeBBhNwaHAERNg+uzwNeDqTVYtw0JnZbf1bb17q0glNVBQ32PvmiWUAYYYC8X63hInFOtUbiqJZJg+JGIvWPBEg0fPGL8r/gHnTpGxixlERZjVVcvQ5cuK4yus8ZOWOdG5dKZkkXLClM0HZTHOhb6sy6zBQ2ZybLfYsO3uVOTL5N6mw6sclOUBSa4ABMtMoAa5CyN+WqTrxxLlNU+KnDilSAkW1QprLXmUa4Nn6zHBluAoXEJb8GQeZjJd8WIzYFkO5gIWg1ikazhU8XkywMQAH0Be8eAa5FeF+AVLbqK4AzewGQBxAR0S2hKqNJdFKlchEbkqFBInyvrydn3TmJcCK7WPHFIe/s4NbpsHF3Fok2a2EMkzfQEuVswFt+v/E0NGaN9yJE0oNyhUgyac3txvtyqPTPADCEvtdod8OWLZjTRodIw0Z6xGmss65LYwHH0OZLdtDhx9/JPRBzL/kwgEh38//nRnBE+yXKuBzcRf2EEmR9kx2reVSqUObUpr9HA3coMKTtqt7Uc4iOMZ9duh0PqseDCN2os2n6FzXR9zJmjb0Lg2isbQOPs/h8a37HkARENbPZ4InhQvAAD6xWRAx0fFrNFuRZfVJoWRYUUO6YB7Ou19dCfE+BghWJ0QT3B279niaYFYToGic5oToBQ6HgQn40FwdhoebKswq0S25Lx8+5lqlvYfxh437aETaxv8XRvPOp3pdz3zbHfI46ATkevNZjVXn/TciR+JnxCz/5U3wQK2uvNCy99wzemc6f3ppRVN9RqLX21613FhWagivC94cA6P3iJjf09RYEoomYLi1V+cPjyaDu8Qv2/F3a4QQo89JYNZ7Qq5w++9xwpMK0J3jQDT2byoTf0euamkrsmHJ3xGftuBWharlYNlzX7Ef9rpiPD2B+11Mq+dEAAA',
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
