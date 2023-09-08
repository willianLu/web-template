import { defineStore } from 'pinia'

/**
 * @description 公共数据管理，cachePageList
 */
export default defineStore('common', {
  state: (): {
    cachePageList: Array<string>
  } => {
    return {
      cachePageList: []
    }
  },
  actions: {
    addKeepAlive(name: string) {
      // 已缓存的页面，不做任何处理
      if (this.cachePageList.includes(name)) return
      let cachePageList = [...this.cachePageList]
      // 超过20条缓存，则废弃最早的缓存
      if (cachePageList.length >= 20) {
        cachePageList = cachePageList.slice(cachePageList.length - 19)
      }
      cachePageList.push(name)
      this.cachePageList = cachePageList
    },
    removeKeepAlive(name: string) {
      const cachePageList = [...this.cachePageList]
      const index = cachePageList.findIndex(item => item === name)
      // 存在当前缓存页面name，则删除
      if (index > -1) {
        cachePageList.splice(index, 1)
        this.cachePageList = cachePageList
      }
    }
  }
})
