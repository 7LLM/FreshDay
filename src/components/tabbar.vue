<template>
	<!--<div class="tabbar">
		<Item title="首页" mark="home" :current="current" @change="getval">
		     <img src="../assets/logo/home.png" slot="nomalImg"/>
		     <img src="../assets/logo/home-active.png" slot="nowImg"/>
		</Item>
		<Item title="分类" mark="classify" :current="current" @change="getval">
		     <img src="../assets/logo/card.png" slot="nomalImg"/>
		     <img src="../assets/logo/mis_active.png" slot="nowImg"/>
		</Item>
		<Item title="发现" mark="finder" :current="current" @change="getval">
		     <img src="../assets/logo/mis.png" slot="nomalImg"/>
		     <img src="../assets/logo/mii_active.png" slot="nowImg"/>
		</Item>
		<Item title="购物车" mark="shoppcar" :current="current" @change="getval">
		     <img src="../assets/logo/scar.png" slot="nomalImg"/>
		     <img src="../assets/logo/scar_active.png" slot="nowImg"/>
		</Item>
		<Item title="我的" mark="mine" :current="current" @change="getval">
		     <img src="../assets/logo/urer.png" slot="nomalImg"/>
		     <img src="../assets/logo/user_active.png" slot="nowImg"/>
		</Item>
	</div>-->
	<div>
		<ul class="tabbar">
			<li class="itemWarp" :class="{active:inactive==0}" @click="fn(0)">
				<p>首页</p>
			</li>
			<li class="itemWarp" :class="{active:inactive==1}" @click="fn(1)">
				<p>分类</p>
			</li>
			<li class="itemWarp" :class="{active:inactive==2}" @click="fn(2)">
				<p>发现</p>
			</li>
			<li class="itemWarp" :class="{active:inactive==3}" @click="fn(3)">
				<p>购物车</p>
			</li>
			<li class="itemWarp" :class="{active:inactive==4}" @click="fn(4)">
				<p>我的</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import Item from './tabbarItem'
	export default {
		props: ['inactive', 'name'],
		data() {
			return {
				current: 0,
				arr: ["home", "classify", "finder", "shoppcar", "mine"]
			}
		},
		methods: {
			fn(index) {
				this.$router.push("/" + this.arr[index]);
			}
		}

	}
</script>

<style lang="less">
	/*.tabbar {
		width: 100%;
		display: flex;
		border-top: 1px solid #ccc;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		background: #fff;
	}*/
	
	.tabbar {
		width: 100%;
		display: flex;
		border-top: 1px solid #ccc;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		height: 80/75rem;
		background: #fff;
	}
	
	.itemWarp {
		width: 20%;
		flex: 1;
		text-align: center;
		padding: 5px 0;
		background: url(../assets/logo/home.png)no-repeat center 3px;
		background-size: 40/75rem auto;
		p {
			font-size: 18/75rem;
			margin-top: 40/75rem;
		}
		&.active p {
			color: #ff4891;
		}
		&.active {
			background: url(../assets/logo/home-active.png)no-repeat center 3px;
			background-size: 40/75rem auto;
		}
		&:nth-of-type(2) {
			background-image: url(../assets/logo/card.png);
			&.active {
				background-image: url(../assets/logo/mis_active.png);
			}
		}
		&:nth-of-type(3) {
			background-image: url(../assets/logo/mis.png);
			&.active {
				background-image: url(../assets/logo/mii_active.png);
			}
		}
		&:nth-of-type(4) {
			background-image: url(../assets/logo/scar.png);
			&.active {
				background-image: url(../assets/logo/scar_active.png);
			}
		}
		&:nth-of-type(5) {
			background-image: url(../assets/logo/urer.png);
			&.active {
				background-image: url(../assets/logo/user_active.png);
			}
		}
	}
</style>