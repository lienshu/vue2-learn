<template>
  <div>
    孙子组件:{{ sharedData }}
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnGrand',

  inject: ['sharedData'],

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>