import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Classify from '@/pages/classify/classify'
import Finder from '@/pages/finder/finder'
import Shoppcar from '@/pages/shoppcar/shoppcar'
import Mine from '@/pages/mine/mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/finder',
      name: 'finder',
      component: Finder
    },
    {
      path: '/shoppcar',
      name: 'shoppcar',
      component: Shoppcar
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
