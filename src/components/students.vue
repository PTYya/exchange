<template>
	<div>		 
		<Table border :columns="columns" :data="students"></Table>		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				columns: [
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
					
				]
			};
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
