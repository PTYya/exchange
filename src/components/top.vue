<template>
	<div class="header">
	<router-link to="/"><Icon type="md-home" size='50'></Icon></router-link>
		<nav>
			
			<ul>
				<li class="common" v-for="(router,index) in routers" :key="router.src" 
				 v-bind:class="{hovercolor:changecolor==index}" @mouseenter="color(index)"
				  @mouseleave="changecolor=-1"
				  >
					<router-link   :to="router.src" > {{router.desc}} </router-link>
				</li>
			</ul>
		</nav>
			<span v-if="!this.$store.state.login" class="login"><router-link to="/login">请登录</router-link></span>
			<span v-else="this.$store.state.login" class="login"><router-link to="/login">更换用户</router-link></span>	
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				routers:[
				{
					src:"/translate",
					desc:"翻译"
				},
				{
					src:"/commit",
					desc:"提交个人信息"
				},
				{
					src:"/match",
					desc:"申请评估"
				},
				{
					src:'/chooseschool',
					desc:"选择学校"
				},
				{
					src:'/recommend',
					desc:"推荐学生"
				}],
				changecolor:-1
			};
		},
		methods:{
			color:function(index){
				this.changecolor=index;
				}
			},
	}
</script>

<style scoped="scoped">
	.header {
		width:100%;
		background-color: black;
		height: 50px;
		font-size: 14px;
	}
	.header nav{
		min-width:512px;
		width: 50%;
		margin:0 auto;
	}
	.header  i{
		float: left;
		height: 38px;
	}
	.header nav ul{
		width: 800px;
	}
	.header nav li{
		display: inline-block;
		float: left;
		width: 150px;
		height: 38px;
		line-height: 38px;
		margin:5px 5px;
	}
	.common a{
		color:white;
	}
	.hovercolor{
		color:skyblue;
		border: 1px grey solid;
	}
	.login a{
		color:white;
		float:right;
	}
	.login a:hover{
		color: skyblue;
	}
</style>
