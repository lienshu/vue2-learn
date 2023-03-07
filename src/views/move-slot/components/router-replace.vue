<template>
  <div>
    route.replace
    <div>{{ num }}</div>
    <el-button @click="numAdd">num+1</el-button>
    <div>{{ addNum }}</div>
    <!-- 当页面跳转到新页面，点击浏览器返回时，浏览器不会返回到当前页，而是返回的当前页的上一层页面 -->
    <!-- <el-button @click="$router.replace('/new-component')">新页面</el-button> -->
    <!-- 另一种写法 -->

    <!-- <el-button @click="$router.push({ path: '/new-component', replace: true })">新页面</el-button> -->
    <!-- 不生效 -->
    <el-button @click="$router.push({ path: '/new-component', replace: true })">新页面</el-button>
    <!-- 一般情况下，要做前进后退的浏览记录管理的，基本上都是用router.push()，但是也是有一些特殊情况需要用到router.replace()。
      比如，有一个授权页，用户在按流程操作时，某一步需要授权，是直接跳到授权页，授权页提交授权请求，直到成功授权后，跳到流程中的下一步操作的地址。
      此处，授权请求的那页面应该用replace去替换掉自身的访问记录，防止用户跳到下一步流程后按后退键回退到授权页，而导致重复授权。 -->
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnRouteReplace',

  data() {
    return {
      num: 1,
      addNum: 0,
    };
  },

  mounted() {

  },

  methods: {
    numAdd() {
      this.num = this.num + 1
      localStorage.setItem('num', JSON.stringify(this.num))
      this.addNum = JSON.parse(localStorage.getItem('num'))
    }
  },
};
</script>

<style lang="scss" scoped></style>