<!-- 
  provide和inject不是响应式的
  想要实现响应式数据:
  传入一个可监听的对象，其对象的property还是可响应的
-->
<template>
  <div>
    父组件:{{ sharedData }}
    <button @click="change">改变</button>
    <Son />
    <Grand :propData="sharedData" />
  </div>
</template>

<script>
import Son from './sonComponents/son.vue'
import Grand from './sonComponents/grandComponents/grand.vue'

export default {
  name: 'Vue2LearnIndex',
  components: {
    Son, Grand
  },
  data() {
    return {
      sharedData: '共享数据',
      obj: {
        name: 'eavan'
      }
    };
  },
  // provide: { sharedData: this.sharedData },
  provide() {
    return {
      sharedData: this.sharedData
    }
  },

  mounted() {

  },

  methods: {
    change() {
      this.sharedData = '改变共享数据'
    }
  },
};
</script>

<style lang="scss" scoped>

</style>