/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Jouer from '@/components/Jouer'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/jouer',
      name: 'jouer',
      component: Jouer
    },
  ]
})
/* eslint-disable */
