<template>
  <div>
    路由表path拼接参数
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnRouteLink',
  props: { text: String },

  data() {
    return {
      routeText: ''
    };
  },

  mounted() {
    console.log(this.$route.params, 'params')
    console.log(this.$route.query, 'query')
    console.log(this.$route.hash, 'hash')
    console.log(this.text, 'text')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>