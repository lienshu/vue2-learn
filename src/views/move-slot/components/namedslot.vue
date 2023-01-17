<template>
  <div>
    <h1>
      具名插槽
      <header>
        <slot name="other" :otherSlotProps="otherSlotProps">
        </slot>
      </header>
      <header>
        <slot name="header" :str="str">
          {{ str }}
        </slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'named-slot',

  data() {
    return {
      str: '测试',
      otherSlotProps: '作用域插槽测试'
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