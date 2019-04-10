# vue-admin-stepbystep

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
# Vue 项目

- [项目地址 https://github.com/whylisa/vue-admin-step-by-step)

## 项目功能

- 1 登录
- 2 首页
- 3 退出
- 4 table页

## 项目技术点
- 1，使用vue
- 2，使用echarts 
- 3, 使用json-server 
- 4, 使用node起一个简单的服务,服务于接口
- 5, 使用axios
- 6, vue-router的使用规则(异步加载，和同步加载)
- 7, 回话拦截的使用（localstorage or cookie）
- 8, 配合element-UI 
- 9, 修改组件里面的样式里面的坑
- 10, 打包时的优化
- 11, DNS优化
- 12, 配置本地代理，使用接口
- 13, 使用axios配合json-server 模拟增删改查
- 14, 使用nprogress 插件
- 15, 鲜为人知的element-UI 的滚动条
- 16, 栅格布局，大小屏适应配合媒体查询
- 17, css使用less 
- 18, 代码风格，个人风格，禁用了jslint 防止不懂得小伙伴抓狂
- 19, 兼容性的处理

## 项目搭建

- 1 `vue init webpack XX`

```html
Project name                            ：默认
Project description                     ：默认
Author                                  ：默认
Vue build                               ：选择 Runtime + Compiler
Install vue-router?                     ：Y
Use ESLint to lint your code?           ：Y 选择 Standard
Set up unit tests                       ：n
Setup e2e tests with Nightwatch?        : n
Should we run `npm install` for you after the project has been created? (recommended) : Yes, use NPM
```

- 2 进入项目：cd vue-admin-stepbystep
- 3 运行项目：npm run dev

## 如何添加一个新的功能？？？

- 1 在 `components` 中新建一个文件夹（login），在文件中创建组件(Login.vue)
- 2 在 `router/index.js` 中导入组件（login.vue）
- 3 配置路由规则

## 在项目中使用 element-ui

- [ElementUI 文档](http://element-cn.eleme.io/#/zh-CN/component/installation)
- 安装：`npm i element-ui -S`

```js
// main.js

// 导入elementui - js
import ElementUI from 'element-ui'
// 导入elementui - css
import 'element-ui/lib/theme-chalk/index.css'
// 安装插件
Vue.use(ElementUI)
```

---

## 项目启动做了什么

- 1 在终端中运行：`npm run dev`，实际上就是运行了：`webpack-dev-server ...`
- 2 使用 webpack-dev-server 开启一个服务器
- 3 根据指定的入口 `src/main.js` 开始分析入口中使用到的模块
- 4 当遇到 `import` 的时候，webpack 就会加载这些模块内容（如果有重复模块，比如：Vue，实际上将来只会加载一次），遇到代码就执行这些代码
- 5 创建 Vue 实例，将 App 组件作为模板进行编译，并且将 App 组件中 template 的内容渲染在页面 #app 的位置

## 登录功能

- 1 安装：`npm i -S axios`
- 2 在 `Login.vue` 组件中导入 axios
- 3 使用 axios 根据接口文档来发送请求，完成登录

## 编程式导航

- 就是通过 JS 代码来实现路由的跳转功能

```js
// 注意：是 router 不是 route
// router用来实现路由跳转，route用来获取路由参数
// push 方法的参数为：要跳转到的路由地址（path）
this.$router.push('/home')
```

## 密码

- 给输入框组件添加 type="password" 就变为密码框状态了

```html
<el-input type="password" v-model="loginForm.password"></el-input>
```

## 登录拦截

- 说明：在没有登录的情况不应该让用户来访问除登录以外的任何页面

### 登录和拦截的整个流程说明

- 1 在登录成功以后，将 token 存储到 localStorage 中
- 2 在 导航守卫 中先判断当前访问的页面是不是登录页面
- 3 如果是登录页面，直接放行（next()）
- 4 如果不是登录页面，就从 localStorage 中获取 token，判断有没有登录
- 5 如果登录了，直接放行（next()）
- 6 如果没有登录，就跳转到登录页面让用户登录（next('/login')）

## token 机制的说明

- 在项目中，如果登录成功了，那么，服务器会给我们返回一个 token
- 这个 token 就是登录成功的标识
- 这个 token 就相当于使用 cookie+session 机制中的 sessionid

## 公司人员和项目开发流程

- 1 产品经理定制项目的需求
- 2 分配任务：先将所有的任务分配到项目组，然后，再由项目组具体分配给每个开发人员
- 3 开发：拿到 产品原型 + 需求文档 + UI 设计稿 资料，转化为 HTML 页面，完成功能
- 4 功能完成后，自己测试有没有 Bug
- 5 由测试人员来测试你的功能，当测试出 Bug 后，就会通过 禅道 这样的项目管理系统，来提出 Bug
- 6 由 自己 修改 测试人员提出来的 bug
- 7 最终，没有 bug 了，项目才会上线

```html
产品经理（Product Manager）
  提需求
  产出： 产品原型 + 需求文档
  原型设计软件：Axure 、墨刀

UI（设计）
  将 产品经理 给的 原型图 设计为 好看的UI稿

FE（前端）front-end
  产品原型 + 需求文档 + UI设计稿 ===> HTML页面

BE（后端） back-end
  给前端提供数据接口

测试人员
  产品原型 + 需求文档 + UI设计稿 来测试我们写的功能
  发现你的功能 与 需求 不一致，那就说明除Bug了，那么，测试人员就会提Bug
  Bug系统： 禅道

项目经理（管理技术）
  技术攻坚，与其他项目组人员沟通，分配任务 等
```

## vue 单文件组件中的 scoped

- 作用：给 `style` 标签添加 `scoped` 属性以后，样式只会对当前组件中的结构生效，而不会影响到其他组件

## vue 单文件组件中的 lang

- 作用：添加 `lang="less"` 后，就可以使用 less 语法了
- 但是需要自己安装：`npm i -D less less-loader`

## VSCode 中使用 Vetur 插件格式化单文件组件的 template

- 打开设置，配置：`"vetur.format.defaultFormatter.html": "js-beautify-html"`

## 接口调用的说明

- 注意：**所有接口都需要传递 token，只有传递了正确的 token，服务器才会将数据返回给前端**
- 如果没有传递`token`，服务器会返回 `401` ，告诉接口调用者，没有权限来访问这个接口

---

## cookie+session VS token

- [干掉状态：从 session 到 token](https://github.com/zqran/blog/issues/2)

## Git 使用

- [远程分支](https://blog.csdn.net/u012701023/article/details/79222731)

```bash
# 克隆仓库
git clone [仓库地址]

# 推送
git push [仓库地址] master

# 简化推送地址
git remote add XX [仓库地址]
git push -u XX master
# 第一次执行上面两条命令，以后只需要输入以下命令即可
git push XX

# 拉取
git pull [仓库地址] master
git pull XX master
```



## 路由参数分页

- 1 配置分页路由参数, 参数是可选的
  - 参数可选后, 路由就能够匹配: `/goods` 或者 `/goods/3`
- 2 使用路由来分页, 有两种情况需要处理:
- 3 第一种: 进入页面,就要根据当前路由参数中的页码,来获取到对应页的数据
- 4 第二种: 点击分页组件获取数据, 需要做两件事:
  - 4.1 获取到当前页的数据( 调用获取数据的方法 )
  - 4.2 修改哈希值为当前页码 ( this.$router.push() )
- 5 点击分页按钮获取数据的第二种思路:
  - 5.1 点击分页按钮, 触发了分组件的 pageChange 事件
  - 5.2 在 pageChange 事件中修改了路由( this.$router.push() )
  - 5.3 路由发生改变后, watch 中的 $route 监视到了路由的改变
  - 5.4 在 `$route(to) {}` 方法中, 通过参数 to 获取到当前页码, 重新调用获取数据的方法来获取当前页的数据
  
## 项目打包和优化

- 打包命令：`npm run build`

## 按需加载

- 1 修改 `router/index.js` 中导入组件的语法

```js
// 使用：
const Home = () => import('@/components/home/Home')
// 替换：
// import Home from '@/components/home/Home'

// 给打包生产的JS文件起名字
const Home = () => import(/* webpackChunkName: 'home' */ '@/components/home/Home')

// chunkName相同，将 goods 和 goods-add 两个组件，打包到一起
const Goods = () => import(/* webpackChunkName: 'goods' */'@/components/goods')
const GoodsAdd = () => import(/* webpackChunkName: 'goods' */'@/components/goods-add')
```

- 2 （*该步可省略*）修改 `/build/webpack.prod.conf.js` 中的chunkFilename

```js
{
  // [name] 代替 [id]
  chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
}
```

## 使用CDN

- [开源项目 CDN 加速服务](https://www.bootcdn.cn/)

- 1 在 `index.html` 中引入CDN提供的JS文件
- 2 在 `/build/webpack.base.conf.js` 中（resolve前面）添加配置 externals
- **注意**：通过CDN引入 element-ui 的样式文件后，就不需要在 main.js 中导入 element-ui 的CSS文件了。所以，直接注释掉 main.js 中的导入 element-ui 样式即可

- `externals`配置：

```js
externals: {
  // 键：表示 导入包语法 from 后面跟着的名称
  // 值：表示 script 引入JS文件时，在全局环境中的变量名称
  vue: 'Vue',
  axios: 'axios',
  'vue-router': 'VueRouter',
  'element-ui': 'ELEMENT',
  moment: 'moment',
  'vue-quill-editor': 'VueQuillEditor'

  BMap: 'BMap',
  echarts: 'echarts',
}

import ElementUI from 'element-ui'
```

### 常用包CDN

- [vue](https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.min.js)
- [vue-router](https://unpkg.com/vue-router@3.0.1/dist/vue-router.min.js)
- [axios](https://unpkg.com/axios/dist/axios.min.js)
- [element-ui JS](https://unpkg.com/element-ui/lib/index.js)
- [element-ui CSS](https://unpkg.com/element-ui/lib/theme-chalk/index.css)
- [moment](https://cdn.bootcss.com/moment.js/2.22.1/moment.min.js)

- 说明：
  - 1 先在官方文档查找提供的CDN
  - 2 如果没有，在 `https://www.bootcdn.cn/` 或其他 CDN提供商 查找

```html
<!-- Include the Quill library -->
<script src="https://cdn.bootcss.com/quill/1.3.4/quill.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<!-- Quill JS Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue-quill-editor@3.0.4/dist/vue-quill-editor.js"></script>
<!-- Include stylesheet -->
<link href="https://cdn.bootcss.com/quill/1.3.4/quill.core.min.css" rel="stylesheet">
<link href="https://cdn.bootcss.com/quill/1.3.4/quill.snow.min.css" rel="stylesheet">
<link href="https://cdn.bootcss.com/quill/1.3.4/quill.bubble.min.css" rel="stylesheet">
```

### 移除console

```js
new webpack.optimize.UglifyJsPlugin({
  compress:{
    warnings: false,
    drop_debugger: true,
    drop_console: true
  }
})
```

## 缓存和保留组件状态

- [keep-alive](https://www.jianshu.com/p/0b0222954483)
- 解决方式：使用 `keep-alive` ，步骤如下：

```html
1 在需要被缓存组件的路由中添加 meta 属性
  meta 属性用来给路由添加一些元信息（其实，就是一些附加信息）
{
  path: '/',
  name: 'home',
  component: Home,
  // 需要被缓存
  meta: {
    keepAlive: true
  }
}

2 修改路由出口，替换为以下形式：
  根据 meta 是否有 keepAlive 属性，决定该路由是否被缓存
<keep-alive>
  <!-- 这里是会被缓存的视图组件 -->
  <router-view v-if="$route.meta.keepAlive">
  </router-view>
</keep-alive>

<!-- 这里是不被缓存的视图组件 -->
<router-view v-if="!$route.meta.keepAlive">
</router-view>
```

## 启用路由的 History 模式

- 通过在路由中添加 `mode: 'history'` 可以去掉 浏览器地址栏中的 #
- 在开发期间，只需要添加这个配置即可
- 但是，在项目打包以后，就会出现问题

```html
// 去掉 # 后，地址变为：

http://localhost:8080/goods

那么，服务器需要正确处理 /goods 才能正确的响应内容，
但是，/goods 不是服务端的接口，而是 用来在浏览器中实现 VueRouter 路由功能的
```

### 后端的处理方式

- 1 优先处理静态资源
- 2 对于非静态资源的请求，全部统一处理返回 index.html
- 3 当浏览器打开 index.html 就会加载 路由的js 文件，那么路由就会解析 URL 中的 /login 这种去掉#的路径了


