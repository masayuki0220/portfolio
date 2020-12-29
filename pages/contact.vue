<template>
  <portfolio title="Contact" icon="envelope">
    <div
      class="formrun-embed"
      data-formrun-form="@tu-kun-irad"
      data-formrun-redirect="true"
    ></div>
  </portfolio>
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from '@/components/templates/Portfolio.vue'

export default Vue.extend({
  components: {
    Portfolio,
  },
  head() {
    return {
      script: [{ src: 'https://sdk.form.run/js/v2/embed.js' }],
    }
  },
})
</script>

<style lang="scss" scoped>
.formrun-embed {
  width: 100%;
}
</style>
