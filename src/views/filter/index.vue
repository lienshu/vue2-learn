<template>
  <div>
    filter
    <hr>
    {{ message | capitalize }}
    <hr>
    {{ message | capi }}
    <hr>
    <ul>
      <li v-for="item in crr" :key="item">{{ item }}</li>
    </ul>
    <button @click="click">点击</button>
  </div>
</template>

<script>
export default {
  name: 'Index-Filter',
  data() {
    return {
      message: 'hello vue.js!',
      arr: ['1', '2', '3', '4', '5', '6',],
      brr: ['7', '8', '9', '10'],
      crr: [],
      num: 1
    };
  },
  filters: {
    // 过滤器函数接收表达式的值（之前的操作链的结果）作为第一个参数
    // message的值 作为参数 传入到函数中
    capitalize: function (value) {
      console.log(value, 'value')
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    capi(val) {
      console.log(val)
      const first = val.charAt(0).toUpperCase();
      const other = val.slice(1);
      return first + other + ' 调用了局部过滤器';
    }
  },

  mounted() {
    this.crr = this.arr.slice(0, 4)
  },

  methods: {
    click() {
      this.num++
      console.log(this.arr.slice(4))
      if (this.num === 2) {
        this.crr = this.arr.concat(this.brr)
      } else {
        this.crr = this.arr.concat(this.brr)
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>