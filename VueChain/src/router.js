import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import searcher from './views/Searcher.vue';
import business from './views/Business.vue';
import login from './views/Login.vue';
import signUp from './views/signUp.vue';

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/searcher',
      name: 'searcher',
      component: searcher
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/login/signUp',
      name: 'signUp',
      component: signUp
    },
  ]
})
