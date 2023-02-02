<template>
  <!-- 
    $options可以 获取调用 在data外面 定义的 属性和方法
    1、重置data中所有的数据
    无论data中的数据如何改变，使用这句就可以使用恢复初始数据
    Object.assign(this.$data,this.$options.data())
    2、重置data中的某个值
    只会让指定的这个数据初始化，不会影响到data里的其他数据
    用this.$options.data()重置组件data时，data()里用this获取的props或method都为understand
    this.formData = this.$options.data.call(this).formData
  -->
  <div>
    vue的$options属性
    <hr>
    <button @click="getTextFn">options</button>
    <div>{{ text | filterTextFn }}</div>
    <!-- <div>{{ text }}</div> -->
    <!-- <div>{{ filterText }}</div> -->
    <!-- |按位或 -->
    <!-- <div>{{ a | b }}</div> -->
    <div>{{ a }}</div>
    <div>{{ b }}</div>
    <button @click="reset">重置</button>
    <hr>
    <el-button type="text" @click="click('add')">新增</el-button>
    <el-button type="text" @click="click('update')">编辑</el-button>
    <Model :dialogVisible="visible" @close="close" :type="type" :formData="formData" />
  </div>
</template>

<script>
import Model from './model.vue'
// const formData = {
//   name: '',
//   region: '',
// }

export default {
  name: 'Vue2LearnTest',
  testOptionsMethod() {
    console.log('hello options')
  },
  components: { Model },
  data() {
    return {
      text: '',
      a: 'dsdsdsd',
      b: '4342342432',
      searchForm: {
        input: ''
      },
      labelPosition: 'right',
      // formData: JSON.parse(JSON.stringify(formData)),
      formData: {
        name: '',
        region: ''
      },
      visible: false,
      type: ''
    };
  },
  filters: {
    filterTextFn: function (value) {
      if (!value) return ''
      return value + '-----' + 'options'
    }
  },
  mounted() {
    console.log(this.$options.name, 'name')
    console.log(this.$options.beforeRouteEnter, 'beforeRouteEnter')
    this.$options.testOptionsMethod()
    console.log(this.searchForm, 'searchForm')
    console.log(this.$data, '$data')
  },
  methods: {
    getTextFn() {
      let filterText = this.$options.filters.filterTextFn
      this.text = filterText('hi')
    },
    reset() {
      // 重置某一个表单数据
      this.searchForm = this.$options.data().searchForm + '111'
      // 重置整个data
      // this.$data = this.$options.data()
      console.log(this.searchForm, 'searchForm')
      console.log(this.$data, '$data')
    },
    click(val) {
      this.visible = true
      this.type = val
      if (this.type === 'update') {
        this.formData = {
          name: '张三',
          region: '北京',
        }
        // } else this.formData = { name: '', region: '' }
        // 重置data中的某个值
        // } else this.formData = this.$options.data.call(this).formData
        // 重置data中所有的值
      } else Object.assign(this.$data, this.$options.data())
    },
    close() {
      this.visible = false
    }
  },
};
</script>

<style lang="scss" scoped>

</style>