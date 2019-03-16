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
        <h2>About Riotz.works</h2>
        <div class="contents">
          <strong>Riotz.works</strong><small> (ライオッツ ワークス) </small>は IT を 中心とした、エンジニアリング集団です。<br />
          クラウド で サーバーレス な サービス や JAMStack な ウェブサイト の 構築を手がけ、ハッカソン で 腕を競い合い、そして それらで得た知見 を カンファレンス や 勉強会、ブログ、Twitter などで発信しています。<br />
        </div>
      </section>
    </v-container>

    <v-container id="activities" class="activities card">
      <section>
        <h2>Activities</h2>
        <div class="contents">
          <table>
            <tr><td>2019.</td><td> 3.</td><td> 9</td> <td><a href="https://cto-samurai.connpass.com/event/120473/">CTOチームと競うハッカソン</a></td>     <td></td>               <td></td> </tr>
            <tr><td>2019.</td><td> 2.</td><td>23</td> <td><a href="https://jawsdays2019.jaws-ug.jp/">JAWS DAYS 2019</a></td>                              <td><a href="/slides/?2019-jaws-days">スライド</a></td>               <td></td> </tr>
            <tr><td>2019.</td><td> 2.</td><td>15</td> <td><a href="https://event.shoeisha.jp/devsumi/20190214/">Developers Summit 2019</a></td>           <td><a href="/slides/?2019-devsumi">スライド</a></td>                 <td></td> </tr>
            <tr><td>2018.</td><td>11.</td><td>23</td> <td><a href="https://nodefest.jp/2018/">東京Node学園祭2018</a></td>                                 <td><a href="/slides/?2018-nodefest">スライド</a></td>                <td></td> </tr>
            <tr><td>2018.</td><td>11.</td><td>10</td> <td><a href="https://vuejs-meetup.connpass.com/event/97557/">Vue Fes Japan 2018 Reject Con</a></td> <td><a href="/slides/?2018-vue-fes-reject-con">スライド</a></td>      <td></td> </tr>
            <tr><td>2018.</td><td> 9.</td><td>29</td> <td><a href="http://2018.serverlessconf.tokyo/">Serverlessconf Tokyo 2018</a></td>                  <td><a href="/slides/?2018-serverless-conf">スライド</a></td>         <td></td> </tr>
            <tr><td>2018.</td><td> 6.</td><td>16</td> <td><a href="https://spajam.jp/2018/entry/tokyo-d/">SPAJAM 2018 東京D予選</a></td>                  <td><a href="/slides/?2018-spajam-qualification">スライド</a></td>    <td></td> </tr>
            <tr><td>2018.</td><td> 5.</td><td>26</td> <td><a href="http://www.java-users.jp/ccc2018spring/">JJUG CCC 2018 Spring</a></td>                 <td><a href="/slides/?2018-jjug-ccc-spring">スライド</a></td>         <td><a href="/rap-tap-app/">作品</a></td> </tr>
            <tr><td>2018.</td><td> 2.</td><td>28</td> <td>Agile ＆ DevOps 勉強会 [CLOSED]</td>                                                            <td><a href="/slides/?2018-agile-and-devopts-study">スライド</a></td> <td></td> </tr>
            <tr><td>2017.</td><td>11.</td><td> 3</td> <td><a href="http://2017.serverlessconf.tokyo/">Serverlessconf Tokyo 2017</a></td>                  <td><a href="/slides/?2017-serverless-conf">スライド</a></td>         <td></td> </tr>
          </table>
        </div>
      </section>
    </v-container>

    <v-container class="callout" />

    <v-container id="websites" class="websites card inverse">
      <section>
        <h2>Websites</h2>
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
        <h2>Contact</h2>
        <div class="contents">
          <ul>
            <li><svg class="twitter-icon" width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" xml:space="preserve" style="enable-background:new 0 0 612 612;"><g><path fill="rgb(29, 161, 242)" d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"></path></g></svg> <a href="https://twitter.com/lulzneko">@lulzneko</a> (<a href="https://twitter.com/riotz_works">@riotz_works</a>)</li>
            <li><i class="material-icons">mail_outline</i> <a href="mailto:contact@riotz.works">contact@riotz.works</a></li>
          </ul>
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
    padding-left: 4px;
    width: 100%;
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
      color: #c8c8c8;
    }
  }
}

.philosophy {
  font-size: 1.4em;
  margin: 18px 0 0 0;
}

.activities {
  td {
    &:nth-child(-n+3) {
      text-align: right;
    }
    &:nth-child(n+4) {
      padding-left: 16px;
    }
  }
}

.contact {
}

.callout {
  height: 240px;
}
</style>
