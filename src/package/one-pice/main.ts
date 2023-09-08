import { createApp, type Directive } from 'vue'
import 'virtual:svg-icons-register'
// 本地模块
import store from './store'
import router from './routes'
import '@lib/assets/css/index.scss'
import '@template/assets/css/index.scss'
import App from './App.vue'

const app = createApp(App)

// 自定义指令
import * as directives from '@lib/directives'

Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})

app.use(store).use(router).mount('#app')

// 卸载page loading盒子
const loadingPageStyle = document.getElementById('loading-page-style')
const loadingPageEl = document.getElementById('pan-loading-page')
if (loadingPageStyle) {
  loadingPageStyle.parentElement?.removeChild(loadingPageStyle)
}
if (loadingPageEl) {
  loadingPageEl.parentElement?.removeChild(loadingPageEl)
}
