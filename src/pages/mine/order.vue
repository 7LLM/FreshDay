<template>
	<div>
		<!--头部-->
		<header>
			<router-link to="/mine" class="back">
				< </router-link>
					<h4>填写订单</h4>
		</header>
		<!--订单内容-->
		<section class="content">
			<!--收货地址-->
			<section class="address">
				<p>请填写收货地址<span> > </span></p>
				<div class="line"></div>
			</section>
			<!--送到时间-->
			<section class="timer">
				<p>隔日达<span>预计2019.08.28送达</span></p>
				<div>
					<img src="../../assets/logo/order-1.png" /><span>共1件  <i> > </i> </span>
				</div>
			</section>
			<!--商品价钱-->
			<section class="price">
				<div class="price_item">商品原价 <span>￥39</span> </div>
				<div class="price_item"><i class="quan"></i> 商品券 <span class="coupon">0张商品券 <i> > </i> </span> </div>
				<div class="price_item"><i class="hongbao"></i> 红包 <span class="redRmb"> -￥15 <i> > </i> </span> </div>
				<div class="price_item">配送费 <span>￥10</span> </div>
				<div class="total">合计 <span>￥34</span></div>
			</section>
			<!--优惠是说明-->
			<section class="discount">
				<div>
					<a href="#">优惠说明</a>
					<span class="discount_icon">?</span>
				</div>
			</section>
			<!--支付板块-->
			<section class="payment">
				<p>
					鲜币 <span>共0鲜币，满100鲜币可用<i>?</i></span>
				</p>
				<div>
					储值支付（余额￥0）<span>去储值 <span>></span> </span>
				</div>
			</section>
		</section>
		<!--底部-->
		<section class="footer">
			<div>付款：<span>￥34</span></div>
			<div class="topay">去支付</div>
		</section>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	/*头部*/
	
	header {
		height: 54/75rem;
		line-height: 54/75rem;
		text-align: center;
		padding: 0 16/75rem;
		border-bottom: 1px solid #ccc;
		.back {
			float: left;
			font-size: 0.28rem;
		}
	}
	/*订单内容*/
	
	.content {
		padding: 16/75rem;
		margin-bottom: 82/75rem;
		background: #F5F5F5;
		.address {
			height: 160/75rem;
			padding: 50/75rem 20/75rem 0;
			box-sizing: border-box;
			background: #fff;
			border-radius: 10/75rem;
			p {
				font-size: 0.4rem;
				font-weight: 600;
				span {
					float: right;
					color: #969696;
				}
			}
			.line{
				height: 6/75rem;
				width: 6.5rem;
				margin-top: 64/75rem;
				background: url(../../assets/logo/line.png) no-repeat;
				background-size: cover;
			}
		}
		.timer {
			height: 180/75rem;
			padding: 20/75rem;
			margin-top: 20/75rem;
			box-sizing: border-box;
			background: #fff;
			border-radius: 10/75rem;
			>p {
				padding: 8/75rem 0;
				border-bottom: 1px solid #ccc;
				span {
					float: right;
					color: #969696;
					font-size: 0.28rem;
				}
			}
			>div {
				margin-top: 20/75rem;
				img {
					width: 62/75rem;
					height: 62/75rem;
				}
				span {
					float: right;
					font-size: 0.28rem;
					i {
						color: #969696;
						font-style: normal;
					}
				}
			}
		}
		.price {
			overflow: hidden;
			padding: 20/75rem;
			margin-top: 20/75rem;
			box-sizing: border-box;
			background: #fff;
			border-radius: 10/75rem;
			.price_item {
				padding: 8/75rem;
				.quan {
					float: left;
					width: 28/75rem;
					height: 28/75rem;
					margin-right: 10/75rem;
					background: url(../../assets/logo/quan.png) center center no-repeat;
				}
				.hongbao {
					float: left;
					width: 28/75rem;
					height: 28/75rem;
					margin-right: 10/75rem;
					background: url(../../assets/logo/hongbao.png) center center no-repeat;
				}
				span {
					float: right;
					font-size: 0.28rem;
					i {
						color: #969696;
						font-style: normal;
					}
				}
				.coupon {
					color: #969696;
				}
				.redRmb {
					color: #FF3587;
				}
			}
			.total {
				float: right;
				span {
					color: #FF3587;
				}
			}
		}
		.discount {
			margin: 14/75rem 0;
			overflow: hidden;
			font-size: 0.28rem;
			>div {
				float: right;
				a {
					color: #969696;
				}
				.discount_icon {
					float: right;
					margin-left: 4/75rem;
					color: #969696;
					width: 20/75rem;
					height: 20/75rem;
					line-height: 20/75rem;
					text-align: center;
					border-radius: 100%;
					border: 1px solid #969696;
				}
			}
		}
		.payment {
			width: 100%;
			padding: 20/75rem;
			box-sizing: border-box;
			background: #fff;
			border-radius: 10/75rem;
			>p {
				line-height: 36/75rem;
				border-bottom: 1px solid #ccc;
				span {
					color: #969696;
					font-size: 0.28rem;
					i {
						display: inline-block;
						font-style: normal;
						width: 20/75rem;
						height: 20/75rem;
						line-height: 20/75rem;
						text-align: center;
						border-radius: 100%;
						border: 1px solid #969696;
					}
				}
			}
			>div {
				padding: 10/75rem 0;
				>span {
					float: right;
					margin-top: 6/75rem;
					font-size: 0.28rem;
					span {
						color: #969696;
					}
				}
			}
		}
	}
	/*底部*/
	
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 80/75rem;
		line-height: 80/75rem;
		padding-left: 20/75rem;
		border-top: 1px solid #ccc;
		div:first-child {
			float: left;
			span {
				color: #FF3587;
			}
		}
		.topay {
			float: right;
			color: #fff;
			padding: 0 60/75rem;
			background: #FF3587;
		}
	}
</style>