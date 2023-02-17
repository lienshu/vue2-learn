<template>
  <div>
    路由跳转--name
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
    // 路由跳转方式：name&params
    // 当参数拼接在路由地址后面时，使用.query获取参数
    console.log(this.$route.query.routerTextName, 'query')
    // 当路由是拆开展示，name和params分别传值时，使用.params获取参数
    console.log(this.$route.params.routerTextName, 'params')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>