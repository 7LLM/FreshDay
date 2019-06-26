<template>
	<div>
		<div class="he_user">
			<a href="#">优先严选</a>
			<a href="#">安心检测</a>
			<a href="#">赔付保障</a>
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
		
		<AllItem v-for="(item,index) in list" :key="index">
			<div slot="le_Img" class="le_Img"><img :src="item.img_url" /></div>
			<div slot="rt_Des" class="rt_Des">
				<h3>{{item.sub_title}}</h3>
				<p>{{item.mess_title}}</p>
				<p class="new_user">
					<a href="#">新人专享</a>
					<a href="#">{{item.item_tag}}</a>
				</p>
				<p class="price"><span>￥{{item.newprice}}</span><span>￥{{item.oldprice}}</span></p>
			</div>
		</AllItem>
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
				list: []
			}
		},
		components: {
			AllItem,navItem
		},
		methods: {
			
			getval() {
				this.$axios.get("https://www.easy-mock.com/mock/5d05b4a1a283d02fc1985b1f/example_copy_copy/mock")
					.then(res => {
						console.log(res.data.fecsh_list)
						this.list = res.data.fecsh_list;
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
		mounted() {
			this.getval();
		}
	}
</script>
<style lang="less">
	#homewarp {
		margin-top: 60/75rem;

		
	}

	.he_user {
		display: flex;
		padding: 0 20/75rem;
		flex: 1;
		margin-top: 120/75rem;
		border-bottom: 1px solid #f2f2f2;

		>a {
			color: #555;
			width: 33.33333%;
			font-size: 18/75rem;
			padding: 25/75rem 0;
		}
	}

	.nav_List {
		display: flex;
		justify-content: space-around;
		align-items: ceter;

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

