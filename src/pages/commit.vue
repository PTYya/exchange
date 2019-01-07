<template>
	<div>
		<top></top>
		<div v-if="!this.$store.state.login">
			<h1>请先登陆</h1>
		</div>
		<div v-else>
			<h2>
					填写个人信息
			</h2>
			<div class="message">
				<div class="inputItem">
					<Input v-model="name" clearable placeholder="姓名"></Input>
				</div>
				<div class="inputItem">
					<Input v-model="grade" clearable placeholder="年级"></Input>
				</div>
				<div class="inputItem">
					<Input v-model="major" clearable placeholder="专业"></Input>
				</div>
				<div class="inputItem">
					<Input v-model="score" clearable placeholder="成绩"></Input>
				</div>			
			</div>
			<div class="sbm">
				<Button type="primary" @click="submitmessage">提交信息</Button>
			</div>
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
				name:'',
				grade:'',
				major:'',
				score:''
			};
		},
		components:{
			top,
			bottom,
		},
		methods:{
			submitmessage:function(e){
				var name=this.name;
				sessionStorage.setItem('studentname',name);
				this.$axios.post('http://localhost:3000/recommend',{
					name:this.name,
					grade:this.grade,
					major:this.major,
					score:this.score
					}).then((response)=>{
						alert(response.data.message);
						this.$router.push('/match');
					},((err)=>{
						console.log(err);
					}))
			}
		}
	}
</script>

<style scoped="scoped">
.message{
	width: 500px;
	margin: 0 auto;
}
.recommend{
	margin-top: 30px;
}
.inputItem{
	margin: 10px 0;
}
.sbm{
	margin-top: 10px;
}
</style>
