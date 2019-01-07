<template>
	<div>
		<Table border :columns="columns" :data="users" @on-select="click"></Table>
		<br>
		<Button type="primary" @click="deleteuser">删除用户</Button>
	</div>
</template>

<script>
	export default {
		data() {
			return  {
				 columns: [{
					 type:'selection'
					},
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
                        key: 'usertype'
                    }
                ],
				users:[
					
				],
				selectedusername:[
					
				],
				selectedusertype:[
					
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
		methods:{
			click:function(row){
				this.selectedusername=row[0].username;
				this.selectedusertype=row[0].usertype;
			},
			deleteuser:function(){
				this.$axios.post("http://localhost:3000/deleteuser",{
					username:this.selectedusername,
					usertype:this.selectedusertype
				}).then((response)=>{
					alert(response.data.message);
				},((err)=>{
					console.log(err);
				}))
			}
		}
	}
</script>

<style>

</style>
