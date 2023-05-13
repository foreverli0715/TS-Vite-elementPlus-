import zcsRequest from "@/http";
import { IDataType } from "@/http/login/type";
/**
 * @function 获取订单列表
 * @returns
 */
export function orderListByTableRequest() {
  return zcsRequest.request<IDataType>({
    url: '/order/orderList',
    method: 'GET'
  })
}
/**
 * @function 查询具体订单（模糊搜索）
 * @param formData
 * @returns
 */
export function orderListBySearchRequest(formData: any) {
  return zcsRequest.request<IDataType>({
    url: '/order/orderListFilter',
    method: 'POST',
    data: formData
  })
}
/**
 * @function 删除订单
 * @param tableItem
 * @returns
 */
export function orderListByDeleteRequest(tableItem: any) {
  return zcsRequest.request<any>({
    url: '/order/orderItemDelete',
    method: 'POST',
    data: tableItem
  })
}
/**
 * @function 修改订单信息
 * @param userId
 * @param editInfo
 * @param url
 * @returns
 */
export function orderListByEditRequest( userId: any, editInfo: any, url: string) {
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
export function orderListByNewRequest(newInfo: any, url: string) {
  return zcsRequest.request<any>({
    url: url,
    method: 'POST',
    data: newInfo
  })
}
