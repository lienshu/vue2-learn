<template>
  <div>
    <!-- 组件循环引用 -->
    <li v-for="(child, index) in children" :key="index">
      <!-- {{ child }} -->
      <!-- <Index v-if="child.children" :folder="child"/> -->
      <span>{{ child.name }}</span>
    </li>
  </div>
</template>

<script>
// import Index from './index.vue'
export default {
  name: 'IndexContents',
  // components: { Index },
  props: {
    children: Array
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

<style lang="scss" scoped>

</style>