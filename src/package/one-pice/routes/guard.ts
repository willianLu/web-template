import router from './router'
import NProgress from '@lib/utils/progress'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
