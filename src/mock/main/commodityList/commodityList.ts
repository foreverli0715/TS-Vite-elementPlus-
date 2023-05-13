import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { commodityList } from './data/data'

let commodityListNew = commodityList

export default [
  //商品列表数据展示
  {
    url: '/commodity/commodityLsit',
    method: 'get',
    response: () => {
      return {
        code: 0,
        total: parseInt(commodityListNew.length),
        data: commodityListNew
      }
    }
  },
  {
    url: '/commodity/commodityLsitFilter',
    method: 'post',
    response: (config: any) => {
      if(config.body){
        return {
          code: 0,
          data: commodityListNew.filter((item: any) => {
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
    url: '/commodity/commodityItemDelete',
    method: 'post',
    response: (config: any) => {
      if (config.body) {
        commodityListNew = commodityListNew.filter((item: any) => item.id != config.body.id)
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
    url: '/commodity/commodityItemEdit',
    method: 'post',
    response: (config: any) => {
      if(config.body) {
        commodityListNew.some((item: any) => {
          if(item.id == config.query.id) {
            item.name = config.body.name
            item.price = config.body.price
            item.amount = config.body.amount
            item.status = config.body.status
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
    url: '/commodity/commodityItemNew',
    method: 'post',
    response: (config: any) => {
      if(config.body) {
        const newInfo = config.body
        newInfo.id = parseInt(commodityListNew.length) + 1
        newInfo.createAt = Mock.mock('@now')
        commodityListNew.push(config.body)
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
