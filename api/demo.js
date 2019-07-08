module.exports = function ({ config }) {
	return Object.assign({}, config, {
		name: 'resources',
		url: '/api/resources',
		type: 'post',
		form: [
		    { name: '资源名称', type: 'input', field: 'resourceName' },
		    { name: '存贮标识', type: 'input', field: 'storageIdentification' },
		    { name: '资源类别', type: 'select', field: 'resourceCategories' },
		    { name: '公开范围', type: 'select', field: 'openScope' },
		    { name: '资源安全级别', type: 'select', field: 'resourceSecurityLevel' },
		    { name: '资源状态', type: 'select', field: 'resourceStatus' },
		    { name: '版本更新时间', type: 'time', field: 'versionUpdateTime' },
		    { name: '资源添加时间', type: 'time', field: 'resourceAdditionTime' },
		],
		table: [
		    { name: '序号', column: 'id' },
		    { name: '资源名称', column: 'resourceName' },
		    { name: '存贮标识', column: 'storageIdentification' },
		    { name: '资源类别', column: 'resourceCategories' },
		    { name: '公开范围', column: 'openScope' },
		    { name: '资源来源', column: 'sourcesOfResources' },
		    { name: '更新周期', column: 'renewalCycle' },
		    { name: '提供时限', column: 'providingTimeLimit' },
		    { name: '版本号', column: 'versionNumber' },
		    { name: '资源添加时间', column: 'resourceAdditionTime' },
		    { name: '版本更新时间', column: 'versionUpdateTime' },
		    { name: '资源安全级别', column: 'resourceSecurityLevel' },
		    { name: '资源状态', column: 'resourceStatus' },
		    { name: '操作', column: '_' },
		],
	})
}