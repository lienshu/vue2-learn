<template>
  <div id="app">
    <router-link to="/sync-emit">sync-emit</router-link>
    <br>
    <router-link to="/ref-v-bind-sync">ref-v-bind-sync</router-link>
    <br>
    <router-link to="/is-component">is-component</router-link>
    <br>
    <router-link to="/move-slot">move-slot</router-link>
    <br>
    <router-link to="/ref">ref</router-link>
    <br>
    <router-link to="/provide-inject">provide-inject</router-link>
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

