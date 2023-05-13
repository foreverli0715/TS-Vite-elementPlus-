class LocalCache {
  /**
   * @function 缓存至浏览器
   * @param key
   * @param value
   */
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * @function 获取缓存的key值的value
   * @param key
   * @returns { any }
   */
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  /**
   * @function 删除缓存至浏览器的key、value
   * @param key
   */
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  /**
   * @function 全部清除
   */
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache
