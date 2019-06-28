<template>
	<div id="seachWarp">
		<div class="sea_Top">
			<a href="#" class="sar_Left"></a>
			<p><input type="text" name="" id="" value="请输入商品名称" /></p>
			<a href="#" class="sea_right">搜索</a>
		</div>
		<div class="sea_content">
			<h3>热门搜索</h3>
			<p>
				<a href="#" v-for="(item,index) in arr">{{item}}</a>
			</p>
		</div>
		<div class="sea_Guess">
			<h3>推荐商品</h3>
			<div class="box">
				<AllItem v-for="(item,index) in list" :key="index">
					<div slot="le_Img" class="le_Img"><img :src="item.img_url" /></div>
					<div slot="rt_Des" class="rt_Des">
						<h3>{{item.sub_title}}</h3>
						<p>{{item.mess_title}}</p>
						<p class="new_user">
							<a href="#">新人专享</a>
							<a href="#">{{item.item_tag}}</a>
						</p>
						<div class="price sra_price">
							<em>￥{{item.newprice}}</em>
							<strong>￥{{item.oldprice}}</strong>
						</div>
					</div>
	 	        </AllItem>
			</div>
		</div>
	</div>
</template>
<script>
   import AllItem from './Allitem'
	export default{
		data(){
			return{
				arr:["西瓜","平价菜","雪糕","小龙虾","鸡蛋","酸奶","牛肉"],
			    list:[]
			}
		},
		components:{
			AllItem
		},
		methods: {
			getval() {
				this.$axios.get("../../../static/data/hot.json")
					.then(res => {
						console.log(res.data.home_list)
						this.list = res.data.home_list;
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
	.sea_Top{
		display: flex;
		padding: 8px 0;
		width: 100%;
		flex: 1;
		border-bottom: 1px solid #EBEAED;
		>a{
			margin:0 10/75rem;
			display: block;
			&:nth-of-type(1){
			   width:30/75rem;
			   background: url(../assets/logo/search-back.png)no-repeat  center ;
			   background-size:25/75rem auto ;
			}
			&:nth-of-type(2){
			  line-height: 50/75rem;
			  color: #555;
			  font-size: 20/75rem;
			}
		}
		p{
			flex-basis:75%;
			height: 50/75rem;
			line-height: 50/75rem;
			background: #F5F5F5;
			margin: 0 8/75rem;
			position: relative;
			border-radius: 20px;
			>input{
				text-indent: 2.8em;
				background: none;
				border: none;
				color: #999;
				font-size: 20/75rem;
			}
			&:before{
				content: '';
				display: block;
				position: absolute;
				top:50%;
				left: 3%;
				transform: translateY(-50%);
				width: 30/75rem;
				height: 30/75rem;
				background: url(../assets/logo/seach.png)no-repeat center;
				background-size:30/75rem auto ;
			}
		}
	}
	.sea_content{
		padding: 20/75rem;
		margin: 0 10/75rem;
		border-bottom: 1px solid #E6E6E6;
		>h3{
			padding-top: 20/75rem;
			font-size: 22/75rem;
		}
		>p{
			margin: 20/75rem 0;
			>a{
				margin-left: 10/75rem;
			    margin-bottom: 20/75rem;
			    display: inline-block;
			    color: #262626;
			    line-height:45/75rem;
			    padding:0 15/75rem;
			    background: #f6f5f5;
			    border-radius:5px;
			}
		}
	}
	.sea_Guess{
		padding-top: 10/75rem;
		>h3{
			padding-top: 20/75rem;
			text-indent: 1.0em;
			font-size:22/75rem; 
		}
		.sra_price{
			padding-top: 25/75rem;
			>em{
				display: block;
				font-style:normal ;
			   color: rgb(255, 72, 145);
			   font-weight: 500;
			}
		}
	}
</style>