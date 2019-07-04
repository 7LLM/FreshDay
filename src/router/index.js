import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Classify from '@/pages/classify/classify'
import Hot2 from '@/pages/classify/hot2'
import Vagetable from '@/pages/classify/vagetable'
import Menber from '@/pages/classify/menber'
import Fruit from '@/pages/classify/fruit'
import Fresh from '@/pages/classify/fresh'
import Meat from '@/pages/classify/meat'
import Finder from '@/pages/finder/finder'
import Shoppcar from '@/pages/shoppcar/shoppcar'
import Mine from '@/pages/mine/mine'
import Login from '@/pages/mine/login'
import Order from '@/pages/mine/order'
import Hot from '@/pages/home/hot'
import Try from '@/pages/home/try'
import Priority from '@/pages/home/priority'
import Member from '@/pages/home/member'
import Fruits from '@/pages/home/fruits'
import Vegetables from '@/pages/home/vegetables'
import Egg from '@/pages/home/egg'
import Seafood from '@/pages/home/seafood'
import Dairy from '@/pages/home/dairy'
import Snack from '@/pages/home/snack'
import Cooked from '@/pages/home/cooked'
import Drinks from '@/pages/home/drinks'
import Baking from '@/pages/home/baking'
import Grain from '@/pages/home/grain'
import Fastfood from '@/pages/home/fastfood'
import Clean from '@/pages/home/clean'
import Makeup from '@/pages/home/makeup'
import Time from '@/pages/home/time'
import Crayfish from '@/pages/home/crayfish'
import Shop from '@/pages/home/shop'
import Big from '@/pages/home/big'
import Supermarket from '@/pages/home/supermarket'
import Address from '@/components/address'
import Seach from '@/components/seach'
import Details from '@/components/details'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			children: [
				{path: 'hot',name: 'hot',component: Hot},
				{path: 'try',name: 'try',component: Try},
				{path: 'priority',name: 'priority',component: Priority},
				{path: 'member',name: 'member',component: Member},
				{path: 'fruits',name: 'fruits',component: Fruits},
				{path: 'vegetables',name: 'vegetables',component: Vegetables},
				{path: 'egg',name: 'egg',component: Egg},
				{path: 'seafood',name: 'seafood',component: Seafood},
				{path: 'dairy',name: 'dairy',component: Dairy},
				{path: 'snack',name: 'snack',component: Snack},
				{path: 'cooked',name: 'cooked',component: Cooked},
				{path: 'drinks',name: 'drinks',component: Drinks},
				{path: 'baking',name: 'baking',component: Baking},
				{path: 'grain',name: 'grain',component: Grain},
				{path: 'fastfood',name: 'fastfood',component: Fastfood},
				{path: 'clean',name: 'clean',component: Clean},
				{path: 'makeup',name: 'makeup',component: Makeup},
				{path: 'crayfish',name: 'crayfish',component: Crayfish},
				{path: 'shop',name: 'shop',component: Shop},
				{path: 'big',name: 'big',component: Big},
				{path: 'supermarket',name: 'supermarket',component: Supermarket},
				{path: 'time',name: 'time',component: Time}
				]
		},
		{
			path: '/classify',
			name: 'classify',
			component: Classify,
			children: [
				{path: 'hot2',name: 'hot',component: Hot2},
				{path: 'vagetable',name: 'vagetable',component: Vagetable},
				{path: 'menber',name: 'menber',component: Menber},
				{path: 'fruit',name: 'fruit',component: Fruit},
				{path: 'fresh',name: 'fresh',component: Fresh},
				{path: 'meat',name: 'meat',component: Meat}
			]
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
		},
		{
	      path: '/login',
	      name: 'login',
	      component: Login
	    },
	    {
	      path: '/order',
	      name: 'order',
	      component: Order
	    },
		{
	      path: '/address',
	      name: 'address',
	      component: Address
	    },
	    {
	      path: '/seach',
	      name: 'seach',
	      component: Seach
	    },
		{
		  path: '/details',
		  name: 'details',
		  component: Details
		}
	]
})
