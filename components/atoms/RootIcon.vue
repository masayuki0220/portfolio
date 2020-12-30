<template>
  <img :src="src" class="root-icon" alt="irad" lazy />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.root-icon {
  width: 100%;
  height: 100%;
}
</style>
