// 创建虚拟的textarea
function createFakeElement(value: string) {
  const fakeElement = document.createElement('textarea')
  // Prevent zooming on iOS
  fakeElement.style.fontSize = '12pt'
  // Reset box model
  fakeElement.style.border = '0'
  fakeElement.style.padding = '0'
  fakeElement.style.margin = '0'
  // Move element out of screen horizontally
  fakeElement.style.position = 'absolute'
  fakeElement.style.left = '-9999px'
  // Move element to the same position vertically
  const yPosition = document.documentElement.scrollTop
  fakeElement.style.top = `${yPosition}px`

  fakeElement.setAttribute('readonly', '')
  fakeElement.value = value

  return fakeElement
}
// 选择copy区域
function select(element: any) {
  let selectedText
  if (element.nodeName === 'SELECT') {
    element.focus()
    selectedText = element.value
  } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
    const isReadOnly = element.hasAttribute('readonly')
    if (!isReadOnly) {
      element.setAttribute('readonly', '')
    }
    element.select()
    element.setSelectionRange(0, element.value.length)
    if (!isReadOnly) {
      element.removeAttribute('readonly')
    }
    selectedText = element.value
  } else {
    if (element.hasAttribute('contenteditable')) {
      element.focus()
    }
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(element)
    if (selection) {
      selection.removeAllRanges()
      selection.addRange(range)
      selectedText = selection.toString()
    }
  }

  return selectedText
}
// 模拟copy动作
const fakeCopyAction = (value: string) => {
  return new Promise((resolve, reject) => {
    const fakeElement = createFakeElement(value)
    document.body.appendChild(fakeElement)
    select(fakeElement)
    try {
      document.execCommand('copy')
      resolve(true)
    } catch (err) {
      reject(err)
    }
    fakeElement.remove()
  })
}
// copy文本到剪切板
export default function copyTextToClipboard(text: string) {
  if (window.navigator.clipboard) {
    return window.navigator.clipboard.writeText(text)
  }
  return fakeCopyAction(text)
}
