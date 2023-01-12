<template>
  <div>
    动态插槽名
    <header :style="{ fontSize: '20px' }">
      <slot name="header"></slot>
    </header>
    <footer :style="{ fontSize: '30px' }">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Vue2AppDynamicslot',

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