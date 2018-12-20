<template>
  <Layout>
    <h1>Hello, world !!</h1>
    <p>We are Riotz.works, a cheerful engineering team.</p>
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
