<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component"></component>
    </KeepAlive>
  </RouterView>
</template>
<script setup lang="ts">
defineOptions({
  name: 'AppContainer'
})
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
