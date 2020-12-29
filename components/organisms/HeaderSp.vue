<template>
  <header>
    <div class="header-sp">
      <input id="nav" type="checkbox" style="display: none" />
      <label class="bars-wrapper" for="nav">
        <v-icon icon="bars" />
      </label>
      <label id="nav-close-icon" for="nav">
        <v-icon icon="times" />
      </label>
      <span class="title">Masayuki Tsuji's Portfolio</span>
      <label id="nav-close" for="nav"></label>
      <div id="content">
        <div class="content-wrapper">
          <nuxt-link to="/" class="icon-link">
            <root-icon class="icon" src="/images/profile_menu.png" />
          </nuxt-link>
          <span class="name">Masayuki Tsuji</span>
          <header-menu class="menu" />
          <sns-menu class="sns" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import RootIcon from '@/components//atoms/RootIcon.vue'
import HeaderMenu from '@/components/organisms/HeaderMenu.vue'
import SnsMenu from '@/components//organisms/SnsMenu.vue'

export default Vue.extend({
  components: { RootIcon, HeaderMenu, SnsMenu },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.header-sp {
  display: flex;
  height: 100%;
  align-items: center;
  .bars-wrapper {
    font-size: 18px;
    margin-right: auto;
    margin-left: 15px;
  }
  .title {
    font-size: 18px;
    text-align: center;
    margin-right: auto;
  }
  #content {
    width: 80%;
    height: 100vh;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    border: 1px solid $color-grey;
    z-index: 100;
    .content-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-link {
        .icon {
          margin-top: 10px;
        }
      }
      .menu {
        margin-top: 10px;
        margin-bottom: auto;
      }
      .sns {
        margin-bottom: 10px;
      }
    }
  }
  #nav-close {
    width: 100%;
    height: 100vh;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    overflow: none;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 99;
  }
  #nav-close-icon {
    display: none;
    font-size: 22px;
    position: fixed;
    top: 0;
    left: 70%;
    z-index: 101;
    margin-top: 10px;
  }
  #nav:checked ~ #content {
    display: block;
  }
  #nav:checked ~ #nav-close {
    display: block;
  }
  #nav:checked ~ #nav-close-icon {
    display: inline;
  }
}
</style>
