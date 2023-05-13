import { MockMethod } from 'vite-plugin-mock'
import { userList, userRoleMenu} from "./data/data";

export default [
  //模拟token
  {
      url: "/user/login",
      method: "post",
      response: (data: Record<string,any>) => {
        if(data.body.account == 'adminzcs' && data.body.password == '123456'){
          return {
            code: 0,
            data: {
              id: 1,
              name: "zhoucs",
              token: "dajwsdajwxmclkawdjalwkda"
            }
          }
        }else if(data.body.account == 'admin' && data.body.password == '111111'){
          return {
            code: 0,
            data: {
              id: 2,
              name: "rooter",
              token: "dsadsakdklasddasdsadlakh"
            }
          }
        }else {
          return false
        }
      }
  },
  {
    url: "/user/userAll",
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: userList
      }
    }
  },
  //模拟用户信息
  {
    url: "/user",
    method: "GET",
    response: (data: Record<string,any>) => {
      return {
        code: 0,
        data: userList.filter((item) => {
          return item.id == data.query.id
        })
      }
    }
  },
  //模拟权限显示菜单
  {
    url: "/role/menu",
    method: "GET",
    response: (data: Record<string,any>) => {
      return {
        code: 0,
        data: userRoleMenu.filter((item) => {
          return item.role == data.query.id
        })
      }
    }
  }
] as MockMethod[]
