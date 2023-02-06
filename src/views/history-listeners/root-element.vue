<template>
  <!-- <input type="text" /> -->
  <div>
    <!-- 
      非根元素
      绑定 v-on="$listeners" 属性 
      或
      用emit方法，通过使用 $listeners 获取父组件在子组件上加上的除.native的事件 子组件则监听这些事件
      当事件发生通知父组件 这个时候就不需要使用.native修饰符就可以监听原生事件了
    -->
    <input type="text" />
    <input type="text" v-on="$listeners" />
    <!-- v-on="$listeners" 或 v-on="inputListeners" -->
    <input type="text" v-on="inputListeners" />
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnRootElement',

  data() {
    return {
    };
  },

  computed: {
    inputListeners() {
      var vm = this
      // 将所有的对象整合在一起
      return Object.assign({},
        // 从父组件添加所有的监听器
        this.$listeners,
        // 添加自定义的监听器
        {
          // 确保v-model正常工作
          input(event) {
            vm.$emit('input', event.target.value)
          }
        })
    },
  },

  mounted() {
    console.log('v-on:focus.native')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>