<template>
  <div class="page">
    用户
    <div class="button-num">
      <el-button type="primary" class="button" @click="change">更改</el-button>
      <div>{{ number }}</div>
    </div>
    <!-- <user-content v-bind.sync="userData" :number.sync="number" /> -->
    <user-content :userData.sync="userData" :number.sync="number" />
  </div>
</template>

<script>
import UserContent from './components/userData.vue'

export default {
  name: 'USER',
  components: {
    UserContent
  },
  data() {
    return {
      userData: {
        name: '张三',
        delivery: true,
        resource: '线下场地免费',
        desc: '不做说明'
      },
      number: 2
    };
  },

  mounted() {

  },

  methods: {
    change() {
      setTimeout(() => {
        this.number++
      }, 100);
    }
  },
};
</script>

<style lang="less" scoped>
.page {
  display: flex;

  .button-num {
    display: flex;

    .button {
      height: 40px;
    }
  }
}
</style>