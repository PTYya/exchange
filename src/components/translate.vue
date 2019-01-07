<template>
	<div>
		<div class="translateHead">
			<div class="chooselg">
				<Select v-model="from" >
					<Option v-for="language in languages" :key="language.value"
					:value="language.value">{{language.label}}</Option>
				</Select>
			</div>
			<div class="forwordIcon">
				<Icon size="35" type="md-arrow-round-forward" />
			</div>
			<div class="tolg">
				<Select v-model="to" >
					<Option v-for="language in tolanguages" :key="language.value"
					:value="language.value">{{language.label}}</Option>
				</Select>
			</div>
			<Button @click="translate" type="primary">翻译</Button>
		</div>
		<br>
		<div class="translateText">
			<div class="fromText">
				<textarea  v-model="q">
					
				</textarea>
			</div>
			<div class="translateResult">
				<textarea disabled="disabled" v-model="trans_result">
					
				</textarea>
			</div>
		</div>
	</div>
</template>

<script>
	import md5 from "md5"
	import jquery from "jquery"
	export default {
		data() {
			return {
				languages:[
					{
						value:"auto",
						label:"自动识别"
					},
					{
						value:"zh",
						label:"中文"
					},
					{
						value:'en',
						label:"英语"
					},
					{
						value:"jp",
						label:"日语"
					}
						
				],
				tolanguages:[
					{
						value:"zh",
						label:"中文"
					},{
						value:"en",
						label:"英语"
					}
				],
				from:'auto',
				to:'en',
				q:'',
				trans_result:''
		}
	},
	methods:{
		translate:function(){
			var appid = '20181210000246424';
			var key = '25KAHk6M2NK3RViIv6Yt';
			var salt = (new Date).getTime();
			var query=this.q;
			var from=this.from;
			var to=this.to;
			var str1 = appid + query + salt +key;
			var sign = md5(str1);
			let that=this
			if(that.q!=""){
//  				that.$axios.post(
//  					'http://api.fanyi.baidu.com/api/trans/vip/translate',
//  					{
//  						q: query,
// 						appid: appid,
//  						salt: salt,
//  						from: from,
//  						to: to,
// 						sign: sign	
//  					}				).then(function (res){
// 					that.trans_result=res.data.trans_result;
//  					alert('翻译成功');
// 				}).catch(function(error){
// 				console.log(error)
//  				})
jquery.ajax({
    url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
    type: 'get',
    dataType: 'jsonp',
    data: {
        q: query,
        appid: appid,
        salt: salt,
        from: from,
        to: to,
        sign: sign
    },
    success: function (data) {
		console.log(data);
		that.trans_result=data.trans_result[0].dst;
    } ,
	error:function(err){
		console.log(err)
	}
});
			}
			else{
				alert("请输入需要翻译的内容")
			}
		}
	}
}
</script>

<style scoped="scoped">
	.translateHead{
		margin-left: 550px;
		margin-top: 30px;
		height: 30px;
	}
	.chooselg{
		width: 200px;
		float: left;
	}
	.forwordIcon{
		display: inline-block;
		float: left;
		margin-left: 20px;
	}
	.tolg{
		width: 200px;
		float: left;
		margin-left: 20px;
	}
	.translateHead Button{
		float: left;
		margin-left: 20px;
		width: 100px;
	}
	.translateText{
		float: left;
		margin-left: 250px;
		width: 80%;
		min-width:1136px;
	}
	.translateText textarea{
		height:250px;
		width: 550px;
		font-size:18px;
		border-radius: 5px;
		float: left;
		resize: none
	}
	.translateResult textarea{
		
	}
</style>
