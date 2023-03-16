<template>
  <div class="login h-screen w-screen">
    <div class="main h-screen w-screen">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
        class="demo-ruleForm w-500px m-auto relative top-1/3">
        <div class="text-white">isLogin: {{ isLogin }}</div>
        <div class="text-white">doneTodosLength: {{ doneTodosLength }}</div>
        <!-- <div class="text-white">{{ todoById }}</div> -->
        <div class="text-white">localComputed: {{ localComputed }}</div>
        <!-- <div class="text-white">doneLength: {{ doneLength }}</div> -->
        <div class="text-white">count: {{ count }}</div>
        <el-form-item label="账号" prop="user">
          <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<!-- 
  如果不是module模式，直接在属性后面写变量名/方法名
  如：this.$store.state.isLogin
-->

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Vue2LearnIndex',

  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        user: '',
        password: '',
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    };
  },
  // computed:mapState({
  //   // 箭头函数使代码简洁
  //   // isLogin:state => state.isLogin
  //   // 传字符串参数 'isLogin' 等同于 `state => state.isLogin`
  //   // isLogin:'isLogin'
  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   isLogin(state){
  //     return state.isLogin
  //   }
  // }),
  // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  // 映射 this.isLogin 为 store.state.isLogin
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    localComputed() {
      return this.isLogin
    },
    // ...mapState(['isLogin', 'count']),
    // ...mapState({ isLogin: state => state.user.isLogin, count: state => state.user.count }),
    ...mapState('user',{ isLogin: state => state.isLogin, count: state => state.count }),
    // doneTodosLength() {
    //   return this.$store.getters.doneTodosLength
    // },
    // todoById() {
    //   return this.$store.getters.getTodoById(2).id
    // }
    // ...mapGetters(['user/doneTodosLength'])
    // 将getter属性另改名
    // ...mapGetters({ doneLength: 'doneTodosLength' })
    // ...mapGetters("模块名",['方法名']),
    ...mapGetters("user",['doneTodosLength'])
  },
  // computed: mapState(['isLogin']),
  mounted() {
    console.log(this.$store.state.user.isLogin, 'isLogin')
    console.log(this.$store.getters["user/doneTodos"], 'doneTodos')
    // 注意，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。
    console.log(this.$store.getters["user/doneTodosLength"], 'doneTodosLength')
    console.log(this.isLogin, '11111isLogin')
  },
  methods: {
    // ...mapMutations(['user/setUserInfo', 'user/increment']),
    ...mapMutations('user',['setUserInfo', 'increment']),
    // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    ...mapMutations({ add: 'user/increment' }),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          // this.$store.commit('user/setUserInfo')
          // this.$store.dispatch('otherIncrement',{amount: 20})
          this.$store.dispatch({ type: 'user/otherIncrement', amount: 20 })
          this.$store.dispatch('user/actionB').then(() => {
            console.log('actionB')
          })
          // this.$store.commit('user/setUserInfo')
          // this.$store.commit('increment', 10)
          // 当荷载dispatch是个对象时
          // this.$store.commit('increment', { amount: 10 })
          // 对象的形式调用mutation
          // this.$store.commit({ type: 'increment', amount: 10 })
          this.$router.push('/')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  .el-form-item__label {
    color: #fff;
  }
}

.login {
  background: url(@/assets/img/directive/11.jpg) no-repeat center;
  background-size: 100% 100%;

  .main {
    background: rgba(0, 0, 0, .49);
  }
}
</style>