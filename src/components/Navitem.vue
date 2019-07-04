<template>
	<div>
		<nav class="nav">
			<ul>
				<li v-for="(item,index) in arr" :class="{'active':item.ishow==index}" @click="fn(index)" :key="index">
					<!-- <router-link to="item.dizhi">{{item.title}}</router-link> -->
					<span>{{item.title}}</span>
				</li>
			</ul>
			<div class="nav_btn" @click="fn2()"></div>
		</nav>
		<div class="zhe" v-show="!flag"></div>
		<div class="nav_two" v-show="!flag" :class="{active:!flag}">
			<h3>全部分类<i class="icon_close" @click="fn2()"></i></h3>
			<ul class="quan_nav">
				<li v-for="(item,index) in arr1">
					<img :src="item.img_url" alt="">
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div>
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
				],
				arr1:[
					{title:' 热销商品',img_url:'https://j-image.missfresh.cn/mis_img_20181212225039946.png?mryxw=120&mryxh=120'},
					{title:' 优鲜菜场',img_url:'https://j-image.missfresh.cn/mis_img_20190104093258105.png?mryxw=140&mryxh=140'},
					{title:' 时令尝鲜',img_url:'https://j-image.missfresh.cn/mis_img_20190516225131129.jpg?mryxw=360&mryxh=360'},
					{title:' 会员特价',img_url:'https://j-image.missfresh.cn/mis_img_20190415010710117.png?mryxw=96&mryxh=96'},
					{title:' 时令水果',img_url:'https://j-image.missfresh.cn/mis_img_20190411215607573.png?mryxw=96&mryxh=96'},
					{title:' 新鲜蔬菜',img_url:'https://j-image.missfresh.cn/mis_img_20190411215607573.png?mryxw=96&mryxh=96'},
					{title:' 肉禽蛋类',img_url:'https://j-image.missfresh.cn/mis_img_20190411233944397.png?mryxw=96&mryxh=96'},
					{title:' 海鲜水产',img_url:'https://j-image.missfresh.cn/mis_img_20190411215703249.png?mryxw=96&mryxh=96'},
					{title:' 乳品雪糕',img_url:'https://j-image.missfresh.cn/mis_img_20190411215729751.png?mryxw=96&mryxh=96'},
					{title:' 烘培糕点',img_url:'https://j-image.missfresh.cn/mis_img_20181212225750228.png?mryxw=140&mryxh=140'},
					{title:' 休闲零食',img_url:'https://j-image.missfresh.cn/mis_img_20181212225358505.png?mryxw=140&mryxh=140'},
					{title:' 卤味熟食',img_url:'https://j-image.missfresh.cn/mis_img_20181212225647021.png?mryxw=140&mryxh=140'},
					{title:' 酒水饮料',img_url:'https://j-image.missfresh.cn/mis_img_20181212225617637.png?mryxw=140&mryxh=140'},
					{title:' 粮油调味',img_url:'https://j-image.missfresh.cn/mis_img_20190329212200665.png?mryxw=144&mryxh=144'},
					{title:' 方便素食',img_url:'https://j-image.missfresh.cn/mis_img_20190329213300525.png?mryxw=144&mryxh=144'},
					{title:' 家居清洁',img_url:'https://j-image.missfresh.cn/mis_img_20190516181026862.png?mryxw=144&mryxh=144'},
					{title:' 美妆个护',img_url:'https://j-image.missfresh.cn/mis_img_20190516181359703.png?mryxw=144&mryxh=144'},
					{title:' 时令尝鲜',img_url:'https://j-image.missfresh.cn/mis_img_20190516151037947.jpg?mryxw=360&mryxh=360'},
					{title:' 小龙虾',img_url:'https://j-image.missfresh.cn/mis_img_20190430223431248.png?mryxw=144&mryxh=144'},
					{title:' 雪糕铺',img_url:'https://j-image.missfresh.cn/mis_img_20190514110733325.png?mryxw=141&mryxh=140'},
					{title:' 大件重货',img_url:'https://j-image.missfresh.cn/mis_img_20190506221030028.jpg?mryxw=500&mryxh=500'},
					{title:' 超市',img_url:'https://j-image.missfresh.cn/mis_img_20190404160657749.png?mryxw=110&mryxh=28'}
				],
				 flag:true
			}
		},
		methods:{
			fn(index) {
				for(var i=0;i<this.arr.length;i++){
					this.arr[i].ishow=-1;
				}
				this.arr[index].ishow=index;
				this.$router.push("/home/"+this.arr[index].dizhi)
			},
			fn2(){
				this.flag=!this.flag;
				console.log(111)
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
		position: relative;
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
				margin: 0 23/75rem;
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
	.zhe{
		position: absolute;
		left: 0;
		top: 50/75rem;
		width: 100%;
		height:15rem;
		background: rgba(0,0,0,.3);
	}
	.nav_two{
		position: absolute;
		left: 0;
		top:50/75rem;
		background: #fff;
		width: 100%;
		overflow: scroll;
		height: 8rem;
		h3{
			width: 100%;
			background: #fff;
			z-index: 666;
			position: fixed;
			line-height: 60/75rem;
			text-align: center;
			font-weight: normal;
			border-bottom: 1px solid #ccc;
			.icon_close{
				content: '';
				display: block;
				width: 60/75rem;
				height: 60/75rem;
				position: absolute;
				right: 0;
				top: 0;
				 background:url(../assets/logo/close.png) no-repeat center center;
				background-size:30/75rem auto;
			}
		}
		ul{
			margin-top: 11%;
			width: 100%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			color: #555;
			// overflow: scroll;
			li{
				width: 33.3333%;
				text-align: center;
				padding: 10/75rem 0;
				font-size: 18/75rem;
				img{
					width: 40/75rem;
				}
				p{
					margin: 10/75rem 0;
				}
			}
		}
		&.active{
			transition: all 1s linear .5s;
		}
	}
</style>
