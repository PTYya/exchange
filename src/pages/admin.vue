<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu :active-name="activename" theme="dark" width="auto" :open-names="['1']" @on-select="click">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        账号管理
                    </template>
                    <MenuItem name="1-1">查看账号</MenuItem>
                    <MenuItem name="1-2">添加账号</MenuItem>
                    <MenuItem name="1-3">删除账号</MenuItem>
                </Submenu>
                
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
							<h2>管理员</h2>
			</Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/login">Relogin</BreadcrumbItem>
                    <BreadcrumbItem>Administrator</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
						<div v-if="activename=='1-1'">
							<h2>账号信息</h2>
							<showusers></showusers>
						</div>
						<div v-if="activename=='1-2'">
							<h2>账号信息</h2>
							<showusers></showusers>
							<br>
							<h2>添加账号</h2>
							<div class="addmsg">
								<div class="inputItem">
									<Input v-model="username" clearable size="large" placeholder="用户名"></Input>
								</div>
								<div class="inputItem">
									<Input v-model="password" type="password" size="large" placeholder="密码"></Input>
								</div>
								<div class="inputItem">
									<Select v-model="usertype" style="width:300px" placeholder="请选择账号类型">
										<Option value="user">用户</Option>
										<Option value="institution" >评估机构</Option>
										<Option value="admin">管理员</Option>
										<Option value="school">院校</Option>
									</Select>
								</div>
									<Button type="primary" size="large" @click="add">添加</Button>
							</div>
						</div>
						<div v-if="activename=='1-3'">
							<deleteuser></deleteuser>
						</div>
					</div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
	import showusers from "../components/showusers.vue"
	import deleteuser from "../components/deleteuser.vue"
    export default {
        data() {
        	return {
        		activename:"1-1",
				username:'',
				password:'',
				usertype:''
        	};
        },
		components:{
			showusers,
			deleteuser
		},
		methods:{
			click:function(name){
				this.activename=name;
			},
			add:function(e){
					this.$axios.post('http://localhost:3000/adduser',{
						username:this.username,
						password:this.password,
						usertype:this.usertype
					}).then((response)=>{
						alert(response.data.message);
						this.activename="1-1";
					}),((err)=>{
						console.log(err)
					})
				}
			}
    }
</script>

<style scoped="scoped">
	.addmsg{
		width: 500px;
		margin: 0 auto;
	}
	.inputItem{
		width: 500px;
		margin:10px 0;
	}
</style>
