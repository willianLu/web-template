<template>
  <PanHeader></PanHeader>
  <div class="home-main"></div>
  <PanFooter></PanFooter>
</template>
<script setup lang="ts">
import { reactive, ref, onActivated } from 'vue'
import { useEventListener } from '@lib/hooks/useEventListener'
import { useWindowSize } from '@lib/hooks/useWindowSize'
import PanHeader from '@/one-pice/components/header/index.vue'
import PanFooter from '@/one-pice/components/footer/index.vue'
import { judgeInViewPort } from '@lib/utils/util'

defineOptions({
  name: 'HomePage'
})

// 页面大小
const { width: pageWidth } = useWindowSize()

/**
 * @description 处理页面元素动画逻辑
 */
function handlePageAnimate(app: Element) {
  const list = app.querySelectorAll('.pan-animate')
  if (list.length === 0) {
    return
  }
  for (let i = 0; i < list.length; i++) {
    const wrap = list[i] as HTMLElement
    const isInView = judgeInViewPort(wrap)
    if (isInView) {
      const type = wrap.getAttribute('data-animate-effect')
      wrap.classList.add('animate__animated')
      wrap.classList.remove('pan-animate')
      switch (type) {
        case 'fadeInUp':
          wrap.classList.add('animate__fadeInUp')
          break
        case 'fadeInScale':
          wrap.classList.add('animate__fadeInScale')
          break
        default:
          wrap.classList.add('animate__fadeIn')
          break
      }
    }
  }
}

const app = document.getElementById('app')
if (app) {
  useEventListener(app, 'scroll', () => {
    window.requestAnimationFrame(() => {
      handlePageAnimate(app)
    })
  })
  // 初始化页面元素动画
  handlePageAnimate(app)
}
</script>
<style lang="scss" scoped>
.home-main {
  padding-top: 60px;
  height: 1000px;
}
</style>
