<template>
	<div class="tabbar">
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
	</div>
</template>

<script>
import Item from './tabbarItem'
	 export default{
	 	data(){
	 		return {
	 			current:'home'
	 		}
	 	},
	 	components:{
	 		Item
	 	},
	 	methods:{
	 		getval(val){
	 			this.current=val;
	 		}
	 	}
	 }
</script>

<style lang="less">
	 .tabbar{
	 	width: 100%;
	 	display: flex;
	 	border-top: 1px solid #ccc;
	 	justify-content: center;
	 	align-items: center;
	 	position: fixed;
	 	bottom: 0;
	 	background: #fff;
	 }
</style>
