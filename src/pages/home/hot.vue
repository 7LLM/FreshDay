<template>
	<div class="maxbox">
		<div class="he_user">
			<a href="#">
				<img src="https://j-image.missfresh.cn/img_20170627185311186.png" alt="">
				<em>优先严选</em>
				</a>
			<a href="#">
				<img src="https://j-image.missfresh.cn/img_20170627184654084.png" alt="">
				<em>安心检测</em>
			</a>
			<a href="#">
				<img src="https://j-image.missfresh.cn/img_20170718194948016.png" alt="">
				<em>赔付保障</em>
			</a>
		</div>
		<div class="nav_List">
			<a href="#" v-for="(item,index) in arr1">
				<img :src="item.img_url" alt="">
				<p>{{item.des}}</p>
			</a>
		</div>
		<div class="new_Prer">
			<a href="#">
				<img src="https://j-image.missfresh.cn/img_20190115153812265.png" alt="">
			</a>
			<a href="#">
				<img src="https://j-image.missfresh.cn/img_20190115153756830.png" alt="">
			</a>
		</div>
		<div class="banner_Img">
			<img src="https://j-image.missfresh.cn/mis_img_20190226141252067.jpg?mryxw=750&mryxh=142" alt="">
		</div>
		
		<div v-for="(item,index) in arr" :key="index"f style="position: relative;">
			<router-link :to="{path:'/details',query:{id:item.id}}">
				<AllItem >
						<div slot="le_Img" class="le_Img"><img :src="item.img_url" /></div>
						<div slot="rt_Des" class="rt_Des">
							<h3>{{item.produ_name}}</h3>
							<p>{{item.produ_des}}</p>
							<p class="new_user">
								<a href="#">新人专享</a>
								<!-- <a href="#">{{item.item_tag}}</a> -->
							</p>
							<div class="price">
								<span>{{item.pro_price}}</span>
								<span>￥49.9</span>
							</div>
						</div>
				</AllItem>
			</router-link> 
			   <p class="icon_cadd"><img src="https://j-image.missfresh.cn/img_20170425134548759.png"></p>
		</div>
	</div>
</template>
<script>
	import AllItem from '../../components/Allitem'
	import navItem from '../../components/Navitem'
	export default {
		data() {
			return {
				arr1: [{
						des: "本周新品",
						img_url: "https://j-image.missfresh.cn/img_20181127211810194.png"
					},
					{
						des: "邀请有礼",
						img_url: "https://j-image.missfresh.cn/img_20181127212305318.png"
					},
					{
						des: "每日签到",
						img_url: "https://j-image.missfresh.cn/img_20181127212018922.png"
					},
					{
						des: "凑单专区",
						img_url: "https://j-image.missfresh.cn/img_20181127212340988.png"
					},
					{
						des: "开通会员",
						img_url: "https://j-image.missfresh.cn/img_20181127212459157.png"
					}
				],
				temp:[],
				arr:[]
			}
		},
		components: {
			AllItem,navItem
		},
		methods: {
			getval() {
				this.$axios.get("https://www.easy-mock.com/mock/5cfe1a35454961552714c6f9/example/datails")
					.then(res => {
						for(let item of res.data.data){
							this.temp.push(item.id)
						}
						this.arr = res.data.data;
						console.log(res.data.data)
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
		mounted() {
			this.getval();
		},
	
	}
</script>
<style lang="less">
	#homewarp {
		margin-top: 60/75rem;
	}
    .maxbox{
		padding-bottom: 100/75rem;
	}
	.he_user {
		display: flex;
		padding: 0 20/75rem;
		flex: 1;
		text-align: center;
		margin-top: 120/75rem;
		border-bottom: 1px solid #f2f2f2;
		>a {
			color: #555;
			width: 33.33333%;
			font-size: 18/75rem;
			padding: 25/75rem 0;
			>img{
				width: 25/75rem;
			}
			>em{
				font-style: normal;
				vertical-align: 5px;
			}
		}
	}

	.nav_List {
		display: flex;
		justify-content: space-around;
		align-items: ceter;
        text-align: center;
		>a {
			width: 100%;
			height: 100%;
			padding: 20/75rem 0;
			display: block;
			>img {
				width: 60/75rem;
			}

			p {
				font-size: 18/75rem;
				margin: 10/75rem 0;
				color: #555;
			}
		}
	}

	.new_Prer {
		display: flex;
		padding: 0 20/75rem;

		>a {
			width: 50%;

			>img {
				width: 100%;
			}

			&:nth-of-type(2) {
				margin-left: 10/75rem;
			}
		}
	}

	.banner_Img {
		width: 100%;

		img {
			width: 100%;
		}
	}
</style>

