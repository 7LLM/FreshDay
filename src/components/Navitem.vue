<template>
	<div>
		<nav class="nav">
			<ul>
				<li v-for="(item,index) in arr" :class="{'active':item.ishow==index}" @click="fn(index)" :key="index">
					<!-- <router-link to="item.dizhi">{{item.title}}</router-link> -->
					<span>{{item.title}}</span>
				</li>
			</ul>
			<div class="nav_btn"></div>
		</nav>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr: [{
						title: "热销爆品",
						ishow: 0,
						dizhi:'hot'
					},
					{
						title: "优鲜菜场",
						ishow: -1,
						dizhi:'priority'
					},
					{
						title: "时令尝鲜",
						ishow: -1,
						dizhi:'try'
					},
					{
						title: "会员特价",
						ishow: -1,
						dizhi:'member'
					},
					{
						title: "时令水果",
						ishow: -1,
						dizhi:'fruits'
					},
					{
						title: "新鲜蔬菜",
						ishow: -1,
						dizhi:'vegetables'
					},
					{
						title: "肉禽蛋类",
						ishow: -1,
						dizhi:'egg'
					},
					{
						title: "海鲜水产",
						ishow: -1,
						dizhi:'seafood'
					},
					{
						title: "乳品雪糕",
						ishow: -1,
						dizhi:'dairy'
					},
					{
						title: "休闲零品",
						ishow: -1,
						dizhi:'snack'
					},
					{
						title: "卤味熟食 ",
						ishow: -1,
						dizhi:'cooked'
					},
					{
						title: "酒水饮料",
						ishow: -1,
						dizhi:'drinks'
					},
					{
						title: "烘培糕点",
						ishow: -1,
						dizhi:'baking'
					},
					{
						title: "粮油调味",
						ishow: -1,
						dizhi:'grain'
					},
					{
						title: "方便速食",
						ishow: -1,
						dizhi:'fastfood'
					},
					{
						title: "家居清洁",
						ishow: -1,
						dizhi:'clean'
					},
					{
						title: "美妆个护",
						ishow: -1,
						dizhi:'makeup'
					},
					{
						title: "时令尝鲜",
						ishow: -1,
						dizhi:'time'
					},
					{
						title: "小龙虾",
						ishow: -1,
						dizhi:'crayfish'
					},
					{
						title: "雪糕铺",
						ishow: -1,
						dizhi:'shop'
					},
					{
						title: "大件重货",
						ishow: -1,
						dizhi:'big'
					},
					{
						title: "超市",
						ishow: -1,
						dizhi:'supermarket'
					}
				]
			}
		},
		methods:{
			fn(index) {
				for(var i=0;i<this.arr.length;i++){
					this.arr[i].ishow=-1;
				}
				this.arr[index].ishow=index;
				this.$router.push("/home/"+this.arr[index].dizhi)
			}
		},
		beforeCreate:function(){
			// console.log(111)
			this.$router.push("/home/hot")
		}
	}
</script>

<style lang="less">
	.nav {
		text-align: center;
		line-height: 50/75rem;
		display: flex;
		background: #fff;
		border-bottom: 1px solid #f2f2f2;
		>ul {
			width: 100%;
			display: flex;
			overflow: scroll;
			flex-wrap: nowrap;
			&::-webkit-scrollbar {          
                display: none;
				}
			>li {
				width: 100/75rem;
				margin: 0 20/75rem;
				span {
					display: block;
					width: 80/75rem;
					font-size: 18/75rem;
				}
				&.active {
					border-bottom: 2px solid #FF4891;
				}
			}
		}
	
		.nav_btn {
			width: 80/75rem;
			background: url(../assets/logo/down.png)no-repeat center;
			background-size: 25/75rem auto;
		}
	}
</style>
