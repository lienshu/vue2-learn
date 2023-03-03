<template>
  <div>
    <BaseInputText v-model="newTodoText" placeholder="New todo" @keydown.enter="addTodo" />
    <!-- 或 -->
    <!-- <BaseInputText  placeholder="New todo" @keydown.enter="addTodo" /> -->
    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" />
    </ul>
    <p v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>
  </div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

let nextTodoId = 1

export default {
  name: 'TodoList',
  components: { BaseInputText, TodoListItem },
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: nextTodoId++,
          text: 'Learn Vue'
        },
        {
          id: nextTodoId++,
          text: 'Learn about single-file components'
        },
        {
          id: nextTodoId++,
          text: 'Fall in love'
        }
      ]
    };
  },
  watch: {
    newTodoText: {
      handler(newVal) {
        console.log(newVal, 'newVal')
        // console.log(oldVal, 'oldVal')
      },
      deep: true
    }
  },
  // 不需要newVal或oldVal时，不需要使用handler
  //   watch: {
  //   images() {
  //     this.id = Date.now();
  //   }
  // },

  mounted() {

  },

  methods: {
    // 或
    // addTodo() {
    //   if (event.target.value) {
    //     this.todos.push({
    //       id: nextTodoId++,
    //       text: event.target.value
    //     })
    //   }
    // },
    addTodo() {
      const trimmedText = this.newTodoText.trim()
      console.log(event.target.value, 'event')
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText
        })
        this.newTodoText = ''
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove
      })
    }
  },
};
</script>

<style lang="scss" scoped></style>