<template>
  <div class="passthrough">
    我是爷爷我今年：80岁
    <Parent :parent-age='53' :child-age='25' />
    <swiper-component />
  </div>
</template>

<script>
import Parent from './parent.vue'
import SwiperComponent from '../swiper/index.vue'

export default {
  name: 'Vue2LearnIndex',

  components: { Parent, SwiperComponent },

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