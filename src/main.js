// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.config.productionTip = false
import 'mint-ui/lib/style.css'
import Axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
