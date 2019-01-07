<template>
	<div>
		<top></top>
		<div v-if="!this.$store.state.login">
			<h1>请先登陆</h1>
		</div>
		<div v-if="!this.hasstudent">
			<h1>请先提交个人信息</h1>
		</div>
		<div v-else>
		<Steps :current="current">
			<Step title="填写基本信息"></Step>
			<Step title="填写成绩&院校"></Step>
			<Step title="完成评估"></Step>
		</Steps>
		<div class="content">
			<div v-if="current==0">
				<Input v-model="name" clearable placeholder="姓名"></Input>
				<Input v-model="school" clearable placeholder="学校"></Input>
				<Input v-model="grade" clearable placeholder="年纪"></Input>
				<Input v-model="major" clearable placeholder="专业"></Input>
			</div>
			<div v-else-if="current==1">
				<Input v-model="score" clearable placeholder="专业成绩"></Input>
			<Select v-model="english"  placeholder="英语成绩">
				<Option value="none">无四六级</Option>
				<Option value="cet4">CET4</Option>
				<Option value="cet6">CET6</Option>
			</Select>
			<div class="school">
				<h3>选择你的意向学校</h3>
				<RadioGroup v-model="chooseschool">
					<Radio label="Harvard">
						<Icon type="ios-school"></Icon>
						<span>哈佛大学</span>
					</Radio>
					<Radio label="oxford">
						<Icon type="ios-school"></Icon>
						<span>牛津大学</span>
					</Radio>
					<Radio label="Politecnico di Torino">
						<Icon type="ios-school"></Icon>
						<span>都灵理工大学</span>
					</Radio>
					<Radio label="cambridge">
						<Icon type="ios-school"></Icon>
						<span>剑桥</span>
					</Radio>
				</RadioGroup>
			</div>
			</div>
			<div v-else-if="current==2">
				<h2>你的院校匹配值</h2>
			<i-circle :percent="75" dashboard>
				<span class="demo-circle-inner" style="font-size:24px">75%</span>
			</i-circle>
			</div>
		</div>
		
		<div class="btn">
			<Button v-if="current==0" type="primary" @click="next">下一步</Button>
			<Button v-if="current==1" type="primary" @click="next">确认提交</Button>
			<Button v-if="current==2" type="primary" @click="next">完成</Button>
		</div>
		</div>
		<bottom></bottom>
	</div>	
</template>

<script>
	import bottom from "../components/bottom.vue"
	import top from "../components/top.vue"
	export default {
		data() {
			return {
				current:0,
				name:'',
				grade:'',
				major:'',
				school:'',
				score:'',
				english:'',
				chooseschool:'',
				hasstudent:false
			};
		},
		components:{
			top,
			bottom
		},
		methods:{
			  next () {
                if (this.current == 2) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
		},
		created() {
			var student=sessionStorage.getItem('studentname');
			this.name=student;
			if(student){
				this.hasstudent=true;
			}
		}
	}
</script>

<style scoped="scoped">
.btn{
	margin: 0;
}
 .content{
	 height: 300px;
	 margin: 50px 300px;
 }
 .content input{
	 margin:10px 0;
 }
 .school h3{
	 margin:20px 0;
 }
 .school{
	padding: 5px 10px;
 }
 .school span{
	 font-size: 18px;
 }
</style>
