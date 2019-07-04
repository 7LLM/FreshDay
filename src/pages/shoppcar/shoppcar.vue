<template>
	<div>
		<!--头部-->
		<header>
			<p><i class="curr"></i>南山区政府大楼 <i class="goAddress"></i></p>
		</header>
		<!--主体内容-->
		<section class="container">
			<!--购物车内容-->
			<div class="goods">
				<div class="timer">
					<div class="check"></div>
					1小时送达<span>包邮</span>
				</div>
				<div class="goods_detail">
					<div class="check"></div>
					<div class="left"><img src="../../assets/logo/order-1.png" /></div>
					<div class="right">
						<h4>JinGold智利金果2个140g起</h4>
						<p class="spike">限时秒杀</p>
						<div>
							<span class="nowPrice">￥6.9</span><span class="pastPrice">￥7.5</span>
							<div class="count">
								<span class="reduce">-</span><span class="num">1</span><span class="add">+</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--开通会员-->
			<section class="menber">
				<div class="left"><img src="https://j-image.missfresh.cn/img_20181205175918600.png"/></div>
				<div class="right">
					<span>6/月</span> 立即开通<img src="https://j-image.missfresh.cn/img_20181206163746310.png" alt="" />
				</div>
			</section>
			<!--商品价钱-->
			<section class="price">
				<div class="price_item">商品总价 <span>￥6.9</span> </div>
				<div class="price_item"><i class="quan"></i> 商品券 <span class="coupon">0张商品券 <i> > </i> </span> </div>
				<div class="price_item"><i class="hongbao"></i> 红包 <span class="redRmb"> -￥1 <i> > </i> </span> </div>
				<div class="price_item">商品实付 <span>￥5.9</span> </div>
				<div class="price_item">配送费 <span>包邮</span> </div>
				<div class="total">合计 <span>￥5.9</span></div>
			</section>
			<!--推荐商品-->
			<section class="recommend">
				<h3>推荐商品</h3>
				<ul>
					<li><a href="#">
						<img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt="" />
						<p>进口香蕉1袋500g</p>
						<p>跟鲜花一起运过来的香蕉</p>
						<div class="re_price">
							<p class="nowPrice">￥6.9</p>
							<p>￥10.9</p>
							<div class="car">
								<img src="https://static-as.missfresh.cn/frontend/item/static/img/new-cart.a16f026.png" alt="" />
							</div>
						</div>
					</a></li>
					<li><a href="#">
						<img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt="" />
						<p>进口香蕉1袋500g</p>
						<p>跟鲜花一起运过来的香蕉</p>
						<div class="re_price">
							<p>￥6.9</p>
							<p>￥10.9</p>
							<div class="car">
								<img src="https://static-as.missfresh.cn/frontend/item/static/img/new-cart.a16f026.png" alt="" />
							</div>
						</div>
					</a></li>
					<li><a href="#">
						<img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt="" />
						<p>进口香蕉1袋500g</p>
						<p>跟鲜花一起运过来的香蕉</p>
						<div class="re_price">
							<p>￥6.9</p>
							<p>￥10.9</p>
							<div class="car">
								<img src="https://static-as.missfresh.cn/frontend/item/static/img/new-cart.a16f026.png" alt="" />
							</div>
						</div>
					</a></li>
					<li><a href="#">
						<img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt="" />
						<p>进口香蕉1袋500g</p>
						<p>跟鲜花一起运过来的香蕉</p>
						<div class="re_price">
							<p>￥6.9</p>
							<p>￥10.9</p>
							<div class="car">
								<img src="https://static-as.missfresh.cn/frontend/item/static/img/new-cart.a16f026.png" alt="" />
							</div>
						</div>
					</a></li>
				</ul>
			</section>
		</section>
		<Tabbar inactive="3"></Tabbar>
	</div>
</template>
<script>
	import Tabbar from '../../components/tabbar'
	export default {
		components: {
			Tabbar
		}
	}
</script>
<style lang="less" scoped>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 80/75rem;
		text-align: center;
		padding-top: 10/75rem;
		box-sizing: border-box;
		background: #fff;
		i {
			display: inline-block;
			width: 18/75rem;
			height: 20/75rem;
			background: url(https://j-image.missfresh.cn/img_20181126180422874.png) no-repeat;
			background-size: contain;
		}
		.goAddress {
			background: url(https://j-image.missfresh.cn/img_20181126182604806.png) no-repeat;
			background-size: contain;
			background-position: center bottom;
		}
	}
	
	.container {
		padding: 20/75rem 0;
		margin: 80/75rem 0;
		background: #F5F5F5;
		.goods {
			background: #fff;
			.timer {
				height: 60/75rem;
				line-height: 60/75rem;
				padding: 0 20/75rem;
				border-bottom: 1px solid #ccc;
				span {
					float: right;
					color: #FF3587;
				}
			}
			.goods_detail {
				display: flex;
				align-items: center;
				padding: 20/75rem;
				.left {
					margin: 0 20/75rem;
					img {
						width: 100/75rem;
					}
				}
				.right {
					width: 66%;
					font-size: 0.26rem;
					position: relative;
					h4 {
						font-weight: 500;
						font-size: 0.28rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.spike {
						color: #d165e1;
						width: 85/75rem;
						text-align: center;
						margin: 6/75rem 0 10/75rem 0;
						border: 1px solid #d165e1;
					}
					>div{
						
						.nowPrice{
							color: #FF3587;
							font-size: 0.28rem;
						}
						.pastPrice{
							color: #969696;
							font-size: 0.24rem;
							text-decoration: line-through;
						}
						.count{
							position: absolute;
							bottom: 0;
							right: 0;
							.reduce,.add{
								display: inline-block;
								width: 20/75rem;
								height: 20/75rem;
								line-height: 20/75rem;
								border-radius: 100%;
								border: 1px solid #ccc;
								text-align: center;
								color: #969696;
							}
							.num{
								margin: 0 5/75rem;
							}
						}
					}
				}
			}
			.check {
				display: inline-block;
				width: 20/75rem;
				height: 20/75rem;
				border-radius: 100%;
				border: 1px solid #ccc;
			}
		}
		.menber{
			overflow: hidden;
			margin: 16/75rem;
			padding: 16/75rem 10/75rem;
			border-radius: 10/75rem;
			background: #fff;
			.left{
				float: left;
				img{
					width: 75/75rem;
					height: 21/75rem;
				}
			}
			.right{
				float: right;
				span{
					font-size: 0.24rem;
					color: #FF3587;
				}
				img{
					width: 27/75rem;
					height: 27/75rem;
					margin-left: 6/75rem;
					vertical-align: middle;
				}
			}
		}
		.price {
			overflow: hidden;
			margin: 16/75rem;
			padding: 16/75rem 10/75rem;
			background: #fff;
			box-sizing: border-box;
			background: #fff;
			border-radius: 10/75rem;
			.price_item {
				padding: 10/75rem;
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
		.recommend{
			padding: 0 16/75rem;
			h3{
				font-size: 0.34rem;
				font-weight: 500;
				margin: 15/75rem 0;
			}
			ul{
				display: flex;
				flex-flow: wrap;
				li{
					width: 48%;
					margin-left: 8/75rem;
					margin-bottom: 8/75rem;
					padding: 10/75rem;
					box-sizing: border-box;
					border-radius: 15/75rem;
					background: #fff;
					a{
						display: block;
						font-size: 0.28rem;
						color: #000;
						>img{
							width: 217/75rem;
							height: 217/75rem;
						}
						p:nth-of-type(2){
							color: #969696;
						}
						.re_price{
							margin-top: 14/75rem;
							position: relative;
							.nowPrice{
								color: #FF3587;
								font-size: 0.26rem;
							}
							.car{
								position: absolute;
								right: 0;
								bottom: 0;
								img{
									width: 45/75rem;
									height: 45/75rem;
								}
							}
						}
					}
				}
			}
		}
	}
</style>