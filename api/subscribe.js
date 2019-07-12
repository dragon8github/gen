module.exports = function({ config }) {
    return Object.assign({}, config, {
        "form": [{
                "field": "eq_approveState",
                "name": "状态",
                "type": "select"
            },
            {
                "field": "like_resourceName",
                "name": "请求订阅资源目录名称",
                "type": "input"
            }
        ],
        "type": "get",
        "url": "/dl/subscribe/dlSubscibeCatalogForms/mySubscribes",
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
                "name": "申请人",
                "column": "applicantFullname"
            },
            {
                "name": "申请时间",
                "column": "applyTime"
            },
            {
                "name": "状态",
                "column": "approvalStateName"
            },
            {
                "name": "最近处理时间",
                "column": "approvalTime"
            }
        ]
    })
}