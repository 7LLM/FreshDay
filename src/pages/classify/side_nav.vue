<template>
	<section class="side_nav">
		<ul>
			<li v-for="(item,index) in pro" :key="index" @click="fn(index)">
				<a href="#" :class="{active_a:index==currIndex}">
					<i class="leftLine" :class="{active_i:index==currIndex}"></i>
					{{item.title}}
				</a>
				<div class="subtitle" :class="{isShow:index==currIndex}">
					<span v-for="(item,index) in item.subtitle" :key="index">{{item.sub}}</span>
				</div>
				<!--<div class="proList">
					<div class="left">
						
					</div>
					<div class="right">
						<h4></h4>
						<p></p>
						<p></p>
						<p></p>
					</div>
				</div>-->
			</li>
		</ul>
		<ProList></ProList>
	</section>
</template>

<script>
	import ProList from "./proList"
	export default {
		data(){
			return{
				currIndex:"",
				pro:[]
			}
		},
		components:{
			ProList
		},
		mounted(){
			this.$axios.get("../../../static/data/side_nav.json")
			.then(res=>{
				console.log(res.data.side);
				this.pro=res.data.side;
			})
		},
		methods:{
			fn(index){
				this.currIndex=index;
				console.log(index);
			}
		}
	}
</script>

<style lang="less">
	.side_nav{
		position: relative;
		ul{
			width: 120/75rem;
			/*height: 100%;*/
			height:  11.8rem;
		    background: #F8F8F8;
		    overflow-y: scroll;
		    padding-bottom: 30/75rem;
		    box-sizing: border-box;
			li{
				
				a{
					display: block;
					width: 100%;
					padding: 12/75rem;
					box-sizing: border-box;
					color: #474245;
					font-size: 0.28rem;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    position: relative;
				    .leftLine{
				    	position: absolute;
				    	top: 15/75rem;
				    	left: 0;
						width: 5/75rem;
						height: 18/75rem;
						background: #FF3587;
						display: none;
					}
					.active_i{
						display: block;
					}
				}
				.active_a{
					font-weight: bold;
				}
				.subtitle{
					position: absolute;
					top: 4/75rem;
					left: 120/75rem;
					width: 78%;
				    white-space: nowrap;
				    overflow-x: scroll;
				    display: none;
				    span{
				    	color: #474245;
				    	font-size: 0.28rem;
				    	padding: 0 6/75rem;
				    }
				}
				.isShow{
					display: block;
				}
			}
		}
		.proList{
			position: absolute;
			top: 50/75rem;
			left: 132/74rem;
		}
	}
</style>