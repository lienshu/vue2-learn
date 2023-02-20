<template>
  <div>
    methods方法中携带参数动态设置css样式
    <ul>
      <li v-for="(item, index) in liList" :key="index" :style="colorStyle(index)">{{ item.color }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnAttributeParams',

  data() {
    return {
      liList: [{ color: '黄色' }, { color: '粉色' }, { color: '蓝色' }]
    };
  },

  mounted() {

  },

  methods: {
    colorStyle(index) {
      if (index === 0) {
        return { color: 'yellow' }
      } else if (index === 1) {
        return { color: 'pink' }
      } else if (index === 2) {
        return { color: 'skyblue' }
      }
      return { color: 'red' }
    }
  },
};
</script>

<style lang="scss" scoped></style>