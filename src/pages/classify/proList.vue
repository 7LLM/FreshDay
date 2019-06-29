<template>
	<div>
		<div class="proList">
			<div class="left">
				<img src="https://image.missfresh.cn/2ef13a59f74141b6a5facb512e2dd135.jpg?iopcmd=convert&dst=webp" alt="" />
			</div>
			<div class="right">
				<h4>伊岭薄皮红肉火龙果1个270g起</h4>
				<p>产地采摘 新鲜直达</p>
				<p>¥4.9</p>
				<p>¥9.9</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less">
	.proList{
		width: 420/75rem;
		display: flex;
		.left{
			img{
				width: 140/75rem;
				height: 140/75rem;
			}
		}
		.right{
			width: 65%;
			font-size: 0.28rem;
			margin-left: 15/75rem;
			h4{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>