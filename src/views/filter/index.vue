<template>
  <div>
    filter
    <hr>
    {{ message | capitalize(1111) }}
    <ul>
      <li v-for="item in crr" :key="item">{{ item }}</li>
    </ul>
    <button @click="click">点击</button>
  </div>
</template>

<script>
export default {
  name: 'Index-Filter',
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },

  data() {
    return {
      message: '',
      arr: ['1', '2', '3', '4', '5', '6',],
      brr: ['7', '8', '9', '10'],
      crr: [],
      num: 1
    };
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
        console.log(111)
        this.crr = this.arr.concat(this.brr)
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>