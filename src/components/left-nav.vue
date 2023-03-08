<template>
  <div class="custom-nav fixed top-0 left-0">
    <el-menu default-active="2" class="h-screen overflow-auto pb-24" @select="handleSwitchNav" :unique-opened="true"
      background-color="#1a334a" router>
      <el-submenu v-for="(item, index) in menus" :key="item.name" :index="index + ''">
        <template #title>
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="childItem in item.children" :key="childItem.name" :index="childItem.name">{{ childItem.name
        }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnLeftNav',

  data() {
    return {
      menus: [
        {
          name: "主页",
          icon: 'el-icon-s-home',
          children: [
            {
              name: 'sync-emit',
              path: '/sync-emit'
            },
            {
              name: 'ref-v-bind-sync',
              path: '/ref-v-bind-sync'
            },
            {
              name: 'is-component',
              path: '/is-component'
            },
            {
              name: 'move-slot',
              path: '/move-slot'
            },
            {
              name: 'slot-index',
              path: '/slot-index'
            },
            {
              name: 'mixin',
              path: '/mixin'
            },
            {
              name: 'filter',
              path: '/filter'
            },
            {
              name: 'provide-inject',
              path: '/provide-inject'
            },
            {
              name: 'name-router',
              path: '/name-router'
            },
          ]
        },
        {
          name: "其他",
          icon: 'el-icon-menu',
          children: [
            {
              name: 'ref',
              path: '/ref'
            },
            {
              name: 'emit',
              path: '/other/emit'
            },
            {
              name: 'inline-template',
              path: '/other/inline-template'
            },
            {
              name: 'history-listeners',
              path: '/other/history-listeners'
            },
            {
              name: 'transition',
              path: '/other/transition'
            },
            {
              name: 'directive',
              path: '/other/directive'
            },
            {
              name: 'todo-list',
              path: '/other/todo-list'
            },
            {
              name: 'css',
              path: '/other/css'
            },
            {
              name: 'attrs',
              path: '/other/attrs'
            },
            {
              name: '$on',
              path: '/other/$on'
            },
          ]
        }
      ]
    };
  },

  mounted() {

  },

  methods: {
    handleSwitchNav(nav) {
      console.log(nav, 'nav')
    }
  },
};
</script>

<style lang="scss" scoped>
.custom-nav {
  width: 300px;
}

::v-deep {
  .el-menu {
    font-family: PingFangSC-Semibold;

    .el-submenu {
      &__title {
        font-weight: bold;
        display: flex;
        color: #fff !important;
        align-items: center;
      }


      &__icon-arrow {
        font-weight: bold;
        font-size: 16px;
        color: #fff;
        margin-top: -9px;
      }
    }

    &-item {
      color: #fff;
    }
  }
}
</style>