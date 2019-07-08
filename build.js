import glob from 'fast-glob'
import { getPath, write, render, mkdir } from './utils/utils.js'

;(async function(){
	const apis = await glob([getPath('api/*.js')])

	apis.forEach(async (path, key) => {
		// 获取约定数据结构
		const data = require(path)({ /*  */ })

		// 渲染list
		let content = await render('/template/list.vue', data)

		// 渲染api
		const api = await render('/template/api.js', data)

		// 替换辣鸡空行
		content = content.replace(/\n\s*(?=\n)/g, '')

		// 创建文件夹
		mkdir('./dist/' + data.module || +new Date())

		// 生成
		write(content, `/dist/${data.module}/list.vue`)
		
		// 生成
		write(api, `/dist/${data.module}/api.js`)
	})
}());

