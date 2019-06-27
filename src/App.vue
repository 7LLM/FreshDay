<template>
  <div id="app">
		<!-- <navItem></navItem> -->
		<!--<Tabbar></Tabbar>-->
    <router-view/>
  </div>
</template>

<script>
// import Tabbar from './components/tabbar'
// import Header from './components/header'
import {obj} from '../static/js/utill.js'
// import navItem from './components/Navitem'
export default {
  name: 'App',
  components:{
//	Tabbar
		// navItem
  },
	mounted(){
		obj.setRem()
	}
}
</script>

<style>
*{
	margin: 0;padding: 0;
	list-style: none;
}
body{
	font-size: 16px;
}
a{
	text-decoration: none;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
}
</style>
