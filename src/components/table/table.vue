<template>
	<div class="table">
		<div class="t-top">
			<!--使用el-input 要注意，他默认占父级100%的宽度-->
			<el-input v-model="query" placeholder="请输入内容"></el-input>
			<!--el-button 绑定点击事件向后台发送数据查询-->
			<!--在此处通常会涉及到模糊查询，此时我们还需要绑定keyup事件，向后台请求数据，然后渲染一个小的下拉框，我们需要做的是发送查询的字段给后台，
			后台使用sql语句模糊查询，我们渲染就可以-->
			<el-button type="primary" @click="search">查询</el-button>
		</div>
		<div class="t-bottom">
			
			    <!-- el-table:表格组件 -->
			    <!-- :data='tableData' 表格显示的数据 -->
			    <!-- el-table-column：表格的一列 -->
			    <!-- prop： 当前列要显示的数据 ，tableData内的数据-->
			    <!-- label：表头 -->
			    <!-- width: 这一列的宽度 -->
			    <!--min-width：用来设置百分比-->
			     <!--:header-cell-style="{background:'red'}"-->
		        <!--align="center"表格内的数据居中-->
			     
			 <el-table
		      :data="tableData"
		      style="width: 100%"
		      :header-cell-style="{background:'red'}"
		      >
		      <el-table-column
		        prop="date"
		        label="日期"
		        align="center"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="name"
		        label="姓名"
		        align="center"
		        width="180">
		      </el-table-column>
		      <!--如果不设置百分比，就自动分配剩余的宽度-->
		      <el-table-column
		        prop="address"
		        align="center"
		        label="地址">
		      </el-table-column>
		    </el-table>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
//	      绑定的input 查询关键字
	      query: '',
//	      需要一个数组用来存放table的数据
//	      这是element组件里面的,
	        tableData: []
	    }
	  },
	  mounted() {
//	  	在vue的生命周期的mounted中调用渲染列表
	  	this.initTable()
	  },
	  methods:{
	  	initTable() {
	  		this.axios('/api/table').then( res => {
	  			console.log(res.data)//查看接口返回时什么样的数据，要常用
	  			this.tableData = res.data //接口返回的是一个数组，直接可以赋值给table
	  		})
	  	},
	  	search() {
	  		
	  	}
	  }
	}
</script>
<!--使用scoped需要注意，使用的它之后，你就无法更改elelment组件中的样式-->
<style lang="less" scoped="scoped">

/*如果不想使用scoped,你就用父级的class把样式全部包裹起来，就不会相互影响页面的样式了*/
.table {
	width: 100%;
	height: 100%;
	.t-top {
		width: 30%;
		height: 40px;
		.el-input {
			width: 60%;
		}
	}
	.t-bottom {
		margin-top: 20px;
	}
}
</style>