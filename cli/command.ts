// @ts-ignore
import Log from './log.ts'
// @ts-ignore
import execa from './execa.ts'
// @ts-ignore
import { hasTemplate } from './util.ts'

// 开发环境运行
function run(name: string) {
  Log.info('运行模版 - ' + name)
  if (!hasTemplate(name)) {
    Log.error('模版不存在')
    return process.exit(1)
  }
  const res = execa(`cross-env template=${name} NODE_ENV=develpoment vite`, {
    stdio: 'inherit'
  })
  if (res.code !== 0) {
    Log.error('运行模板失败')
  }
}

// 构建代码
function build(name: string, options: Record<string, string>) {
  Log.info('构建模版 - ' + name)
  if (!hasTemplate(name)) {
    Log.error('模版不存在')
    return process.exit(1)
  }
  const mode = options.mode || 'production'
  execa(
    `cross-env NODE_ENV=${mode} vue-tsc --noEmit && cross-env NODE_ENV=${mode} template=${name} vite build`,
    {
      stdio: 'inherit'
    }
  )
  Log.info('构建模版结束')
  // 退出程序
  process.exit(1)
}

export default {
  run,
  build
}
