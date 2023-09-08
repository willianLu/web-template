import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import { compression } from 'vite-plugin-compression2'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// @ts-ignore 本地文件ts无法识别，需要忽略
import Merge from './src/lib/utils/merge'

const isDev = process.env.NODE_ENV === 'develpoment'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  // 读取当前模板的配置
  return import(`./src/package/${process.env.template}/page.config.js`).then(
    res => {
      // 自定义key，存储特殊数据，例: 插件vite-plugin-html的参数数据
      const customData: Record<string, any> = res.default.customData || {}
      // 当前模板项目配置
      const templateConfig: any = {}
      Object.keys(res.default).forEach(key => {
        if (key !== 'customData') {
          templateConfig[key] = res.default[key]
        }
      })
      const data: UserConfigExport = {
        publicDir: `src/package/${process.env.template}/public`,
        define: {
          'import.meta.env.template': JSON.stringify(process.env.template)
        },
        plugins: [
          vue(),
          createHtmlPlugin(
            Merge([
              {
                minify: true,
                /**
                 * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
                 */
                entry: `src/package/${process.env.template}/main.ts`,
                /**
                 * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
                 */
                template: 'index.html',
                /**
                 * 需要注入 index.html ejs 模版的数据
                 */
                inject: {
                  data: {
                    title: 'Web 模板'
                  }
                }
              },
              customData.htmlPlugin || {}
            ])
          ),
          AutoImport({
            resolvers: [ElementPlusResolver()]
          }),
          Components({
            resolvers: [ElementPlusResolver()]
          }),
          ElementPlus({}),
          eslintPlugin({
            eslintOptions: {
              cache: false
            }
          }),
          compression(),
          createSvgIconsPlugin(
            Merge([
              {
                // 公用库lib中的icon
                iconDirs: [resolve(__dirname, 'src/lib/icons')],
                // 指定symbolId格式
                symbolId: 'icon-[dir]-[name]'
              },
              customData.svgIconsPlugin || {}
            ]) as any
          )
        ],
        resolve: {
          alias: {
            '@lib': resolve(__dirname, './src/lib') // 把 app 指向到 src 目录
          }
        },
        build: {
          emptyOutDir: true,
          rollupOptions: {
            output: {
              // 打包文件输出地址
              dir: process.cwd() + '/dist',
              // chunk代码输入位置
              chunkFileNames: 'js/[name]-[hash].js',
              // 入口文件代码输出位置
              entryFileNames: 'js/[name]-[hash].js',
              // 资源文件输入位置处理
              assetFileNames: assetInfo => {
                const { name } = assetInfo
                const index = name.lastIndexOf('.')
                const ext = name.substring(index + 1)
                // 图片类型文件存放在images文件夹下
                if (/^[png|jpg|gif|jpeg|svg]$/.test(name.toLocaleLowerCase())) {
                  return `images/[name]-[hash].${ext}`
                }
                return `${ext}/[name]-[hash].${ext}`
              },
              // code splitting 拆包
              manualChunks(id) {
                // vue相关包放到一起
                if (/node_modules\/(vue|vue-router|pinia)/.test(id)) {
                  return 'vue-vendor'
                }
              }
            }
          }
        },
        esbuild: {
          // 打包删除console 和 debugger
          drop: isDev ? [] : ['console', 'debugger']
        }
      }
      // 合并配置数据，数组合并使用concat策略，即：数组进行合并不替换
      const config = Merge([data, templateConfig], {
        strategy: 'concat'
      })
      return config
    }
  )
})
