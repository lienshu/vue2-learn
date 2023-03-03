<template>
  <div>
    emit
    <el-button @click="onEmit">onEmit</el-button>
    <el-button @click="onOff">onOff</el-button>
    <el-button @click="onOn">onOn</el-button>
    <hr>
    {{ data }}
    <hr>
    <sub-index :data.sync="data" />
    <hr>
    <Options />
    <welcome-button @welcome="sayhi" />
  </div>
</template>

<script>
import SubIndex from './sub_index.vue'
import Options from './options.vue'
import WelcomeButton from './$emit.vue'

export default {
  name: 'Vue2LearnIndex',

  components: {
    SubIndex, Options,
    WelcomeButton
  },

  data() {
    return {
      timer: setInterval(() => {
        // 某些定时器操作                
      }, 500),
      timer3: setInterval(() => {
        // 某些定时器操作                
      }, 7000),
      data: '测试'
    };
  },

  mounted() {
    this.attachDatepicker()
  },

  methods: {
    attachDatepicker: function () {
      const timer2 = setInterval(() => {
        // 某些定时器操作                
      }, 90000)
      // this.$once('hook:beforeDestroy', () => {
      clearInterval(this.timer)
      clearInterval(timer2)
      // })
      console.log(this.timer, '111111111')
      console.log(timer2, '2222222222')
      console.log(this.timer3, '33333333')
    },
    onEmit() {
      this.$emit('onTest', 1)
      this.$emit('onTest', 2)
      this.$emit('onTest', 3)
      this.$emit('onTest', 4)
      this.$emit('onTestOnce', 5)
      this.$emit('onTestOnce', 6)
      this.$emit('onTestOnce', 7)
      this.$emit('onTestOnce', 8)
      this.$message.success('测试')
    },
    onOff() {
      // 取消监听
      // 这里为什么没有触发 $once里的 console
      this.$off('onTest')
    },
    onOn() {
      // 同意事件每次都监听
      this.$on('onTest', (args) => {
        console.log(args, 'on')
      })
      // 官网例子
      this.$once('hook:beforeDestroy', function () {

      })
      // 只监听一次
      this.$once('onTestOnce', (args) => {
        console.log(args, 'once')
      })
    },
    sayhi() {
      alert('Hi')
    }
  },
};
</script>

<style lang="scss" scoped></style>