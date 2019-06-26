import { getPath, write, render } from './utils/utils.js'

// 渲染
const content = render('/template/api.js', { url: '/api/resources', type: 'post' })

// 写入文件
write(content, '/dist/app.js')