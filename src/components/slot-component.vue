<template>
  <div>
    <div>
      <slot name="header" />
    </div>
    <div>
      <slot />
    </div>
    <div>
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnSlotComponent',
  props: {
    strText: String
  },

  data() {
    return {

    };
  },

  mounted() {
    console.log(this.strText, 'props')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>