<template>
  <div>
    vm.$on
    <VOn event="mouseenter" />
    <VOn />
  </div>
</template>

<script>
import VOn from './v-on.vue'

export default {
  name: 'Vue2LearnIndex',
  components: { VOn },
  data() {
    return {

    };
  },

  mounted() {
    this.$on('test', function (msg) {
      console.log(msg)
    })
    this.$on('fn', function (res) {
      console.log(res)
    })
    // 监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。
    this.$emit('test', 'hi')
    this.$emit('hello', 'hello-world')
    this.$emit('fn', 'fn')
  },

  methods: {
    hello(world) {
      console.log(world)
    }
  },
};
</script>

<style lang="scss" scoped></style>