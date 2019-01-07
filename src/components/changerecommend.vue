<template>
	<div>		 
		<Table border :columns="columns" :data="students" @on-select="click"></Table>	
				<Button type="primary" @click="commitrecommend">推荐该学生</Button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				columns: [
					{
						type:'selection'
					},
					{
						title: 'name',
						key: 'name'
					},
					{
						title: 'major',
						key: 'major'
					},
					{
						title: 'score',
						sortable:true,
						key: 'score'
					},
					{
						title:'grade',
						key:'grade'
					}
				],
				students:[
					
				],
				selectedname:'',
				selectedgrade:'',
				selectedscore:'',
			};
		},
		methods:{
			click:function(row){
				this.selectedname=row[0].name;
				this.selectedgrade=row[0].grade;
				this.selectedscore=row[0].score;
			},
			commitrecommend:function(){
				this.$axios.post("http://localhost:3000/changerecommend",{
					name:this.selectedname,
					grade:this.selectedgrade,
					score:this.selectedscore
				}).then((response)=>{
					alert(response.data.message);
				},((err)=>{
					console.log(err);
				}))
			}
		},
		created:
			function(e){
				var that=this;
				this.$axios.get('http://localhost:3000/getstudents')
				.then(function(response){
					that.students=response.data.students;
				},(function(response){
					console.log(err);
				}))
			},
		
	}
</script>

<style>

</style>
