import ZCSRequest from "../request/request";

const weatherRequest = new ZCSRequest({
  baseURL: 'https://restapi.amap.com',
  timeout: import.meta.env.VITE_TIME,
})

export default weatherRequest
