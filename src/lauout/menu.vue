<template>
  <div class="flex">
    <left-nav />
    <!-- router-view 显示 路由视图内容 -->
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <div class="ml-300px w-full">
      <Header />
      <router-view></router-view>
      <router-view name="Bottom"></router-view>
      <router-view name="Top"></router-view>
    </div>
  </div>
</template>

<script>
import LeftNav from '@/components/left-nav.vue'
import Header from '@/components/header.vue'
export default {
  name: 'Vue2LearnNoMenu',
  components: { LeftNav, Header },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped></style>