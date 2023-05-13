import { defineStore } from 'pinia'
import { accountLoginRequest, userInfoByIdRequest, userMenuByRoleIdRequest } from '@/http/login/login'
import localCache from '@/utils/cache'
import type { IAccount } from '@/http/login/type'
import type { IRootState  } from "./type";
import router from '@/router';
import { mapMenusToRouters } from "@/utils/map-menus";

//Login
const userLoginStore = defineStore('loginRoot', {
  //开启数据持久化
  persist: true,
  state: ():IRootState => {
    return {
      token: '',
      userInfo: {},
      userMenu: []
    }
  },
  actions: {
    /**
     * @function 异步处理登录模块所需的逻辑并保存相关接口数据
     * @param userLoginData {IAccount} 登录模块提交的账号、密码
     */
    async login(userLoginData: IAccount) {
      //登录验证
      const loginResult = await accountLoginRequest(userLoginData)
      const {id, token} = loginResult.data
      this.token = token
      localCache.setCache('token', this.token)
      //通过登录验证获取到id后继续获取用户信息，否则无法获取
      const userInfoResult = await userInfoByIdRequest(id)
      const [userInfo] = userInfoResult.data
      this.userInfo = userInfo
      localCache.setCache('userInfo', this.userInfo)
      //请求用户菜单
      const userMenuResult = await userMenuByRoleIdRequest(this.userInfo.role.id)
      this.userMenu = userMenuResult.data
      localCache.setCache('userMenu', this.userMenu)
      // 跳转首页
      setTimeout(() => {
        router.push('/main/system')
      }, 1000)
      // userMenus 映射至 routes
      const routes = mapMenusToRouters(this.userMenu)
      // 将routes 映射到路由main.children上
      routes.forEach((route) => router.addRoute('Main', route))
    }
  }
})

export default userLoginStore
