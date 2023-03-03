<template>
  <div>
    孙子组件
    <div>inject-sharedData: {{ sharedData }}</div>
    <div>inject-text: {{ text }}</div>
    <div>props-propData: {{ propData }}</div>
    <!-- <div>inject-name: {{ user.name }}</div>
    <div>inject-color: {{ color }}</div>
    <div>inject-color_fn: {{ color_fn() }}</div> -->
    <div>inject-data:
      <ul>
        <li>
          <!-- <div>color: {{ data.color }}</div> -->
        </li>
        <li>
          <!-- <div>name: {{ data.obj.name }}</div> -->
        </li>
        <li>
          <!-- <div>sharedData: {{ data.sharedData }}</div> -->
        </li>
      </ul>
    </div>
    <el-button @click="change">改变</el-button>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnGrand',

  props: {
    propData: String
  },
  // 可以是数组  也可以是对象, 是对象的话 直接设置默认值或是一个返回默认值的函数
  // 对象形式
  // inject: ['sharedData', 'user'],

  // 同层 provide 没有影响
  provide() {
    return {
      sharedData: '同层provide'
    }
  },

  // 数组形式
  inject: {
    sharedData: {
      from: 'sharedData',
      default: ''
    },
    text: {
      from: 'text',
      default: ''
    },
    speak: {
      from: "speak"
    }
    // user: {
    //   from: 'user',
    //   default: ''
    // },
    // color_fn: {
    //   from: 'color_fn',
    //   default: () => { return '' }
    // },
    // color: {
    //   from: 'color',
    //   default: ''
    // },
    // data: {
    //   from: 'data',
    //   default: ''
    // }
  },

  data() {
    return {
      // 如果在 data 中定义与 inject 相同的变量 则 inject 会被覆盖
      // sharedData: '同层provide'
    };
  },

  mounted() {
    this.speak()
    // console.log(this.data._provided, 'data')
    // console.log(this.speak)
  },

  methods: {
    change() {
      // provide & inject 传递的数据 不会改变，数据类型 是对象的 传递的数据 会 改变，但会有警告
      this.sharedData = '改变共享数据'
      this.user.name = 'Tom'
    }
  },
};
</script>

<style lang="scss" scoped></style>