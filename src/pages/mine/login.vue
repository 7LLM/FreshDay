<template>
	<div class="login">
		<form action="#">
			<p class="from_box">
				<input type="text" placeholder="请输入手机号" />
				<button class="code">语音验证码</button>
			</p>
			<p class="from_box">
				<input type="text" placeholder="输入验证码" />
			</p>
			<div class="agreement">
				<div class="checkBox" :class="{active:show}" @click="check()">
					<div class="checked"></div>
				</div>
				<p class="text">
					我已认真阅读、理解并同意<span>《每日优鲜用户协议》</span>及<span>《每日优鲜隐私策略》</span>
				</p>
			</div>
			<p>
				<button class="submit">登录</button>
			</p>
		</form>
		<div class="tip">
			为方便您及时查询订单信息，需要验证您的手机号来登录
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				show:false
			}
		},
		methods:{
			check(){
				this.show=!this.show
			}
		}
	}
</script>

<style lang="less" scoped>
	.login {
		padding: 150/75rem 50/75rem;
		.from_box {
			position: relative;
			width: 100%;
			height: 58/75rem;
			border-bottom: 1px solid #e6e6e6;
			input {
				outline: none;
				width: 58%;
				height: 50/75rem;
				border: none;
				font-size: 0.3rem;
			}
			.code {
				position: absolute;
				top: 0;
				right: 0;
				color: #FF4891;
				padding: 10/75rem 15/75rem;
				background: #fff;
				border-radius: 6/75rem;
				border: 1px solid #FF4891;
			}
		}
		.agreement{
			color: #969696;
			font-size: 0.24rem;
			line-height: 30/75rem;
			margin: 40/75rem 0;
			.text{
				margin-left: 24/75rem;
				span{
					color: #FF3587;
				}
			}
			.checkBox{
				float: left;
				position: relative;
				top: 6/75rem;
				width: 16/75rem;
				height: 16/75rem;
				border-radius: 100%;
				border: 1px solid #b8b3ba;
				.checked{
					width: 6/75rem;
					height: 10/75rem;
					position: relative;
					left: 3/75rem;
					transform: rotate(45deg);
					border-right: 2px solid #fff;
					border-bottom: 2px solid #fff;
					display: none;
				}
			}
			.active{
				border-color: #FF3587;
				background: #FF3587;
				.checked{
					display: block;
				}
			}
		}
		.submit{
			width: 100%;
			height: 60/75rem;
			color: #fff;
			font-size: 0.30rem;
			border: none;
			border-radius: 10/75rem;
		}
	}
	.tip{
		color: #969696;
		font-weight: 600;
		font-size: 0.24rem;
		margin-top: 40/75rem;
	}
</style>