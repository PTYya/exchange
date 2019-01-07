
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu :active-name="activename" theme="dark" width="auto" :open-names="['1']" @on-select="click">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        院校课程管理
                    </template>
                    <MenuItem name="1-1">管理院校</MenuItem>
                    <MenuItem name="1-2">查看课程</MenuItem>				
                </Submenu>
                 <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
							学生管理
                    </template>
                    <MenuItem name="2-1">查看学生信息</MenuItem>
                    <MenuItem name="2-2">推荐学生</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
							<h2>院校机构</h2>
			</Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/login">Relogin</BreadcrumbItem>
                    <BreadcrumbItem>Administrator</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: auto;min-height: 600px;">
						<div v-if="activename=='1-1'">
							<showschool></showschool>
						</div>
						<div v-if="activename=='1-2'">
							<course></course>
						</div>
						<div v-if="activename=='2-1'">
							<students></students>
						</div>
						<div v-if="activename=='2-2'">
							<changerecommend></changerecommend>
						</div>
					</div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
	import showschool from '../components/showschool.vue'
	import course from '../components/course.vue'
	import students from '../components/students.vue'
	import changerecommend from '../components/changerecommend.vue'
	export default {
		data() {
			return {
				activename:"1-1"
			};
		},
		components:{
			showschool,
			course,
			students,
			changerecommend
		},
		methods:{
			click:function(name){
				this.activename=name;
			}
		}
	}
</script>
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
