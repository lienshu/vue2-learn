import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('@/views/sync-emit'),
    // redirect: '/home',
  }, {
    path: '/sync-emit',
    component: () => import('@/views/sync-emit'),
    name: 'sync-emit'
  },
  {
    path: '/ref-v-bind-sync',
    component: () => import('@/views/ref-v-bind-sync'),
    name: 'ref-v-bind-sync'
  },
  {
    path: '/is-component',
    component: () => import('@/views/is-component'),
    name: 'is-component'
  },
  {
    path: '/move-slot',
    component: () => import('@/views/move-slot'),
    name: 'move-slot'
  },
  {
    path: '/ref',
    component: () => import('@/views/ref'),
    name: 'ref'
  },
  {
    path: '/provide-inject',
    component: () => import('@/views/provide-inject'),
    name: 'provide-inject'
  },
  {
    path: '/emit',
    component: () => import('@/views/emit'),
    name: 'emit'
  },
]


const router = new VueRouter({
  // linkActiveClass: 'active',
  mode: 'history',
  routes: routes

})

export default router