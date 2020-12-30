<template>
  <nav class="header-menu">
    <div class="header-menu-title">Menu</div>
    <ul class="header-menu-lists">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="header-menu-list"
        :class="{ selected: $route.path === menu.to }"
      >
        <header-menu-item class="item" :icon="menu.icon" :to="menu.to">{{
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
  width: 100%;
  &-title {
    padding: 5px 0;
    color: $color-white;
    background-color: $color-site;
    text-align: center;
  }
  .header-menu-lists {
    margin: unset;
    padding: unset;
    font-size: unset;
    .header-menu-list {
      list-style: none;
      border-bottom: 1px solid $color-grey;
      position: relative;
      &:hover {
        background-color: $color-site3;
      }
      &.selected {
        pointer-events: none;
        background-color: $color-site2;
      }
    }
  }
}

@media (max-width: $break-point-sp) {
  .header-menu {
    font-size: 20px;
  }
}
</style>
