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
                        已招收学生信息
                    </template>
                    <MenuItem name="1-1">查看已招收的学生</MenuItem>
                    <MenuItem name="1-2">招收学生</MenuItem>
                </Submenu>
                
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
							<h2>{{schoolname}}</h2>
			</Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/login">Relogin</BreadcrumbItem>
                    <BreadcrumbItem>School</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
						<div v-if="activename=='1-1'">
							<h2>已招收学生信息</h2>
							<showstudents></showstudents>
						</div>
						<div v-if="activename=='1-2'">
							<h2>招收学生</h2>
							<Table border :columns="columns" :data="students"></Table>
							<Button type="primary" size="large" @click="add">招收</Button>
							</div>
						</div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
	import showstudents from "../components/showstudents.vue"
    export default {
        data() {
        	return {
        		activename:"1-1",
				schoolname:'',
				columns: [
					{
						type:'selection'
					},
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
		components:{
			showstudents
		},
		methods:{
			click:function(name){
				this.activename=name;
			},
			add:function(e){
					
				}
			},
			created:
				function(e){
						this.schoolname=sessionStorage.getItem('schoolname');
						var that = this;
						this.$axios.get('http://localhost:3000/getschoolstudents',{
							school:that.schoolname
						}).then(function(response){
							console.log(response);
							that.students=response.data.students;
						})
					
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
