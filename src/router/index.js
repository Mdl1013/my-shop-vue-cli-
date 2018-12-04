import Vue from 'vue'
import Router from 'vue-router'

//  导入组件，配置路由
//  .vue 后缀可省略
import Home from '@/components/home/Home'
import Login from '@/components/login/Login'

// 安装路由插件
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
