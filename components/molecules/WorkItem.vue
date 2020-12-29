<template>
  <div class="work-item" :class="{ reverse: reverse }">
    <img class="image" :src="image" alt="work image" lazy />
    <div class="content">
      <h2 class="title" v-text="title"></h2>
      <span class="overview" v-text="displayOverview"></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    overviews: {
      type: Array as PropType<String[]>,
      default: () => [],
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    displayOverview(): string {
      return this.overviews.join('\n')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.work-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 30px;
  .image {
    width: 50%;
    height: 280px;
    object-fit: cover;
    object-position: 0% 0%;
    border: 1px solid $color-grey;
  }
  .content {
    min-width: 50%;
    margin-left: 20px;
    white-space: pre-line;
    .title {
      margin-top: 0;
    }
  }
  &.reverse {
    .image {
      order: 2;
    }
    .content {
      order: 1;
      margin-left: unset;
    }
  }
}
</style>
