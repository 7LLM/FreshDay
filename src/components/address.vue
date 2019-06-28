<template>
	<div class="addWarp">
		<p>选择收货地址</p>
		<div id="ad_bg">
			<div class="add_sec">
				<div>
					<a href="#">深圳市</a>
					<p>
						<input type="text" name="" id="" value="请输入要收货的小区/写字楼" />
					</p>
				</div>
			</div>
			<div class="add_pro">
				因各地区商品和配送服务不同，请您选择收货地址
			</div>
			<div class="add_ding">
				<p>深圳市 <em>当前位置</em></p>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style lang="less">
	.addWarp{
		padding-bottom: 700/75rem;
		background: #F5F5F5;
		/*无法设置满屏背景色*/
		>p{
			border-bottom: 1px solid #f2f2f2;
			line-height: 70/75rem;
			text-align: center;
			font-size: 24/75rem;
			background: #fff;
		}
	}
	#ad_bg{
		background: #fff;
	}
	.add_sec{
		padding: 15/75rem 20/75rem;
		>div{
			height:55/75rem;
			line-height: 55/75rem;
			padding: 0 10/75rem;
			background: #F5F5F5;
			border-radius: 5px;
			display: flex;
			>a{
				color: #000000;
				position: relative;
				width: 20%;
				margin-right:10/75rem ;
				&:after{
					content: '';
					display: block;
					position: absolute;
					top: 50%;
					right: 5/75rem;
					transform: translateY(-50%);
					width: 20/75rem;
					height: 20/75rem;
					background: url(../assets/logo/cordown.png)no-repeat center;
					background-size:15/75rem auto ;
				}
			}
			>p{
				width: 78%;
				position: relative;
				input{
					width:100%;
					line-height: 50/75rem;
					font-size: 21/75rem;
					border: none;
					background: none;
					text-indent: 1.3em;
				}
				&:before{
					content: '';
					display: block;
					position: absolute;
					top:50%;
					left: 0;
					transform: translateY(-50%);
					width: 20/75rem;
					height: 20/75rem;
					background: url(../assets/logo/seach.png)no-repeat center;
					background-size:25/75rem auto ;
				}
			}
		}
	}
	.add_pro{
		padding: 0 20/75rem;
		font-size: 18/75rem;
		background: #F5F5F5;
		line-height: 60/75rem;
		color: #F4A22D;
	}
	.add_ding{
		padding: 0 20/75rem;
		line-height: 60/75rem;
		font-size: 22/75rem;
		>p{
			text-indent: 1.6em;
			position: relative;
			&:before{
				content: '';
					display: block;
					position: absolute;
					top:45%;
					left: 0;
					transform: translateY(-50%);
					width: 30/75rem;
					height: 30/75rem;
					background: url(../assets/logo/address1.png)no-repeat center;
					background-size:30/75rem auto ;
			}
			&:after{
				content: '';
					display: block;
					position: absolute;
					top:45%;
					right: 0;
					transform: translateY(-50%);
					width: 30/75rem;
					height: 30/75rem;
					background: url(../assets/logo/address2.png)no-repeat center;
					background-size:30/75rem auto ;
			}
		}
		em{
			font-style: normal;
			color: #999;
		}
	}
</style>