var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  created: function () {
    console.log('混入对象的钩子被调用')
    // this.fn()
  },
  methods: {
    fn: function () {
      console.log('测试')
    }
  },
}

export default mixin