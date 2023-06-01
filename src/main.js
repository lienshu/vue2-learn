import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from './store';
import animated from 'animate.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'windi.css';
import 'swiper/css/swiper.css';
import * as echarts from 'echarts'

// 自定义指令直接引入或循环再directive
import * as directives from '@/directives'

// import focus from '@/directives/focus'

// 自定义指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(animated);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})