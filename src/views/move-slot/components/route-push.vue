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
  watch: {
    $route: {
      handler(route) {
        console.log(route, 'route')
      },
      immediate: true
    }
  },
  mounted() {
    // 路由表中将参数拼接到路径后面
    // 路由跳转方式：
    // name&params 或 使用 / 将参数拼接在路径后面 
    // 均使用params接收
    // console.log(this.$route.params, 'params')
    // query为空
    // console.log(this.$route.query, 'query')
    // console.log(this.$route.hash, 'hash')
    // 路由表配置 props:true
    // console.log(this.text, 'text')

    console.log(this.$data, '$data')
    console.log(this.$el, '$el')
    console.log(this.$props, '$props')
    console.log(this.$options, '$options')
    // $root不会自动暴露props属性，要访问实例上的props只能使用vm.$props访问
    console.log(this.$root, '$root')
    console.log(this.$children, '$children')
    console.log(this.$isServer, '$isServer')
    console.log(this.$attrs, '$attrs')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>