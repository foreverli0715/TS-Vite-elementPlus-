import zcsRequest from "@/http";
import { IDataType } from "@/http/login/type";
/**
 * @function 获取用户列表
 * @returns
 */
export function userListByTableRequest() {
  return zcsRequest.request<IDataType>({
    url: '/user/userList',
    method: 'GET'
  })
}
/**
 * @function 查询具体用户（模糊搜索）
 * @param formData
 * @returns
 */
export function userListBySearchRequest(formData: any) {
  return zcsRequest.request<IDataType>({
    url: '/user/userListFilter',
    method: 'POST',
    data: formData
  })
}
/**
 * @function 删除具体用户
 * @param tableItem
 * @returns
 */
export function userListByDeleteRequest(tableItem: any) {
  return zcsRequest.request<any>({
    url: '/user/userItemDelete',
    method: 'POST',
    data: tableItem
  })
}
/**
 * @function 修改用户信息
 * @param userId
 * @param editInfo
 * @param url
 * @returns
 */
export function userListByEditRequest( userId: any, editInfo: any, url: string) {
  return zcsRequest.request<any>({
    url: `${url}?id=${userId}`,
    method: 'POST',
    data: editInfo
  })
}

/**
 * @function 新增用户信息
 * @param newInfo
 * @param url
 * @returns
 */
export function userListByNewRequest(newInfo: any, url: string) {
  return zcsRequest.request<any>({
    url: url,
    method: 'POST',
    data: newInfo
  })
}
