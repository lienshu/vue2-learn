<template>
  <li>
    {{ todo.text }}
    <el-button type="primary" @click="$emit('remove', todo.id)">
      X
    </el-button>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',

  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>