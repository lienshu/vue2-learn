<template>
  <div>
    动态显示css
    <attribute-noparams />
    <attribute-params />
  </div>
</template>

<script>
import AttributeNoparams from './component/attribute-noparams.vue';
import attributeParams from './component/attribute-params.vue';

export default {
  name: 'Vue2LearnIndex',
  components: { AttributeNoparams, attributeParams },
  data() {
    return {

    };
  },
  created: function () {
    console.log('1111')
  },

  mounted() {
    console.log('222')
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>