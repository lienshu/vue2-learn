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
    console.log(this.$route.params.routerTextName, 'params')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>