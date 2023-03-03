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
    path: '/slot-index',
    component: () => import('@/views/move-slot/slot-index'),
    name: 'slot-index',
  },
  {
    path: '/route-push-name',
    component: () => import('@/views/move-slot/components/route-push-name'),
    name: 'route-push-name',
  },
  {
    path: '/route-push-path',
    component: () => import('@/views/move-slot/components/route-push-path'),
    name: 'route-push-path',
  },
  {
    // 在路径中使用动态字段来实现，称之为路径参数
    // $route.push时， 使用name和params跳转，使用params接收参数
    path: '/route-push/:text',
    component: () => import('@/views/move-slot/components/route-push'),
    // 路由表中设置props为true时，组件中可以在props中获取路径参数
    props: true,
    name: 'route-push',
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
  {
    path: '/inline-template',
    component: () => import('@/views/inline-template'),
    name: 'inline-template'
  },
  {
    path: '/history-listeners',
    component: () => import('@/views/history-listeners'),
    name: 'history-listeners'
  },
  {
    path: '/transition',
    component: () => import('@/views/transition'),
    name: 'transition'
  },
  {
    path: '/mixin',
    component: () => import('@/views/mixin'),
    name: 'mixin'
  },
  {
    path: '/directive',
    component: () => import('@/views/directive'),
    name: 'directive'
  },
  {
    path: '/filter',
    component: () => import('@/views/filter'),
    name: 'filter'
  },
  {
    path: '/todo-list',
    component: () => import('@/views/todo'),
    name: 'todo-list'
  },
  {
    path: '/css',
    component: () => import('@/views/css-component'),
    name: 'css'
  },
  {
    path: '/attrs',
    component: () => import('@/views/attrs'),
    name: '/attrs'
  },
]


const router = new VueRouter({
  // linkActiveClass: 'active',
  mode: 'history',
  routes: routes

})

export default router