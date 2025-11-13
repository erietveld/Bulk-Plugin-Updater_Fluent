import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b92eaa2ffb49b6105543f4c69eefdcf6'],
    table: 'sys_documentation',
    data: {
        element: 'http_status',
        label: 'HTTP Status',
        language: 'en',
        name: 'var__m_sys_hub_flow_output_fc2cbc1bfb0d72105543f4c69eefdca0',
    },
})
Record({
    $id: Now.ID['401fe223fb89b6105543f4c69eefdcc4'],
    table: 'sys_documentation',
    data: {
        element: 'http_status',
        label: 'HTTP Status',
        language: 'en',
        name: 'var__m_sys_hub_flow_output_fc4cb45bfb0d72105543f4c69eefdcde',
    },
})
Record({
    $id: Now.ID['392eaa2ffb49b6105543f4c69eefdcf1'],
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
        model: 'fc2cbc1bfb0d72105543f4c69eefdca0',
        model_id: 'fc2cbc1bfb0d72105543f4c69eefdca0',
        model_table: 'sys_hub_flow',
        name: 'var__m_sys_hub_flow_output_fc2cbc1bfb0d72105543f4c69eefdca0',
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
    $id: Now.ID['881fe223fb89b6105543f4c69eefdcaf'],
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
        model: 'fc4cb45bfb0d72105543f4c69eefdcde',
        model_id: 'fc4cb45bfb0d72105543f4c69eefdcde',
        model_table: 'sys_hub_flow_snapshot',
        name: 'var__m_sys_hub_flow_output_fc4cb45bfb0d72105543f4c69eefdcde',
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
    $id: Now.ID['38ad662bfb49b6105543f4c69eefdce1'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '34ad662bfb49b6105543f4c69eefdce0',
        connected_to: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        flow: 'fc2cbc1bfb0d72105543f4c69eefdca0',
        logic_definition: '666e5545c3e232002841b63b12d3ae99',
        order: '6',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'f647ab12-e83a-429f-b130-cb3755109adb',
        values: 'H4sIAAAAAAAA/+1UTW/TQBD9K2HPSWQ7iWlyq0AVSNAiGvUClTXeHScr1rtmd500RPnvnfVHGrVBIIQ4cfO8+Xoz89Z7Zmpf1d4tzaVzcqXZ4sv9kEkdMPreMw0lsgXjRgvppdFsyDag6oDt9zzFOcxep6OLJJqPpmnKR2TjSHCYokjSdBZH47X3VeY8+NodDq++1lE0EUkUUSEhXaVgd/e36vG1VMJiN0QFlrh7tGyxf+byuwozBTkqanvrrdQrSpeCrCKCIp7zmE+SdEJlk4tpnKeTPE7EBBBiiusT35zs5MyaQhOCXF/eWBG4JNGQ4YNHLZD6FaAcDlkJWoA3dscW3tYEWARxo9XuGLGW2lM1FmIfnPyBoVIUhcgCaTCOrfdoZt12W5ivjeR4UzXcGsRDrrocblRd6ut2hHAXLKBWvr8LIbWjelgF0oFGx6m4XZvt577hldTNgJ1TGQ7qaIGnNeS1RxeugQpLKpSVUFW0nKyyZiObZOJSjleKjHGhzJaaBlWOgQfiY9oRjK8If9vAd2BlmOIjlaFkuqDLHLey6mdrmrNDs5Xsex34tPN1k2TtMiigTbukNhvsSB+GL9WfNcDTE7g2fvBuufw0OCvoZ95/IM/knDwHHxrkpUj7aX6i1PgXSu2Q35LqbPZfqadKDTRzcJJnzb+WyoV3/8dSvQ+SbFu4VkMCuXTEZBmw9/3/PDh2dHXJT6Gtsd/CDE/Y4RGmtagUGQYAAA==',
    },
})
Record({
    $id: Now.ID['eb77e667fb09b6105543f4c69eefdc28'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2b77e667fb09b6105543f4c69eefdc27',
        flow: 'fc2cbc1bfb0d72105543f4c69eefdca0',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '4',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        values: 'H4sIAAAAAAAA/+1U227TQBD9lWqfE8uXxLR5q0AVSEARjfoClTXeHScr1rtmd500RPl3Zn1JIxoEQn3kzXPmdmbmrPfMtL5pvVuaa+fkSrPFl4cJkzpg9L1nGmpkC8aNFtJLo9mEbUC1AdvveY5XMH+VTy/T+Go6y3M+JRungsMMRZrn8ySO1t43hfPgW3c4fG3jOBNpHFMdIV2jYHf/QuX4WiphcRihAUvMPVq22P/i8rsGCwUlKup6563UK0qXgixqV1GTOc/SPKOy6eUsKfOsTFKRAc5yihsTX59s5MySQhOC3FjeWBG4pPGE4aNHLZD6VaAcTlgNWoA3dscW3rYEWARxq9XuGLGW2lM1FmIfnfyBoVIch8gKaTCOvfdoFsNye5ivjeR423TcOsRDqYYcblRb64/9COEsWEGr/HgWQlpH9bAJpAONgVN1tzbbz2PDG6m7AQenMhzU0QJPayhbjy5cAxXWVKiooWloOUVjzUZ2ycSljlaKjKhSZktNgyYj4IF4RDuC6IbwNx18D1aGKT5QGUqmC7rCcSubcbauOTt0Wym+t4FPP98wSdEvgwL6tGtqs8GB9GHyXPtFBzw9gLfL5aeLs1o+8byELKsYquSKJ+dlCdk5WV6875Dn4hyn+I1Ckz8odED+SqLz+X+Fnio00CzBSV50f1gqF977P0v0IUixb+F6DQnk0hGTZcDejX/x4NjR1SU/hbbGfgszPGGHn9OagAgPBgAA',
    },
})
Record({
    $id: Now.ID['f6ed2263fb49b6105543f4c69eefdc08'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '3eed2263fb49b6105543f4c69eefdc07',
        flow: 'fc2cbc1bfb0d72105543f4c69eefdca0',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        outputs_assigned: 'status_message,http_status,progress_id',
        parent_ui_id: 'f647ab12-e83a-429f-b130-cb3755109adb',
        ui_id: '0fbd5dfb-9a4a-4e91-8ccb-f204699a71a1',
        values: 'H4sIAAAAAAAA/+1WyW7bMBD9lUBny9BOKbcAQdAATRM0bi5FIXAZ2kSpJRLlxDX87x1a8lKjLpI6KIqiRz5yZt48zqO0dKrO1J1pJ9VF26pp6Zx/XjpKOOcO4wGX3GeSeYIEvhfHUSgjnmQAUnA/dEZOSQvAk62hpmvzAtqWTgHxOdWd3VgueQIZjUnipoGXuVGScBfX4ApOIxBBksS+N/4xfrXCDEK1taaLh5MT8ZnSogHb15eRU9MGKRtonPPlwZZZ1JBrykBjvXvTqHKK4S9VYhdoGZzdbKU4JpEtt8aHQlUjLKtw5MCzgVIAFpZUtzByCloKaqpmsUUaoOK21DtgpkqD2Rx7+LlV3zB16nmePSkBW+TQ726X+SBwD/NZpTjc1kZVZY8YyvQQwyvdFeWHvg97NSBpp83mahDpWswHtWVtaQyc5P2sevq4KXilynWDw6auONXbFTUoA+sMtPZeOjU5EKdH3h9eDmgosGJe0LpGJK+baq7WVZB0MZ5qXIylrp6QnZ3tMeW2wzGqScdXiF+u4QfaKNvuDabBYFvuU6keO7i2lx+QhMiAJa4MCHEjkgo3jal0iQcZiSIuIPad1Vra/LGzTfUiDXLkvaJ4oOWNqs0FUpjD0PlqNHgtzAKgNJCSRRlLDidM+rtBmhlT5/00vd5oe8EnuOwwy1tY7AUCbALfTSZ3Z/cbBX4qyxFz+W9mriT+h9z1R2yURSRMOdooE2HsRpCAy/DtdEkmKbAIWBjyk20kvV891J63mxfscdrgY5xj3KtttBd8go0Os7yFjV4gwCbwbih/dn15TJYjNgr+f6P+sm8UybjHCIlcwlKcN46jlmYQuMBiL8soZyGlv20unDhV2l/EfvrmA5NhKYCrFglPLHa9d04scKYU34eequarbXWHrb4Dfm2YUIAKAAA=',
    },
})
Record({
    $id: Now.ID['0c1f2623fb89b6105543f4c69eefdc26'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '34ad662bfb49b6105543f4c69eefdce0',
        connected_to: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        flow: 'fc4cb45bfb0d72105543f4c69eefdcde',
        logic_definition: '666e5545c3e232002841b63b12d3ae99',
        order: '6',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: 'f647ab12-e83a-429f-b130-cb3755109adb',
        values: 'H4sIAAAAAAAA/+1VXW/aMBT9K8zPECUBssJbRVVt0tZOK+rLVkUX2wFrTpz5A5pF/Pde5wNQi7RN43Fv8fG9x+fcHCc1Uc6WzpqlujZGrAsy//Y0JKLwGD7XpICckzmhqmDCClWQIdmCdB6ra5rwGUzfJ6OrOJyNJklCR7jmI0ZhwlmcJNMoDDbWlqmxYJ3Z7999d2E4ZnEYIhETppRQPV6Kj26EZJp3JkrQqN1yTeb1qy3B8LgshCya0YiO42SMBPHVJFol41UUszFwiJBQwopLLF2cuD8zEFuVHjJWi2LdrT91rQ89qDTzUuJwSPiz5QXjKCIDafiQ5FAwsEpXZG61Q0BzYPeFrA4VG1FYZCO+9tmIX9wzhaGvzDj6orzdPSzTbrgtnN2ABZTiqHW6K6UbJSg37UQYz8BJuzjF2oL7snHZtFhYyb5bSZcXd+0wyIGgf5eIOIMieOmdeu2dkexho3Zfe5W3omim0m1KRUEeVmBxditnvZ6acMlzJEpzKEucaFpqtRVNM2rJg7XERZBJtcNDfZIDoF54gIOF4BbxmwZ+BC28i89Ig82YBZMaqkXZe2sOJ/shMZVZSDDm6BGHm/50XmHruPOWtuPxLQ3RNR685Z2N/fDtHUob4HiR7pQdfFguvwzOXotXuxcNeXwu5IM2u2+j3uv+m7xHv8l7h/xR4KfT/3n/57x7mSswgqbNVx7p/CfngoF/8sFuDz0MmwqD2pYe+9j/W/xGhYkS9BTaKf3Duzpi+xe73kdCpQYAAA==',
    },
})
Record({
    $id: Now.ID['401f2623fb89b6105543f4c69eefdc29'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '3eed2263fb49b6105543f4c69eefdc07',
        flow: 'fc4cb45bfb0d72105543f4c69eefdcde',
        logic_definition: 'df4e1945c3e232002841b63b12d3ae3e',
        order: '7',
        outputs_assigned: 'status_message,http_status,progress_id',
        parent_ui_id: 'f647ab12-e83a-429f-b130-cb3755109adb',
        ui_id: '0fbd5dfb-9a4a-4e91-8ccb-f204699a71a1',
        values: 'H4sIAAAAAAAA/+1WW0/bMBT+KyjPTZXm2vCGQGhIMNDoeJmm6tg5bi2cC7EDdFX/+46b9LIyJqoyTZp4qz/7XL7P56szd8rGVI3Ro/JEazkpnONvc0dmzrHDuM8FHzDBvCzxB14UhYEIeZwiiowPAqfnFJAjndQGTKPHOWoNEyT8EVRjN+ZzHmMKURK7Q99L3TCOuUtrdDMOIWZ+HEcDr/9r/GJBGTKpKwWzu4MT8alUWY2W1/eeU0FNLRusnWNiWdCPAtSlLO6pxovDb1VBAUNFR2+X1Y+u1jK8Jo+ZVS1ey2LSrS/XSTqwrDPbZtBz8NlgkSF1I0Bp7Dk5FBmYsp6tkRohuy7UBpgSuZZTDs9a/qB6Q8/z7EmBxJBju7tejjvFW1icgQFqpeGmqXElTik56labDAU0ypxuY+2B68rIsmhDDDC1ii5VkxefW0WcdYLVBRPSaGoCK0vV9t4REbfT8unLqstzWSxV6TZVyUGtV2BIO9YY28/caeRoR+YWeSE0Ksyp4jiHqiJkXNXlo1xWoabz/kTRoi9U+UTdWYf0gVuGfboC6J8TfraE76CWlu4VpaFgW+5rIR8avLBj5CdxInwWu8JPEjdMhpk7jEC4iYdpEoY8w2jgLHqOnulTBVpvhKIbGj80lmYrWyfQuNXYhvBaVuaEmnrETotFr/NwkPoI4AvBwpTFu9MrBpshnRpTjdtJ3d/AW8EHuHc3y6HWfQP5lXU/jUY3R7cr9r+VZB/TDt7NtHH04dp/59o0TIIhJ9emWRC5IcboMvrTd5NUALIQWRDwv+Ba4f3pzfG8zYgS60lN78qY4vZ27VbwAa7dzXKoa99AfuXam6700cXZa5Ls41r/46n9H0ybpNxjSRK6CRvS1HIa2GGKvoss8tIUOAsA3tG0dm4L+wXd3sxj19v68rjURGFksYutc9mM5lXybeiprO8t+Q22+AmNCz6lnwsAAA==',
    },
})
Record({
    $id: Now.ID['881f2623fb89b6105543f4c69eefdc08'],
    table: 'sys_hub_flow_logic_instance_v2',
    data: {
        block: '2b77e667fb09b6105543f4c69eefdc27',
        flow: 'fc4cb45bfb0d72105543f4c69eefdcde',
        logic_definition: 'af4e1945c3e232002841b63b12d3ae3e',
        order: '4',
        parent_ui_id: '1421ca55-74c8-436b-99a6-0a46c1381930',
        ui_id: '1ce39979-b4a5-4061-985b-04deb6e38cbe',
        values: 'H4sIAAAAAAAA/+1Vy27bMBD8lYBnWZAlW018CxwELdA2RWPkkgbCiqRsopSo8mFHFfzvXephG42BNmiOvYnD3eHMaii1RDlbO2tW6toYsa7I4vEpIKLyGD63pIKSkwWhqmLCClWRgGxBOo+1LU35FczfpZPLOLqazNKUTnDNJ4zCjLM4TefTKNxYW2fGgnVmv//moihhcRQhDxOmltA8vBEd3QjJNB8s1KBRueWaLNrftgTD05C4QLo5TeI0QYL4cjbN0ySfxiwBPkuRUELOJZYuT7yfGYdtag8Zq0W1HtYfh9b7EVSaeSlxFBD+bHnFOIooQBoekBIqBlbphiysdghoDuyuks2hYiMqi2zE1z4b8ZN7pijylQVHX5T3u4dlNsy2h4sbsIBSHLVOD6V0owTlpp8I4wU4aZenWF9wV3cuuxYLuRy7lXRl9bkfBjkQjK8SEWdQBK+9U699MFLcb9Tu66jyVlTdVIZNqSjIwwoszi531utpCZe8RKKshLrGiWa1VlvRNaOWMlxLXISFVDs81Oc4BOqFhzhYCG8Rv+ngB9DCu/iENNiMWTCZoVrUo7fucLIPiGnMUoIxR4843OyH8wp7x4O3rB+Pb+mIrvHgLR9s7IOXNyjrgOM1er9afbk4eyNOdl4X7iKCYnpFp+fDDcm5cF/0mX0Z8VHva3I+/UPOB+Svgj6f/8/5P+fcy8zBCJp133ak85+aNwz6kw90f+hh2FQY1Lby2Ifxj+I3GkyUoKfQTunv3tUR2/8Cd383GpsGAAA=',
    },
})
