// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入路由实例
import router from './router'
// 导入element-ui框架
import ElementUi from 'element-ui'
// 导入组件的 样式
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'
// 安装插件
Vue.use(ElementUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 将路由实例与Vue实例关联到一起
  router
})
