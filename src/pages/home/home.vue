<template>
	<div id="homewarp">
	<Header></Header>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import Header from '../../components/header'
	export default{
		components: {
			Header
		}
	}
</script>
<style>
	
</style>