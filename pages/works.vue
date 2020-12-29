<template>
  <portfolio title="Works">
    <div class="s-works">
      <work-item
        v-for="(work, index) in works"
        :key="index"
        class="s-works-item"
        :image="work.image"
        :title="work.title"
        :overviews="work.overviews"
        :reverse="index % 2 == 1"
      />
    </div>
  </portfolio>
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from '@/components/templates/Portfolio.vue'
import WorkItem from '@/components/molecules/WorkItem.vue'

type DataType = {
  works: {
    image: string
    title: string
    overviews: string[]
  }[]
}

export default Vue.extend({
  components: {
    Portfolio,
    WorkItem,
  },
  data(): DataType {
    return {
      works: [
        {
          image: '/images/works/work_yaorder.png',
          title: 'クラウド型提案書作成サービス「Yaorder」',
          overviews: [
            '<事業開発及びシステム開発を担当(CTO)>',
            '・仮説立て、ユーザーヒアリングの実施',
            '・フロント＆バックエンド＆インフラを1人でMVP構築',
            '・チームビルディングや1on1実施',
            '・業務フロー可視化及び開発機能のアイデア出し',
            '・Googleスライドライクの高度なスライド機能の実現',
          ],
        },
        {
          image: '/images/works/work_flato.png',
          title: '移住プラットフォーム「flato」',
          overviews: [
            '<事業開発一部及びシステム開発を担当(CTO)>',
            '・ペルソナ＆仮説立てを実施',
            '・開発チーム10名体制のスクラムマスター担当',
            '・技術選定及び事業での開発判断責任者としての振る舞い',
            '・チーム1人1人の強みとスキル成長性を見込んだチケット采配',
            '・ツール選定を含む開発体制の0→1の仕組み化',
            '・フロント&バックエンド&インフラ構築',
            '・UX/開発視点でのデザインフィードバック担当',
          ],
        },
        {
          image: '/images/works/work_hotel.png',
          title: '大手ホテルシステムのデータ統合',
          overviews: [
            '<バックエンドデータ統合案件担当>',
            '・予約システム、各種サービスからデータ連携バッチ設計〜開発',
            '・連携システム（7システム）とコミュニケーション',
            '・約200万アカウント規模のデータ連携処理の実装',
            '・Java11/Spring Bootを用いた堅牢なシステム開発',
          ],
        },
        {
          image: '/images/works/work_ec.png',
          title: '大手スポーツECサイト構築',
          overviews: [
            '<商品全般メイン担当>',
            '・クライアント用商品取り込みWebサービスの構築〜運用まで',
            '・会員や注文担当者と連携して商品情報を連携できるように',
            '・商品全般（検索含む）フロントコーディング',
            '・商品データ連携システム設計〜運用まで',
            '・SalesForce Commerce Cloudを用いた実装',
          ],
        },
        {
          image: '/images/works/work_android.jpg',
          title: '倉庫:在庫管理アプリ試作品アプリ開発',
          overviews: [
            '<Androidアプリの開発を担当>',
            '・OCRによるリース商品ラベルの読み取り実装',
            '・QRコード読み込みによる在庫管理システム反映実装',
            '・試作品アプリの要件＆開発を2週間で実現',
          ],
        },
        {
          image: '/images/works/work_other.jpg',
          title: 'その他業務システム構築等',
          overviews: [
            '<バックエンドデータ統合案件担当>',
            '・予約システム、各種サービスからデータ連携バッチ設計〜開発',
            '・連携システム（7システム）とコミュニケーション',
            '・約200万アカウント規模のデータ連携処理の実装',
            '・',
          ],
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.s-works {
  &-item {
    margin-bottom: 50px;
  }
}
</style>
