<template>
  <div class="page">
    用户
    <div class="button-num">
      <el-button type="primary" class="button" @click="change('zhangsan')">张三</el-button>
      <el-button type="primary" class="button" @click="change('lisi')">李四</el-button>
      <div>{{ number }}</div>
    </div>
    <!-- <user-content v-bind.sync="userData" :number.sync="number" /> -->
    <user-content :userData.sync="userData" :clickId="clickId" :number.sync="number" />
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
      userData: [{
        name: '张三',
        id: 'zhangsan',
        delivery: true,
        resource: '线下场地免费',
        desc: '不做说明'
      }, {
        name: '李四',
        id: 'lisi',
        delivery: 'false',
        resource: '线下场地免费',
        desc: '无'
      }],
      number: 2,
      clickId: ''
    };
  },

  mounted() {

  },

  methods: {
    change(id) {
      setTimeout(() => {
        this.number++
        this.clickId = id
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