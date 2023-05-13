import { MockMethod } from 'vite-plugin-mock'
import { system } from './data/data'


export default [
  //工作台数据展示
  {
    url: '/user/system',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: system
      }
    }
  },
] as MockMethod[]
