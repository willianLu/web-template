<template>
  <div class="flex-center wrap">
    <div class="content">
      <img src="@lib/assets/images/robot.png" />
      <h2>404</h2>
      <p style="color: #666">抱歉，您访问的页面不存在～</p>
      <p style="margin-top: 16px">
        <a class="link" href="/#">
          <span> >> 返回首页</span>
        </a>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: '404Page'
})
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.content {
  h2 {
    margin: 8px 0 16px;
    font-size: 36px;
  }
}
.link {
  line-height: 24px;
  font-size: 16px;
  &:hover {
    color: #409eff;
  }
}
</style>
