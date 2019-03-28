<template>
	<div>
	<div class="img"><img src="../assets/toushu.gif"/></div>
	<section class="footer">
			<div class="fd">
				<span class="fd_i1"><img src="../assets/f_1.gif" alt="" /></span>
				<span>推荐</span>
			</div>
			<div class="fd">
				<span class="fd_i2"><img src="../assets/f_2.gif" alt="" /></span>
				<span>推荐</span>
			</div>
			<div class="fd">
				<span class="fd_i3"><img src="../assets/f_3.gif" alt="" /></span>
				<span>推荐</span>
			</div>
			<div class="fd">
				<span class="fd_i4"><img src="../assets/f_4.gif" alt="" /></span>
				<span>推荐</span>
			</div>
			<div class="fd">
				<span class="fd_i5"><img src="../assets/f_5.gif" alt="" /></span>
				<span>推荐</span>
			</div>
		</section>
		</div>
</template>

<script>
	
</script>

<style>
	.img img{
		width: 750px;
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