<template>
  <div>
    路由跳转--path
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnRouteLink',

  data() {
    return {
      text: ''
    };
  },

  mounted() {
    // 路由跳转方式：path&query
    // 参数拼接路径的路由跳转，均使用query接收参数
    console.log(this.$route.query.routeTextPath, 'query')
    // params为空
    console.log(this.$route.params.routeTextPath, 'params')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>