<template>
	<div>
		<Table border :columns="columns" :data="recommends"></Table>
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
						title: 'grade',
						key: 'grade'
					},
					{
						title: 'score',
						sortable:true,
						key: 'score'
					}
				],
				recommends:[
					
				]
			};
		},
		created:
			function(e){
				var that=this;
				this.$axios.get('http://localhost:3000/getrecommends')
				.then(function(response){
					that.recommends=response.data.recommends;
				},(function(response){
					console.log(err);
				}))
			},
	}
</script>

<style>

</style>
