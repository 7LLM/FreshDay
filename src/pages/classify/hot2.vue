<template>
	<div class="class_hot2">
		<!--导航部分-->
		<nav class="hot2_nav">
			<ul>
				<li @click="curr=0"><a href="javascript:;" :class="{active:curr==0}">新人大礼包</a></li>
				<li @click="curr=1"><a href="javascript:;" :class="{active:curr==1}">今日限时秒杀</a></li>
				<li @click="curr=2"><a href="javascript:;" :class="{active:curr==2}">时令水果</a></li>
				<li @click="curr=3"><a href="javascript:;" :class="{active:curr==3}">新鲜蔬菜</a></li>
				<li @click="curr=4"><a href="javascript:;" :class="{active:curr==4}">肉禽蛋类</a></li>
				<li @click="curr=5"><a href="javascript:;" :class="{active:curr==5}">乳品雪糕</a></li>
				<li @click="curr=6"><a href="javascript:;" :class="{active:curr==6}">海鲜水产</a></li>
			</ul>
		</nav>
		<section class="proList">
			<div class="pro" v-for="(item,index) in pro" :key="index" v-show="index<=6">
				<div class="left"><img :src="item.img_url"/></div>
				<div class="right">
					<h4>{{item.title}}</h4>
					<div class="dec">{{item.dec}}</div>
					<div class="nowPrice">￥{{item.newprice}}</div>
					<div class="pastPrice">
						<span>￥{{item.oldprice}}</span>
						<div class="count">
							<!--<div class="computed" :class="{active:isShow}">
								<img class="reduce" src="https://static-as.missfresh.cn/frontend/item/static/img/sub-btn.adbbdd2.png" alt="" />
								<span>1</span>
								<img class="add" src="https://static-as.missfresh.cn/frontend/item/static/img/add-btn.bcb2594.png" alt="" />
							</div>-->
							<div class="car" @click="show()">
								<img src="https://static-as.missfresh.cn/frontend/item/static/img/new-cart.a16f026.png" alt="" />
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				pro:[],
				isShow:"",
				curr:0
			}
		},
		mounted() {
				this.$axios.get("../../../static/data/classifyPro.json")
					.then(res => {
						console.log(res.data.classify_list);
						this.pro = res.data.classify_list;
					})
		},
		methods:{
			show(){
				this.isShow=true;
			}
		}
	}
</script>

<style lang="less">
	.class_hot2{
		float: left;
		width: 78%;
		margin-left: 10/75rem;
		margin-top: 60/75rem;
		.hot2_nav{
			ul{
				display: flex;
				flex-wrap: nowrap;
				width: 100%;
				overflow: scroll;
				li{
					font-size: 0.28rem;
					a{
						display: block;
						color: #474245;
						padding: 12/75rem;
						white-space: nowrap;
					}
				}
				.active{
					color: #FF3587;
				}
			}
		}
		.proList{
			height: 10.8rem;
			overflow: scroll;
			padding: 0 6/75rem;
			.pro{
				margin-top: 10/75rem;
				display: flex;
				padding: 10/75rem 0;
				border-bottom: 1px solid gainsboro;
				.left{
					width: 142/75rem;
					img{
						width: 100%;
					}
				}
				.right{
					width: 68%;
					margin-left: 15/75rem;
					font-size: 0.26rem;
					h4{
						font-size: 0.28rem;
						font-weight: 500;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.dec,{
						color: #969696;
						line-height: 37/75rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.nowPrice{
						color: #FF3587;
					}
					.pastPrice{
						color: #969696;
						position: relative;
						.count{
							position: absolute;
							top: -4/75rem;
							right: 10/75rem;
							img{
								width: 31/75rem;
								height: 31/75rem;
								vertical-align: middle;
							}
							.computed{
								display: none;
							}
							.active{
								display: block;
							}
						}
						
					}
				}
			}
		}
	}
</style>