<template>
  <Layout>

    <h1>Riotz Engineers</h1>
    <p>{{ description }}</p>

    <v-container fluid grid-list-xl>
      <v-layout justify-space-around wrap>
        <v-flex v-for="engineer in engineers" :key="engineer.node.id">
          <v-card dark width="300px">
            <v-img><g-image :src="engineer.node.image" /></v-img>
            <v-card-title class="headline">{{ engineer.node.account }}</v-card-title>
            <v-card-text class="text" v-html="engineer.node.excerpt" />
            <v-card-actions>
              <v-btn icon class="icon" :href="'https://twitter.com/' + engineer.node.account"><g-image src="~/assets/icon/twitter.svg" /></v-btn>
              <v-btn icon class="icon" :href="'https://github.com/' + engineer.node.account"><g-image src="~/assets/icon/github.svg" /></v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex v-for="engineer in engineers" :key="'empty-' + engineer.node.id" class="empty"><div /></v-flex>
      </v-layout>
    </v-container>

  </Layout>
</template>

<page-query>
query Engineers {
  engineers: allengineer {
    totalCount
    edges {
      node {
        id
        path
        number
        account
        image
        excerpt
        content
      }
    }
  }
}
</page-query>


<script>
export default {
  data: () => ({
    title: 'Engineers',
    description: ''
  }),
   computed: {
    engineers() { return this.$page ? this.$page.engineers.edges.sort((a, b) => a.node.number < b.node.number ? -1 : 1) : [] }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { key: 'description',          template: true, content: this.description },
        { key: 'twitter:title',        template: true, content: this.title },
        { key: 'twitter:description',  template: true, content: this.description },
        { key: 'og:title',             template: true, content: this.title },
        { key: 'og:description',       template: true, content: this.description },
        { key: 'itemprop:name',        template: true, content: this.title },
        { key: 'itemprop:description', template: true, content: this.description }
      ]
    }
  }
};
</script>


<style lang="scss" scoped>
.flex {
  flex-grow: 0;
  &.empty {
    height: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    div {
      width: 300px;
    }
  }
}

.v-card {
  .v-image img {
    width: 300px;
  }
  .headline {
    padding-bottom: 0;
  }
  .text {
    height: 240px;
    overflow: keyden;
  }
  .icon img {
    width: 36px;
  }
}
</style>
