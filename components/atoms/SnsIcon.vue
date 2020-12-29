<template>
  <a :href="href" class="sns-icon-link" target="_blank">
    <img :src="src" class="sns-icon" alt="sns icon" lazy />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.sns-icon-link {
  .sns-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
}
</style>
