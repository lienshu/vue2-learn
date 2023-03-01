import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import animated from 'animate.css'
import 'windi.css'

// 自定义指令直接引入或循环再directive
import * as directives from '@/directives'

// import focus from '@/directives/focus'

// 自定义指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(animated)

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})