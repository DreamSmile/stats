import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const lawyer = r => require.ensure([], () => r(require('@/views/lawyer/Index')), 'lawyer');
const details = r => require.ensure([], () => r(require('@/views/mall/Details')), 'details');
const mallHome = r => require.ensure([], () => r(require('@/views/mall/Home')), 'mallHome');
const mallCart = r => require.ensure([], () => r(require('@/views/mall/Cart')), 'mallCart');
const mallUser = r => require.ensure([], () => r(require('@/views/mall/User')), 'mallUser');
const mallRanking = r => require.ensure([], () => r(require('@/views/mall/Ranking')), 'mallRanking');

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
  }, {
    path: "/mallHome",
    name: "MallHome",
    component: mallHome
  }, {
    path: "/mallCart",
    name: "MallCart",
    component: mallCart
  }, {
    path: "/mallUser",
    name: "MallUser",
    component: mallUser
  }, {
    path: "/mallRanking",
    name: "MallRanking",
    component: mallRanking
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
