<template>
  <div>
    自定义指令
    <input v-focus type="text">
    <hr>
    <hr>
    <hr>
    <!-- <div v-for="item in list" :key="item" v-test="item" type="text">{{ item }}</div> -->
    <hr>
    <hr>
    <hr>
    <el-button type="primary">主要按钮</el-button>
    <!-- <button v-auth="false">自定义指令</button>
    <button v-auth="true">自定义指令</button> -->
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnIndex',

  directives: {
    test: {
      bind(el, binding, vnode, oldVnode) {
        console.log('bind', el, binding, vnode, oldVnode)
      },
      inserted(el, binding, vnode, oldVnode) {
        console.log('inserted', el, binding, vnode, oldVnode)
      },
      update(el, binding, vnode, oldVnode) {
        console.log('update', el, binding, vnode, oldVnode)
      },
      componentUpdated(el, binding, vnode, oldVnode) {
        console.log('componentUpdated', el, binding, vnode, oldVnode)
      },
      unbind(el, binding, vnode, oldVnode) {
        console.log('unbind', el, binding, vnode, oldVnode)
      }
    }
  },

  data() {
    return {
      list: [1, 2]
    };
  },

  mounted() {
    setTimeout(() => {
      console.log('-------------splice的分割线--------------')
      this.list.splice(1, 1)
    }, 2000)
    setTimeout(() => {
      console.log('--------------push的分割线---------------')
      this.list.push(4)
    }, 3000)

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>