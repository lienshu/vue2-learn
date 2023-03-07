<template>
  <div>
    <!-- <div class="line1"></div>
    <div style="position: relative">
      <div class="motion-line1"></div>
    </div>
    <div class="line2"></div>
    <div style="position: relative">
      <div class="motion-line2"></div>
    </div>
    <div class="line3"></div>
    <div style="position: relative">
      <div class="motion-line3"></div>
    </div> -->
    <default-slot>
      sdjskdsjkdsjk
      <div>32323232</div>
    </default-slot>

    <named-slot>
      <template v-slot:header1>
        <h1>Here might be a page title</h1>
      </template>
      <div>eewwew</div>
      <!-- 缩写 -->
      <template slot="header">
        <!-- <template #header="{ str }"> -->
        <h1>Here might be a page title</h1>
        <!-- {{ str }} -->
      </template>
      <!-- <p>A paragraph for the main content.</p>
      <p>And another one.</p> -->
      <template is="otherSlotProps">
        slotProps is NOT available here
      </template>
      <!-- <template #other="{ otherSlotProps }">
        slotProps is NOT available here
      </template> -->

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </named-slot>

    <scope-slot v-slot="{ user = { firstName: 'Guest' } }">
      {{ user.firstName }}
    </scope-slot>

    <scope-slot>
      <template v-slot="{ user = { firstName: 'li', lastName: 'si' } }">
        firstName:{{ user.firstName }}
        <br>
        lastName:{{ user.lastName }}
      </template>
    </scope-slot>

    <dynamic-slot>
      <template v-slot:[dynamicName]>
        This is me
      </template>
    </dynamic-slot>

    <el-button @click="change">切换</el-button>

    <to-do-list>
      <template #todo="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template>
    </to-do-list>
    <el-button @click="$router.push('/router-replace')">replace</el-button>
    git stash的使用
  </div>
</template>

<script>
import DefaultSlot from './components/defaultslot.vue'
import NamedSlot from './components/namedslot.vue'
import ScopeSlot from './components/scopeslot.vue';
import DynamicSlot from './components/dynamicslot.vue'
import ToDoList from './components/common.vue'

export default {
  name: 'Vue2AppIndex',

  components: {
    DefaultSlot,
    NamedSlot,
    ScopeSlot,
    DynamicSlot,
    ToDoList
  },

  data() {
    return {
      dynamicName: 'footer',
    };
  },

  mounted() {
    console.log('页面首次进入')
  },

  methods: {
    change() {
      this.dynamicName = 'header'
    }
  },
};
</script>

<style lang="scss" scoped>
.line1 {
  width: 235px;
  height: 65px;
  background: url(@/assets/img/btn1.png) no-repeat center;
  background-color: yellow;
}

.motion-line1 {
  position: absolute;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #000;
  bottom: 0px;
  box-shadow: 0 0 10px #f00;
  animation: lineMove1 10s ease forwards;
}

@keyframes lineMove1 {
  0% {}

  10% {
    transform: translate(14px, 0px);
  }

  25% {
    transform: translate(14px, -61px);
  }

  50% {
    transform: translate(84px, -61px);
  }

  75% {
    transform: translate(84px, 0px);
  }

  100% {
    transform: translate(230px, 0px);
  }
}

.line2 {
  width: 235px;
  height: 65px;
  background: url(@/assets/img/btn2.png) no-repeat center;
  background-color: pink;
}

.motion-line2 {
  position: absolute;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #000;
  bottom: 0px;
  box-shadow: 0 0 10px #f00;
  animation: lineMove2 10s ease forwards;
}

@keyframes lineMove2 {
  0% {}

  10% {
    transform: translate(80px, 0px);
  }

  25% {
    transform: translate(80px, -61px);
  }

  50% {
    transform: translate(150px, -61px);
  }

  75% {
    transform: translate(150px, 0px);
  }

  100% {
    transform: translate(220px, 0px);
  }
}

.line3 {
  width: 235px;
  height: 65px;
  background: url(@/assets/img/btn3.png) no-repeat center;
  background-color: skyblue;
}

.motion-line3 {
  position: absolute;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #000;
  bottom: 0px;
  box-shadow: 0 0 10px #f00;
  animation: lineMove3 10s linear forwards;
}

@keyframes lineMove3 {
  0% {}

  10% {
    transform: translate(146px, 0px);
  }

  25% {
    transform: translate(146px, -61px);
  }

  50% {
    transform: translate(216px, -61px);
  }

  75% {
    transform: translate(216px, 0px);
  }

  100% {
    transform: translate(230px, 0px);
  }
}
</style>