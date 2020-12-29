<template>
  <img :src="src" class="root-icon" alt="masayuki tsuji's profile image" lazy />
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
@import '@/assets/scss/variables';
.root-icon {
  width: 160px;
  height: 180px;
}

@media (max-width: $break-point-sp) {
  .root-icon {
    width: 100px;
    height: 120px;
  }
}
</style>
