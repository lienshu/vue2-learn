<template>
  <div>
    sync的使用
    父组件：{{ user.name }}
    {{ age }}
    <!-- 
      使用sync：
        - 如果传递的是对象，使用 v-bind:sync 的形式，子组件可以直接接收对象里面的变量，子组件更新时，update后面直接拼接变量名, :update:变量名
          如果使用 :变量.sync 的形式，子组件不能直接接收对象里面的变量，只能接收该对象
        - 如果是简单数据，使用 :变量.sync 的形式
    -->
    <!-- <Syn v-bind.sync="user" :age.sync="age" /> -->
    <Syn v-bind="user" :user="user" v-bind.sync="list"/>
  </div>
</template>

<script>
import Syn from './sync.vue'
export default {
  name: 'Vue2LearnIndex',
  components: { Syn },
  watch:{
    name:{
      handle(val){
        console.log(val,'val')
      }
    }
  },
  data() {
    return {
      user:{
        name:'张三'
      },
      age:'19'
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>