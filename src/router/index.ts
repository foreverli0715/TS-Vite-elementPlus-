import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect:'/main/system'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/pages/main/main.vue'),
    children: []
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/notFound/notFound.vue')
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

//全局路由守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
       return '/login'
    }
  }
})

// 使用TS扩展
// 如果不使用扩展 将会是unknow 类型
declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
 }

export default router;
