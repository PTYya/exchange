<template>
	<div>
		 <Table border :columns="columns" :data="users"></Table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				 columns: [
                    {
                        title: 'username',
                        key: 'username'
                    },
                    {
                        title: 'password',
                        key: 'password'
                    },
                    {
                        title: 'usertype',
						sortable:true,
                        key: 'usertype'
                    }
                ],
				users:[
					
				]
			};
		},
		created:
			function(e){
				var that=this;
				this.$axios.get('http://localhost:3000/getusers')
				.then(function(response){
					that.users=response.data.users;
				},(function(response){
					console.log(err);
				}))
			},
		
	}
</script>

<style>

</style>
