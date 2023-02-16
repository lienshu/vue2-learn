<template>
  <div>
    <slot-component :str="str">
      <!-- 插槽 -->
      <template #header>
        <h1>标题</h1>
      </template>
      <!-- <h3>中间内容</h3> -->
      <!-- 
      如果组件内有 template name是default 的组件，
      则在 组件中的单独写标签会不生效 
    -->
      <template #default>
        <h3>中间内容</h3>
      </template>
      <template #footer>
        <h4>底部</h4>
      </template>
    </slot-component>
    <button @click="routePushName">路由跳转--name</button>
    <hr>
    <button @click="routePushPath">路由跳转--path</button>
    <hr>
    参数拼接到路由表的path后面 <button @click="routePush">路由表path拼接参数</button>
    <!-- 
      questionMark 为undefined时 
        - questionMark?.age 加?. 页面不会报错
        - questionMark.age 不加?. 页面会报错
    -->
    <div>问号：{{ questionMark?.age }}</div>
    <!-- arr存在 age前面加不加?. 页面都不会报错 -->
    <div>问号：{{ arr?.age }}</div>
    <button @click="handleClick">测试</button>
  </div>
</template>

<script>
import SlotComponent from '@/components/slot-component.vue'

export default {
  name: 'Vue2LearnSlotIndex',
  components: { SlotComponent },

  data() {
    return {
      routerTextName: 'name-params',
      routeTextPath: 'path-query',
      routeText: 'text',
      questionMark: undefined,
      str: '年交税的比例怎么算',
      arr: { name: '张三' }
    };
  },

  mounted() {

  },

  methods: {
    routePushName() {
      // params 不会拼接到URL上
      // this.$router.push({ name: 'route-push-name', params: { routerTextName: this.routerTextName } })
      this.$router.push(`/route-push-name?routerTextName=${this.routerTextName}`)
      // 路由地址的 / 可加可不加
      // this.$router.push(`route-push-name?routerTextName=${this.routerTextName}`)

    },
    routePushPath() {
      // query 会拼接到URL上
      // this.$router.push({ path: 'route-push-path', query: { routeTextPath: this.routeTextPath } })
      // 或使用拼接参数的方式，传递参数
      this.$router.push(`/route-push-path?routeTextPath=${this.routeTextPath}`)
    },
    routePush() {
      this.$router.push({ name: 'route-push', params: { text: this.routeText }, query: { text: this.routeText } })
    },
    handleClick() {
      console.log(this.questionMark.age)
    }
  },
};
</script>

<style lang="scss" scoped>

</style>