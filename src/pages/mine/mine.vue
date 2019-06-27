<template>
	<div>
		<section class="user_login">
			<div><router-link to="/login">用户登录</router-link></div>
		</section>
		<section class="user_item">
			<ul>
				<li><a href="#">
					<p>0</p>
					<p>余额<img src="https://j-image.missfresh.cn/img_20180205201631182.gif" /></p>
				</a></li>
				<li><a href="#">
					<p>0</p>
					<p>红包</p>
				</a></li>
				<li><a href="#">
					<p>0</p>
					<p>商品券</p>
				</a></li>
				<li><a href="#">
					积分兑换
				</a></li>
			</ul>
		</section>
		<section class="user_plus">
			<div>
				<span class="plus_left">会员权益</span>
				<router-link to="/login" class="plus_right">开通会员</router-link>
			</div>
			<p>成为优享会员，预计1年将为你<span>节省1121.30元 </span> </p>
		</section>
		<section class="plus_item">
			<ul>
				<li><a href="#">
					<img src="https://j-image.missfresh.cn/img_20171103161358679.png"/><br />
					<span>会员专享价</span>
				</a></li>
				<li><a href="#">
					<img src="https://j-image.missfresh.cn/img_20171028202735028.png"/><br />
					<span>1小时送达</span>
				</a></li>
				<li><a href="#">
					<img src="https://j-image.missfresh.cn/img_20171028202909231.png"/><br />
					<span>专属客服 </span>
				</a></li>
				<li><a href="#">
					<img src="https://j-image.missfresh.cn/img_20180105021607945.png"/><br />
					<span>敬请期待</span>
				</a></li>
			</ul>
		</section>
		<section class="poster">
			<div v-for="(img,index) in imgUrl">
				<img :src="img.url"/>
			</div>
		</section>
		<section class="list">
			<ul>
				<li v-for="(item,index) in list">
					<a href="#">{{item.list_item}}</a>
					<!--<router-link to="/order">{{item.list_item}}</router-link>-->
				</li>
			</ul>
		</section>
		<!--<section class="list">
			<ul>
				<li><a href="#">
					我的订单
				</a></li>
				<li><a href="#">
					我的地址
				</a></li>
				<li><a href="#">
					账户与安全
				</a></li>
				<li><a href="#">
					客户与帮助
				</a></li>
				<li><a href="#">
					意见反馈
				</a></li>
				<li><a href="#">
					关于我们
				</a></li>
			</ul>
		</section>-->
	</div>
</template>	
<script>
	export default{
		data(){
			return{
				list:[],
				imgUrl:[
					{url:"https://j-image.missfresh.cn/img_20190625213127360.jpg"},
					{url:"https://j-image.missfresh.cn/img_20190611172748196.jpg"}
				]
			}
		},
		components:{
		  	
		 },
		mounted(){
			this.$axios.get("../../../static/data/mineList_item.json")
			.then(res =>{
				console.log(res.data.list);
				this.list = res.data.list;
			})
		}
	}
</script>
<style lang="less">
	.user_login{
		width: 100%;
		height: 162/75rem;
		padding-top: 75/75rem;
		background: url(https://static-as.missfresh.cn/frontend/user/static/img/my-bg.95ae718.png) 100% no-repeat;
		div{
			width: 120/75rem;
			height: 40/75rem;
			line-height: 40/75rem;
			text-align: center;
			margin: 0 auto;
			border: 1px solid #FF3587;
			border-radius: 4/75rem;
			a{
				color: #FF3587;
			}
		}
	}
	.user_item{
		height: 100/75rem;
		padding: 20/75rem 0;
		ul{
			display: flex;
			li{
				width: 94/75rem;
				font-size: 0.28rem;
				flex: 1;
				text-align: center;
				a{
					color: #000;
				}
				p{
					text-align: center;
					position: relative;
					img{
						width: 30/75rem;
						height: 18/75rem;
						position: absolute;
						left: 96/75rem;
						bottom: 18/75rem;
					}
				}
			}
		}
	}
	.user_plus{
		padding: 0 20/75rem;
		>div{
			overflow: hidden;
			.plus_left{
				font-size: 0.4rem;
				float: left;
			}
			.plus_right{
				float: right;
				color: #969696;
				font-size: 0.28rem;
			}
		}
		>p{
			color: #969696;;
			font-size: 0.28rem;
			width: 100%;
			height: 38/75rem;
			line-height: 38/75rem;
			span{
				color: #FF4891;
			}
		}
	}
	.plus_item{
		padding: 15/75rem 20/75rem;
		ul{
			display: flex;
			li{
				flex: 1;
				text-align: center;
				font-size: 0.28rem;
				a{
					color: #000;
					img{
						width: 36/75rem;
						height: 36/75rem;
					}
				}
			}
		}
	}
	.poster{
		padding: 20/75rem;
		display: flex;
		div{
			flex: 1;
			img{
				width: 90%;
			}
		}
	}
	.list{
		padding: 0 20/75rem;
		margin-bottom: 85/75rem;
		li{
			border-bottom: 1px solid #ccc;
			a{
				color: #262626;
				display: block;
				height: 75/75rem;
				line-height: 70/75rem;
				&:after{
					content: ">";
					display: block;
					clear: both;
					float: right;
					color: #ccc;
				}
			}
			&:last-of-type{
				border: none;
			}
		}
	}
</style>