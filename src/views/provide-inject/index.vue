<!-- 
  provide/inject 机制的原理 -- 向上找寻
  provide和inject不是响应式的
  想要实现响应式数据:
  传入一个可监听的对象，其对象的property还是可响应的
  或者把值转换为对象
-->
<template>
  <div>
    父组件:{{ sharedData }}
    <el-button @click="change">改变</el-button>
    <div>{{ obj.name }}</div>
    <div>{{ color }}</div>
    <hr>
    <Son />
    {{ name }}
    <hr>
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
      },
      color: 'red',
      name: '小明'
    };
  },
  // provide写成对象的形式，访问不到Vue实例，为什么不能访问到Vue实例
  // 因为对象中获取不到this
  // 所以在Vue2中，使用provide时，如果是字符串 或 不是获取的data数据，可以写成对象的形式
  // 如果是获取的data中的数据，provide只能写成函数的形式，只有函数才能获取到this
  provide: { sharedData: 'provide对象的形式', text: '21212121', speak() { console.log(this.sharedData, 'this.sharedData') } },
  // provide() {
  //   return {
  //     sharedData: this.sharedData,
  //     // 对象形式
  //     user: this.obj,
  //     // 箭头函数形式 箭头函数可以获取到this 
  //     // 为什么箭头函数可以获取到正确的this，匿名函数就不可以
  //     // color_fn: () => {
  //     //   console.log(this)
  //     //   return this.color
  //     // },
  //     color_fn: function () {
  //       console.log(this)
  //       return this.color
  //     },
  //     color: this.color,
  //     // 更好的解决方案 把provide所有的Vue实例都传递下去
  //     data: this
  //   }
  // },

  mounted() {
    console.log(this.sharedData, 'this')
    console.log(this.text, 'text')
    console.log(this.provide, 'provide')
    console.log(this, 'this')
    this.change()
  },

  methods: {
    change() {
      this.sharedData = '改变共享数据'
      this.obj.name = 'Jean'
      this.color = 'pink'
      console.log('2222')
    },
    changeName() {
      this.name = '小红'
    }
  },
};
</script>

<style lang="scss" scoped></style>