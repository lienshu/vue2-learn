<template>
  <div>
    v-on用法
    <!-- 内联语句 -->
    <el-button type="primary" @click="handleClick(1, $event)">点击</el-button>
    <!-- 动态事件 (2.6.0+) -->
    <!-- 动态的改变dom原生事件，如：当前子组件中默认的是 ‘click’ 事件，父组件中可以该成鼠标移入事件 -->
    <div>
      <div class="border border-dark-500 h-7 w-20" v-on:[event]="eventClick(2, $event)">event点击</div>
      <!-- 动态事件缩写 -->
      <div class="border border-dark-500 h-7 w-20" @[event]="eventClick(2, $event)">event点击</div>
      <p>按钮被点击了 {{ counter }} 次</p>
    </div>
    <!-- 阻止冒泡 -->
    <div>
      <!-- 不会触发doThisDiv -->
      <div @click="doThisDiv">
        <el-button type="primary" @click.stop="doThis">阻止冒泡</el-button>
        <!-- 串联修饰符 -->
        <a @click.stop.prevent="doThis" href="https://www.baidu.com">1111</a>
      </div>
    </div>
    <div>
      <!-- 会触发doThisDiv -->
      <div @click="doThisDiv">
        <el-button type="primary" @click="doThis">冒泡</el-button>
      </div>
    </div>
    <!-- 阻止默认行为 -->
    <div>
      <el-button type="primary" @click.prevent="doThis">阻止默认行为</el-button>
      <!-- 点击a标不会跳转到百度页 -->
      <a @click.prevent="doThis" href="https://www.baidu.com">1111</a>
    </div>
    <div>
      <!-- v-on指令可以不带参数绑定一个对象，如：v-on=“{ 事件名：事件执行函数 }”，使用此种方法不支持函数传参&修饰符。 -->
      <div class="border border-dark-500 h-7 w-20" v-on="{ click: objectClick }">点击+1</div>
      <p>按钮被点击了 {{ counter }} 次</p>
      <!-- 键修饰符，键别名 -->
      <el-button type="primary" @keyup.enter="onEnter">键别名</el-button>
      <!-- 键修饰符，键代码 -->
      <el-button type="primary" @keyup.13="onEnter">键代码</el-button>
      <!-- 点击回调只会触发一次 -->
      <el-button type="primary" @click.once="onEnter">只触发一次</el-button>
      <!-- 对象语法 -->
      <!--  el-button标签没有mousedown和mouseup原生事件是因为它们是自定义的Vue组件元素，而不是原生的浏览器元素，所以不支持这些事件。 -->
      <el-button v-on="{ mousedown: mouseDown, mouseup: mouseUp }">对象语法</el-button>
      <button v-on="{ mousedown: doThis, mouseup: doThat }">原生button</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnVOn',
  props: { event: { type: String, default: 'click' } },

  data() {
    return {
      counter: 0,
      // event: 'click'
    };
  },

  mounted() {

  },

  methods: {
    handleClick(num, e) {
      console.log(num, 'num')
      console.log(e, 'e')
      console.log(e.target, 'target')
    },
    eventClick(num, e) {
      this.counter += num;
      console.log(e, 'e')
    },
    objectClick(e) {
      this.counter++;
      console.log(e);
    },
    doThisDiv() {
      console.log('doThisDiv')
    },
    doThis() {
      console.log('doThis')
    },
    doThat() {
      console.log('doThat')
    },
    onEnter() {
      console.log('onEnter')
    },
    mouseDown() {
      console.log('mouseDown')
    },
    mouseUp() {
      console.log('mouseUp')
    }
  },
};
</script>

<style lang="scss" scoped></style>