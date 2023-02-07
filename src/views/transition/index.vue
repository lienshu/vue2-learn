<template>
  <div>
    transition
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <!-- <transition name="bounce"> -->
    <transition appear :duration="{ enter: 500, leave: 800 }" enter-active-class="animate__animated animate__fadeOut"
      mode="out-in">
      <div>
        <p v-if="show">world</p>
        <div v-if="show">animated</div>
      </div>
    </transition>
    <el-radio v-model="componentId" label="ComponentA">A</el-radio>
    <el-radio v-model="componentId" label="ComponentB">B</el-radio>
    <transition name="component-fade" mode="out-in">
      <component :is="componentId"></component>
    </transition>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <button @click="shuffle">shuffle</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" :key="item" class="list-item">{{ item }}</span>
    </transition-group>
    <button @click='shuffle'>shuffle</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
import { shuffle } from "lodash";
import ComponentA from './components/component-a';
import ComponentB from './components/component-b.vue'

export default {
  name: 'TransitionIndex',
  components: { ComponentA, ComponentB },

  data() {
    return {
      show: true,
      radio: '1',
      componentId: "ComponentA",
      items: [1, 2, 3, 4],
      nextNum: 5
    };
  },

  mounted() {

  },

  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = shuffle(this.items)
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all .9s;
}

.fade-leave-active {
  // transition: opacity .5s;
  transition: color .2s;
}

.fade-enter,
.fade-leave-to {
  // opacity: 0;
  color: red;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1.5);
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .4s ease;
}

.component-fade-enter,
.component-fate-leave-to {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

// .list-enter-active,
// .list-leave-active {
//   transition: all 1s;
// }

// .list-enter,
// .list-leave-to {
//   // opacity: 0;
//   transform: translateY(30px);
// }

.list-move {
  transition: transform 1s;
}

.flip-list-move {
  transition: transform 1s;
}
</style>