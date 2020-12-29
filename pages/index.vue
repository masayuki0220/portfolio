<template>
  <portfolio title="About">
    <div class="s-about">
      <div class="profile">
        <div class="name-group">
          <div class="title">CTO/Web Engineer</div>
          <span class="name">Masayuki Tsuji</span>
        </div>
        <user-icon class="image" src="/images/profile_main.jpg" />
      </div>
      <div class="overview">
        <p>
          Webシステム構築〜開発、チームビルディング、事業相談をメインで活動中
        </p>
        <p>
          創業メンバーとしてユーザーヒアリング、MVP検証、UX、業務フロー可視化、情報整理を担当<br />
          単独でプロダクト開発より共に事業を成長させることが強み
        </p>
        <p>
          技術スタックはAWS / Nuxt.js / TypeScript / Ruby(Rails) /
          Python(FastAPI) / Docker
        </p>
        <p></p>
      </div>
      <div class="overview2">
        <p>
          仕事の相談は<nuxt-link to="/contact" class="link">こちら</nuxt-link
          >でお問い合わせ下さい
        </p>
      </div>
    </div>
  </portfolio>
</template>

<script lang="ts">
import Vue from 'vue'
import UserIcon from '@/components/atoms/UserIcon.vue'
import Portfolio from '@/components/templates/Portfolio.vue'

export default Vue.extend({
  components: {
    UserIcon,
    Portfolio,
  },
})
</script>

<style lang="scss" scoped>
.s-about {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  .title {
    font-size: 22px;
  }
  .profile {
    display: flex;
    flex-direction: row;
    .name-group {
      display: flex;
      flex-direction: column;
      align-self: center;
    }
    .name {
      font-size: 36px;
    }
    .image {
      margin-left: 30px;
    }
  }
  .overview {
    max-width: 70%;
  }
  .overview2 {
    .link {
      text-decoration: underline;
    }
  }
}
</style>
