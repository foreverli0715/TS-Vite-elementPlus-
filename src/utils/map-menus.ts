import { IBreadcrumb } from "@/components/base-ui/breadcrumb";
import { log } from "console";
import type { RouteRecordRaw } from "vue-router";

/**
 * @function 根据userMenus动态添加路由
 * @param userMenus
 * @returns routes
 */
export function mapMenusToRouters(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = import.meta.glob('../router/main/**/*.ts', {eager: true})
  for(const path in routeFiles){
    let routeFile: any = routeFiles[path]
    allRoutes.push(routeFile.default)
  }

  /**
   * @function 递归循环获取type=2的菜单
   * @param menus
   */
  const _recurseGetRoute =  (menus: any[]) => {
    for(const menu of menus){
      if(menu.type === 2){
        const route = allRoutes.find((route) => route.path === menu.url)
        if(route) routes.push(route)
      }else{
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

/**
 * @function 动态获取面包屑
 * @param userMenus
 * @param currentPath
 * @returns
 */
export function pathMapToBreadcrumb(userMenus: any[], currentPath: string): any {
 const breadcrumbs: IBreadcrumb[] = []
 for (const menu of userMenus){
  if(menu.type === 1 ){
    const findMenu = pathMapToBreadcrumb(menu.children ?? [], currentPath)
    if(findMenu) {
      breadcrumbs.push({ name: menu.name })
      breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
      return breadcrumbs
    }
  }else if(menu.type === 2 && menu.url === currentPath){
    if(menu.name === '工作台'){
      breadcrumbs.push({ name: menu.name })
      return breadcrumbs
    }
    return menu
  }
 }
}
