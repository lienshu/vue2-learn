import Vue from 'vue'
import VueRouter from 'vue-router'
import Bottom from '@/views/name-router/bottom.vue'
import Top from '@/views/name-router/top.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    component: () => import('@/views/login'),
    name: 'login'
  },
  {
    path: '/',
    component: () => import('@/lauout/menu'),
    redirect: '/sync-emit',
    children: [{
        path: '/sync-emit',
        component: () => import('@/views/sync-emit'),
        name: 'sync-emit'
      },
      {
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
        name: 'is-component',
        meta: {
          transition: 'slide-left'
        },
      },
      {
        path: '/move-slot',
        component: () => import('@/views/move-slot'),
        name: 'move-slot',
        meta: {
          transition: 'slide-right'
        },
      },
      {
        path: '/router-replace',
        component: () => import('@/views/move-slot/components/router-replace'),
        name: 'router-replace',
      },
      {
        path: '/new-component',
        component: () => import('@/views/move-slot/components/new-component'),
        name: 'new-component'
      },
      {
        path: '/slot-index',
        component: () => import('@/views/move-slot/slot-index'),
        name: 'slot-index',
      },
      {
        path: '/mixin',
        component: () => import('@/views/mixin'),
        name: 'mixin'
      },
      {
        path: '/filter',
        component: () => import('@/views/filter'),
        name: 'filter'
      },
      {
        path: '/provide-inject',
        component: () => import('@/views/provide-inject'),
        name: 'provide-inject'
      },
      {
        path: '/name-router',
        components: {
          default: Bottom,
          Top
        },
        name: 'name-router'
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
        // ???????????????????????????????????????????????????????????????
        // $route.push?????? ??????name???params???????????????params????????????
        path: '/route-push/:text',
        component: () => import('@/views/move-slot/components/route-push'),
        // ??????????????????props???true????????????????????????props?????????????????????
        props: true,
        name: 'route-push',
      },
    ]
  },
  {
    path: '/other',
    component: () => import('@/lauout/menu'),
    redirect: '/ref',
    children: [{
        path: '/ref',
        component: () => import('@/views/ref'),
        name: 'ref'
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
        path: '/directive',
        component: () => import('@/views/directive'),
        name: 'directive'
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
      {
        path: '/$on',
        component: () => import('@/views/$on'),
        name: '/$on'
      },
    ]
  },




]


const router = new VueRouter({
  // linkActiveClass: 'active',
  mode: 'history',
  routes: routes

})


// router.beforeEach((to, from) => {
//   console.log(to, from)
//   // ??????false??????????????????????????????
//   // return false
// })

export default router