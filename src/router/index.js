import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const lawyer = r => require.ensure([], () => r(require('@/views/lawyer/Index')), 'lawyer');
const details = r => require.ensure([], () => r(require('@/views/mall/Details')), 'details');
const mallHome = r => require.ensure([], () => r(require('@/views/mall/Home')), 'mallHome');
const mallCart = r => require.ensure([], () => r(require('@/views/mall/Cart')), 'mallCart');
const mallUser = r => require.ensure([], () => r(require('@/views/mall/User')), 'mallUser');
const mallRanking = r => require.ensure([], () => r(require('@/views/mall/Ranking')), 'mallRanking');
// 音乐
const musicHall = r => require.ensure([], () => r(require('@/views/music/Hall')), 'musicHall');
const musicRecommend = r => require.ensure([], () => r(require('@/views/music/Recommend')), 'musicRecommend');
const musicLike = r => require.ensure([], () => r(require('@/views/music/Like')), 'musicLike');
const musicRecDetails = r => require.ensure([], () => r(require('@/views/music/recDetails')), 'musicRecDetails');

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
  }, {
    path: "/musicHall",
    name: "MusicHall",
    component: musicHall
  }, {
    path: "/musicRecommend",
    name: "MusicRecommend",
    component: musicRecommend
  }, {
    path: "/musicLike",
    name: "MusicLike",
    component: musicLike
  }
  , {
    path: "/musicRecDetails",
    name: "MusicRecDetails",
    component: musicRecDetails
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
