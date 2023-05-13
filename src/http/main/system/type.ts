export interface WeatherType {
  /**
   * 高德账号的密钥
   */
  key: string,
  /**
   * 需要查询天气的城市编码
   */
  city: string
}

export interface IDataWeatherType<T = any> {
  count: string,
  info: string,
  infocode: string,
  /**
   * 返回的数据集
   */
  lives: T,
  status: string
}
