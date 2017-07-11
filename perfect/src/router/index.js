import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import New from '../components/New/New.vue'
import household from '../components/2860/2860.vue'
import icook from '../components/2859/2859.vue'
import bed from '../components/2862/2862.vue'
import work from '../components/2863/2863.vue'
import clothes from '../components/2865/2865.vue'
import software from '../components/3260/3260.vue'
import live from '../components/2861/2861.vue'
import content from '../components/content/content.vue'
import cart from '../components/cart/cart.vue'
import all from '../components/all/all.vue'
import stroll from '../components/stroll/stroll.vue'
import usercenter from '../components/usercenter/usercenter.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: content,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/New',
          name: 'New',
          component: New
        },




    {
      path: '/channel/2860',
      name: '2860',
      component: household
    },
    {
      path: '/channel/2859',
      name: '2859',
      component: icook
    },
    {
      path: '/channel/2865',
      name: '2865',
      component: clothes
    },
    {
      path: '/channel/2861',
      name: '2861',
      component: live
    },
    {
      path: '/channel/3260',
      name: '3260',
      component: software
    },
    {
      path: '/channel/2862',
      name: '2862',
      component: bed
    },
    {
      path: '/channel/2863',
      name: '2863',
      component: work
    },
      ]
    },
    {
      path: '/all',
      name: 'all',
      component:all
    },
    {
      path: '/stroll',
      name: 'stroll',
      component: stroll
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: usercenter
    },

  ]
})
