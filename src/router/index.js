import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('@/views/home'),
    // redirect: '/home',
  }, {
    path: '/home',
    component: () => import('@/views/home'),
    name: '首页'
  },
  {
    path: '/user',
    component: () => import('@/views/user'),
    name: '我的'
  },
  {
    path: '/other',
    component: () => import('@/views/other'),
    name: '其他'
  },
]


const router = new VueRouter({
  // linkActiveClass: 'active',
  mode: 'history',
  routes: routes

})

export default router