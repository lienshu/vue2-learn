import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/use'
import date from './modules/date'

Vue.use(Vuex)


const store = new Vuex.Store({
  // state: {
  //   isLogin: false,
  //   todos: [{
  //     id: 1,
  //     text: '吃饭',
  //     done: false
  //   }, {
  //     id: 2,
  //     text: '睡觉',
  //     done: true
  //   }],
  //   count: 10
  // },
  // getters: {
  //   doneTodos: state => {
  //     return state.todos.filter(todo => todo.done)
  //   },
  //   doneTodosLength: (state, getters) => {
  //     console.log(state, 'state')
  //     return getters.doneTodos.length
  //   },
  //   getTodoById: (state) => (id) => {
  //     return state.todos.find(todo => todo.id === id)
  //   }
  // },
  // mutations: {
  //   setUserInfo(state) {
  //     console.log(state, 'state')
  //     state.isLogin = true
  //   },
  //   increment(state, payload) {
  //     state.count += payload.amount
  //   },
  //   test(state) {
  //     console.log(state.isLogin, 'state.isLogin')
  //   }
  // },
  // 调用异步函数，将异步函数结果赋值给mutations方法
  // actions: {
  //   otherIncrement({
  //     commit
  //   }, amount) {
  //     commit('increment', amount)
  //   },
  //   // 也可以用async/await
  //   actionA({
  //     commit
  //   }) {
  //     new Promise((resolve) => {
  //       setTimeout(() => {
  //         commit('test')
  //         resolve()
  //       }, 2000)
  //     })
  //   },
  //   actionB({
  //     dispatch,
  //     commit
  //   }) {
  //     return dispatch('actionA').then(() => {
  //       commit('test')
  //     })
  //   },
  // },
  modules:{
    user,
    date
  }
})

export default store