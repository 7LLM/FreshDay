<template>
	<div class="login">
		<form action="#">
			<p class="from_box">
				<input type="text" placeholder="请输入手机号" v-model="val"/>
				<button class="code">语音验证码</button>
				<i class="clear" :class="{show:val!=''}" @click="val=''"></i>
			</p>
			<p class="from_box">
				<input type="text" placeholder="输入验证码"  v-model="val2" />
				<i class="clear" :class="{show:val2!=''}" @click="val2=''"></i>
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
				show:false,
				val:"",
				val2:""
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
			.clear{
				display: inline-block;
				width: 22/75rem;
				height: 22/75rem;
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM5RTAxMzU3OTdFMTFFNkI5NUU4RTQ1MzhCOERCQTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM5RTAxMzY3OTdFMTFFNkI5NUU4RTQ1MzhCOERCQTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzlFMDEzMzc5N0UxMUU2Qjk1RThFNDUzOEI4REJBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzlFMDEzNDc5N0UxMUU2Qjk1RThFNDUzOEI4REJBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjKf2xIAAAI7SURBVHjatJY9TxtBEIbnTm6QLIKERCKbyBI2GAMSRX4AYDv8AMqQihZS8hEkUobPKgq0aRI6/oBlUJI+BVIwYJ9psBVokCGF6cg7lznJoF3fHjrGenSybm4e73pvd6yd7R3yiS4wBXLgFXgBnoEb8Af8AvtgD1y3KxTxkbwH70CH4n6nkAZvwGfwCayBhqqgrRFNAwcsaESq4LxFeW7aRGaBDfAVdNPjolueX5d6WtlHME/hxILUU8p43pco3FiSuvdkPWCbnia47vNW2QdZffdiYnyM+lN9RhUHB1L0Mh7TreoVT8ZfZlRZ9VqNsq8nfYWZ9ACN5/IUjUZ1KVy/KyIvrHJ5l52qe2UhUYEqzplSNJbN0o+DAzo+Lbd7LaZYlm/3q9sJDUVe5Fk26pelEnqin2YijlGW9ZpkukLrvzAeP6LBoWFXVDITcfRGZH8zinKlSrFYjDLDI3R89DuIyN1Lbdm9jZc3j+ikVKI0rqlkXxDZXx5ZDQyZiHh5e1NXr9coN4n/sFAgp3pmIjtn2aGf7KHIm1ILnwDCQ1sOvkAiL04rDn0vFl2hwZTu23LCNlV30/16UUAh19+z5VT9osy4bbovrN+q84SJREKXwvUblvQgvCufqDbjEIIHkwEX3q5/CWaf6IiZY9HDw3NXmpUwYxN807UFy2ArJNGWNEDaHuROepC34OqRkit5fl7q+bZyPPSkdFpNQ0lT8pOtU2fapDZkGlblgM23dMSdsqdeSEdcNOmI/wkwADLuycrIaw0dAAAAAElFTkSuQmCC) no-repeat;
				background-size: contain;
				position: relative;
				top: 5/75rem;
				display: none;
			}
			.show{
				display: inline-block;
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