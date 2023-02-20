<template>
  <div>
    computed方法中不携参数动态设置css样式
    <br>
    <br>
    <el-button @click="changeBg" type="primary" class="h-10">切换背景颜色</el-button>
    <br>
    <br>
    <div class="flex">
      <!-- style：computed方法中返回属性值颜色 -->
      <div class="w-200px h-200px" :style="{ background: backgroundStyle }"></div>
      <!-- style：computed方法中返回属性名和属性值 -->
      <div class="w-200px h-200px ml-9" :style="backgroundAllStyle"></div>
      <!-- style：三元的方式显示颜色 -->
      <div class="w-200px h-200px  ml-9" :style="{ background: isChange ? 'skyblue' : 'salmon' }"></div>
      <!-- class：三元的方式显示颜色 -->
      <div class="w-200px h-200px  ml-9" :class="{ change_style: isChange, unchange_style: !isChange }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnAttributeOnly',

  data() {
    return {
      isChange: false
    };
  },

  computed: {
    backgroundStyle() {
      if (this.isChange) {
        return 'red'
      }
      return 'pink'
    },
    backgroundAllStyle() {
      if (this.isChange) {
        return { background: 'gold' }
      }
      return { background: 'aquamarine' }
    }
  },

  mounted() { },

  methods: {
    changeBg() {
      this.isChange = !this.isChange
    }
  },
};
</script>

<style lang="scss" scoped>
.change_style {
  background: peachpuff;
}

.unchange_style {
  background: orange;
}
</style>