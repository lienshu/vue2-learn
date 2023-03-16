<template>
  <div>
    sync的使用
    子组件：{{ name }}{{ age }}
    <el-button @click="changeSync">更改sync</el-button>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnSync',
  props: { name: String,age:String },
  data() {
    return {

    };
  },

  methods: {
    changeSync(){
      console.log('111111')
      console.log(this.name)
      this.$emit('update:age','30')
      this.$emit('update:name','李四')
    }
  },
};
</script>

<style lang="scss" scoped></style>