<template>
  <div class="header-menu-item">
    <nuxt-link :to="to" class="header-menu-item-block">
      <span>
        <v-icon :icon="icon" class="fa-fw" />
      </span>
      <span>
        <slot></slot>
      </span>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.header-menu-item {
  &-block {
    display: block;
    padding: 10px 5px;
  }
}
</style>
