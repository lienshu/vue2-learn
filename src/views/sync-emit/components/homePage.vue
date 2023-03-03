<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="divStyle">
      <!-- <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div> -->
      <!-- <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div>
      <div class="divSon div1"></div>
      <div class="divSon div2"></div>
      <div class="divSon div3"></div> -->
      <div v-for="item in data" :key="item.id">
        {{ item.type }}
        <div v-for="food in item.food" :key="food.id">
          <input :value="food.name" @input="changeName($event, food.id)" />
        </div>
      </div>
    </div>
    <!-- <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch> -->
    <el-switch :value="value" @input="changeSwitch($event)" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
    <!-- <input type="text" class="form-control" placeholder="请输入品牌名称" v-model="sth"> -->
    <input type="text" v-model="text" @input="changeValue(text)">
    <input type="text" :value="text" @input="changeValue(text)">
    <input type="text" :value="testData" @input="testFn($event)">
    <el-button type="primary" @click="click">button</el-button>
    <br>
    <br>
    <br>
    <div @click="eventFn" class="event">
      <div @click.prevent="eventSonFn" :style="{ border: '5px solid blue' }">div标签1
        <div @click="eventGranFn" :style="{ border: '5px solid #fff' }">div标签2</div>
      </div>
    </div>
    <br>
    <br>
    <input :value="domValue[0].name" @input="clickFn($event)">
    <el-button type="primary" v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </el-button>
    <form>
      <label for="id-checkbox">Checkbox:</label>
      <input type="checkbox" id="id-checkbox" />
    </form>
    <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String
    data: Array,
    testData: String
  },
  data() {
    return {
      text: '测试',
      value: true,
      input: '',
      domValue: [{ name: 'zhangsan' }, { name: 'lisi' }]
    }
  },
  methods: {
    changeName(food, id) {
      console.log(food, id)
    },
    testFn(text) {
      this.$emit('update:testData', text.target.value)
      console.log(this.testData)
    },
    click() {
      this.$emit('update:testData', '日料')
    },
    changeValue(value) {
      console.log(value)
    },
    changeSwitch(value) {
      console.log(value)
      this.value = value
    },
    changeInput(value) {
      console.log(value)
      this.input = value
    },
    clickFn(e) {
      console.log(e.target.value)
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault()
        console.log(event)
      }
      alert(message)
    },
    eventFn(e) {
      console.log(e.target, 'fa')
      console.log(e.currentTarget, 'this')
    },
    eventSonFn(e) {
      console.log(e.target, 'son')
      // console.log(e.currentTarget, 'this')
    },
    eventGranFn(e) {
      console.log(e.target, 'grand')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divStyle {
  display: flex;
  /* flex-direction: row-reverse; */
  border: 1px solid #000;
  padding: 20px;
  /* flex-wrap: wrap-reverse; */
  flex-flow: row-reverse wrap-reverse;
  align-items: baseline;
}

.divSon {
  /* height: 300px; */
  width: 200px;
  margin: 20px;
}

.div1 {
  background-color: aquamarine;
  height: 300px;
  order: 10;
  align-self: flex-end;
}

.div2 {
  background-color: tomato;
  height: 400px;
  flex-grow: 2;
  order: 5;
  align-self: flex-end;
}

.div3 {
  background-color: skyblue;
  height: 500px;
  order: 1;
  align-self: flex-start;
}

.event {
  height: 200px;
  width: 200px;
  background: salmon;
}
</style>
