export interface IAccount {
  /**
   * 用户账号
   */
  account: string
  /**
   * 用户密码
   */
  password: string
}

export interface IDataType<T = any> {
  code: number
  total?: number
  /**
   * 返回的数据集
   */
  data: T
}
