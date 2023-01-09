<template>
  <div>
    <h3>{{ title }}</h3>
    <home-page :data.sync="data" :testData.sync='testData' />
  </div>
</template>

<script>
import HomePage from './components/homePage.vue'

export default {
  name: 'HOME',
  components: {
    HomePage
  },

  data() {
    return {
      title: '首页',
      data: [
        {
          id: '1',
          type: '中餐',
          food: [
            {
              id: '11',
              name: '小炒肉'
            }, {
              id: '12',
              name: '金钱蛋'
            },
          ]
        },
        {
          id: '2',
          type: '西餐',
          food: [
            {
              id: '21',
              name: '汉堡'
            }, {
              id: '22',
              name: '薯条'
            },
          ]
        },


      ],
      testData: '测试'
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>