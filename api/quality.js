module.exports = function ({ config }) {
	return Object.assign({}, config, {
		module: 'quality',
		url: '/api/dl/quality/dlQualityInfo/search',
		type: 'post',
		form: [
		    { name: '评估状态', type: 'select', field: 'eq_state' },
		    { name: '生成时间', type: 'time', field: 'ge_createTime|le_createTime' },
		],
		table: [
		    { name: '标识', column: 'infoId' },
		    { name: '部门标识', column: 'deptId' },
		    { name: '部门名称', column: 'deptName' },
		    { name: '生成时间', column: 'createTime' },
		    { name: '涉及资源数量', column: 'resourceNum' },
		    { name: '总体情况评估', column: 'assessTotal' },
		    { name: '报告名称', column: 'assessName' },
		    { name: '评估时间', column: 'assessTime' },
		    { name: '状态', column: 'state' },
		    { name: '评估反馈意见', column: 'assessBack' },
		    { name: '是否已阅', column: 'isRead' },
		    { name: '已阅时间', column: 'readTime' },
		    { name: '反馈意见时间', column: 'backTime' },
		    { name: '反馈意见操作员', column: 'backOperFullname' },
		],
	})
}