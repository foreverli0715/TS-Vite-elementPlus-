import zcsRequest from "@/http";
import { IDataType } from "@/http/login/type";
/**
 * 获取所有管理员信息
 * @returns
 */
export function userAllInfoByRuquest() {
  return zcsRequest.request<IDataType>({
    url: '/user/userAll',
    method: 'GET',
  })
}
