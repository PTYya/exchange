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
					<Option value="institution">机构</Option>
					<Option value="school">院校</Option>
					<Option value="admin">管理员</Option>
			</Select>
			</div>
				<Button type="primary" size="large" to="/register">注册</Button>
				<Button type="primary" size="large" @click="userLogin">登陆</Button>
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
				usertype:'user'
			};
		},
		components:{
			top,
			bottom
		},
		methods:{
			userLogin:function(e){
				this.$axios.post('http://localhost:3000/login',{
					username:this.username,
					password:this.password,
					usertype:this.usertype
				}).then((response)=>{
					if(response.data.status==1){
						alert(response.data.message);
					}
					else if(response.data.status==0){
						alert(response.data.message);
						this.$store.commit('login');
						if(this.usertype=="user"){
							this.$router.push("/");
						}
						else if(this.usertype=="institution"){
							this.$router.push('/institution');
						}
						else if(this.usertype=="admin"){
							this.$router.push('/admin');
						}
						else if(this.usertype=="school"){
							sessionStorage.setItem('schoolname',this.username);
							this.$router.push('/school');
						}
					}
				},((err)=>{
					console.log(err)
				}))
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
