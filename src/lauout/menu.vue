<template>
  <div class="flex">
    <left-nav />
    <!-- router-view 显示 路由视图内容 -->
    <router-view></router-view>
    <router-view name="Bottom"></router-view>
    <router-view name="Top"></router-view>
  </div>
</template>

<script>
import LeftNav from '@/components/left-nav.vue'
export default {
  name: 'Vue2LearnNoMenu',
  components: { LeftNav },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped></style>