import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 以项目根目录查找文件路径
export function resolve(dir = './') {
  return path.resolve(__dirname, '..', dir)
}

/**
 * @description buffer转换成字符串
 * @param {object} buffer buffer流数据
 * @returns {boolean | string}
 */
export function bufferToString(buffer: Buffer) {
  const hasToString = buffer && typeof buffer.toString === 'function'
  return hasToString ? buffer.toString() : ''
}

// 判断模板是否存在
export function hasTemplate(name: string) {
  if (!name) return false
  return fs.existsSync(
    path.resolve(__dirname, `../src/package/${name}/page.config.js`)
  )
}
