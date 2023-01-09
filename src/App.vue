<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/user">User</router-link>
    <router-link to="/other">Other</router-link>
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

