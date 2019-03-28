<template lang="html">
	<div>
		<!--<section class="sec1">
			<span>我的</span>
			<span><img src="../assets/m_1.gif"/></span>
		</section>-->
		<section class="sec2">
				<router-link :to="{path:'/login'}"><span><img src="../../static/m_9.gif"/></span></router-link>
				
			</section>
		<div class="secm">
			
			<section class="sec3">
				<span class="sec3l"><span class="sec3_1"><img src="../assets/m_3.gif" alt="" />我的一码通</span></span>
				<span class="sec3r">></span>
			</section>
			<section class="sec3">
				<span class="sec3l"><span class="sec3_1"><img src="../assets/m_4.gif" alt="" />我的行程</span></span>
				<span class="sec3r">></span>
			</section>
			<section class="sec3">
				<span class="sec3l"><span class="sec3_1"><img src="../assets/m_5.gif" alt="" />我的收藏</span></span>
				<span class="sec3r">></span>
			</section>
			<section class="sec3">
				<span class="sec3l"><span class="sec3_1"><img src="../assets/m_6.gif" alt="" />我的订单</span></span>
				<span class="sec3r">></span>
			</section>
			<section class="sec3">
				<span class="sec3l"><span class="sec3_1"><img src="../assets/m_7.gif" alt="" />我的投诉</span></span>
				<span class="sec3r">></span>
			</section>
			<section class="sec3">
				<span class="sec3l"><span class="sec3_1"><img src="../assets/m_8.gif" alt="" />电子发票</span></span>
				<span class="sec3r">></span>
			</section>
		</div>
		<v-footer></v-footer>

		
	</div>
</template>

<script>
	import footer from '../components/footer'
	export default{
		components:{
			"v-footer":footer
		},
		methods:{
			
		}
	}
</script>
<style scoped lang="css">
	.sec1 {
		display: flex;
		flex-direction: row;
		font-size:20px;
		padding: 55px 0rem;
	}
	
	.sec1 span:first-child {
		flex: 9;
		font-weight: bold;
		color: #4a4a4a;
	}
	
	.sec1 span:last-child {
		flex: 1;
	}
	.sec1 span:last-child img{
		width: 54px;
		height: 52px;
	}
	.secm{
		display: flex;
		flex-direction: column;
		padding: 0 76px ;
	}
	.sec2{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		/*background: red;*/
		padding: 2px 50px;
	}
	.sec2 span img{
		width: 700px;
		height: 431px;
		
	}
	
	.sec3{
		display: flex;
		justify-content: space-between;
		padding: 72px 0;
		border-bottom: 1px solid #eeeeee;
		/*background: red;*/
	}
	.sec3l{
		color: #4a4a4a;
		font-size: 25px;
		/*font-weight: bold;*/
	}
	.sec3r{
		font-size: 25px;
		color:#9b9b9b;
		/*font-weight: bold;*/
	}
	.sec3_1{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.sec3_1 img{
		width: 49px;
		height: 52px;
		margin-right: 35px;
	}
	.footer{
		display: flex;
		flex-direction: row;
		padding: 0.23rem 0;
		border-top: 1px solid #eeeeee;
		font-size: 25px;
		color: #9b9b9b;
	}
	.fd{
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
	}
	.fd_i1 img{
		width: 46px;
		height: 45px;
	}
	.fd_i2 img{
		width: 45px;
		height: 51px;
	}
	.fd_i3 img{
		width: 52px;
		height: 45px;
	}
	.fd_i4 img{
		width: 51px;
		height: 48px;
	}
</style>