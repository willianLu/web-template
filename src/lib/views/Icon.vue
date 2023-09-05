<template>
  <div class="flex icon-container">
    <div v-for="(item, index) in list" :key="index" class="item">
      <SvgIcon :name="item" />
      <div class="name">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from '@lib/components/svg-icon.vue'
import ids from 'virtual:svg-icons-names'
const list = ids.map(item => item.replace('icon-', ''))
</script>
<style lang="scss" scoped>
.icon-container {
  padding: 16px 0;
  flex-wrap: wrap;
  // justify-content: space-between;
  font-size: 68px;
  color: #ee5353;
  .item {
    margin: 16px;
    width: 110px;
    text-align: center;
    .name {
      font-size: 20px;
      padding-top: 15px;
      color: #030303;
    }
  }
}
</style>
