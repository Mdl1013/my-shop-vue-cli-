# vue-shop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# Vue 项目说明

- [接口文档地址](https://shop-api.circle.ink/)

## 本地搭建接口服务器

- 0 打开 phpStudy ，启动 MySQL 服务
- 1 在 Navicat 中，创建数据库（shop_admin），导入数据（shop_admin.sql）
- 2 修改 `shop-api/config/default.json` 将 password 配置项修改为你自己数据库的密码（ root ）
- 3 在 shop-api 目录中，打开终端，执行命令： `npm start` 启动接口服务器

### 使用

- 每天做项目其之前：1 先开启 phpStudy 中的 MySQL 服务 2 运行 `npm start` 启动 shop-api 即可

## 初始化项目

- 1 运行命令：`vue init webpack shop_admin_28`
- 2 在脚手架引导完毕后，通过 npm 下载项目中的依赖项
- 3 进入项目根目录： `cd shop_admin_28`
- 4 启动项目： `npm run dev`
- 5 将初始化项目中的默认内容删除
- 6 使用git管理：
  - 6.1 git init
  - 6.2 git add .
  - 6.3 git commit -m '01-项目初始化'

```html
? Project name shop_admin_28
? Project description A Vue.js project
? Author zqran <uuxnet@163.com>
? Vue build standalone
? Install vue-router? No
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm
```

## 手动配置路由

- 1 安装: `npm i vue-router`
- 2 在 main.js 中配置路由

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 1 导入 vur-router
import VueRouter from 'vue-router'

// 5 导入组件，配置路由
//  .vue 后缀可省略
import Home from '@/components/home/Home'
import Login from '@/components/login/Login'

// 2 将 路由 作为Vue的插件安装
Vue.use(VueRouter)
// 3 创建路由实例，配置路由
const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 4 将路由实例与Vue实例关联到一起
  router
})
```

## VSCode插件的说明

- `Vetur`：用来实现 Vue 单文件组件的高亮
- `ESLint`：用来在 VScode 中，提供 语法错误（红色波浪线） 的提示效果

## 项目关闭 ESLint 的步骤

- 1 打开 `config/index.js`
- 2 将 `dev.useEslint` 设置为false
- 3 重启项目（ npm run dev ），就可以关闭ESLint

## 远程仓库

- [码云](https://gitee.com)
- [远程仓库地址](https://gitee.com/zqran/shop_admin_28)

```bash
# 将远程仓库地址 与 shop 名称，关联到一起
git remote add shop https://gitee.com/zqran/shop_admin_28.git
# 这句命令执行一次即可，将 master 设置为默认分支，以后再提交代码到远程仓库的时候，就不需要再执行的 master 分支了
git push -u shop master

# 将代码推送到远程仓库的master分支
git push shop
```

## ElementUI 组件库

- [ElementUI 文档](http://element-cn.eleme.io/#/zh-CN/component/installation)

### 使用步骤

- 1 安装：`npm i element-ui`
- 2 在 `main.js` 中，导入ElementUI：

```js
// 导入 ElementUI组件库
import ElementUI from 'element-ui'
// 导入组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
// 安装插件
Vue.use(ElementUI)
```

- 3 使用组件库：
  - 3.1 从文档中，选择要使用的组件
  - 3.2 复制文档中提供的示例代码到自己的组件中

```html
<!-- 在 Home.vue 组件中，添加以下两句代码： -->

<el-button type="primary" round>主要按钮</el-button>
<el-button type="success" round>成功按钮</el-button>
```

## 项目中通过ElementUI实现功能步骤

- 1 在 element-ui 文档中，找到要使用的组件
- 2 从该组件文档中，找到要使用的功能，并且点击 `显示代码` 按钮，拿到该组件的示例代码
- 3 将示例代码拷贝到自己的项目组件中，先让示例代码在自己的项目中跑起来
- 4 将示例代码修改为适合你项目的功能
  - 4.1 分析示例代码的 结构 和 js 代码逻辑

## 项目中使用axios

### 基本使用

- 1 安装：`npm i axios`
- 2 哪个组件中使用 axios，就在哪个组件中导入 axios

## 编程式导航

- 说明：通过JS代码来实现路由跳转

```js
// push参数：表示要跳转到的路由path
this.$router.push('/home')
```

## 登录访问限制

- 注意：没有登录的情况下，不能访问 后台首页（除了登录页以外的其他页面）
- 1 如何判断有没有登录
- 2 如何进行没有登录情况下的访问限制

### 如何判断有没有登录

- 原来，我们是通过 sessionId 来知道是否登录
- 登录成功后，服务器会返回一个 sessionId ，存储到浏览器的 cookie 中
- cookie 的特点：会随着每次请求，自动发送给服务器
- 这就是： 状态保持
- 为什么需要状态保持？？？ HTTP协议是无状态的

### HTTP协议是无状态的

- 说明：HTTP协议是无状态的，也就是说：服务器是不会记录，两次请求是不是同一个客户端（浏览器）发送过来的
- 比如：第一次请求完成登录，再发送第二次请求，服务器还是不知道你已经登陆过了

### Vue项目中的状态保持说明

- 我们的项目中没有使用 cookie+sessionid 机制，而是使用 token 机制
- 当我们登录成功后， 服务器会给我们返回一个 token 令牌
- 如果要实现状态保持，现在就需要自己在每次请求的时候，将 token 放在接口中，一起发送给服务器
- 服务器接收到这个 token 后，就知道你已经登录过，就允许你访问我们的接口了

### 如何进行访问限制

- 状态保持

```js

```