<template>
	<div>
		<section class="footer">
			<div class="fd">
				
					<router-link :to="{path:'/tuijian'}" class="fdmian">
					<span class="fd_i1"><Icon type="ios-person"/></span>
					<span>234</span>
					</router-link>
				
			</div>
			<div class="fd">
			
				<router-link :to="{path:'/goumai'}" class="fdmian">
				<span class="fd_i2"><Icon type="md-briefcase" /></span>
				<span>购物</span>
				</router-link>
			</div>
			<div class="fd">
				<router-link :to="{path:'/toushu'}" class="fdmian">
				<span class="fd_i3"><Icon type="ios-nuclear" /></span>
				<span>购物</span>
				</router-link>
			</div>
			<div class="fd">
				<router-link :to="{path:'/toushu'}" class="fdmian">
				<span class="fd_i4"><Icon type="ios-cloud" /></span>
				<span>推荐</span>
				</router-link/>
			</div>
			<div class="fd">
				<router-link :to="{path:'/my'}" class="fdmian">
				<span class="fd_i5"><Icon type="md-person-add" /></span>
				<span>购物</span>
				</router-link>
			</div>
		</section>
	</div>
</template>

<script>
</script>

<style>
	.fdmian{
		display: flex;
		flex-direction: column;
	}
	.footer{
		margin-top: 40px;
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
	.fd_i4 img{
		width: 38px;
		height: 46px;
	}
	.fd i{
		font-size: 35px;
	}
	.router-link-active{
		color: #9b9b9b;
	}
</style>