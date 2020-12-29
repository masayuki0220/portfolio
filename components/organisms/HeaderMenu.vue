<template>
  <nav class="header-menu">
    <div class="header-menu-title is-mobile">Menu</div>
    <ul class="header-menu-lists">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="header-menu-list"
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
  .header-menu-lists {
    margin: unset;
    padding: unset;
    font-size: unset;
    .header-menu-list {
      list-style: none;
      margin: 10px 0;
      &.selected {
        pointer-events: none;
      }
    }
  }
}

@media (max-width: $break-point-sp) {
  .header-menu {
    width: 100%;
    font-size: 20px;
    &-title {
      padding: 5px 0;
      color: $color-white;
      background-color: $color-blue;
      text-align: center;
    }
    .header-menu-lists {
      .header-menu-list {
        margin: unset;
        padding: 5px 0;
        border-bottom: 1px solid $color-grey;
      }
    }
  }
}
</style>
