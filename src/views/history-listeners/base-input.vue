<template>
  <div>
    <!-- 有 $listeners 父组件可以监听到子组件的根元素的原生事件input-->
    <input v-on="$listeners" />
    <!-- 没有 $listeners 父组件不能监听到子组件的根元素的原生事件input -->
    <input />
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnBaseInput',

  data() {
    return {

    };
  },

  mounted() {
    console.log(this.$listeners)
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>