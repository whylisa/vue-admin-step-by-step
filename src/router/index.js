import Vue from 'vue'
import Router from 'vue-router'
//引入nprogress进度条
import NProgress from 'nprogress'
//引入nprogress进度条的样式
import 'nprogress/nprogress.css'
//在打包过程中每一个组件都会打包成一个js文件，如果不使用使用/* webpackChunkName: "home" */
//在打包的时候就会生成0.js,1.js等等，使用了之后就会打包成home.js
// 导入 Login 组件（注意，不要添加 .vue 后缀）
//这是路由的异步加载，！important,这是优化项目必须的

//引入home组件/* webpackChunkName: "login" */
const Home = () => import(/* webpackChunkName: "home" */ '@/components/home')
//引入登录组件
const Login = () => import(/* webpackChunkName: "login" */ '@/components/login')
//引入table组件
const Table = () => import(/* webpackChunkName: "table" */ '@/components/table/table')
//引入homeMain组件
const HomeMain = () => import(/* webpackChunkName: "HomeMain" */ '@/components/HomeMain')

//这里是同步加载
//import Login from '@/components/login/Login'

Vue.use(Router)

const router = new Router({
	mode: 'history',//开启了history模式，去除了#，
	 // 在vue中，一般来说通过实例去访问某个属性的
     // vm.xxxx  vm.$set  vm.$refs  vm.$router
	routes: [
		{
			path: '/',
			redirect: '/homeMain'//路由的重定向
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			// children 用来配置子路由，将来匹配的组件会展示在 Home 组件的 router-view 中
		    // 对于子路由path来说：
		    // 1 如果不是以 / 开头，那么，哈希值为： 父级path + / + 子级path
		    //    也就是： /home/homeMain
		    // 2 如果子级路由的path是以 / 开头的，那么将来的哈希值为：/users 不再带有父级的path了
            //    也就是：/homeMain
            //这是页面中的子路由，在页面中必须声明router-view作为出口
			children: [
				{
					path: '/homeMain',
					name: 'homeMain',
					component: HomeMain
				},
				{
					path: '/table',
					name: 'table',
					component:Table
				}
			]
		}
	]
});
// 给router配置导航守卫
// to: 去哪儿
// from: from 哪儿来
// next() :  next()：放行   next('/login') 去login组件
// 在登录成功以后，将 token 存储到 localStorage 中
// 在 导航守卫 中先判断当前访问的页面是不是登录页面
// 如果是登录页面，直接放行（next()）
// 如果不是登录页面，就从 localStorage 中获取 token，判断有没有登录
// 如果登录了，直接放行（next()）
// 如果没有登录，就跳转到登录页面让用户登录（next('/login')
router.beforeEach((to, from, next) => {
//	开启进度条
	NProgress.start()
//	获取是否有token
	let token = localStorage.getItem('myToken')
	// 如果已经就是要去login了，就不需要拦截了
	if (to.path === '/login' || token) {
		next()
	}else {
		next('/login')
	}
	
});
router.afterEach(() => {
//	关闭进度条
	NProgress.done()
})

export default router