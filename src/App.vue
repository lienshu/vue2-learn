<template>
  <div id="app">
    <router-link to="/syncemit">syncemit</router-link>
    <br>
    <router-link to="/ref-v-bindsync">ref-v-bindsync</router-link>
    <br>
    <router-link to="/iscomponent">iscomponent</router-link>
    <br>
    <router-link to="/moveslot">moveslot</router-link>
    <br>
    <router-link to="/ref">ref</router-link>
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

