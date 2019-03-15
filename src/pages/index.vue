<template>
  <Layout>
    <v-container fill-height>
      <v-layout row wrap align-center justify-center>
        <v-flex>
          <h1 class="top-title text-xs-center">Riotz.works</h1>
          <p class="top-subtitle text-xs-center">ライオッツ・ワークス</p>
          <p class="top-body top-body text-xs-center">We are Riotz.works, a cheerful engineering team.</p>
        </v-flex>
      </v-layout>
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


<style scoped>

.top-title {
  font-size: 2.8em;
}

.top-subtitle {
  font-size: 1.2em;
}

.top-body {
  font-size: 1.2em;
}

</style>
