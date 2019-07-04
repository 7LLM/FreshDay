import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		count:1,
	},
	mutations:{
		add(state){
			state.count++;
		},
		reduce(state){
			if(state.count==1) {return};
			state.count--;
		}
	}
})