import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw
} from 'vue-router'

// 常规路由信息
const routes: RouteRecordRaw[] = [
  {
    path: '/404',
    component: () => import('@lib/views/error/404.vue'),
    meta: {
      title: '图标',
      icon: 'icon'
    }
  }
]
// 同步路由模块数据
const modules = import.meta.glob('./modules/*.ts', {
  eager: true
})
Object.keys(modules).forEach(key => {
  routes.push((modules[key] as any).default)
})
// 开发环境，加载icon路由
if (import.meta.env.MODE === 'development') {
  routes.push({
    path: '/icon',
    component: () => import('@lib/views/Icon.vue'),
    meta: {
      icon: 'icon',
      title: '图标'
    }
  })
}

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
  strict: true
})

export const constantRoutes = routes

export default router
