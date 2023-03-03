<template>
  <div>
    子组件{{ data }}
    <el-button @click="change">更改</el-button>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnSubIndex',
  props: {
    data: String
  },
  data() {
    return {

    };
  },
  methods: {
    change() {
      let sub_data = '子组件更改'
      this.$emit('update:data', sub_data)
      // this.$emit('update:data', sub_data)
      console.log(this.data, '222')
    }
  },
};
</script>

<style lang="scss" scoped></style>