<template>
  <img :src="src" class="user-icon" alt="masayuki tsuji's profile image" lazy />
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
.user-icon {
  width: 160px;
  height: 160px;
  object-fit: cover;
  object-position: 100% 0%;
  border-radius: 50%;
}
</style>
