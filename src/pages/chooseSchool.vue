<template>
	<div>
	<top></top>
	<div v-if="!this.hasstudent">
		<h1>请先提交个人信息</h1>
	</div>
		<div v-else>
			<h2>选择你要申请的学校</h2>
			<div>
				<div class="chooseschool">
					<Select v-model="school" style="width:300px" placeholder="请选择学校" @on-change="selectschool" >
						<Option  v-for="item in schools" :key="item.schoolname" :value="item.schoolname">{{item.schoolname}}</Option>
					</Select>
				</div>
				<div class="showcourse">
					<Table border no-data-text="请先选择院校" :columns="columns" :data="courses"></Table>	
				</div>
			</div>
			<div>
				<Button type="primary" @click="commitmsg">提交申请</Button>
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
				school:'',
				schools:[
					
				],
				columns: [
					{
						title: 'schoolname',
						key: 'schoolname'
					},
					{
						title: 'coursename',
						key: 'coursename'
					},
					{
						title: 'coursetime',
						key: 'coursetime'
					}
				],
				courses:[
					
				],
				hasstudent:false
			};
		},
		components:{
			top,
			bottom
		},
		methods:{
			selectschool:function(value){
				this.$axios.post('http://localhost:3000/getcourse',{
					schoolname:this.school
				}).then((response)=>{
					this.courses=response.data.courses;
				}),((err)=>{
					console.log(err);
				});		
			},
			commitmsg:function(){
				this.$axios.post('http://localhost:3000/chooseschool',{
					schoolname:this.school,
					name:sessionStorage.getItem('studentname')
				}).then((response)=>{
					alert(response.data.message);
				},((err)=>{
					console.log(err)
				}))
			}
		},
		created:
			function(){
				var studentname=sessionStorage.getItem('studentname');
				if(studentname){
					this.hasstudent=true;
				}
				var that=this;
				this.$axios.get('http://localhost:3000/getschools')
				.then(function(response){
					that.schools=response.data.schools;
				},(function(err){
					console.log(err);
				}))
			},
	}
</script>

<style scoped>
	.chooseschool{
		margin-bottom: 20px;
	}
	.showcourse Button{
		margin-top: 15px;
	}
</style>
