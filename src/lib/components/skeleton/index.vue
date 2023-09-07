<template>
  <div class="qt-skeleton" :style="style"></div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { isString } from '@lib/utils/util'

const props = defineProps({
  inline: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  left: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  right: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  top: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  bottom: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  round: Boolean,
  radius: {
    type: String,
    default: ''
  }
})
const style = computed(() => {
  const res: any = {}
  if (props.width) {
    res.width = getValueUnit(props.width)
  }
  if (props.height) {
    res.height = getValueUnit(props.height)
  }
  if (props.left) {
    res.marginLeft = getValueUnit(props.left)
  }
  if (props.right) {
    res.marginRight = getValueUnit(props.right)
  }
  if (props.top) {
    res.marginTop = getValueUnit(props.top)
  }
  if (props.bottom) {
    res.marginBottom = getValueUnit(props.bottom)
  }
  if (props.inline) {
    res.display = 'inline-block'
  }
  if (props.round) {
    res.borderRadius = '8px'
  }
  if (props.radius) {
    res.borderRadius = getValueUnit(props.radius)
  }
  return res
})
function getValueUnit(num: string | number) {
  if (isString(num) && (num.endsWith('%') || num.endsWith('px'))) {
    return num
  }
  return num + 'px'
}
</script>
<style lang="scss" scoped>
.qt-skeleton {
  width: 100%;
  height: 40px;
  background: #f2f2f2;
  animation: skeleton-blink 1s ease-in-out infinite;
}
@keyframes skeleton-blink {
  50% {
    opacity: 0.6;
  }
}
</style>
