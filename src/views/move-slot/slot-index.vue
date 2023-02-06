<template>
  <slot-component>
    <!-- 插槽 -->
    <template #header>
      <h1>标题</h1>
    </template>
    <!-- <h3>中间内容</h3> -->
    <!-- 
      如果组件内有 template name是default 的组件，
      则在 组件中的单独写标签会不生效 
    -->
    <template #default>
      <h3>中间内容</h3>
    </template>
    <template #footer>
      <h4>底部</h4>
    </template>
  </slot-component>
</template>

<script>
import SlotComponent from '@/components/slot-component.vue'

export default {
  name: 'Vue2LearnSlotIndex',
  components: { SlotComponent },

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>