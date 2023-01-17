<template>
  <div>
    子组件
    {{ data }}
  </div>
</template>

<script>
export default {
  name: 'Vue2AppRefcomponent',

  data() {
    return {
      data: 'ref数据'
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