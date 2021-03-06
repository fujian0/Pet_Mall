/*路由模块*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'  //主页路由
import Categorys from '../pages/Categorys/Categorys.vue' //分类路由
import Cart from '../pages/Cart/Cart.vue'  // 购物车路由
import Person from '../pages/Person/Person.vue'   //我的个人
import Brand from '../pages/Categorys/Brand.vue' //品牌
import Classify from '../pages/Categorys/Classify'


Vue.use (VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/categorys',
      component: Categorys,
      children:[
        {
          path: '/categorys/brand',
          component: Brand,
        },
        {
          path:'/categorys/classify',
          component:Classify,
        },
        {
          path:'',
          redirect:'classify'
        }
      ]
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/person',
      component: Person,
    }
  ]
})
