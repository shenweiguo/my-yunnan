<template lang="html">
	<div>
		<section class="sec1">
			<span><</span>
			<span>登录</span>
			<span>注册</span>
		</section>
		<section class="secm">
			<span class="sec2_l">呢称</span>
			<span class="sec2_r"><input type=""v-model="username" placeholder="请输入呢称" name="" id="" value="" /></span>
		</section>
		<section class="secm">
			<span class="sec2_l">密码：</span>
			<span class="sec2_r"><input type="" v-model="password" placeholder="请输入呢称" name="" id="" value="" /></span>
		</section>
		<section class="sec3" v-on:click=login()>下一步</section>
		<section class="sec4">
			<span>忘记密码？</span>
		</section>
		<section class="sec5">
			<span><img src="../assets/l_1.gif"/></span>
		</section>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
			}
		},
		methods: {
			login() {
				this.$http.post('/api/users/login',{username: this.username,password:this.password}).then((data) => {
        if(data.body.status==1){
          alert(data.body.message)
        }else{
        	alert(data.body.message)
			this.$router.push({path:'/tuijian'})   
        }
      })
			}
		}
		}
</script>

<style lang="css" scoped>
	.sec1 {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border-bottom: 1px solid #e1e1e1;
		font-size: 30px;
		height: 165px;
		line-height: 165px;
	}
	
	.sec1 span:nth-child(1) {
		color: #28b1cd;
		font-size: 40px;
		flex: 1;
		/*font-weight: bold;*/
	}
	
	.sec1 span:nth-child(2) {
		color: #212121;
		font-size: 35px;
		flex: 5;
	}
	
	.sec1 span:nth-child(3) {
		color: #28b1cd;
		font-size: 30px;
		flex: 1;
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
		margin-top: 20px;
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
	.sec4{
		display: flex;
		flex-direction:row;
		justify-content: flex-end;
		font-size: 15px;
		margin-top: 20px;
	}
	.sec5{
		display: flex;
		flex-direction: row;
		margin-top: 310px;
	}
	.sec5 span img{
		width: 100%;
	}
</style>