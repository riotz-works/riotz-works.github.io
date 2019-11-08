<template>
  <Layout>

    <v-container fill-height>
      <v-layout row wrap align-center justify-center>
        <v-flex>
          <h1 class="top-title text-xs-center">Riotz.works</h1>
          <p class="top-body top-body text-xs-center">Hello world !! We are Riotz.works, a cheerful engineering team.</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container id="philosophy" class="philosophy card inverse">
      <section>
        <h2><i class='uil uil-map-marker-info' />About Riotz.works</h2>
        <div class="contents">
          <strong>Riotz.works</strong><small> (ライオッツ ワークス) </small>は IT を 中心とした、エンジニアリング集団です。<br />
          クラウド で サーバーレス な サービス や JAMStack な ウェブサイト の 構築を手がけ、ハッカソン で 腕を競い合い、そして それらで得た知見 を カンファレンス や 勉強会、ブログ、Twitter などで発信しています。<br />
        </div>
      </section>
    </v-container>

    <v-container id="activities" class="activities card">
      <section>
        <h2><i class='uil uil-chat-bubble-user' />Activities</h2>
        <div class="contents">
          <table>
            <tr><td>2019.</td><td>11.</td><td>25</td> <td><g-image src="~/assets/logo/engineers-lt.png"        alt="Engineers LT アイコン" />                    <a href="https://engineers.connpass.com/event/154495/">登壇の技術を勉強する会 #3</a></td>       <td colspan="2">Upcoming events</td>                                         <td></td> </tr>
            <tr><td>2019.</td><td>11.</td><td>02</td> <td><g-image src="~/assets/logo/wordcamp-tokyo-2019.png" alt="WordCamp Tokyo アイコン" />                  <a href="https://2019.tokyo.wordcamp.org/">WordCamp Tokyo 2019</a></td>                         <td><a href="/slides/2019-wordcamp-tokyo">発表資料</a></td>                  <td></td> </tr>
            <tr><td>2019.</td><td>10.</td><td>22</td> <td><g-image src="~/assets/logo/closed.png"              alt="closed-study-icon" />                        <a>サーバーレス勉強会 [CLOSED]</a></td>                                                         <td colspan="2">[資料の公開準備中]</td>                                      <td></td> </tr>
            <tr><td>2019.</td><td> 9.</td><td>20</td> <td><g-image src="~/assets/logo/closed.png"              alt="closed-study-icon" />                        <a>New Biz アイデアソン [CLOSED]</a></td>                                                       <td colspan="2">[資料の公開準備中]</td>                                      <td></td> </tr>
            <tr><td>2019.</td><td> 8.</td><td>29</td> <td><g-image src="~/assets/logo/vuetify-meetup.png"      alt="Vuetify Meetup アイコン" />                  <a href="https://vuetify-meetup.connpass.com/event/141677/">Vuetify Meetup #1</a></td>          <td><a href="/slides/2019-vuetify-meetup-1">発表資料</a></td>                <td></td> </tr>
            <tr><td>2019.</td><td> 8.</td><td> 7</td> <td><g-image src="~/assets/logo/shifter-jp.png"          alt="Shiftup JP_Getshifter Vol3 アイコン" />      <a href="https://eventregist.com/e/0if9nERXstQg">Shiftup! JP_Getshifter Vol5</a></td>           <td><a href="/slides/2019-shiftup-jp_getshifter-vol5">発表資料</a></td>      <td></td> </tr>
            <tr><td>2019.</td><td> 7.</td><td>23</td> <td><g-image src="~/assets/logo/cloudnative-days.png"    alt="CloudNative Days Tokyo 2019 アイコン" />     <a href="https://cloudnativedays.jp/cndt2019/">CloudNative Days Tokyo 2019</a></td>             <td><a href="/slides/2019-cloudnative-days">発表資料</a></td>                <td></td> </tr>
            <tr><td>2019.</td><td> 7.</td><td>19</td> <td><g-image src="~/assets/image/spacer.png"             alt="no-icon" />                                  <a href="https://connpass.com/event/135463/">勤怠を自動化する技術 LT Night </a></td>            <td><a href="/slides/2019-attendance-tech-lt">発表資料</a></td>              <td></td> </tr>
            <tr><td>2019.</td><td> 6.</td><td> 1</td> <td><g-image src="~/assets/logo/js-matsuri.png"          alt="初夏のJavaScript祭 アイコン" />              <a href="https://javascript-fes.doorkeeper.jp/events/90894">初夏のJavaScript祭</a></td>         <td><a href="/slides/2019-javascript-matsuri">発表資料</a></td>              <td></td> </tr>
            <tr><td>2019.</td><td> 5.</td><td>27</td> <td><g-image src="~/assets/logo/serverlesstokyo12.jpg"   alt="Serverless Meetup Tokyo 12 アイコン" />      <a href="https://serverless.connpass.com/event/130509/">Serverless Meetup Tokyo #12</a></td>    <td><a href="/slides/2019-serverless-meetup-tokyo12">発表資料</a></td>       <td></td> </tr>
            <tr><td>2019.</td><td> 5.</td><td>18</td> <td><g-image src="~/assets/logo/spajam.png"              alt="SPAJAM 2019 東京A予選 アイコン" />           <a href="https://spajam.jp/2019/entry/tokyo-a/">SPAJAM 2019 東京A予選</a></td>                  <td><a href="/slides/2019-spajam-qualification">発表資料</a></td>            <td></td> </tr>
            <tr><td>2019.</td><td> 4.</td><td> 3</td> <td><g-image src="~/assets/logo/shifter-jp.png"          alt="Shiftup JP_Getshifter Vol3 アイコン" />      <a href="https://eventregist.com/e/xiza3ieCWYFc">Shiftup! JP_Getshifter Vol3</a></td>           <td><a href="/slides/2019-shiftup-jp_getshifter-vol3">発表資料</a></td>      <td></td> </tr>
            <tr><td>2019.</td><td> 3.</td><td> 9</td> <td><g-image src="~/assets/logo/cto-samurai.png"         alt="CTOチームと競うハッカソン アイコン" />       <a href="https://cto-samurai.connpass.com/event/120473/">CTOチームと競うハッカソン</a></td>     <td><a href="/slides/2019-cto-vs-hackers-hackathon">発表資料</a></td>        <td></td> </tr>
            <tr><td>2019.</td><td> 2.</td><td>23</td> <td><g-image src="~/assets/logo/jaws-days-2019.png"      alt="JAWS DAYS 2019 アイコン" />                  <a href="https://jawsdays2019.jaws-ug.jp/">JAWS DAYS 2019</a></td>                              <td><a href="/slides/2019-jaws-days">発表資料</a></td>                       <td></td> </tr>
            <tr><td>2019.</td><td> 2.</td><td>15</td> <td><g-image src="~/assets/logo/devsumi.png"             alt="Developers Summit 2019 アイコン" />          <a href="https://event.shoeisha.jp/devsumi/20190214/">Developers Summit 2019</a></td>           <td><a href="/slides/2019-devsumi">発表資料</a></td>                         <td></td> </tr>
            <tr><td>2018.</td><td>11.</td><td>23</td> <td><g-image src="~/assets/logo/nodefest.png"            alt="東京Node学園祭2018 アイコン" />              <a href="https://nodefest.jp/2018/">東京Node学園祭2018</a></td>                                 <td><a href="/slides/2018-nodefest">発表資料</a></td>                        <td><a href="https://youtu.be/pPerXeXXR9w">ビデオ</a></td> </tr>
            <tr><td>2018.</td><td>11.</td><td>10</td> <td><g-image src="~/assets/logo/vuefes.png"              alt="Vue Fes Japan 2018 Reject アイコン" />       <a href="https://vuejs-meetup.connpass.com/event/97557/">Vue Fes Japan 2018 Reject Con</a></td> <td><a href="/slides/2018-vue-fes-reject-con">発表資料</a></td>              <td></td> </tr>
            <tr><td>2018.</td><td> 9.</td><td>29</td> <td><g-image src="~/assets/logo/serverlessconf.png"      alt="Serverlessconf Tokyo 2018 アイコン" />       <a href="http://2018.serverlessconf.tokyo/">Serverlessconf Tokyo 2018</a></td>                  <td><a href="/slides/2018-serverless-conf">発表資料</a></td>                 <td></td> </tr>
            <tr><td>2018.</td><td> 6.</td><td>16</td> <td><g-image src="~/assets/logo/spajam.png"              alt="SPAJAM 2018 東京D予選 アイコン" />           <a href="https://spajam.jp/2018/entry/tokyo-d/">SPAJAM 2018 東京D予選</a></td>                  <td><a href="/slides/2018-spajam-qualification">発表資料</a></td>            <td><a href="/rap-tap-app/">作品</a></td> </tr>
            <tr><td>2018.</td><td> 5.</td><td>26</td> <td><g-image src="~/assets/logo/jjug.png"                alt="JJUG CCC 2018 Spring アイコン" />            <a href="http://www.java-users.jp/ccc2018spring/">JJUG CCC 2018 Spring</a></td>                 <td><a href="/slides/2018-jjug-ccc-spring">発表資料</a></td>                 <td></td> </tr>
            <tr><td>2018.</td><td> 2.</td><td>28</td> <td><g-image src="~/assets/logo/closed.png"              alt="closed-study-icon" />                        <a>Agile ＆ DevOps 勉強会 [CLOSED]</a></td>                                                     <td><a href="/slides/2018-agile-and-devopts-study">発表資料</a></td>         <td></td> </tr>
            <tr><td>2017.</td><td>11.</td><td> 3</td> <td><g-image src="~/assets/logo/serverlessconf.png"      alt="Serverlessconf Tokyo 2017 アイコン" />       <a href="http://2017.serverlessconf.tokyo/">Serverlessconf Tokyo 2017</a></td>                  <td><a href="/slides/2017-serverless-conf">発表資料</a></td>                 <td></td> </tr>
          </table>
        </div>
      </section>
    </v-container>

    <v-container class="callout" />

    <v-container id="websites" class="websites card inverse">
      <section>
        <h2><i class='uil uil-globe' />Websites</h2>
        <div class="contents">

          <section>
            <a href="/articles">
              <h3>Articles</h3>
            </a>
            <p>技術の紹介、ノウハウ、Tips や イベントでの発表、参加などの情報発信。</p>
          </section>

          <section>
            <a href="/slides">
              <h3>Slides</h3>
            </a>
            <p>イベントでの発表スライドや公開資料。</p>
          </section>

          <section>
            <a href="/works">
              <h3>Works</h3>
            </a>
            <p>制作作品の紹介。</p>
          </section>

          <section>
            <a href="/engineers">
              <h3>Engineers</h3>
            </a>
            <p>Riotz Engineers の 紹介。</p>
          </section>

          <section>
            <a href="https://github.com/riotz-works">
              <h3>GitHub</h3>
            </a>
            <p>ハッカソン制作作品やサンプル実装などのソースコード。</p>
          </section>

          <section>
            <a href="https://twitter.com/riotz_works">
              <h3>Twitter</h3>
            </a>
            <p>講演などの活動予定や資料の公開などを報告。</p>
          </section>

        </div>
      </section>
    </v-container>

    <v-container id="contact" class="contact card">
      <section>
        <h2><i class='uil uil-smile' />Contact</h2>
        <div class="contents">
          <i class='uil uil-twitter' /> <a href="https://twitter.com/lulzneko">@lulzneko</a> <span class="note"> (<a href="https://twitter.com/riotz_works">@riotz_works</a> is for public relations)</span> <br />
          <i class='uil uil-envelope' /> <a href="mailto:contact@riotz.works">contact@riotz.works</a> <br />
        </div>
      </section>
    </v-container>

  </Layout>
</template>


<script>
export default {
  metaInfo() {
    return {
      meta: [
        { key: 'description',          template: true },
        { key: 'twitter:title',        template: true },
        { key: 'twitter:description',  template: true },
        { key: 'og:title',             template: true },
        { key: 'og:description',       template: true },
        { key: 'itemprop:name',        template: true },
        { key: 'itemprop:description', template: true }
      ]
    }
  }
};
</script>


<style lang="scss" scoped>
$color-base: snow;
$color-primary: #003366;

.top-title {
  font-size: 2.8em;
}

.top-body {
  font-size: 1.2em;
}

.card {
  background-color: $color-base;
  color: $color-primary;

  font-size: 1.2em;
  margin: 0;
  max-width: 100%;
  padding: 50px 18px;

  section {
    margin: 0 auto;
    max-width: 800px;
  }

  h2 {
    font-size: 1.6em;
    border-bottom: inset 2px;
    border-color: $color-primary;
    line-height: .9;
    margin-bottom: 16px;
    padding-left: -100px;
    width: 100%;
    .uil {
      font-size: inherit;
      margin-left: -12px;
    }
  }

  .contents {
    padding: 0 12px;
  }

  &.inverse {
    background-color: $color-primary;
    color: $color-base;
    h2 {
      border-color: $color-base;
    }
    a {
      color: #c8c8c8 !important;
    }
  }
}

.philosophy {
  font-size: 1.4em;
  margin: 18px 0 0 0;
}

.activities {
  td {
    height: 28px;
    vertical-align: bottom;
    &:nth-child(-n+3) {
      text-align: right;
    }
    &:nth-child(4) {
      padding-bottom: 2px;
    }
    &:nth-child(n+4) {
      padding-left: 16px;
    }
  }

  img {
    width: 18px;
    margin-right: 4px;
  }
}

.contact {
  .contents {
    font-size: 24px;
  }
  .note {
    font-size: medium;
  }
}

.callout {
  height: 240px;
}
</style>
