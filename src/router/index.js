import Vue from 'vue'
import Router from 'vue-router'

//  导入组件，配置路由
//  .vue 后缀可省略
import Home from '@/components/home/Home'
import Login from '@/components/login/Login'

// 安装路由插件
Vue.use(Router)
// 3 创建路由实例，配置路由
const router =new Router({
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
// 添加导航守卫，用来实现登录访问限制
// 说明：每次切换路由（访问页面），都会先执行导航守卫，那么，是否登录的逻辑判断就可以放在
//      导航守卫中判断了
router.beforeEach((to,from,next) =>{ 
  if(to.path === '/login'){
    return next()
  }
  const token =localStorage.getItem('token');
  if (token){
    return next()
  }else {
    return next('/login')
  }
})

// 导出路由
export default router
