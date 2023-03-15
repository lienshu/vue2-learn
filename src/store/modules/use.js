const state = {
  isLogin: false,
  todos: [{
    id: 1,
    text: '吃饭',
    done: false
  }, {
    id: 2,
    text: '睡觉',
    done: true
  }],
  count: 10
}
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosLength: (state, getters) => {
    console.log(state, 'state')
    return getters.doneTodos.length
  },
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
// 只能调用同步函数
const mutations = {
  setUserInfo(state) {
    console.log(state, 'state')
    // state.isLogin = true
    new Promise((resolve, reject) => {
      console.log('初始化');
      console.log(reject)
      resolve()
      // reject()
    }).then(() => {
      state.isLogin = true
      console.log('执行「这个」');
      throw new Error('有哪里不对了');
    }).catch(() => {
      console.log('执行「那个」');
    }).then(() => {
      console.log('再执行「这个」')
    })
  },
  // increment(state, num) {
  //   state.count += num
  // },
  // 多数情况下荷载payload是个对象
  increment(state, payload) {
    state.count += payload.amount
  },
  test(state) {
    console.log(state.isLogin, 'state.isLogin')
  }
}
// 调用异步函数，将异步函数结果赋值给mutations方法
const actions = {
  otherIncrement({
    commit
  }, amount) {
    commit('increment', amount)
  },
  // 也可以用async/await
  actionA({
    commit
  }) {
    new Promise((resolve) => {
      setTimeout(() => {
        commit('test')
        resolve()
      }, 2000)
    })
  },
  actionB({
    dispatch,
    commit
  }) {
    return dispatch('actionA').then(() => {
      commit('test')
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}