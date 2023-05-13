import { MockMethod } from 'vite-plugin-mock'
import { userList } from './data/data'
import Mock from 'mockjs'

export default [
  //用户列表数据展示
  {
    url: '/user/userList',
    method: 'get',
    response: () => {
      return {
        code: 0,
        total: parseInt(userList.items.length),
        data: userList.items
      }
    }
  },
  {
    url: '/user/userListFilter',
    method: 'post',
    response: (config: any) => {
      if(config.body){
        return {
          code: 0,
          data: userList.items.filter((item: any) => {
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
    url: '/user/userItemDelete',
    method: 'post',
    response: (config: any) => {
      if (config.body) {
        userList.items = userList.items.filter((item: any) => item.id != config.body.id)
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
    url: '/user/userItemEdit',
    method: 'post',
    response: (config: any) => {
      if(config.body) {
        userList.items.some((item: any) => {
          if(item.id == config.query.id) {
            item.name = config.body.name
            item.cellphone = config.body.cellphone
            item.realName = config.body.realName
            item.status = config.body.status
            item.email = config.body.email
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
    url: '/user/userItemNew',
    method: 'post',
    response: (config: any) => {
      if(config.body) {
        const newInfo = config.body
        newInfo.id = parseInt(userList.items.length) + 1
        newInfo.createAt = Mock.mock('@now')
        userList.items.push(config.body)
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
