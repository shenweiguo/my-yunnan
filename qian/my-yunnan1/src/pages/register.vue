<template>
	<div>
		<section class="sec1">
			<span class="sec1_l"><</span>
			<span class="sec1_r">注册</span>
		</section>
		<section class="secm">
			<span class="sec2_l">呢称</span>
			<span class="sec2_r"><input type=""v-model="username" placeholder="请输入呢称" name="" id="" value="" /></span>
		</section>
		<section class="secm">
			<span class="sec2_l">密码：</span>
			<span class="sec2_r"><input type="" v-model="password" placeholder="请输入呢称" name="" id="" value="" /></span>
		</section>
		<section class="secm">
			<span class="sec2_l">再码：</span>
			<span class="sec2_r"><input type="" v-model="rePassword" placeholder="请输入呢称" name="" id="" value="" /></span>
		</section>
		<section class="sec3" v-on:click=register()>下一步</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				rePassword: '',
			}
		},
		methods: {
			//      注册方法
			register() {
				
					if(this.password != this.rePassword) {
						alert("两次密码不一致")
					} else {
						let sendDate = {
							username: this.username,
							password: this.password,
						}
						this.$http.post('/api/users/register', sendDate).then((data) => {
							if(data.body.status == 1) {
								alert(data.body.message)
								
							} else {
								alert(data.body.message)
								this.$router.push({path:'/login'})
							}
						})
				}
			}

		}
	}
</script>

<style>
	.sec1 {
		display: flex;
		flex-direction: row;
		height: 165px;
		line-height: 165px;
		border-bottom: 1px solid #e1e1e1;
	}
	
	.sec1_l {
		flex: 1;
		font-size: 50px;
		color: #28b1cd;
	}
	
	.sec1_r {
		flex: 12;
		font-size: 35px;
		color: #212121;
	}
	
	.secm {
		display: flex;
		flex-direction: row;
		margin: 0px 45px;
		border-bottom: 1px solid #cccccc;
		height: 140px;
		line-height: 140px;
	}
	
	.sec2_l {
		font-size: 30px;
	}
	
	.sec2_r input {
		border: 0px;
		height: 136px;
		margin-left: 20px;
		font-size: 30px;
	}
	
	.sec3 {
		padding: 0 47px;
		display: flex;
		justify-content: center;
		height: 130px;
		line-height: 130px;
		border-radius: 10px;
		align-content: center;
		font-size: 30px;
		background: #999999;
		color: #ffffff;
	}
</style>