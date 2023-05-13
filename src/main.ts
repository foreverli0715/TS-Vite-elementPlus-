import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import 'normalize.css'
import './assets/css/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入Elloading的css样式文件
import 'element-plus/theme-chalk/el-loading.css';
//暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
import localCache from '@/utils/cache'
import { mapMenusToRouters } from "@/utils/map-menus";

// 创建vue实例
const app = createApp(App);

//全局注册elementplus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
if(localCache.getCache('token')){
  // userMenus 映射至 routes
  const routes = mapMenusToRouters(localCache.getCache('userMenu'))
  // 将routes 映射到路由main.children上
  routes.forEach((route) => router.addRoute('Main', route))
}
app.use(store)
app.use(router);

// 挂载实例
app.mount('#app');
