<template>
  <div class="sns-menu">
    <sns-icon
      href="https://twitter.com/tu_kun_irad"
      src="/images/sns/twitter.png"
    />
    <sns-icon
      href="https://facebook.com/tu.kun.0220"
      src="/images/sns/facebook.png"
    />
    <sns-icon href="https://qiita.com/tu-kun" src="/images/sns/qiita.png" />
    <sns-icon
      href="https://github.com/masayuki0220"
      src="/images/sns/github.png"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SnsIcon from '@/components/atoms/SnsIcon.vue'

export default Vue.extend({
  components: {
    SnsIcon,
  },
})
</script>

<style lang="scss" scoped></style>
