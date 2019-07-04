<template>
	<div class="item">
		<slot name="le_Img"></slot>
		<slot name="rt_Des"></slot>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less">
	.item{
		display: flex;
		text-align: left;
		position: relative;
		border-bottom: 1px solid #f5f5f5;
		padding:20/75rem;
		.le_Img{
			width: 190/75rem;
			height: 190/75rem;
			margin-right:20/75rem;
			>img{
				width: 100%;
				height: 100%;
			}
		}
		.rt_Des{
			width: 60%;
			>h3{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-weight: normal;
				color: #474245;
				margin-top: 10/75rem;
			}
			p{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 22/75rem;
				color: #969696;
			}
			.new_user{
				margin: 10/75rem 0;
				line-height: 35/75rem;
				>a{
					color: #F59FC1;
					padding: 2/75rem 5/75rem;
					font-size: 18/75rem;
					border: 1px solid #F59FC1;
				}
			}
			.price{
				height: 70/75rem;
				// display: flex;
				// justify-content: space-between;
				margin-top: 20/75rem;
				span{
					font-size:24/75rem;
					line-height:70/75rem;
					color: #FF4891;
					&:nth-of-type(2){
						text-decoration: line-through;
						color: #969696;
						font-size: 18/75rem;
						margin-left: 10/75rem;
					}
				}
				
			}
		}
	}
	.icon_cadd{
		width: 60/75rem;
		position: absolute;
		right: 3%;
		top: 65%;
		height:60/75rem;
		>img{
			width: 100%;
		}
	}
	.shu{
		width:110/75rem;
		// line-height: 30/75rem;
		position: absolute;
		right: 3%;
		top: 68%;
		display: flex;
		text-align: center;
		align-items: center;
		span{
			width: 30/75rem;
			border: 1px solid #FF4891;
			border-radius: 50%;
			color: #fff;
		}
		input{
			width: 41/75rem;
			border: none;
			text-align: center;
		}
	}
</style>
