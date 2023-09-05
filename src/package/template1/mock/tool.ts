import HttpRequest from '@lib/utils/http/index'
import MockAdapter from 'axios-mock-adapter'

export default new MockAdapter(HttpRequest, { delayResponse: 500 })

// 解析json数据
export function parseJsonData(data: string) {
  let res!: Record<string, string>
  try {
    res = JSON.parse(data)
  } catch (error) {
    res = {}
  }
  return res
}
