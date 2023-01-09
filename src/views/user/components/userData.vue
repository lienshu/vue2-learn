<template>
  <div class="user">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="button-num">
      <el-button type="primary" class="button" @click="change">更改</el-button>
      <div>{{ number }}</div>
    </div>
    <div>{{ doubleNumber }}</div>
    <div>{{ doubleNumberFn() }}</div>
  </div>
</template>

<script>
export default {
  name: 'USER',

  props: {
    clickId: String,
    number: Number,
    userData: Array,
    // name: String,
    // resource: String,
    // desc: String,
    // delivery: Boolean,
  },

  data() {
    return {
      form: {
        name: '',
        delivery: false,
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  watch: {
    userData: {
      handler(newVal) {
        this.form = { ...this.form, ...newVal }
      },
      deep: true
    },
    clickId: {
      handler(newVal) {
        console.log(newVal)
        this.userData.forEach(item => {
          this.form = item.id === newVal ? { ...item } : { ...this.form }
        })
      },
      deep: true
    }
    // name: {
    //   handler(newVal, oldVal) {
    //     console.log(newVal, oldVal)
    //     this.form.name = newVal
    //   },
    //   deep: true
    // },
    // delivery: {
    //   handler(newVal, oldVal) {
    //     console.log(newVal, oldVal)
    //     this.form.delivery = newVal
    //   },
    //   deep: true
    // }
  },
  computed: {
    doubleNumber: function () {
      console.log('computed')
      return this.userData[0].name + String(this.number)
    },
    // form() {
    //   return { ...this.form, id: '', name: '', delivery: false, resource: '', desc: '' }
    // }
  },
  beforeCreate() {
    // 为什么获取不到this.userData
    // console.log(this.userData)
  },
  created() {
    // 为什么获取不到this.userData
    // console.log(this.userData)
  },
  mounted() {
    this.form = { ...this.form, ...this.userData[0], }
    console.log(this.userData)
    // console.log(this.name)
    // this.form = { ...this.form, name: this.name, delivery: this.delivery, resource: this.resource, desc: this.desc }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    change(e) {
      console.log(e.target.value)
      this.$emit('update:number', 5)
      console.log('change')
      // this.$emit('update:name', '李四')
      // this.$emit('update:delivery', false)
      let newData = { name: "李四", delivery: true, resource: '线下场地免费', desc: '不做说明' }
      this.$emit('update:userData[0]', newData)
    },
    doubleNumberFn() {
      console.log('methods')
      return this.userData[0].name + String(this.number)
    }
  },
};
</script>

<style lang="less" scoped>
.user {
  margin: 0 100px;

  .button-num {
    display: flex;

    .button {
      height: 40px;
    }
  }
}
</style>