import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('@/views/syncemit'),
    // redirect: '/home',
  }, {
    path: '/syncemit',
    component: () => import('@/views/syncemit'),
    name: 'syncemit'
  },
  {
    path: '/ref-v-bindsync',
    component: () => import('@/views/ref-v-bindsync'),
    name: 'ref-v-bindsync'
  },
  {
    path: '/iscomponent',
    component: () => import('@/views/iscomponent'),
    name: 'iscomponent'
  },
  {
    path: '/moveslot',
    component: () => import('@/views/moveslot'),
    name: 'moveslot'
  },
]


const router = new VueRouter({
  // linkActiveClass: 'active',
  mode: 'history',
  routes: routes

})

export default router