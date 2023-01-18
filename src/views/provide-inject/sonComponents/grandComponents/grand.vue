<template>
  <div>
    孙子组件:{{ sharedData }}
    <div>{{ propData }}</div>
    <button @click="change">改变</button>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnGrand',

  props: {
    propData: String
  },

  inject: ['sharedData'],

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    change() {
      this.sharedData = '改变共享数据'
    }
  },
};
</script>

<style lang="scss" scoped>

</style>