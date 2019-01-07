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
						title:'grade',
						key:'grade'
					},
					{
						title: 'score',
						key: 'score',
						sortable:true,
					}
				],
				students:[
					
				]
			};
		},
		created:
			function(e){
				var that=this;
				this.$axios.get("http://localhost:3000/showstudents",{
					school:sessionStorage.getItem('schoolname')
				}).then(function(response){
					that.students=response.data.students;
				},function(err){
					console.log(err);
				})
			},
	}
</script>

<style>

</style>
