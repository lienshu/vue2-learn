<template>
  <div class="passthrough">
    我是爷爷我今年：80岁
    <Parent :parent-age='53' :child-age='25' />
  </div>
</template>

<script>
import Parent from './parent.vue'

export default {
  name: 'Vue2LearnIndex',

  components: { Parent },

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

<style lang="scss" scoped></style>