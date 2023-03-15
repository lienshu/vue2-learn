import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/use'
import date from './modules/date'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules:{
    user,
    date
  }
})

export default store