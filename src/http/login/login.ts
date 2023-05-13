import zcsRequest from "..";
import { IAccount, IDataType } from "./type";

/**
 * @function 登录验证
 * @param account
 * @returns
 */
export function accountLoginRequest(account: IAccount) {
  return zcsRequest.request<IDataType>({
    url: '/user/login',
    method: 'POST',
    data: account
  })
}

/**
 * @function 获取用户信息
 * @param id
 * @returns
 */
export function userInfoByIdRequest(id: number) {
  return zcsRequest.request<IDataType>({
    url: `/user?id=${id}`,
    method: 'GET'
  })
}

/**
 * @function 获取菜单列表
 * @param id
 * @returns
 */
export function userMenuByRoleIdRequest(id: number) {
  return zcsRequest.request<IDataType>({
    url: `/role/menu?id=${id}`,
    method: 'GET'
  })
}
