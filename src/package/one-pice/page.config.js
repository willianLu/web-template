import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  // 自定义配置数据，与vite数据区分开
  customData: {
    htmlPlugin: {
      inject: {
        data: {
          title: '海贼王'
        }
      }
    },
    svgIconsPlugin: {
      iconDirs: [path.resolve(__dirname, './assets/icons')]
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://rsspath.vip',
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      // 当前模版目录
      '@': path.resolve(__dirname, '../'),
      '@template': path.resolve(__dirname, './')
    }
  }
}
