<template>
  <div>
    <!-- $forceUpdate 页面强制更新 -->
    inline-template
    <!-- inline-template属性作用和插槽一样 -->
    <common-template inline-template>
      <div>
        <p>These are compiled as the component's own template.</p>
        <p>Not parent's transclusion content.</p>
      </div>
    </common-template>
    <span>{{ folder.name }}</span>
    <hr>
    <index-contents :children="folder.children" />
  </div>
</template>

<script>
import CommonTemplate from '@/components/common-template.vue'
import IndexContents from './index-contents.vue'

export default {
  name: 'Vue2LearnIndex',
  components: {
    CommonTemplate, IndexContents,
    // IndexContents: () => import('./index-contents.vue')
  },

  data() {
    return {
      folder: {
        name: '张三',
        children: [
          { children: true, name: '小明' },
          { children: true, name: '小红' }
        ]
      }
    }
  },
  // beforeCreate: function () {
  //   this.$options.components.IndexContents = require('./index-contents.vue').default
  // },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>