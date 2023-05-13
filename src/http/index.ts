import ZCSRequest from "./request/request"

const zcsRequest = new ZCSRequest({
  baseURL:  import.meta.env.VITE_BASE,
  timeout: import.meta.env.VITE_TIME,
  interceptors: {
    requestInterceptor(config) {
        return config
    },
    requestInterceptorCatch(error) {
        return error
    },
    responseIntercaptor(res) {
        return res
    },
    responseInterceptorCatch(error) {
        return error
    },
  }
})
// service 统一出口
export default zcsRequest
