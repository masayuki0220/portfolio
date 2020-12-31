const siteDomain = 'https://portfolio.irad.site'
const titleContent = '辻将幸(Masayuki Tsuji)のポートフォリオ'
const descriptionContent =
  'CTO、Webエンジニアとして活動している辻将幸(Masayuki Tsuji)のポートフォリオサイト。「アイラッド」の屋号を掲げフリーランス（個人事業主）として事業をエンジニアリングでサポートしています。'

export default {
  titleTemplate: `%s | ${titleContent}`,
  title: 'Home',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: descriptionContent,
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: titleContent,
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      hid: 'og:url',
      property: 'og:url',
      content: siteDomain,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: titleContent,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: descriptionContent,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `${siteDomain}/images/logo.jpg`,
    },
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: titleContent,
    },
  ],
}
