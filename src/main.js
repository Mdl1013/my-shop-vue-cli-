// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 1 导入 vur-router
import router from './router'

// 2 将 路由 作为Vue的插件安装
Vue.use(router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 3 将路由实例与Vue实例关联到一起
  router
})
