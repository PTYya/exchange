<template>
	<div>
		<div class="chooseschool">
			<Select v-model="school" style="width:300px" placeholder="请选择学校" @on-change="selectschool" >
				<Option  v-for="item in schools" :key="item.schoolname" :value="item.schoolname">{{item.schoolname}}</Option>
			</Select>
		</div>
		<div class="showcourse">
			<Table border no-data-text="请先选择院校" :columns="columns" :data="courses"  @on-select="click"></Table>	
			<Button type="primary" v-if="hascourse" @click="deletecourse">删除选中课程</Button>
		</div>
		<div class="addcourse">
			<div class="inputItem">
					<Input v-model="newcoursename" clearable size="large" placeholder="课程名字"></Input>
				</div>
				<div class="inputItem">
					<Input v-model="newcoursetime" size="large" placeholder="课程时间"></Input>
				</div>
				<div class="addbtn">
					<Button type="primary" @click="addcourse">添加课程</Button>
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		inject:['reload'],
		data() {
			return {
				school:'',
				schools:[
					
				],
				columns: [
					{
						type:'selection'
					},
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
				newcoursename:'',
				newcoursetime:'',
				selectschoolname:'',
				selectcoursename:'',
				hascourse:false
			};
		},
		methods:{
			click:function(row){
				this.selectschoolname=row[0].schoolname;
				this.selectcoursename=row[0].coursename;
			},
			selectschool:function(value){
				this.$axios.post('http://localhost:3000/getcourse',{
					schoolname:this.school
				}).then((response)=>{
					this.courses=response.data.courses;
					if(response.data.courses.length!=0){
						this.hascourse=true;
					}
					else{
						this.hascourse=false;
					}
				}),((err)=>{
					console.log(err);
				});
				
			},
			addcourse:function(){
				this.$axios.post('http://localhost:3000/addcourse',{
					schoolname:this.school,
					newcoursename:this.newcoursename,
					coursetime:this.newcoursetime
				}).then((response)=>{
					alert(response.data.message);
					this.reload();
				}),((err)=>{
					console.log(err)
				})
			},
			deletecourse:function(){
				this.$axios.post('http://localhost:3000/deletecourse',{
					schoolname:this.selectschoolname,
					coursename:this.selectcoursename
				}).then((response)=>{
					this.$parent.activename="1-2";
					alert(response.data.message);	
					this.reload();
				}),((err)=>{
					console.log(err);
				})
			}
		},
		created:
			function(){
				var that=this;
				this.$axios.get('http://localhost:3000/getschools')
				.then(function(response){
					that.schools=response.data.schools;
				},(function(response){
					console.log(err);
				}))
			},
	}
</script>

<style scoped>
	.chooseschool{
		margin-bottom: 20px;
	}
	.addcourse{
		width: 500px;
		margin: 40px auto;
	}
	.showcourse Button{
		margin-top: 15px;
	}
</style>
