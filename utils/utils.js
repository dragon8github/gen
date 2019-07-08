import fs from 'fs'
import path from 'path'
import ejs from 'ejs'
import mkdirp from 'mkdirp'

/**
 * 获取兼容性的路径 ...
 *
 */
export const getPath = _ => path.join(__dirname, '..', _)

/**
 * 写入文件 ...
 *
 */
export const write = (content, path) => fs.writeFileSync(getPath(path), content)

/**
 * 模板引擎渲染 ...
 *
 */
export const render = (tmpPath, data) => ejs.renderFile(getPath(tmpPath), data, { async: true })

/**
 * 创建文件夹 ...
 *
 */
export const mkdir = path => mkdirp.sync(getPath(path))