<template>
	<div>
		<div class="header">
			<top></top>
		</div>
		<div class="translate">
			<translate></translate>
		</div>
		<footer>
			@翻译调用百度翻译开放api
		</footer>
	</div>	
</template>

<script>
import top from '../components/top.vue'	
import translate from "../components/translate.vue"

export default {	
		data() {
			return {
				
			}
		},
		components:{
			top,
			translate
		}
	}
</script>

<style scoped="scoped">
	.header{
		min-width:1420px;
	}
	.translate{
		min-width:1420px;
	}
	footer{
		width: 200px;
		position: absolute;
		bottom: 0;
		left: 600px;
	}
</style>
