<template>
  <div>
    <ul>
      <li v-for="todo in filteredTodos" v-bind:key="todo.id">
        <slot name="todo" :todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Vue2AppCommon',

  data() {
    return {
      filteredTodos: [
        {
          id: 1,
          text: '吃饭',
          isComplete: true
        },
        {
          id: 2,
          text: '睡觉',
          isComplete: false
        },
        {
          id: 3,
          text: '打豆豆',
          isComplete: true
        },
      ]
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