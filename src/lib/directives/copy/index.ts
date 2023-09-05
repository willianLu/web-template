import { message } from '@lib/utils/message'
import { useEventListener } from '@lib/hooks/useEventListener'
import copyTextToClipboard from '@lib/utils/clipboard'
import type { Directive, DirectiveBinding } from 'vue'

interface CopyEl extends HTMLElement {
  copyValue: string
  clearUp: () => void
}

/** 文本复制指令（默认双击复制） */
export const copy: Directive = {
  mounted(el: CopyEl, binding: DirectiveBinding) {
    const { value } = binding
    if (value) {
      el.copyValue = value
      const arg = binding.arg ?? 'click'
      // Register using addEventListener on mounted, and removeEventListener automatically on unmounted
      el.clearUp = useEventListener(el, arg, () => {
        copyTextToClipboard(el.copyValue)
          .then(() => {
            message('复制成功', { type: 'success' })
          })
          .catch(() => {
            message('复制失败', { type: 'error' })
          })
      })
    } else {
      throw new Error('[Directive: copy]: need value! Like v-copy="modelValue"')
    }
  },
  unmounted(el: CopyEl) {
    el.clearUp()
  },
  updated(el: CopyEl, binding: DirectiveBinding) {
    el.copyValue = binding.value
  }
}
