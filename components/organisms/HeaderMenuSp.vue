<template>
  <nav class="header-menu">
    <ul>
      <li
        v-for="(menu, index) in menus"
        :key="index"
        :class="{ selected: $route.path === menu.to }"
      >
        <header-menu-item :icon="menu.icon" :to="menu.to">{{
          menu.text
        }}</header-menu-item>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderMenuItem from '@/components/molecules/HeaderMenuItem.vue'

type DataType = {
  menus: {
    text: string
    icon: string
    to: string
  }[]
}

export default Vue.extend({
  components: {
    HeaderMenuItem,
  },
  data(): DataType {
    return {
      menus: [
        { text: 'About', icon: 'user', to: '/' },
        { text: 'Works', icon: 'briefcase', to: '/works' },
        { text: 'Contact', icon: 'envelope', to: '/contact' },
      ],
    }
  },
  mounted() {
    console.log(this.$route.path)
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.header-menu {
  ul {
    margin: unset;
    padding: unset;
    font-size: unset;
    li {
      list-style: none;
      margin: 10px 0;
      &.selected {
        pointer-events: none;
      }
    }
  }
}
</style>
