<template>
  <div class="parent">
    我是爸爸我今年：{{ parentAge }}岁
    <!-- 通过v-bind='$arrts'传递 -->
    <Child v-bind='$attrs' />
  </div>
</template>

<script>
import Child from './child.vue'
export default {
  name: 'Vue2LearnParent',
  components: { Child },
  props: {
    parentAge: Number
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