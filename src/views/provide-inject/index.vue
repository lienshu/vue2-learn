<template>
  <div>
    父组件:{{ sharedData }}
    <Son />
    <Grand />
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
  // provide: { sharedData: this.sharedData },
  provide() {
    return {
      sharedData: this.sharedData
    }
  },
  data() {
    return {
      sharedData: '共享数据'
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