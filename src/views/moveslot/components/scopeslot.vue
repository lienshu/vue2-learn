<template>
  <div>
    <h1>作用域插槽</h1>
    <slot :user="user">
      {{ user.lastName }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Vue2AppScopeslot',

  data() {
    return {
      user: undefined
      // user: {
      //   // lastName: 'san',
      //   // firstName: undefined
      //   // firstName: 'zhang'
      // }
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