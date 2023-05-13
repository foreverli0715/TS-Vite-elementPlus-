import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZCSRequestHook<T = AxiosResponse>{
  /**
   * 实例中定义的请求拦截
   * @param config
   * @returns
   */
  requestInterceptor?: (config: AxiosRequestConfig) => any
  requestInterceptorCatch?: (error: any) => any
  /**
   * 实例中的响应拦截
   * @param res
   * @returns
   */
  responseIntercaptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface ZCSRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZCSRequestHook<T>
  /**
   * 全屏加载
   */
  showLoading?: boolean
}


