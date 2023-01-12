<template>
  <div>
    其他
    <div v-for="(item, index) in object" :key="item">
      {{ index }}:{{ item }}
    </div>
    <button @click="changeArr">改变原对象</button>
    <button @click="changeObj">改变原数组</button>
    <!-- <div v-for="item in array" :key="item.name">
      <br> <br>
      <div :style="{ border: '2px solid pink' }">name:{{ item.name }}</div>
      <br> <br>
      <div :style="{ border: '2px solid blue' }">age:{{ item.age }}</div>
      <br> <br>
      <div :style="{ border: '2px solid yellow' }">gender:{{ item.gender }}</div>
    </div> -->
    <div @click="updateMessage">{{ message }}</div>
    <!-- <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label> -->
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <br>
    <!-- <input type="radio" v-model="pick" v-bind:value="a">
    <br>
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no"> -->
    <button v-for="(item, index) in tags" :key="index" @click="currentTab(item.name)">{{ item.name }}</button>
    <component :is="componentTag">
      <slot />
    </component>
  </div>
</template>

<script>
import One from './components/one.vue'
import Two from './components/two.vue'
import Three from './components/three.vue'

export default {
  name: 'OTHER',
  components: {
    One, Two, Three
  },
  data() {
    return {
      componentTag: "One",
      tags: [{ name: 'One' }, { name: 'Two' }, { name: 'Three' }],
      a: false,
      pick: '',
      toggle: '',
      checkedNames: [],
      message: '未更新',
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      array: [
        {
          name: 'zhangsan',
          age: '18',
          gender: 'mail'
        },
        {
          name: 'lisi',
          age: '19',
          gender: 'femail'
        },
        {
          name: 'wangwu',
          age: '20',
          gender: 'mail'
        },
      ]
    };
  },

  mounted() {

  },

  methods: {
    async updateMessage() {
      await this.$nextTick()
      setTimeout(() => {
        this.message = '已更新'
      }, 0)

      console.log(this.message)
    },
    changeArr() {
      // this.object.type = 'novel'
      // this.object.publishedAt = '2026-04-10'
      // this.$set(this.object, 'type', 'novel')
      this.object = Object.assign({}, this.object, { type: 'novel' })
      console.log(this.object)
      this.array[0].name = 'meiyouming'
      console.log(this.array)
    },
    changeObj() {
      // this.object.type = 'paper'
      this.$set(this.object, 'type', 'paper')
      console.log(this.object)
      this.array = this.array.map(item => {
        return { ...item, age: item.name === 'lisi' ? '22' : item.age }
      })
      this.array[0].name = 'wumingshi'
      console.log(this.array)
    },
    currentTab(val) {
      this.componentTag = val
    },
  },
};
</script>

<style lang="scss" scoped>

</style>