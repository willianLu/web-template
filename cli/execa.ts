import { execSync } from 'child_process'
// @ts-ignore
import { resolve, bufferToString } from './util.ts'
// @ts-ignore
import Log from './log.ts'

/**
 * @description 执行命令
 * @param {string} command 命令
 * @returns {string}
 */
export default function execa(command: string, options = {}) {
  options = {
    cwd: resolve('./'),
    encodeing: 'utf-8',
    ...options
  }
  // 默认code，非0为失败，与node命令执行保持一致
  let code = 1
  // 返回命令执行信息
  let message = ''
  // 执行命令
  try {
    code = 0
    message = bufferToString(execSync(command, options))
  } catch (error) {
    code = 1
    // 命令执行错误
    Log.error(error)
  }
  return { code, message }
}
