<template>
  <div class="child">
    我是儿子我今年：{{ childAge }}岁
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnChild',
  props: {
    childAge: Number
  },

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

<style lang="scss" scoped></style>