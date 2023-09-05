import path from 'path'
import { fileURLToPath } from 'url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  root: path.resolve(__dirname, './'),
  publicDir: 'public',
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
      '@package': path.resolve(__dirname, './')
    }
  },
  plugins: [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹，当前项目内icon地址
      // iconDirs: [path.resolve(__dirname, './assets/icons')],
      // 公用库lib中的icon
      iconDirs: [path.resolve(process.cwd(), 'src/lib/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ]
}
