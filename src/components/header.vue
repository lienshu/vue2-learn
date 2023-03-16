<template>
  <div class="w-full header h-60px pr-5 leading-60px">
    <el-button type="primary" class="w-80px" @click="$router.push('login')">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnHeader',

  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 2px solid gray;
  text-align: right;
}
</style>