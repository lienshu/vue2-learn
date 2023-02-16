<template>
  <div>
    历史记录
    <div v-for="(item, index) in historyList" :key="index">{{ item }}</div>
    <hr>
    <!-- <input type="text" v-model="keyword"> -->
    <!-- 
      一般情况下 父组件要监听子组件的事件 可以通过$emit的方式 
      但是如果 父组件要监听子组件的原生事件 比如：input的focus事件
      此时可以通过使用v-on的.native修饰符达到目的 
    -->
    <!-- .native 可以在某组件的 根元素上 监听一个 原生事件 -->
    <!-- 
      .native 能监听 子组件根元素 @click 的原声事件
      onClick事件的console会被打印
      不加.native，onClick事件不会被监听，console不打印
    -->
    <!-- 此时子组件root-element没有绑定 v-on="$listeners"属性 且 目标预监听元素不是根元素 时 onClick不会触发 -->
    非根元素无$listeners<root-element @focus.native="onClick" />
    <hr>
    <hr>
    <!-- 此时子组件root-element绑定 v-on="$listeners"属性 且 目标预监听元素不是根元素 时 focus不绑定.native修饰符 onClick会触发 -->
    非根元素有$listeners<root-element @focus="onClick" />
    <hr>
    <hr>
    <!-- 当 root-element组件 没有被div或其他标签包裹 目标预监听元素是根元素时 .native可以监听 根元素上的原生事件 触发onFocus -->
    根元素不需要$listeners<root-element @focus.native="onFocus" />
    <hr>
    <hr>
    <!-- 当root-element组件中 目标预监听元素不是根元素时 .native会触发onClick事件 子组件有v-on="$listeners"属性 focus不绑定.native修饰符 会触发onFocus事件 -->
    非根元素<root-element @focus="onFocus" @click.native="onClick" />
    <hr>
    <div>base-input</div>
    <!-- 
      $listeners 
      如果目标预监听的元素不是根元素
      .native可能会失效
      可以在子组件上添加 v-on="$listeners" 属性 监听
    -->
    <base-input @input="onInput" />
    <hr>
    <button @click="search" :style="{ marginLeft: '20px', marginRight: '20px' }">搜索</button>
    <button @click="clear">清空历史记录</button>
  </div>
</template>

<script>
import BaseInput from './base-input.vue'
import RootElement from './root-element.vue'

export default {
  name: 'Vue2LearnIndex',
  components: { BaseInput, RootElement },

  data() {
    return {
      keyword: "",
      historyList: ['1', '2'],
      arr: { name: 'zhangsan' }
    };
  },

  watch: {
    // keyword: {
    //   handler(newVal, oldVal) {
    //     console.log(newVal, oldVal)
    //   }
    // }
  },

  mounted() {
    if (JSON.parse(localStorage.getItem("historyList"))) {
      console.log(typeof localStorage.getItem('historyList'), '21221')
      this.historyList = JSON.parse(localStorage.getItem('historyList'))
    }
  },

  methods: {
    search() {
      console.log(this.keyword)
      this.historyList[0] = '2'
      console.log(this.historyList)
      this.historyList.length = 4
      this.arr.age = '100'
      console.log(this.arr)
      // localStorage 是以 对象 的形式 存储的
      // localStorage 存储的 数据类型 会自动转换为 字符串 类型
      // if (!this.historyList.includes(this.keyword)) {
      //   this.historyList.unshift(this.keyword)
      //   console.log(this.historyList)
      //   localStorage.setItem('historyList', JSON.stringify(this.historyList))
      // } else {
      //   let i = this.historyList.indexOf(this.keyword)
      //   this.historyList.splice(i, 1)
      //   this.historyList.unshift(this.keyword)
      //   console.log(this.historyList)
      //   localStorage.setItem('historyList', JSON.stringify(this.historyList))
      // }
    },
    clear() {
      this.historyList = []
      localStorage.removeItem('historyList')
    },
    onInput() {
      // 当子组件 base-input 没有 $listeners 时，不打印 'input' ，有 $listeners 时打印 'input'
      console.log(event.target.value)
    },
    onClick() {
      console.log('onClick')
    },
    onFocus() {
      console.log('onFocus')
    },
  },
};
</script>

<style lang="scss" scoped>

</style>