import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/',
  redirect: '/home',
  children: [
    {
      path: 'home',
      name: 'HomePage',
      component: () => import('@/template1/views/home/index.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
}
export default route
