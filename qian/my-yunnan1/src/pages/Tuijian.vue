<template lang="html">
	<div>
		<section class="sec1">
			<div class="sec1_d">
				<carousel :indicators="true" :auto="3000">
					<div v-for="i in indexImg">
						<img :src="i.recommendSrc" />
					</div>
				</carousel>
			</div>
			<div class="sec1_j">
				<span class="sec1_j1"@click="value2 = true">
					<img src="../assets/t_2.gif" alt="" />
					</span>
				<span class="sec1_j2"><img src="../assets/t_4.gif"/></span>
				<div class="sec1_j3">
					<span class="sec1_j3_1">岳阳</span>
					<span class="sec1_j3_2"><input type="text" readonly="搜索目的地/景点" name="" id="" value="" /></span>
					<span class="sec1_j3_3"><img src="../assets/t_3.gif"/></span>
				</div>
			</div>
		</section>
		<section class="sec2">
			<div class="sec2_t">
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_8.gif" alt="" /></div>
					<span class="sec2_ti2">目的地</span>
				</div>
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_9.gif" alt="" /></div>
					<span class="sec2_ti2">直播</span>
				</div>
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_10.gif" alt="" /></div>
					<span class="sec2_ti2">景区导览</span>
				</div>
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_11.gif" alt="" /></div>
					<span class="sec2_ti2">交通出行</span>
				</div>
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_12.gif" alt="" /></div>
					<span class="sec2_ti2">精品路线</span>
				</div>

			</div>
			<div class="sec2_b">
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_13.gif" alt="" /></div>
					<span class="sec2_ti2">目的地</span>
				</div>
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_14.gif" alt="" /></div>
					<span class="sec2_ti2">直播</span>
				</div>
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_15.gif" alt="" /></div>
					<span class="sec2_ti2">景区导览</span>
				</div>
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_16.gif" alt="" /></div>
					<span class="sec2_ti2">交通出行</span>
				</div>
				<div class="sec2_t1">
					<div class="sec2_ti1"><img src="../assets/t_17.gif" alt="" /></div>
					<span class="sec2_ti2">精品路线</span>
				</div>
			</div>
		</section>
		<section class="sec3"></section>
		<section class="sec4">
			<span>{{zhutiList}}</span>
		</section>
		<section class="sec5">
			<div class="sec5_1"><img src="../assets/t_18.gif" alt="" /></div>
			<div class="sec5_2"><img src="../assets/t_19.gif" alt="" /></div>
		</section>

		<v-footer></v-footer>
		<!--尾部导航-->
		
		 <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
	</div>
</template>

<script>
	import Carousel from 'vue-m-carousel'
	import footer from '../components/footer'
	//	import IndexLuobo from '../components/IndexLuobo'
	export default {
		name: 'zhutiList',
		data() {
			return {
				zhutiList: [],
				indexImg: [{}],
				 value2: false
			}
		},
		components: {
			Carousel,
			'v-footer': footer,
			//			'v-indexLuobo':IndexLuobo
		},
		created() {
			//列表哦
			this.$http.get('api/recommendList').then((data) => {
				this.zhutiList = data.body.data
				console.log(data.body)
			})
			//轮播图哦
			this.$http.get('api/recommendImg').then((data) => {
				this.indexImg = data.body.data
				console.log(data.body)
			})
		}
	}
</script>

<style scoped lang="css">
	@import '../assets/css/tuijian.css';
</style>