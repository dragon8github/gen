import path from 'path'
import glob from 'fast-glob'
import { getPath, write, render, mkdir } from './utils/utils.js'

;(async function(){
	// 搜索所有api文件
	const apis = await glob([getPath('api/*.js')])

	// 遍历所有 api.js 
	apis.forEach(async (val, key) => {
		// 获取约定数据结构
		const data = require(val)({ /*  */ })

		// 文件名
		const [module] = path.basename(val).split('.')

		// 注入 module
		data.module = module

		// 渲染list
		let content = await render('/template/list.vue', data)

		// 渲染api
		const api = await render('/template/api.js', data)

		// 替换辣鸡空行
		content = content.replace(/\n\s*(?=\n)/g, '')

		// 创建文件夹
		mkdir('./dist/' + module || +new Date())

		// 生成
		write(content, `/dist/${module}/list.vue`)
		
		// 生成
		write(api, `/dist/${module}/api.js`)
	})
}());

