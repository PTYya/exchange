<template>
	<div class="homePage">
		<top></top>
		<div class="desc">
				<h1>院校推荐</h1>
		</div>
		<div class="swiper">
			<Carousel v-model="value" :autoplay="autoplay" loop :autoplay-speed=3500  @mouseenter="autoplay=false" @mouseleave="autoplay=true" >
				<CarouselItem>
					<img src="../../static/img/oxford.jpg" alt="">
					<span>
						<h2>牛津大学</h2>
					</span>
				</CarouselItem>
				<CarouselItem>
					<img src="../../static/img/cambridge.jpg" alt="">
					<span>
						<h2>剑桥大学</h2>
					</span>
				</CarouselItem>
				<CarouselItem>
					<img src="../../static/img/都灵.jpg" alt="">
					<span>
						<h2>都灵理工大学</h2>
					</span>
				</CarouselItem>
			</Carousel>
		</div>
		<bottom></bottom>
	</div>
</template>

<script>
	import top from '../components/top.vue'
	import bottom from "../components/bottom.vue"
	export default {
		data() {
			return {
				value:0,
				autoplay:true
			};
		},
		components:{
			top,
			bottom
		},
	methods:{
		stop:function(){
				this.autoplay=false
		},
		go:function(){
				this.autoplay=true
		}
	}
	}
	
</script>

<style>
.homePage{
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.swiper img{
	height:500px ;
	width:1000px;
}
.desc{
	margin: 10px 0;
}
.swiper span{
	position: relative;
	top: -40px;
}
.swiper span h2{
	color: white;
	font-size: 30px;
}
</style>
