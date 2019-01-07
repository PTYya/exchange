<template>
	<div>
		<Table border :columns="columns" :data="schools" @on-select="click"></Table>
		<Button style="margin-top:20px" type="primary" @click="deleteschool">删除院校</Button>
		<div class="msg">
			<div class="inputItem">
				<Input v-model="schoolname" clearable size="large" placeholder="学校名称"></Input>
			</div>
			<div class="inputItem">
				<Input v-model="location"  size="large" placeholder="学校地址"></Input>
			</div>
			<Button type="primary" @click="addschool">添加院校</Button>
		</div>
	</div>
</template>

<script>
	export default {
		inject:['reload'],
		data() {
			return {
				schoolname:'',
				location:'',
					columns: [
						{
							type:'selection'
						},
						{
							title: 'schoolname',
							key: 'schoolname'
						},
						{
							title: 'location',
							key: 'location'
						},
					],
					schools:[
						
					],
					selectedschoolname:''
			};
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
			methods:{
				addschool:function(){
						this.$axios.post('http://localhost:3000/addschool',{
							schoolname:this.schoolname,
							location:this.location
						}).then((response)=>{
							this.reload();
							alert(response.data.message);
						}),((err)=>{
							console.log(err)
						})		
					},
				click:function(row){
					this.selectedschoolname=row[0].schoolname;	
				},
				deleteschool:function(){
					this.$axios.post("http://localhost:3000/deleteschool",{
						schoolname:this.selectedschoolname,
					}).then((response)=>{
						alert(response.data.message);
						this.reload();
					},((err)=>{
						console.log(err);
					}))
				}
			}
	}
</script>

<style scoped="scoped">
.inputItem{
		width: 500px;
		margin:10px 0;
	}
.msg{
	width: 500px;
	margin:30px auto;
}
</style>
