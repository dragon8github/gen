import fs from 'fs'
import path from 'path'
import art from 'art-template'

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
export const render = (tmpPath, data) => art(getPath(tmpPath), data)