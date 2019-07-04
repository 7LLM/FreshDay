<template>
	<section class="side_nav">
		<ul>
			<li v-for="(item,index) in pro" :key="index" @click="fn(index)">
				<a href="javascript:;" :class="{active_a:index==currIndex}">
					<i class="leftLine" :class="{active_i:index==currIndex}"></i> {{item.title}}
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
				return {
					currIndex: "",
					pro: []
				}
			},
			components: {
				//ProList
			},
			mounted() {
				this.$axios.get("../../../static/data/side_nav.json")
					.then(res => {
						console.log(res.data.side);
						this.pro = res.data.side;
					})
			},
			methods: {
				fn(index) {
					this.currIndex = index;
					for(var i=0;i<this.pro.length;i++){
						this.pro[i].ishow=-1;
					}
					this.pro[index].ishow=index;
					this.$router.push("/classify/"+this.pro[index].dizhi)
				}
			},
			beforeCreate:function(){
				this.$router.push("/classify/hot2")
		}
	}
</script>

<style lang="less">
	.side_nav {
		position: relative;
		ul {
			height: 11.8rem;
			background: #F8F8F8;
			overflow-y: scroll;
			padding-bottom: 30/75rem;
			box-sizing: border-box;
			li {
				a {
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
					.leftLine {
						position: absolute;
						top: 15/75rem;
						left: 0;
						width: 5/75rem;
						height: 18/75rem;
						background: #FF3587;
						display: none;
					}
					.active_i {
						display: block;
					}
				}
				.active_a {
					font-weight: bold;
					background: #fff;
				}
				/*.subtitle {
					position: fixed;
					top: 70/75rem;
					left: 120/75rem;
					width: 78%;
					white-space: nowrap;
					overflow-x: scroll;
					display: none;
					span {
						color: #474245;
						font-size: 0.28rem;
						padding: 0 6/75rem;
					}
				}*/
				.isShow {
					display: block;
				}
			}
		}
		
		/*产品列表*/
		/*.proList {
			position: fixed;
		    top: 108/75rem;
		    left: 132/74rem;
			height: 82%;
			overflow-y: scroll;
			box-sizing: border-box;
			display: none;
			.pro{
				display: flex;
				margin-top: 14/75rem;
				.left {
					width: 140/75rem;
					height: 140/75rem;
					img {
						width: 140/75rem;
						height: 140/75rem;
					}
				}
				.right {
					width: 50%;
					font-size: 0.28rem;
					margin-left: 15/75rem;
					h4 {
						font-weight: 500;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					p{
						font-size: 0.24rem;
						line-height: 30/75rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.dec,.pastPrice{
						color: #969696;
					}
					.nowPrice{
						color: #FF3587;
					}
				}
			}
		}*/
	}
</style>