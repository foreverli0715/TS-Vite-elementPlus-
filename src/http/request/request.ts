import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus';
import type { LoadingInstance } from "element-plus/lib/components/loading/src/loading";
import { ZCSRequestHook, ZCSRequestConfig } from './type'

class ZCSRequest {
  instance: AxiosInstance
  interceptors?: ZCSRequestHook
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: ZCSRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

    //每个实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseIntercaptor,
      this.interceptors?.responseInterceptorCatch
    )

    //所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // if (this.showLoading) {
        //   this.loading = ElLoading.service({
        //     lock: true,
        //     text: '正在请求数据...',
        //     background: 'rgba(0,0,0,0.5)'
        //   })
        // }
        return config
      },
      (err) => {
        return err
      })

    this.instance.interceptors.response.use(
      (res) => {
          this.loading?.close()
        return res.data
      },
      (err) => {
        this.loading?.close()
        return err
      })
  }

  request<T>(config: ZCSRequestConfig<T>): Promise<T>{
    return new Promise((resolve, reject) => {
            //每个请求单独做拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance.request<any, T>(config)
      .then((res) => {
        if (config.interceptors?.responseIntercaptor) {
          res = config.interceptors.responseIntercaptor(res)
        }
        this.showLoading = true
        resolve(res)
      })
      .catch((err) => {
        this.showLoading = true
        reject(err)
        return err
      })
    })
  }
}

export default ZCSRequest
