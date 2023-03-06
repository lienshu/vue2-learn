<template>
  <div>
    v-on用法
    <!-- 内联语句 -->
    <el-button @click="handleClick(1, $event)">点击</el-button>
    <!-- 动态事件 (2.6.0+) -->
    <!-- 动态的改变dom原生事件，如：当前子组件中默认的是 ‘click’ 事件，父组件中可以该成鼠标移入事件 -->
    <div>
      <div class="border border-dark-500 h-7 w-20" v-on:[event]="eventClick(2, $event)">event点击</div>
      <p>按钮被点击了 {{ counter }} 次</p>
    </div>
    <div>
      <!-- v-on指令可以不带参数绑定一个对象，如：v-on=“{ 事件名：事件执行函数 }”，使用此种方法不支持函数传参&修饰符。 -->
      <div class="border border-dark-500 h-7 w-20" v-on="{ click: objectClick }">点击+1</div>
      <p>按钮被点击了 {{ counter }} 次</p>
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
    }
  },
};
</script>

<style lang="scss" scoped></style>