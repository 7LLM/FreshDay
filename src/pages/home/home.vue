<template>
	<div id="homewarp">
	<Header></Header>
		<div>
			<router-view></router-view>
			<Tabbar inactive="0"></Tabbar>
		</div>
	</div>
</template>
<script>
	import Header from '../../components/header'
	import Tabbar from '../../components/tabbar'
	export default{
		data(){
			return{
				
			}
		},
		components: {
			Header,Tabbar
		},
		methods:{
		}
		
	}
</script>
<style lang="less">
	
</style>