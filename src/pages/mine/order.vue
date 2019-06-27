<template>
	<div>
		<!--头部-->
		<header>
			<router-link to="/mine" class="back"> < </router-link>
			<h4>填写订单</h4>
		</header>
		<!--订单内容-->
		<section class="content">
			<!--收货地址-->
			<section class="address">
				<p>请填写收货地址<span> > </span></p>
				
			</section>
			<!--送到时间-->
			<section class="timer">
				<p>隔日达<span>预计2019.08.28送达</span></p>
				<div>
					<img src="" /><span>共一件  > </span>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less" scoped>
	/*头部*/
	header{
		height: 54/75rem;
		line-height: 54/75rem;
		text-align: center;
		padding: 0 16/75rem;
		.back{
			float: left;
			font-size: 0.28rem;
		}
	}
	/*订单内容*/
	.content{
		padding: 16/75rem;
		background: #F5F5F5;
		.address{
			height: 160/75rem;
			padding: 50/75rem 20/75rem 0;
			box-sizing: border-box;
			background: #fff;
			border-radius: 10/75rem;
			p{
				font-size: 0.4rem;
				font-weight: 600;
				span{
					float: right;
					color: #969696;
				}
			}
		}
	}
</style>