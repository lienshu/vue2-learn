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
    console.log(this.$route.query.routeTextPath, 'query')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>