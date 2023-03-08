<template>
  <div v-loadmore>
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
    <div class="w-600px">
      <img src="@/assets/img/directive/7.jpeg" alt="">
      <img src="@/assets/img/directive/8.jpeg" alt="">
      <img src="@/assets/img/directive/9.jpeg" alt="">
      <img src="@/assets/img/directive/10.jpeg" alt="">
      <img src="@/assets/img/directive/11.jpg" alt="">
    </div>

    <!-- <button v-auth="false">自定义指令</button>
    <button v-auth="true">自定义指令</button> -->
  </div>
</template>

<script>
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()
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
    window.addEventListener('scroll', function () { console.log(y, 'y') }, true);

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>