import zcsRequest from "@/http";
import weatherRequest from "../main";
import { IDataType } from "@/http/login/type";
import { WeatherType, IDataWeatherType} from "./type";

/**
 * @function 获取高德天气API的天气信息
 * @param weatherInfo
 * @returns
 */
export function weatherInfoRequest(weatherInfo: WeatherType) {
  return weatherRequest.request<IDataWeatherType>({
    url: `/v3/weather/weatherInfo?key=${weatherInfo.key}&city=${weatherInfo.city}`,
    method: 'GET'
  })
}

/**
 * 获取工作台相关数据
 * @returns
 */
export function systemInfoWorkRequest() {
  return zcsRequest.request<IDataType>({
    url: '/user/system',
    method: 'GET'
  })
}
