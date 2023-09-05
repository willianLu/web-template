import { isObject } from './util'

// 深度合并
function deepMerge(
  data: Record<string | number, any>,
  target: Record<string | number, any>,
  map: WeakMap<any, boolean>,
  strategy: 'replace' | 'concat'
) {
  // 不是对象或者已合并过的对象，将予以过滤
  if (!isObject(target) || map.has(target)) return
  map.set(target, true)
  for (const key in target) {
    const val = target[key]
    // 不是对象或者已合并过的对象，将直接赋值
    if ((!isObject(val) && !Array.isArray(val)) || map.has(val)) {
      data[key] = val
    } else if (Array.isArray(val)) {
      // 数组合并策略，
      // 使用replace策略，则直接替换
      // 使用concat策略，则数组进行合并（不替换）
      if (
        strategy === 'replace' ||
        !(key in data) ||
        !Array.isArray(data[key])
      ) {
        data[key] = val
      } else if (strategy === 'concat') {
        data[key] = data[key].concat(val)
      }
    } else {
      // 不存在的key，赋予初始值
      if (!(key in data) || !isObject(data[key])) data[key] = {}
      deepMerge(data[key], val, map, strategy)
    }
  }
}
interface MergeOptions {
  strategy: 'replace' | 'concat'
}
// 只做简单数据的合并, map或set类型未做处理
export default function (args: Record<any, any>[], options?: MergeOptions) {
  // 缓存对象map，用于过滤自引用循环
  const map: WeakMap<any, boolean> = new WeakMap()
  const data: Record<string | number, any> = {}
  const strategy = options?.strategy || 'replace'
  args.forEach(obj => {
    deepMerge(data, obj, map, strategy)
  })
  return data
}
