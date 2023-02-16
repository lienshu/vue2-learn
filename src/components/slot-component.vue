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
    str: String
  },

  data() {
    return {

    };
  },

  mounted() {
    console.log(this.str, 'props')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>