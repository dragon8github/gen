import { getPath, write, render, mkdir } from './utils/utils.js'
import quality from './api/quality.js'

;(async function(){
	// 获取api信息
	const data = quality({ /* ... */ })

	// 渲染list
	let content = await render('/template/list.vue', data)

	// 渲染api
	const api = await render('/template/api.js', data)

	// 替换辣鸡空行
	content = content.replace(/\n\s*(?=\n)/g, '')

	// 创建文件夹
	mkdir('./dist/' + quality.name || +new Date())

	// 生成
	write(content, `/dist/${data.module}/list.vue`)
	
	// 生成
	write(api, `/dist/${data.module}/api.js`)
}());

