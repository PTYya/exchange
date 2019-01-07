import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import match from '@/pages/match.vue'
import homePage from '@/pages/homePage.vue'
import login from '@/pages/login.vue'
import commit from '@/pages/commit.vue'
import register from '@/pages/register.vue'
import institution from '@/pages/institution.vue'
import admin from '@/pages/admin.vue'
import chooseSchool from '@/pages/chooseSchool.vue'
import recommend from '@/pages/recommend.vue'
import school from '@/pages/school.vue'
Vue.use(Router)

export default new Router({
  routes: [
		{
			path:'/',
			component:homePage
		},
		{
			path:'/translate',
			component:index
		},
		{
			path:'/match',
			component:match
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/commit',
			component:commit
		},
		{
			path:'/register',
			component:register
		},
		{
			path:'/institution',
			component:institution
		},
		{
			path:'/admin',
			component:admin
		},
		{
			path:'/chooseSchool',
			component:chooseSchool
		},
		{
			path:'/recommend',
			component:recommend
		},
		{
			path:'/school',
			component:school
		}
  ]
})
