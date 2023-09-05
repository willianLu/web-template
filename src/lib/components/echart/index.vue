<template>
  <div ref="chart" class="chart-wrap"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import Echarts from '@lib/utils/echarts'
import { isEmptyObject } from '@lib/utils/util'
import { useWindowSize } from '@lib/hooks/useWindowSize'

const chart = ref<HTMLDivElement>()
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  }
})
const rect = useWindowSize()
let chartInstance: any = null
onMounted(() => {
  nextTick(() => {
    if (chart.value) {
      chartInstance = Echarts.init(chart.value)
    }
    if (chartInstance && !isEmptyObject(props.options)) {
      chartInstance.setOption(props.options)
    }
  })
})
watch([props.options], () => {
  if (chartInstance) chartInstance.setOptions(props.options)
})
watch([rect.width], () => {
  if (chartInstance) chartInstance.resize()
})
</script>
<style lang="scss" scoped>
.chart-wrap {
  width: 100%;
  height: 100%;
}
</style>
