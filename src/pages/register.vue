<template>
	<div>
		<top></top>
		<div class="msg">
			<div class="username">
				<Input v-model="username" clearable size="large" placeholder="用户名"></Input>
			</div>
			<div class="password">
				<Input v-model="password" type="password" size="large" placeholder="密码"></Input>
			</div>
			<div class="usertype">
				<Select v-model="usertype" style="width:300px" placeholder="请选择账号类型">
					<Option value="user">用户</Option>
					<Option value="institution" disabled="disabled">机构</Option>
					<Option value="admin" disabled="disabled">管理员</Option>
				</Select>
			</div>
				<Button type="primary" size="large" @click="register">注册</Button>
		</div>
		<bottom></bottom>
	</div>
</template>

<script>
	import bottom from "../components/bottom.vue"
	import top from "../components/top.vue"
	export default {
		data() {
			return {
				username:'',
				password:'',
				usertype:''
			};
		},
		components:{
			top,
			bottom
		},
		methods:{
			register:function(e){
				this.$axios.post('http://localhost:3000/register',{
					username:this.username,
					password:this.password,
					usertype:this.usertype
				}).then((response)=>{
					if(response.data.status==1){
						alert(response.data.message)
					}else if(response.data.status==0){
						alert(response.data.message);
						this.$router.push("/login");
					}
				}),((err)=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.msg{
		width: 300px;
		margin:200px auto;
		height: 100px;
	}
	.username{
		margin:10px 0;
	}
	.password{
		margin-top: 10px;
		margin-bottom: 20px;
	}
	.usertype{
		margin:10px 0;
	}
</style>
