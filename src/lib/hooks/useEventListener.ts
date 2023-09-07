import {
  Ref,
  watch,
  isRef,
  unref,
  onBeforeUnmount,
  onDeactivated,
  type WatchStopHandle
} from 'vue'
import { onMountedOrActivated, inBrowser } from '@lib/utils/hook'

type TargetRef = EventTarget | Ref<EventTarget | undefined>

export type UseEventListenerOptions = {
  // 手动管理事件监听与清除
  manualManagement?: boolean
  capture?: boolean
  passive?: boolean
}

export function useEventListener<K extends keyof DocumentEventMap>(
  target: TargetRef,
  type: K,
  listener: (event: DocumentEventMap[K]) => void,
  options?: UseEventListenerOptions
): () => void
export function useEventListener(
  target: TargetRef,
  type: string,
  listener: EventListener,
  options?: UseEventListenerOptions
): () => void
export function useEventListener(
  target: TargetRef,
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {}
) {
  if (!inBrowser) {
    return
  }

  const { passive = false, capture = false } = options

  let cleaned = false
  let attached: boolean

  const add = (target?: TargetRef) => {
    if (cleaned) {
      return
    }
    const element = unref(target)
    if (element && !attached) {
      element.addEventListener(type, listener, {
        capture,
        passive
      })
      attached = true
    }
  }

  const remove = (target?: TargetRef) => {
    if (cleaned) {
      return
    }
    const element = unref(target)
    if (element && attached) {
      element.removeEventListener(type, listener, capture)
      attached = false
    }
  }
  if (options.manualManagement) {
    // 添加事件，用于指令等非组件初始化场景
    add(target)
  } else {
    // unmounted生命周期 移除事件监听
    onBeforeUnmount(() => remove(target))
    // deactivated生命周期 移除事件监听
    onDeactivated(() => remove(target))
    // mounted 和 activated 生命周期添加事件监听
    onMountedOrActivated(() => add(target))
  }
  let stopWatch: WatchStopHandle

  if (isRef(target)) {
    stopWatch = watch(target, (val, oldVal) => {
      remove(oldVal)
      add(val)
    })
  }

  /**
   * Clean up the event listener
   */
  return () => {
    stopWatch?.()
    remove(target)
    cleaned = true
  }
}
