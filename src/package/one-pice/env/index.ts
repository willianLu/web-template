interface EnvType {
  type: 'dev' | 'test' | 'prod'
  isDev: boolean
  isTest: boolean
  isProd: boolean
}
// 是否本地开发环境
const isDev = import.meta.env.MODE === 'development'
/**
 * @description 环境配置
 * 挂载当前工作环境、域名配置等
 */
const env: EnvType = {
  type: 'dev',
  isDev,
  isTest: false,
  isProd: false
}
if (!isDev) {
  env.isProd = true
  env.type = 'prod'
}

export default env
