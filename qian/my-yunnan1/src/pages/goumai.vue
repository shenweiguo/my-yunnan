<template lang="html">
	<div>
		<section class="sec1">
			<div class="sec1_1"><img src="../assets/g_1.gif" /></div>
			<div class="sec1_2">成选</div>
			<div class="sec1_3"><img src="../assets/g_2.gif" /></div>
			<div class="sec1_4"><img src="../assets/g_3.gif" /></div>
		</section>
		<section class="sec2">
			<span class="sec2_y">精选</span>
			<span class="sec2_y">普洱茶馆</span>
			<span class="sec2_y">特产</span>
			<span class="sec2_y">咖啡</span>
			<span class="sec2_y">手工</span>
		</section>
		<section class="sec3">
			<span class="sec3_1"> 
				 <carousel :indicators="true" :auto="3000">
       				 <div v-for="i in lunbo">
        				<img :src="i.src"/>
      				  </div>
   				</carousel>
			</span>
		</section>
		<section class="sec4">
			<div class="sec4_1">
				<span class="sec4_1i"><img src="../assets/g_5.gif"/></span>
				<span class="sec4_1z">诚信严选</span>
			</div>
			<div class="sec4_1">
				<span class="sec4_1i"><img src="../assets/g_5.gif"/></span>
				<span class="sec4_1z">假一赔十</span>
			</div>
			<div class="sec4_1">
				<span class="sec4_1i"><img src="../assets/g_5.gif"/></span>
				<span class="sec4_1z">无理由退换货</span>
			</div>
		</section>
		<section class="sec5">
			<span class="sec5_i">
				<img src="../assets/g_6.gif" alt="" />
			</span>
		</section>
		<section class="sec6"></section>
		<section class="sec7">
			诚选推荐
		</section>
		<section class="sec8">
			<span><img src="../assets/g_8.gif"/></span>
			<span><img src="../assets/g_9.gif"/></span>
		</section>
		<v-footer></v-footer>

	</div>
</template>

<script>
	import Carousel from 'vue-m-carousel'
	import footer from '../components/footer'
	export default {
		data(){
			return{
				lunbo:[{
					src:require('../assets/g_4.gif')
				},{
					src:require('../assets/g_9.gif')
				}]
			}
		},
		components: {
			Carousel,
			'v-footer': footer
			//			'v-indexLuobo':IndexLuobo
		},
		created(){
			this.$http.get('api/recommendList')
		}
	}
</script>

<style  scoped lang="css">
	@import '../assets/css/goumai.css'
</style>