import { MockMethod } from 'vite-plugin-mock'
import { orderList } from './data/data'
import Mock from 'mockjs'

export default [
  //订单列表数据展示
  {
    url: '/order/orderList',
    method: 'get',
    response: () => {
      return {
        code: 0,
        total: parseInt(orderList.items.length),
        data: orderList.items
      }
    }
  },
  {
    url: '/order/orderListFilter',
    method: 'post',
    response: (config: any) => {
      if(config.body){
        return {
          code: 0,
          data: orderList.items.filter((item: any) => {
            return Object.keys(config.body).every(key => {
              return String(item[key]).toLowerCase().includes(
                String(config.body[key]).trim().toLowerCase()
              )
            })
          })
        }
      }else{
        return {
          code: 1,
          message: '修改失败'
        }
      }
    }
  },
  {
    url: '/order/orderItemDelete',
    method: 'post',
    response: (config: any) => {
      if (config.body) {
        orderList.items = orderList.items.filter((item: any) => item.id != config.body.id)
        return {
          code: 0,
          message: '删除成功'
        }
      }else{
        return {
          code: 1,
          message: '删除失败'
        }
      }
    }
  },
  {
    url: '/order/orderItemEdit',
    method: 'post',
    response: (config: any) => {
      if(config.body) {
        orderList.items.some((item: any) => {
          if(item.id == config.query.id) {
            item.status = config.body.status
            item.orderId = config.body.orderId
            return true
          }
        })
        return {
          code: 0,
          message: '编辑成功'
        }
      }else {
        return {
          code: 1,
          message: '编辑失败'
        }
      }
    }
  },
  {
    url: '/order/orderItemNew',
    method: 'post',
    response: (config: any) => {
      if(config.body) {
        const newInfo = config.body
        newInfo.id = parseInt(orderList.items.length) + 1
        newInfo.createAt = Mock.mock('@now')
        orderList.items.push(config.body)
        return {
          code: 0,
          message: '新增成功'
        }
      }else {
        return {
          code: 1,
          message: '编辑失败'
        }
      }
    }
  }
] as MockMethod[]
