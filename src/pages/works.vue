<template>
  <Layout>

    <h1 class="mt-5">Works</h1>
    <v-divider />
    <p>{{ description }}</p>

    <v-container fluid grid-list-xl>
      <v-layout justify-space-around wrap>
        <v-flex v-for="work in works" :key="work.node.id">

          <h2><g-image :src="work.node.icon" class="icon" :alt="work.node.title" />{{ work.node.title }}</h2>

          <p class="link">
            <ul>
              <li><a :href="work.node.url" class="url"><i class='uil uil-link' /><span>{{ work.node.url }}</span></a></li>
              <li v-for="repo in work.node.repos" :key="repo"><a :href="repo" class="url"><i class='uil uil-diary' /><span>{{ repo }}</span></a></li>
            </ul>
          </p>

          <p v-html="work.node.excerpt" />

          <h3>開発</h3>
          <p>
            <a v-for="engineer in work.node.engineers" :key="engineer" :href="'/engineers/#' + engineer" class="engineer" :title="engineer">
              <v-avatar slot="activator" size="36px"><g-image :src="engineers[engineer].node.image" :alt="engineers[engineer].node.account" /></v-avatar>
            </a>
          </p>

          <p v-html="work.node.content" />

        </v-flex>
        <v-flex v-for="work in works" :key="'empty-' + work.node.id" class="empty"><div /></v-flex>
      </v-layout>
    </v-container>

  </Layout>
</template>


<page-query>
query Works {

  works: allWork {
    totalCount
    edges {
      node {
        id
        number
        slug
        title
        icon
        image
        url
        repos
        engineers
        excerpt
        content
      }
    }
  }

  engineers: allEngineer {
    totalCount
    edges {
      node {
        id
        account
        image
      }
    }
  }

}
</page-query>


<script>
export default {
  data: () => ({
    title: 'Works',
    description: ''
  }),
   computed: {
    works() { return this.$page ? this.$page.works.edges.sort((a, b) => a.node.number < b.node.number ? -1 : 1) : [] },
    engineers() { return this.$page ? this.$page.engineers.edges.reduce((obj, engineer) => ({...obj, [engineer.node.account]: engineer}), {}) : [] }
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
.icon {
  width: 64px;
}

.link {
  ul {
    padding-left: 0;
    li {
      list-style: none;
    }
  }
}

.engineer .v-avatar {
  margin-right: 8px;
}
</style>
