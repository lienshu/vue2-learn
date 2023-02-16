<template>
  <div>
    <!-- :value="value"可加可不加 -->
    <input type="text" class="input" :value="value" v-on="listeners" />
    <hr>
    <!-- 或 -->
    <!-- <input v-on="$listeners" /> -->
  </div>
</template>

<script>
export default {
  name: 'BaseInputText',

  props: {
    value: {
      type: String,
      default: ''
    }
  },

  computed: {
    listeners() {
      console.log(this.value, 'value')
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }


};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid $vue-blue;
}
</style>