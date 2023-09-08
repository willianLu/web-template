<template>
  <nav class="nav-wrap nav-fixed">
    <div class="nav-content flex-center-space-between">
      <div class="logo" @click="toHome">ONE PICE</div>
      <ul v-if="pageWidth > 768" class="flex-v-center nav-right">
        <li
          v-for="(item, index) in menuList"
          :key="index"
          class="flex-center"
          :class="{
            active: route.path === item.path
          }"
          @click="handleMenuChange(item)"
        >
          {{ item.label }}
        </li>
      </ul>
      <template v-else>
        <div class="mobile-right">
          <svgIcon
            :name="isToggle ? 'close' : 'nav-toggle'"
            @click="handleNavToggle"
          ></svgIcon>
        </div>
      </template>
    </div>
    <ul
      v-if="pageWidth <= 768"
      class="nav-menu-wrap"
      :style="{ height: isToggle ? '100vh' : '0px' }"
      @click="handleNavToggle"
    >
      <li
        v-for="(item, index) in menuList"
        :key="index"
        :class="{
          active: route.path === item.path
        }"
        @click.stop="handleMenuChange(item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import svgIcon from '@lib/components/svg-icon.vue'
import { useWindowSize } from '@lib/hooks/useWindowSize'

const route = useRoute()
const router = useRouter()

const { width: pageWidth } = useWindowSize()
const isToggle = ref(false)

const menuList = [
  {
    label: '关于我们',
    path: '/about'
  }
]

function toHome() {
  if (isToggle.value) {
    isToggle.value = false
  }
  router.push('/')
}
function handleNavToggle() {
  isToggle.value = !isToggle.value
}
function handleMenuChange(item: any) {
  handleNavToggle()
  router.push(item.path)
}
</script>
<style lang="scss">
.nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.nav-fixed {
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);
  .nav-content {
    background-color: #fff;
  }
}

.nav-content {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1170px;
  height: 100%;
}
.logo {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.nav-right {
  height: 100%;
  font-size: 15px;
  color: #000000b3;
  li {
    margin: 0 15px;
    height: 100%;
    cursor: pointer;
  }
  .active {
    color: #ffa33e;
  }
}
.mobile-right {
  font-size: 22px;
  color: #999;
}
.nav-menu-wrap {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  padding-top: 60px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  overflow-y: auto;
  transition: all 0.3s;
  li {
    padding: 15px;
    background-color: #fff;
    font-size: 15px;
    cursor: pointer;
  }
  li:first-child {
    border-top: 1px solid #e7e7e7;
  }
  .active {
    color: #ffa33e;
  }
}
</style>
