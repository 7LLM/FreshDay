<template>
	<div class="class_hot2">
		<!--导航部分-->
		<nav class="hot2_nav">
			<ul>
				<li @click="curr=0"><a href="javascript:;" :class="{active:curr==0}">安心鲜品</a></li>
				<li @click="curr=1"><a href="javascript:;" :class="{active:curr==1}">今日热卖</a></li>
				<li @click="curr=2"><a href="javascript:;" :class="{active:curr==2}">时令蔬菜</a></li>
				<li @click="curr=3"><a href="javascript:;" :class="{active:curr==3}">品质肉蛋</a></li>
				<li @click="curr=4"><a href="javascript:;" :class="{active:curr==4}">鲜味水产</a></li>
				<li @click="curr=5"><a href="javascript:;" :class="{active:curr==5}">粮油调味</a></li>
				<li @click="curr=6"><a href="javascript:;" :class="{active:curr==6}">小菜其他</a></li>
			</ul>
		</nav>
		<section class="proList">
			<div class="pro" v-for="(item,index) in pro" :key="index" v-show="index>=7 && index<=13">
				<div class="left"><img :src="item.img_url"/></div>
				<div class="right">
					<h4>{{item.title}}</h4>
					<div class="dec">{{item.dec}}</div>
					<div class="nowPrice">￥{{item.newprice}}</div>
					<div class="pastPrice">
						<span>￥{{item.oldprice}}</span>
						<div class="count">
							<!--<div>
								<img class="reduce" src="https://static-as.missfresh.cn/frontend/item/static/img/sub-btn.adbbdd2.png" alt="" />
								<span>1</span>
								<img class="add" src="https://static-as.missfresh.cn/frontend/item/static/img/add-btn.bcb2594.png" alt="" />
							</div>-->
							<div>
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
				curr:0
			}
		},
		mounted() {
				this.$axios.get("../../../static/data/classifyPro.json")
					.then(res => {
						console.log(res.data.classify_list);
						this.pro = res.data.classify_list;
					})
		}
	}
</script>

<style lang="less">
	
</style>