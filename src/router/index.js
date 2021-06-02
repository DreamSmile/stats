import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const lawyer = r => require.ensure([], () => r(require('@/views/lawyer')), 'lawyer');
const details = r => require.ensure([], () => r(require('@/views/mall/details')), 'details');


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: "/lawyer",
    name: 'Lawyer',
    component: lawyer
  }, {
    path: "/details",
    name: "Details",
    component: details
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
