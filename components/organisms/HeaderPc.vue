<template>
  <header>
    <div class="header-pc">
      <div class="header-pc-profile">
        <nuxt-link to="/" class="icon-link">
          <root-icon class="icon" src="/images/profile_menu.png" />
        </nuxt-link>
        <span class="name">Masayuki Tsuji</span>
        <sns-menu class="sns" />
      </div>
      <hr />
      <header-menu />
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
  flex-direction: column;
  align-items: center;
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
</style>
