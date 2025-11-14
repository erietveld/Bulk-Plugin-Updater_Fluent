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
        block: '5b91773dfb813a14e80bf602beefdcfd',
        flow: 'aadd1bccfb51be105543f4c69eefdc1a',
        flow_variables_assigned: 'batch_manifest',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'f6059c89-6d01-4263-9ab5-782f5212e37e',
        values: 'H4sIAAAAAAAA/+1XXW/aMBT9K5GfQFAUWhgtfepUVaq0rtLa9aWpIse+AavGTm0HyhD/fddxAgyxqdteyUvIuV/nnlznihXRpStKZx/1lbViosj4+aVLhPIY/l4RRWdAxiSjjk3TGVUiB+tIl8ypLL0Bf3JhC0mXT1uETYXkBupsBTWYxIEh49WeyS0LSCXNQGLggzNCTTBccHwC4HyYM5Znw34G/Xg4HJzlA/bpAiDnbJihXxP42ZOL7rbkfkfal0PcNoW04Z5Vv0vg3YHigIVzKi10CUZx6rRZbhADlN8ruQWmQrnQ74y+W/EDU5/Hcew9c8AWWa3G5jGtlWpE0oLBfeGEVgFxNJONglqWM/U19OE1hpyW0u1oXFrMB4Vn7WnUnPKHqV58awreCFU1WBulZlRunqhDGbLSgfXvpRSPe+IE5Mv+ywEJM6yIshYFImlh9FxUVZD0rDeR+NDLpV4gOz9RPcp8hz1Uk/ZuEL+u4CdqhG/3DtNgsC/3XYm3Em79yx/FlOYcLk5iNhidDM4HcEJ5Fp/kg/MzxuIRnH6KybqSNn0rfVNBpFqONCiKDpYZUbgrpDDH5pwpocF803sDgsif/HHmTVTQpdSUR0kZx2fhdjpaJdXIJWQcJaiUNhBdFUUU5vJWWUelBJOQLpqVRsWDZ21BFSM6p0J6PbAABoGNcqNnkZtCVOULsQVlr3QSwp9D6ctEeVpS66LhFCO2wGMGrZynlexpP03R4zUti9QAw7G3veaucPRb7XbiErVKVISXyFs+XacTEkIUt4OhtvurkaHziw7dDSfvsw63w64omeBBhgBEnegjdCcQDkErRFldGjxYOEQppqugdtSpawTR/KEPhdBLCkb9OFamXbKHWSbEgzjJM11R83nC8cF0BnBcrQOezsHYKun/ttMkOtTIR9juDNff0rje+Yq3dkuvN5XxhR4u/LL1MeBKoxqCl2S9Xr/4bRFOe9gpH/2+H3fPcfccd89x9xx3z3H3/Pvu4cCEb+zRj/ht88/GG5Z4cATbhRbavPrvxxZb/wTBCOb/Iw0AAA==',
    },
})
Record({
    $id: Now.ID['3edd9fccfb51be105543f4c69eefdcb8'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2b77e667fb09b6105543f4c69eefdc27',
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
        block: 'af4ced13fbc5b2105543f4c69eefdca7',
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
        block: '465c2153fbc5b2105543f4c69eefdc45',
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
        block: '3eed2263fb49b6105543f4c69eefdc07',
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
        block: '34ad662bfb49b6105543f4c69eefdce0',
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
        block: '9b91b73dfb813a14e80bf602beefdc02',
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
        block: '674c219ffb85b2105543f4c69eefdccf',
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
        block: '2b77e667fb09b6105543f4c69eefdc27',
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
        block: 'af4ced13fbc5b2105543f4c69eefdca7',
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
        block: '465c2153fbc5b2105543f4c69eefdc45',
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
        block: '34ad662bfb49b6105543f4c69eefdce0',
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
        block: '3eed2263fb49b6105543f4c69eefdc07',
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
        block: '5b91773dfb813a14e80bf602beefdcfd',
        flow: '0fedd300fb91be105543f4c69eefdc4c',
        flow_variables_assigned: 'batch_manifest',
        logic_definition: '4f787d1e0f9b0010ecf0cc52ff767ea0',
        order: '2',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'f6059c89-6d01-4263-9ab5-782f5212e37e',
        values: 'H4sIAAAAAAAA/+1X32/aMBD+VyI/gfih0EJp6VPXqlKldZXWri9NFRn7AlaNndoOlCH+953jBFjHpk57mkRegr873333+S4WK6ILlxfOPugLa8VEkdHTc5sI5TH8vSKCkxEB4HyQMZaNB70x9OLBoH+c9dnJGUDG2WBM2kTRGaDnmDo2TWdUiQysQ3xOZeEN+JMLm0u6fNwibCokN1BlzanBIA4MGa3emT7KQtIxSHT95GlEt1sav6PnlrnHrTNCTar15yrIfQ1qwz2pXpvAmwPFAdlkVFpoEwzFqdNmuUEMUH6n5BaYCuVCuTP6ZsV3zHcax7H3zAArZJUYm2VaCRXg7Io6ilQK5gqz0U0LBjZowyGjhXSXu1hwuMud0CpscXQs691aFjP1JShCNgF2zqWwSAJyX6rnXhWS3U/14mvN8lqoUpXKKDWjcrOiDrUbF87zWZFCPLyTOSC/CA0SZpgRDyjPEUlzo+eizIKkZ92JxEU3k3qB7Hy3dinzFXbxCGj3GvGrEn6kRvhybzEMbvbpvinxWsCNb6NhTGnG4awTs/6w0z/tQ4fycdzJ+qfHjMVDODqJybpN7NJeSmrtVig8ofS18GUG2SqB0qCx38KMyN0FkprjFjwzqDEvw7vmQ+RP/jg5JsrpUmrKo6SI4+PwOhqukrKdEzKKEtROG4gu8jwKPX+jrKNSgklIG81K4xkEz8qCukZ0ToX0CmEC3AQ2yoyeRW4KURkv7M0pe6GTsP0ppD5PlKcltc5rTjFiCxxWaGQ8LQ8i7aUperykRZ4aYDg9tlu/FU5Qo9lMXKJWiYrwEVnDh2u1QkCI4mYwVHb/1DK0ftKhveHkfdbhtd8VJRM8yBCAqBV9hO4Ewlg0wi6rC4PziW2VYrgSakatKkcQzX9AQiL0koJR36ClaZfsfpYJ8SD29kyX1HycMFAYzgA2sHXA0zkYWwb913LqQPsK+Qjbneb6WxpXO3dBYzf1epMZD3R/4uetjwH8KKqa4DlZr9fP/s4J83+4wQ432OEGO9xghxvscIP9XzcYByZ8YQ++xW/qf2PesMTBEWwXWmjz4r8oW2z9A5HlrO3XDQAA',
    },
})
Record({
    $id: Now.ID['dbedd300fb91be105543f4c69eefdcb3'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '674c219ffb85b2105543f4c69eefdccf',
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
        block: '9b91b73dfb813a14e80bf602beefdc02',
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
        plan: 'com.snc.process_flow.engine.ProcessPlan@18865c7a',
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
        values: 'H4sIAAAAAAAA/9VXTU/jMBD9K1HOUZWQUlhuCITEAZAAcUHIchKntdZ1srbTUqr+9x3HdtqmoZRudxeOns834zcT53nu08w/80/zfhji6Pj0JAzjOAwHgzjFUZLEgzQJk37iBz7HYwKWCieMwHGCWaXPciYRLks0IULSgoMmo7JkePZkDc7LktEUK1B6T41ROqIsE4T7Z88vgV9iAdEVEf7ZvKVSs5IghhPCINajTu7daiTBzsDXnDcL0QncEXETuhCZxhIGPnlVhGcEUuWYSRL4Y8wzrAoxaySC4OyOs6VgRLmCiL42fpX0DcKfhtouJ1BWSoyuOSLbMCNORwVNyV2p+2UkBqhRFqwa81tTgG41yXHFlGs1SCoJ8UipMWsQFlH+MCqm9y7hFeV1eVbJihSz5oSVEjSpFJH6LggjYwiExnDFlA9RKYoJrZ0By7g3ZHDo5ayYQlJJh7yHUw28By3CvSuQX9biJyyoruIGwoAzAKIMbhuZpsuiEnVXJihllawVAnNpYvmLulfoV6VRmqptfci0CAxkKmipzsFhQmwpi2Anbh+HS0qkBc+ozilbBKfZ9e18LqtEl9qDIuRiscn0LZb70f1iFc+utXQ6dxVoib8ms8SPDkZ8gPufqK9E9fWY/xGXTcEfEDo92UqC4+V9y0IoZDq3wmi75FrstdL9mHpFCcvWFvMOIJ3znSadl8zew22JmuscrQ199O039JekKQDKkOk35Yzy+gMJQA/D33D7EvvR4kF9/Sv7WMuwTDcZjD1VeG/7b9v6Xh1/dwDpHB8AkfdoUHYAd3vWhbfUjQ9G3fjoc9QF4jzPG/RN1zoa7N5B+uqc/Zu2x217YNeKQ7R4aah/sV/O6LM5j3TO1mzGnxrOVWYZzeU7BDvwK+udYQv+5nSPwNXmQ2ZY0ZRmQ6KW2Z1VVqgpZj+79JZdzQzV5f3xi62/dfYG0XLOYAaQIBKuavXJFsGjY3M9RIER77cdrrkiw7p5u0J0njf41btvMHYCtyuCNjksp/sHfIf9i8+ba3zn9Lj+f4tflH0p/PIbi6xul1IPAAA=',
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
        values: 'H4sIAAAAAAAA/+2W227bOBCGX8XQteXoQEmm77IpCmTRNkHT5qZbCDwMbS5oShUpJ26Qd+/IlpVz1kiDLBbYSw1nOPPPzAfq21WgZTALIqkIyYGLNErjKI4EiyllUTplJJJymgTjwLIloKdoQIL1mpmSGc0cnqyYabujPCk4JJAqTijP4yjLSKqIyCmAkoJxdJXa1Yatz/uIy9JZUTpfNVC2tWRlPDk17Vzb8uj46F152PoFBomFNrIBG8y+fR8HNWuwEg9NMLu6d+TXNZSGcTB492dQgCcC8IZ9Ne5ijwaRo8Ne5NPyu6x40tzKVzWyqy8ZB3DpwUrA/IoZB+NgyaxkKHgdzHzToqEBJk+sWQ8eC2093hd0vpdO/8TL02R86/5Z4NZuSD/Yy765Xf2VtSC8ruzorzaKknx0XxG4TWMrLeCk7hy3GT3j5n4CUZl2aT9t9XczBMVa43czREvrMDnUndCu9F6HOltUF8MU3mu76Ul/aCrBzPDFvG80bz1WhUNt9ZeHLd0aPzwyXDCwxLzlktW1tvOybqqV3uTC0peTucGPiTLVBdbo9NxO2KYzExwDm7xH+7uN+Zw1ulP/Ea/B4C7jV6t/tHDcLQ+dJnHOYxHKQsQhKSAPKYEoTLiSSmWxyIskuN5Mo/zRdtK2reqbUm4bjA5ONLr2h1jCCnr91+MdhfTZDWU3a6it86ybeduYWwQuvK/d7OBANM63UlcTB80KRxza6mKCzTh4iOA+IS8D8AxnaucDff+sbRd43Isbff384UnJPXVul6RHLn0t5KZRFN2F7gnWnuXoX8Vn6M1ddoa5vAk4GeOKioKHVBAWEpKQkMUpCSnljCZRqmIufhscPqUxJ0UcKZImuFyQFJlAXKUq8gJ4drNFrNblChrXTeqGm4dYvNLW71HYLvDw9Hh0PlT2aLlP7Dx5fud7y/9L/3ZLL2kmC3wTwjgHFRLFeMgjRcNpwYjK0ngqVfrbS0+e/Z8pxM0WcebFosTR3d75q6uNylUvZLJ1wr3RCpy/vn7IxB4RL2Pmz7OTTzti9lC1C/ujyz863cp6TGrPy99uQ09PS/xaLwT578PSd+YuKv003gSUPCOUxJSFGcVfDpIkyEhe5CErolhNM4qvxPTFoHz/BXrqA9neDAAA',
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
        values: 'H4sIAAAAAAAA/+2W227jNhCGX8XQteXoQEmm71IHAVJsN8Gmm5vtQhiebBY0pRUpJ66Rdy9py7JzrANkgwLtZYYz5Pz/zBf52zqQLJgEERMI5ZzQNErjKI4oxBhDlI4BRYyNk2AYaFhwl0kbzri2ElQJSoJxJ0tQrT/Kk4LwhKeCIEzyOMoylApEc8y5YBSIS2XS1ApWN13FXWk0LY2tGl62NYMyHl2pdiZ1Ob2YnpWnrZ27IjqXijVcB5Nv34dBDY3rxPImmKwfHR0rRQHhyqVOey2D007LyyrtqvYnDRfcPUh5F/rU3fXlIF41zLeXDAN+Z7lm3PUlQBk+DBagGTi9q2Bim9YFGg7sUqtVnzGX2rr7Ap97Z+Rf7tE0GR68OwnMyvRt9fGy89brqrTm1MpKD/5ooyjJB4+Vcl8qzsDCtWuD2rbh2zfpvJLUnW78ZFxAq+z0MLZNuKz97dsSC0Q97opWql3oz1szg/6m3dxdpDWuY157d7zeTry4nle3vZXnUm+M7A5VRUEdpHJo6PxccuXH7mY/DMDaRpLW+mbXQSt/fzqzbfC5qXHFF66XcgF1LfWsrJtqKTfvOzmL0Uy5P0ZCVbeubyNnegQbi0dunjA6d/GzTfgGGukd+c1d44r9i1+1/NHyC98mHidxTmIasoLGISp4HmLEozAhggmRxTQvkuB+6M2cKjBmb6ETUf5ovQFbQzvryu0YfAltZG1PXVNL3rl0P9zxjV+FAvabL7Wx4NepbdQB23NrazM5OaGNsS2T1cjwZukWIdTV7cjZc/IU7mNK3oj2P6vYoX3RyRh8/fLpRXEd0sYtjZ494vl6F+xgTt8L5nEURQ9xfoHi9yf0Y8B8AcLe5YcE9j5/CH4ZEIFpQUJMEYQIJSiEOEUhxgRwEqUiJvQn4EfGOCaoiCOB0sQtLk+KjLp/A0wUecFJtt9QqGW55I3xs9vT9xSuN7NzRAs7dk6vLgY3fQ/PNvYWctDr5HSR/9H5l6PDcMYK930K45yLEAkgIYkEDscFIJGl8ZiJ9Cegg179OVfQ/YYSsHReug04JGe93uhedtJG2yS3flJwY+/vn5J1RMXbyDtCwY68X/xbg6uthOdkddz9aXoKd8vw6/Xl5z1z8Xt9rdB/FLnO4YfAdR5/CG55hjCKMYQZdj+ZUJI40vIiD6GIYjHOsPtijd8Rt+9/A3gZSsIKDgAA',
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
        values: 'H4sIAAAAAAAA/+VXTWvjMBD9K8ZnE+wmTbu9lZRCoR/Qll5KEbIsJ2IV2SvJSdOQ/74jS3aM42YTcKFlj5oZSW9m3hvLr2ufJf6Ff56OwhBHp+dnYTgchuF4PCQ4iuPhmMRhPIr9wBd4TiFS45hTWC4wL8xarRTCeY4WVCqWCfAkTOUcr15cwGWec0awBqf3UgeRGeOJpMK/eH0L/BxLOF1T6V+sW65D4XEcUw6hzw5fC65e5fUSlT5ru21u8+6tI5OJgRIGPn3XVCQUMKSYKxr4cywSrDO5qi2S4uRB8K1hxoSGE30T/K7YB9x7Hpq4lEJWhFpfvUSuXtacXmGNn7QsiC6kCyWzjBGqbD0SmuKC60nTZgMeclNju8WmbXdnvJiLe1sOvz6gag9YCgUgaG4SNchdGunTLFs+ViivmShr4pw8I5jXK6y1ZHGhDZ61Tzmdw0FoDrRgYopymS1YuRmwzAdTDotByrMlXKrYVAwwMcAHUFc8uAb7VWl+wZKZLO7gGNgMgBgHhiDbQpUVsizlAhFeqNIhsVD2LH8TGGJOOFZqmzmUHP0pDG5bB5cxskUzW4hkub6EIxbUJbcJDlLIabilHMlEwgwK1ZIJS27u12tVxCb5AaSlNptdveyJ7FM0JeJKNJMm5K40nHx2bLddBzj5RL3JB/L4SQKCy7+ffo5XhC3BP2RBzvaS7HTLJ5VJjWwtG7pwo7ilAWc9ju8HQKn4/mAY6sWrz9A5uqeM8qTra3FtHK2vxcn/+bX4lmQHQAmy3WOCM1F++gHoV6kg3D9qf7V4VtKr8W0wNqzIrg6wpzPv42glHACnUsIT3O09WzwdEKu5X1KmPfMroxPAsDcBDE/6EcC6TrMuZEfNq9ee6WYV/2HicTseKNjYEG26BHbUndGxd55sdgU8PErBTbJZz9UnnOv5WfiJIoOvHAEz2OruQ1a/aMmSKdXb26uoJNNLzH93+R3jUNWoMr0veGKO9sp2HG0lCkpBkipoXvONGcEzaXeGRIE1HzdCDsBSleMOv3uPNZhOhG6MgNLptOxNc47c1FZH8lGPD8dv+yWtmtWpwapnP+LPrD8hvP0FwjkU4Y8QAAA=',
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
        label: 'Batch Manifest',
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
        label: 'Batch Manifest',
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
            '[{"name":"flow_variable.batch_manifest","label":"Flow Variables➛Batch Manifest","type":"string","base_type":"string","usedInstances":{"c6e9a576-8209-466c-9a5e-dca4ed266510":["batch_plan"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"70aafde9-0c47-484e-adb0-f483cc07e260"}},{"name":"c6e9a576-8209-466c-9a5e-dca4ed266510.status_message","label":"3 - Batch Install➛Status Message","reference_display":"Status Message","type":"string","base_type":"string","usedInstances":{},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"565282e5-1ee6-4b04-9a6b-7a6d47a4da5b"}},{"name":"c6e9a576-8209-466c-9a5e-dca4ed266510.http_status","label":"3 - Batch Install➛HTTP Status","reference_display":"HTTP Status","type":"string","base_type":"string","usedInstances":{},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"87747bb3-3e9b-44e4-b858-8809483dc7cd"}},{"name":"c6e9a576-8209-466c-9a5e-dca4ed266510.progress_id","label":"3 - Batch Install➛Progress ID","reference_display":"Progress ID","type":"string","base_type":"string","usedInstances":{},"attributes":{"uiType":"string","uiTypeLabel":"String","element_mapping_provider":"com.glide.flow_design.action.data.FlowDesignVariableMapper","pwd2droppable":"true","uiUniqueId":"93f6a70e-6c6b-4246-8d9a-b5bb1b1dee5d"}},{"name":"subflow.apps","label":"Input➛Applications","type":"string","base_type":"string","usedInstances":{"b276c5b2-8a5b-4fb8-bf69-c3b2f5eb7eb8":["conditions"]},"attributes":{"sourceUiUniqueId":"","sourceType":"","sourceId":"","uiUniqueId":"2f87da3c-f077-4108-9df1-821a45ea18dc"}}]',
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
