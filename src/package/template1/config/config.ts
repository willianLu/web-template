import { ConfigType } from '../types'

// 根据域名识别当前环境
const { hostname } = window.location

const config: ConfigType = {
  appId: 'rss-official',
  cookieDomin: hostname,
  baseUrl: 'http://rsspath.vip'
}

export default config
