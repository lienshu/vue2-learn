<template>
  <div id="app" class="app">
    <!-- router-link 实现 路由跳转 动作 -->
    <!-- router-view 显示 路由视图内容 -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
.app {
  color: blue;
  cursor: pointer;
}
</style>

