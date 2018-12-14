<template>
	<div id="home">
		<el-container>
			<!--给el-header设置 高度-->
			<el-header style="height: 70px;">
				<div class="logo">
					<!--这里可以放一般网站的logo-->
					<!--<img src="../assets/main/logo.png" alt="">-->
				</div>
				<div class="header-right">
					<div class="logout"  @click="layout">
					    <!--javascript:;为了防止a标签的默认行为，-->
						<a href="javascript:;">退出</a>
					</div>
					<div class="people">
						<!--映入iconfont 的字体图标-->
						<i class="iconfont icon-lianxirenwode"></i>
						张三
					</div>
					<div class="call">
						<i class="iconfont icon-lianxiwomen"></i>
						联系我们
					</div>
				</div>
			</el-header>
			<el-container>
				<el-aside width="160px" background-color="#26292E">
					<el-scrollbar style="height: 100%;">
						  <!-- el-menu: 导航菜单的组件 -->
				          <!-- default-active：默认高亮的菜单 -->
				          <!-- open close 展开和关闭的事件 -->
				          <!-- el-submenu: 子菜单 -->
				          <!-- el-menu-item-group: 子菜单中分组 -->
				          <!-- el-menu-item：子菜单中的每一项 -->
				          <!-- unique-opened: 保证只能打开一个子菜单 -->
				          <!-- router: 如果router为true，那么index就会作为路由的连接 -->
				          
						<el-menu :unique-opened='true' :router="true" text-color="#ffffff" active-text-color="#cccccc">
							<el-submenu index="1">
								<template slot="title"><i class="iconfont icon-shouye"></i>
									<span @click="gomain">
										首页
									</span>
								</template>
							</el-submenu>
						
							<el-submenu index="2">
								<template slot="title"><i class="iconfont icon-message-channel"></i>table</template>
								<el-menu-item-group>
									<el-menu-item index="/table">table</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<!--<el-submenu index="3">
								<template slot="title"><i class="iconfont icon-caiwu"></i>财值</template>
								<el-menu-item-group>
									<el-menu-item index="/FinancialOV">财览</el-menu-item>
									
								</el-menu-item-group>
							</el-submenu>-->-->

						</el-menu>
					</el-scrollbar>
				</el-aside>
				<el-container>
					<!--使用element的自带的滚动条，官方文档没有-->
					<el-scrollbar style="height: 100%;width: 100%;">

					<el-main>
						 <keep-alive>
				            <!-- 这里是会被缓存的视图组件 -->
				            <!-- $route.meta.keepAlive：如果是true，
				                     说明是缓存组件，通过keep-alive这个标签把缓存组件显示出来 -->
			              <router-view v-if="$route.meta.keepAlive">
			              </router-view>
			             </keep-alive>
			
			          <!-- 这里是不被缓存的视图组件 -->
			          <router-view v-if="!$route.meta.keepAlive">
			          </router-view>
					</el-main>
					</el-scrollbar>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		created() {

		},
		data() {
			return {

			}
		},
		methods: {
			gomain() {
				this.$router.push('/homeMain')
			},
          //退出功能
			layout() {
//				退出功能要移除localStorage中的myToken
				localStorage.removeItem('myToken')
//				跳转到首页
				this.$router.push('login')
//				退出成功提示
				this.$message.success('退出成功了')
			},
			
		},
	}
</script>

<style lang="less">
	#home {
		height: 100%;

		.el-container {
			height: 100%;

			.el-aside {
				background-color: #26292E;
				color: #333;
				height: 100%;
				line-height: 200px;
			}
		}
	}

	.el-scrollbar__wrap {
		/*禁止横向滚动条的出现*/
		overflow-x: hidden;
	}

	.el-header {

		color: #333;
		text-align: center;
		padding: 0;
		.logo {
			float: left;
			width: 160px;
			background-color: #26292E;
			height: 100%;
			line-height: 70px;
		}

		.header-right {
			float: right;
			height: 100%;
			line-height: 70px;

			.message {
				float: right;
				// margin-left: 45px;
			}

			.call {
				float: right;
				margin-left: 45px;
			}

			.people {
				float: right;
				margin-left: 45px;
			}

			.logout {
				float: right;
				margin-left: 45px;
				width: 65px;
				height: 100%;
				background-color: #32373D;

				a {
					/*去a标签的下划线可以在公共样式中配置*/
					text-decoration: none;
					color: #FFFFFF;
				}
			}
		}
	}

	.el-main {
		background-color: #F3F6FB;
		color: #333;
		padding: 30px;
		height: 100%;
	}
    @media only screen and (max-width: 1400px){
    	.el-main {
    		padding: 20px;
    		
    	}
    }
	.el-submenu__title i {
		margin-right: 10px;
	}

	.el-menu {
		background-color: #26292E;
        border-right: none;
		.el-menu-item-group {
			background-color: #32373D;
		}

		.el-menu-item.is-active {
			background-color: #49515c;
		}

		.el-submenu.is-opened {
			background-color: #5ABFDB;
		}
	}

	.main {
		width: 50px;
	}

	.el-menu-item:hover {
		background-color: #444d57;
		color: #FFFFFF !important;
	}

	.el-submenu__title:hover {
		background-color: #4a525d;
	}
</style>
