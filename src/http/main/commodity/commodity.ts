import zcsRequest from "@/http";
import { IDataType } from "@/http/login/type";

/**
 * 获取商品列表
 * @returns
 */
export function commodityListByTableRequest() {
  return zcsRequest.request<IDataType>({
    url: '/commodity/commodityLsit',
    method: 'GET',
  })
}

/**
 * @function 查询具体产品（模糊搜索）
 * @param formData
 * @returns
 */
export function commodityListBySearchRequest(formData: any) {
  return zcsRequest.request<IDataType>({
    url: '/commodity/commodityLsitFilter',
    method: 'POST',
    data: formData
  })
}

/**
 * @function 删除具体用户
 * @param tableItem
 * @returns
 */
export function commodityListByDeleteRequest(tableItem: any) {
  return zcsRequest.request<any>({
    url: '/commodity/commodityItemDelete',
    method: 'POST',
    data: tableItem
  })
}

/**
 * @function 修改产品信息
 * @param userId
 * @param editInfo
 * @param url
 * @returns
 */
export function commodityListByEditRequest( userId: any, editInfo: any, url: string) {
  return zcsRequest.request<any>({
    url: `${url}?id=${userId}`,
    method: 'POST',
    data: editInfo
  })
}

/**
 * @function 新增产品信息
 * @param newInfo
 * @param url
 * @returns
 */
export function commodityListByNewRequest(newInfo: any, url: string) {
  return zcsRequest.request<any>({
    url: url,
    method: 'POST',
    data: newInfo
  })
}
