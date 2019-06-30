<template>
	<div>
		<div class="top">
			<header>
				<h3>商品详情</h3>
			</header>
		</div>
		<Banner swiperid="homeswiper" effecttype="fade" paginationtype="fraction" :autoplaytype=true :looptype=false>
			 <div slot="swiper-con" class="swiper-slide">
				<img :src="result.cover1" />
			</div> 
			<div slot="swiper-con" class="swiper-slide">
				<img :src="result.cover2" />
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img :src="result.cover3" />
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img :src="result.cover4" />
			</div>
		</Banner>
		<div class="scoll">
			<div class="D_content">
				<h3>{{result.produ_name}}</h3>
				<p>{{result.produ_des}}</p> 
				<p class="D_price">
					<span>{{result.pro_price}}</span>
					<span>{{result.Number}}</span>
				</p>
				<div class="D_address">
					<span>·产地中国</span>
					<span>·2小时达</span>
					<span>·实付满0包邮</span>
				</div>
			</div>
			<div class="all_bg">
				<div class="youhui">
					<h3>优惠</h3>
					<p>详情></p>
				</div>
				<div class="xiangou">
					<img src="https://j-image.missfresh.cn/img_20181107153704134.png" alt="">
					每人每天购买不超过1件，享受此优惠
				</div>
				<div class="fenxing">
					<p><img src="https://j-image.missfresh.cn/img_20171029215450695.png" alt=""></p>
					<span>该商品分享可领取49减10元红包</span><a href="#">去分享></a>
				</div>
				<span>已经有3667人分享了该商品</span>
			</div>
			<div class="all_bg">
				<div class="youhui">
					<h3>安心指纹</h3>
					<p>点击查看></p>
				</div>
				<div class="jiance">
					<a href="#">
						<img src="https://j-image.missfresh.cn/img_20180313023856777.png" alt="">
						<p>优鲜安心检测</p>
					</a>
					<a href="#">
						<img src="https://j-image.missfresh.cn/img_20180313023856777.png" alt="">
						<p>经营证件</p>
					</a>
				</div>
			</div>
			<section class="Bright">
				<h3>亮点</h3>
				<div class="product-buyer-box">
					<div class="buyer-description">
						<p><img src="../assets/logo/suprk.png" alt=""></p>
						<ul >
							<li >
								<p>
									{{result.liang_title}}
							    </p>
							</li>
							<li>
								<p>
									{{result.liang_title2}}
							    </p>
							</li>
						</ul> 
					</div>
				</div>
			</section>
			<section class="recommend-list">
				<h2>推荐商品</h2>
				<div class="product-recommend-container">
					<ul class="product-box">
						<li>
							<div class="rec_Timg"><img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt=""></div>
							<div class="tag">限时秒杀</div>
							<p class="product-title">进口香蕉1袋500g</p>
							<p class="product-des">跟鲜花一起运过来的香蕉</p>
							<div class="product-bottom">
								<div class="product-price">
									<span>￥6.9</span>
									<strong>￥10.9</strong>
								</div>
								<div class="product-ctrl-bg">
									<img src="https://j-image.missfresh.cn/img_20170425134548759.png">
								</div>
							</div>
						</li>
						<li>
							<div class="rec_Timg"><img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt=""></div>
							<div class="tag">限时秒杀</div>
							<p class="product-title">进口香蕉1袋500g</p>
							<p class="product-des">跟鲜花一起运过来的香蕉</p>
							<div class="product-bottom">
								<div class="product-price">
									<span>￥6.9</span>
									<strong>￥10.9</strong>
								</div>
								<div class="product-ctrl-bg">
									<img src="https://j-image.missfresh.cn/img_20170425134548759.png">
								</div>
							</div>
						</li>
						<li>
							<div class="rec_Timg"><img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt=""></div>
							<div class="tag">限时秒杀</div>
							<p class="product-title">进口香蕉1袋500g</p>
							<p class="product-des">跟鲜花一起运过来的香蕉</p>
							<div class="product-bottom">
								<div class="product-price">
									<span>￥6.9</span>
									<strong>￥10.9</strong>
								</div>
								<div class="product-ctrl-bg">
									<img src="https://j-image.missfresh.cn/img_20170425134548759.png">
								</div>
							</div>
						</li>
						<li>
							<div class="rec_Timg"><img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt=""></div>
							<div class="tag">限时秒杀</div>
							<p class="product-title">进口香蕉1袋500g</p>
							<p class="product-des">跟鲜花一起运过来的香蕉</p>
							<div class="product-bottom">
								<div class="product-price">
									<span>￥6.9</span>
									<strong>￥10.9</strong>
								</div>
								<div class="product-ctrl-bg">
									<img src="https://j-image.missfresh.cn/img_20170425134548759.png">
								</div>
							</div>
						</li>
						<li>
							<div class="rec_Timg"><img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt=""></div>
							<div class="tag">限时秒杀</div>
							<p class="product-title">进口香蕉1袋500g</p>
							<p class="product-des">跟鲜花一起运过来的香蕉</p>
							<div class="product-bottom">
								<div class="product-price">
									<span>￥6.9</span>
									<strong>￥10.9</strong>
								</div>
								<div class="product-ctrl-bg">
									<img src="https://j-image.missfresh.cn/img_20170425134548759.png">
								</div>
							</div>
						</li>
						<li>
							<div class="rec_Timg"><img src="https://image.missfresh.cn/5b39c30e86204b4680e00f884c07f57f.jpg?iopcmd=convert&dst=webp" alt=""></div>
							<div class="tag">限时秒杀</div>
							<p class="product-title">进口香蕉1袋500g</p>
							<p class="product-des">跟鲜花一起运过来的香蕉</p>
							<div class="product-bottom">
								<div class="product-price">
									<span>￥6.9</span>
									<strong>￥10.9</strong>
								</div>
								<div class="product-ctrl-bg">
									<img src="https://j-image.missfresh.cn/img_20170425134548759.png">
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<section class="graphic-details-container">
				<div class="graphic-list-container">
					<h2>商品详情</h2>
					<ul>
						<li>规格：1个</li>
						<li>重量：270-400g*1个</li>
						<li>包装：普装</li>
						<li>保质期：到货即可食用</li>
						<li>贮存方法：冷藏</li>
					</ul>
					<div class="instruction-list-container">
						<div v-for="img in result.objbot">
							<img :src="img.cover_url" alt="">
						</div>
					</div>
				</div>
			</section>
		</div>
		<footer>
			<div class="fot_ads">
				<div class="fot_le">
					<p class="icon_ads"><img src="../assets/logo/detail-location-icon.16058b6.png" alt=""></p>
					<span>送至&nbsp;&nbsp;南山区政府大楼</span>
					<p class="icon_time"><img src="https://j-image.missfresh.cn/img_20161108170831264.png?mryxw=165&mryxh=42" alt=""></p>
				</div>
				<div class="fot_Rt">
					<p><img src="../assets/logo/right.png" alt=""></p>
				</div>
			</div>
			<div class="fot">
				<a href="#" class="icon_card"></a>
				<a href="#" class="join">加入购物车</a>
			</div>
		</footer>
	</div>
</template>

<script>
	import Banner from './banner'
	export default {
		data() {
			return {
				arr:[],
				result:{}
			}
		},
		methods:{
			// getval(){
			// 	this.$axios.get("https://www.easy-mock.com/mock/5cfe1a35454961552714c6f9/example/datails")
			// 	.then(res=>{
			// 		console.log(res.data.data)
			// 		this.arr=res.data.data;
			// 	})
			// 	.catch(err=>{
			// 		console.log(err)
			// 	})
			// }
		},
		mounted(){
			var id=location.href.split("=")[1]
			this.$axios.get("https://www.easy-mock.com/mock/5cfe1a35454961552714c6f9/example/datails")
				.then(res => {
					for(let item of res.data.data){
						if(item.id==id){
							this.result=item
						console.log(this.result)
						}
					}
			
				})
		},
		components: {
			Banner
		}
	}
</script>

<style lang="less">
	.scoll {
		background: #F8F8F8;
		margin-bottom: 100/75rem;
	}

	.D_content {
		padding: 0 30/75rem 0 20/75rem;
		margin-bottom: 15/75rem;
		background: #fff;
		margin-top: 50/75rem;

		h3 {
			font-size: 26/75rem;
			color: #333;
			font-weight: 600;
		}

		p {
			color: #555;
		}

		.D_price {
			display: flex;
			justify-content: space-between;
			color: #999;
			font-size: 20/75rem;
			margin: 30/75rem 0 20/75rem 0;
			>span:nth-of-type(1){
				color: #FF4891;
			}
		}

		.D_address {
			color: #555;
			font-size: 20/75rem;
			padding: 20/75rem 0;
			border-top: 1px solid #F2F2F2;

			span {
				margin: 0 10/75rem;
			}
		}
	}

	.all_bg {
		padding: 0 20/75rem;
		background: #fff;
		margin-bottom: 15/75rem;
		font-size: 20/75rem;

		.youhui {
			display: flex;
			justify-content: space-between;
			padding: 20/75rem 0;

			>p {
				margin-top: 20/75rem;
				color: #999;
			}

			h3 {
				// margin-top: 10/75rem;
				font-size: 28/75rem;
				font-weight: 500;
			}
		}

		.xiangou {
			color: #555;
			padding-bottom: 40/75rem;

			img {
				width: 40/75rem;
			}
		}

		.fenxing {
			display: flex;
			justify-content: space-around;
			background: #FFE0F0;
			line-height: 80/75rem;
			border-radius: 8px;
			color: #FF4891;
			padding-right: 10/75rem;

			p {
				width: 40/75rem;

				>img {
					width: 100%;
				}
			}

			span {
				margin-left: -8%;
			}

			a {
				color: #FF4891;
			}
		}

		>span {
			color: #999;
			display: block;
			font-size: 18/75rem;
			padding: 20/75rem;
		}
	}

	.jiance {
		display: flex;
        padding-bottom: 20/75rem;
		a {
			width: 25%;
			text-align: center;
			font-size: 18/75rem;
			color: #666;

			img {
				width: 50/75rem;
			}
		}

	}
    .Bright{
		background: #fff;
		padding:20/75rem;
		h3{
			font-weight: 500;
		}
		>.product-buyer-box{
			box-shadow: 0 0.125rem 0.5rem 0 #E7E7E7;
			margin-top: 15/75rem;
			border-radius: 5px;
			padding: 20/75rem;
			.buyer-description{
				background: #f5f5f5;
				font-size: 22/75rem;
				padding: 15/75rem;
				ul{
					padding: 0 8/75rem;
					li{
						margin-top: 10/75rem;
						>p{
							padding-top: 10/75rem;
							line-height: 30/75rem;
							color: #474245;
						}
					}
				}
				
			}
		}
	}
	.recommend-list{
		padding: 10/75rem 0 10/75rem 20/75rem;
		h2{
			font-weight: 500;
			line-height: 80/75rem;
			font-size: 32/75rem;
		}
		.product-recommend-container{
			width: 100%;
			white-space: nowrap;
			ul{
				display: flex;
				background: #fff;
				overflow-x: scroll;
				li{
					margin: 10/75rem;
					position: relative;
					padding: 20/75rem;
					.rec_Timg{
						width:200/75rem;
						margin-bottom:15/75rem; 
						img{
							width: 100%;
						}
					}
					.tag{
						position: absolute;
						top: 48%;
						left: 50%;
						transform: translateX(-50%);
						background: #FA4621;
						color: #fff;
						font-size: 18/75rem;
						padding: 2/75rem 5/75rem;
					}
					.product-bottom{
						display: flex;
						margin-top: 25/75rem;
						// align-items: center;
						.product-price{
							width: 140/75rem;
							font-size: 20/75rem;
							span{
								color: #FF4891;
							}
							strong{
								display: block;
								color: #969696;
								font-weight: normal;
								font-size: 24/75rem;
								
							}
						}
						.product-ctrl-bg{
							width: 80/75rem;
							img{
								width: 100%;
							}
						}
					}
					p{
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						font-size: 20/75rem;
						line-height: 30/75rem;
						&.product-title{
							color:#474245;
							margin-top: 15/75rem;
						}
						&.product-des{
							color: #969696;
						}
					}
					
				}
			}
		}
	}
	.graphic-list-container{
		background: #fff;
		padding: 0 25/75rem;
		h2{
			padding-top: 20/75rem;
			font-weight: normal;
			color: #666;
		}
		ul{
			color: #999;
			font-size: 22/75rem;
			margin-bottom:10/75rem; 
			li{
				line-height: 70/75rem;
			}
		}
	}
	.instruction-list-container{
		width: 100%;
		img{
			width: 100%;
			vertical-align: middle;
		}
	}
	#top {
		position: fixed;
		top: 0;
		background: #FFFFFF;
		z-index: 20;
	}

	header {
		line-height: 60/75rem;
		border-bottom: 1px solid #F2F2F2;
		text-align: center;
		padding: 0 20/75rem;
		position: relative;

		&:after {
			content: '';
			display: block;
			width: 50/75rem;
			height: 50/75rem;
			position: absolute;
			right: 1%;
			top: 15%;
			background: url(../assets/logo/fen.png)no-repeat center;
			background-size: 35/75rem auto;
		}

		h3 {
			height: 100%;
			width: 20%;
			font-size: 24/75rem;
			margin: 0 auto;
			font-weight: normal;
			color: #FF4891;
			border-bottom: 2px solid #FF4891;
		}
	}

	footer {
		line-height: 70/75rem;
		position: fixed;
		bottom: 0;
		background: #fff;
		z-index: 33;
        .fot_ads{
			display: flex;
			 padding: 0 20/75rem;
			justify-content: space-between;
			background: #FFF5E4;
			.fot_le{
				display: flex;
				align-items: center;
				font-size: 20/75rem;
				.icon_ads{
					width: 30/75rem;
					img{
						width: 100%;
						vertical-align: middle;
					}
				}
				span{
					margin: 0 10/75rem;
				}
				.icon_time{
					width: 100/75rem;
					img{
						width: 100%;
					}
				}
			}
			.fot_Rt{
				width:40/75rem;
				img{
					width: 100%;
					vertical-align: middle;
				}
			}
		}
		.fot {
			display: flex;
			text-align: center;
			height: 70/75rem;
			border-top: 1px solid #ccc;

			.icon_card {
				display: block;
				margin: 0 10/75rem;
				width: 80/75rem;
				height: 100%;
				background: url(../assets/logo/shop-icon.03511f0.png)no-repeat center;
				background-size: 40/75rem auto;
			}

			.join {
				background: #FF4891;
				width: 470/75rem;
				color: #fff;
				overflow: hidden;
			}
		}
	}
</style>
