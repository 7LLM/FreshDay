<template>
	<div class="headerWarp">
		<div class="warp">
			<div class="hd_Img">
				<img src="https://j-image.missfresh.cn/img_20161108170831264.png?mryxw=165&mryxh=42" alt="">			
			</div>
			<div class="hd_Adress">
				<router-link to="/address">南山政府大楼</router-link>
			</div>
			<div class="hd_Form">
				<router-link to="/seach"><input type="text" placeholder="搜索"></router-link>
			</div>
		</div>
		<navItem></navItem>
	</div>
</template>

<script>
	import navItem from './Navitem'
	export default{
		components: {
			navItem
		}
	}
</script>

<style lang="less">
	.headerWarp{
		width: 100%;
		position: fixed;
		top: 0;
		background: #fff;
		z-index: 66;
		.warp{
			padding:0 8/75rem;
			height:50/75rem;
			margin-top: 10/75rem;
			display:flex;
			align-items: center;
			justify-content: space-around;
			>div{
				margin: 0  10/75rem;
				&.hd_Img{
					width: 120/75rem;
					>img{
						width: 100%;
					}
				}
				&.hd_Adress{
					width: 130/75rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					position: relative;
					&:after{
						content: '';
						display: block;
						width:20/75rem;
						height: 20/75rem;
						position: absolute;
						right: 0;
						top: 5 /75rem;
						background: url(../assets/logo/down.png)no-repeat center;
						background-size: 15/75rem auto;
					}
					a{
						color: #555;
					}
				}
				&.hd_Form{
					height: 100%;
					margin-top: 5/75rem;
					padding: 10/75rem 0;
					>a{
						display: block;
						border: 1px solid #ccc; 
						height: 35/75rem;
						padding: 0 10/75rem;
						background: #F5F5F5;
						border-radius: 20px;
						position: relative;
							>input{
								width: 200/75rem;
								border: none;
								line-height: 38/75rem;
								margin-top: 1/75rem;
								text-indent: 1.6em;
								font-size: 20/75rem;
								background: none;
								outline: none;
							}
							&:before{
								content: '';
								display: block;
								width:35/75rem;
								height: 35/75rem;
								position: absolute;
								left: 7/75rem;
								top:0;
								background: url(../assets/logo/seach.png)no-repeat center;
					      	    background-size: 30/75rem auto;
							}
					}
				}
			}
		}
	}
</style>