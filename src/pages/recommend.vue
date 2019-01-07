<template>
	<div>
		<top></top>
		<div class="block">
			<h2>成绩前五学生</h2>
			<Table :columns="columns" :data="students"></Table>
		</div>
		<div class="block">
			<h2>机构推荐</h2>
				<showrecommend></showrecommend>
		</div>
		 <bottom></bottom>
	</div>
</template>

<script>
	import top from "../components/top.vue"
	import bottom from "../components/bottom.vue"
	import showrecommend from "../components/showrecommend.vue"
	export default {
		data() {
			return {
				columns:[
					{
						title:'Name',
						key:'name'
					},
					{
						title:'major',
						key:'major'
					},
					{
						title:'grade',
						key:'grade'
					},
					{
						title:'score',
						key:'score'
					}
				],
				 students: [
                   
                ]
			};
		},
		components:{
			top,
			bottom,
			showrecommend
		},
		created:
			function(e){
				var that=this;
				this.$axios.get('http://localhost:3000/recommend')
				.then(function(response){
					that.students=response.data.students;
				},(function(response){
					console.log(err);
				}))
			}
		
	}
</script>

<style scoped="scoped">
	h2{
		margin-bottom: 10px;
	}
	.block{
		width:45%;
		margin-left: 30px;
		display: inline-block;
		float: left;
	}
</style>
