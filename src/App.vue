<template>
  <div id="app">
    <!-- router-link 实现 路由跳转 动作 -->
    <router-link to="/sync-emit">sync-emit</router-link>
    <br>
    <router-link to="/ref-v-bind-sync">ref-v-bind-sync</router-link>
    <br>
    <router-link to="/is-component">is-component</router-link>
    <br>
    <router-link to="/move-slot">move-slot</router-link>
    <br>
    <router-link to="/slot-index">slot-index</router-link>
    <br>
    <router-link to="/ref">ref</router-link>
    <br>
    <router-link to="/provide-inject">provide-inject</router-link>
    <br>
    <router-link to="/emit">emit</router-link>
    <br>
    <router-link to="/inline-template">inline-template</router-link>
    <br>
    <router-link to="/history-listeners">history-listeners</router-link>
    <br>
    <router-link to="/transition">transition</router-link>
    <br>
    <router-link to="/mixin">mixin</router-link>
    <br>
    <router-link to="/directive">directive</router-link>
    <!-- router-view 显示 路由视图内容 -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>

