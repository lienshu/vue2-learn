<template>
  <div>
    mixin
  </div>
</template>

<script>
import myMixin from './mixins/myMixin'
import conflateMixin from './mixins/conflateMixin'
export default {
  name: 'MixIn',
  mixins: [myMixin, conflateMixin],
  data() {
    return {
      message: 'goodbye',
      bar: 'def'
    };
  },
  created: function () {
    console.log('组件钩子调用')
  },

  mounted() {
    // console.log(document.addEventListener, '1111')
    console.log(this.$data, '11111')
    this.fn()
  },

  methods: {
    // created: {
    //   function() {
    //     console.log('组件钩子被调用')
    //   }
    // },
    fn() {
      console.log('mixin')
    }
  },
};
</script>

<style lang="scss" scoped></style>