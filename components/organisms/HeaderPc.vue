<template>
  <header>
    <div class="header-pc">
      <div class="logo-wrapper">
        <nuxt-link to="/" class="icon-link">
          <root-icon class="icon" src="/images/logo.jpg" />
        </nuxt-link>
      </div>
      <header-menu class="menu" />
      <sns-menu class="sns" />
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
.header-pc {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  .logo-wrapper {
    padding: 20px;
    .icon-link {
      &:hover {
        opacity: 1;
      }
    }
  }
  .menu {
    margin-top: 10px;
    margin-bottom: auto;
  }
  .sns {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
