module.exports = function({ config }) {
    return Object.assign({}, config, {
        "form": [{
                "field": "eq_approveState",
                "name": "审批结果",
                "type": "select"
            },
            {
                "field": "like_resourceName",
                "name": "目录名称",
                "type": "input"
            }
        ],
        "type": "get",
        "url": "/dl/subscribe/dlSubscibeCatalogForms/myDeptSubcribe",
        "table": [{
                "name": "工单ID",
                "column": "workNum"
            },
            {
                "name": "目录标识",
                "column": "resourceTableName"
            },
            {
                "name": "目录名称",
                "column": "resourceName"
            },
            {
                "name": "当前版本号",
                "column": "resourceVersion"
            },
            {
                "name": "审批人",
                "column": "approverFullname"
            },
            {
                "name": "审批部门",
                "column": "approverDeptName"
            },
            {
                "name": "审批时间",
                "column": "approvalTime"
            },
            {
                "name": "审批结果",
                "column": "approvalStateName"
            }
        ]
    })
}