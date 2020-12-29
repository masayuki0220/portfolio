<template>
  <div class="portfolio">
    <header class="portfolio-header is-pc">
      <div class="portfolio-header-profile">
        <nuxt-link to="/" class="icon-link">
          <root-icon class="icon" src="/images/profile_menu.png" />
        </nuxt-link>
        <span class="name">Masayuki Tsuji</span>
        <sns-menu class="sns" />
      </div>
      <hr />
      <header-menu />
    </header>
    <div class="portfolio-content">
      <div class="title-wrapper">
        <v-icon :icon="icon" class="icon fa-fw" />
        <h1 class="title">{{ title }}</h1>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RootIcon from '@/components//atoms/RootIcon.vue'
import HeaderMenu from '@/components/organisms/HeaderMenu.vue'
import SnsMenu from '@/components//organisms/SnsMenu.vue'

export default Vue.extend({
  components: { RootIcon, HeaderMenu, SnsMenu },
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
$header-width: 250px;
$content-padding: 20px;
.portfolio {
  width: 100%;
  min-height: 100%;
  position: relative;
  &-header {
    width: $header-width;
    min-height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    background-color: $color-grey2;
    hr {
      width: 80%;
    }
    &-profile {
      display: flex;
      flex-direction: column;
      padding: 20px;
      .icon-link {
        &:hover {
          opacity: 1;
        }
      }
      .name {
        text-align: center;
      }
      .sns {
        align-self: center;
        margin-top: 5px;
      }
    }
  }
  &-content {
    position: absolute;
    width: calc(100% - #{$header-width} - (#{$content-padding} * 2));
    top: 0;
    left: $header-width;
    height: auto;
    min-height: 100vh;
    background-color: $color-white;
    padding: 0 $content-padding;
    .title-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon {
        font-size: 28px;
        margin-right: 5px;
      }
    }
  }
}

@media (max-width: $break-point-sp) {
  .portfolio {
    &-content {
      width: 100%;
      top: 0;
      left: 0;
      padding: 0;
      .title-wrapper {
        font-size: 0.8rem;
        margin-left: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
