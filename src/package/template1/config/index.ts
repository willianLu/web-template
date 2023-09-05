import merge from '@lib/utils/merge'
import { ConfigType } from '../types'
import ConfigDefult from './config'
import Env from '../env'

const EnvConfig: Record<string, any> = {}
const modules = import.meta.glob('./env/*.ts', { eager: true })
Object.keys(modules).forEach(key => {
  // eslint-disable-next-line no-useless-escape
  const res = key.match(/\.?([^\.\/]+)\.(?:[^\.]+)$/)
  if (res) {
    EnvConfig[res[1]] = (modules[key] as any).default
  }
})

const Config = merge([ConfigDefult, EnvConfig[Env.type] || {}]) as ConfigType

// 将配置数据冻结，不允许代码运行阶段修改，如需修改，不应放到配置数据上
export default Object.freeze(Config)
