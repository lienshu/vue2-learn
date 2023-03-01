import Vue from 'vue'
import loadMore from './loadmore/index'

// 注册一个全局自定义指令 'v-focus'
Vue.directive('focus', {
  // 当被绑定的元素插入到DOM中时
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Vue.directive('auth', {
  bind: function (el, binging) {
    // // let isAuth = false
    // binging.value
    // console.log(binging.value)
    return binging.value
  }
})

Vue.directive('loadmore', loadMore)