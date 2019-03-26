<template>
  <Layout>

    <h1 class="mt-5">Riotz Engineers</h1>
    <v-divider />
    <p>{{ description }}</p>

    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="engineer in engineers" :key="engineer.node.id" xs12 sm6 md4>
          <v-card :id="engineer.node.account" dark max-width="320">
            <g-image :src="engineer.node.image" class="engineer-avatar" />
            <v-card-title class="headline">
              <ruby>
                <rb>{{ engineer.node.account }}</rb>
                <rt v-if="engineer.node.ruby">{{ engineer.node.ruby }}</rt>
              </ruby>
            </v-card-title>
            <v-card-text class="text engineer-description" v-html="engineer.node.excerpt" />
            <v-card-actions>
              <v-btn icon class="icon ma-2" :href="'https://twitter.com/' + engineer.node.account"><img src="../assets/icon/twitter.svg" /></v-btn>
              <v-btn icon class="icon ma-2" :href="'https://github.com/' + engineer.node.account"><img src="../assets/icon/github.svg" /></v-btn>
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
        ruby
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
.headline {
  font-family: 'Quicksand', 'Rounded Mplus 1c' !important;
  font-feature-settings: 'palt' 1;
}

ruby {
  rt { display: inline; }
  rb + rt::before, rtc + rt::before { content: '（'; }
  rb ~ rt:last-child::after, rt + rb::before { content: '）'; }
}

.engineer-avatar {
  width: 100%;
}

.engineer-description {
  min-height: 280px;
}
</style>
