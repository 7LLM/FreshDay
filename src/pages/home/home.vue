<template>
	<div id="homewarp">
	<Header></Header>
		<div>
			<router-view></router-view>
		</div>
		<Tabbar inactive="0"></Tabbar>
	</div>
</template>
<script>
	import Tabbar from '../../components/tabbar'
	import Header from '../../components/header'
	export default{
		components: {
			Header,Tabbar
		}
	}
</script>
<style>
	
</style>