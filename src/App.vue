<template>
  <div id="app">
  	<Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
import {obj} from '../static/js/utill.js'
export default {
  name: 'App',
  components:{
	Tabbar
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
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
}
</style>
