import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

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
      path: '/weight',
      name: 'weight',
      component: () => import(/* webpackChunkName: "weight" */ './views/Weight.vue')
    },
    {
      path: '/food',
      name: 'food',
      component: () => import(/* webpackChunkName: "food" */ './views/Food.vue')
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: () => import(/* webpackChunkName: "exercise" */ './views/Exercise.vue')
    },
    {
      path: '/friends',
      name: 'frineds',
      component: () => import(/* webpackChunkName: "exercise" */ './views/Friends.vue')
    }

  ]
})
