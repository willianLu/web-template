import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/',
  redirect: '/home',
  children: [
    {
      path: 'home',
      name: 'HomePage',
      component: () => import('@template/views/home/index.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: 'about',
      name: 'AboutPage',
      component: () => import('@template/views/about/index.vue'),
      meta: {
        title: '关于我们'
      }
    }
  ]
}
export default route
