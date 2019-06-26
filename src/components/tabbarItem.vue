<template>
	<div class="itemWarp" @click="fn">
		<span v-show="!bln"><slot name="nomalImg"></slot></span>
		<span v-show="bln"><slot name="nowImg"></slot></span>
		<p :class="{active:bln}">{{title}}</p>
	</div>
</template>

<script>
	 export default{
	 	props:["title","mark","current"],
	 	computed:{
	 		bln(){
	 			if(this.mark==this.current){
	 				return true;
	 				Console.log(111)
	 			}else{
	 				return false;
	 			}
	 		}
	 	},
	 	methods:{
	 		fn(){
	 			this.$emit("change",this.mark)
	 			this.$router.push("/"+this.mark)
	 		}
	 	}
	 }
</script>

<style lang="less">
	 .itemWarp{
	 	width: 20%;
	 	flex: 1;
	 	text-align: center;
	 	padding: 5px 0;
	 	img{
	 		width:35/75rem;
	 	}
	 	p{
	 		font-size: 18/75rem;
	 	}
	 	p.active{
	 		color: #ff4891;
	 	}
	 }
</style>
