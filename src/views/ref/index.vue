<template>
  <div>
    ref
    <ref-component ref="sonRef"></ref-component>
    <!-- <div>父组件：{{ $refs.ref.data }}</div> -->
    <button @click="change">更改</button>
  </div>
</template>

<script>
import RefComponent from './components/refcomponent.vue'

export default {
  name: 'Vue2AppIndex',
  components: {
    RefComponent
  },

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    change() {
      // 父组件可以通过ref获取子组件变量，也可更改子组件变量
      console.log(this.$refs.sonRef.data)
      this.$refs.sonRef.data = '改变ref数据'
    }
  },
};
</script>

<style lang="scss" scoped>

</style>