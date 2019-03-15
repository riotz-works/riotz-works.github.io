<template>
  <v-app>
    <div class="wrap-app">
      <div class="wrap-app-mask">

        <GlobalHeader />

        <v-content class="app-content">
          <slot />
        </v-content>

        <GlobalFooter :displayName="displayName" :inceptionYear="inceptionYear"/>

      </div>
    </div>
  </v-app>
</template>


<script>
import logo from '~/favicon.png';
import { applicationHost, description, displayName, inceptionYear } from '../../package.json';

import GlobalHeader from '~/components/GlobalHeader.vue';
import GlobalFooter from '~/components/GlobalFooter.vue';

export default {

  components: { GlobalHeader, GlobalFooter },

  data: () => ({
    displayName: displayName,
    inceptionYear: inceptionYear
  }),

  metaInfo() {
    return {
      titleTemplate: (chunk) => {
        return chunk !== displayName ? `${chunk} | ${displayName}` : displayName;
      },
      meta: [
        { key: 'description',          name: 'description',         template: chunk => chunk ? chunk : description },

        { key: 'twitter:card',         name: 'twitter:card',        content: 'summary' },
        { key: 'twitter:title',        name: 'twitter:title',       template: chunk => chunk ? `${chunk} | ${displayName}` : displayName },
        { key: 'twitter:description',  name: 'twitter:description', template: chunk => chunk ? chunk : description },
        { key: 'twitter:creator',      name: 'twitter:creator',     content: '@riotz_works' },
        { key: 'twitter:site',         name: 'twitter:site',        content: applicationHost },
        { key: 'twitter:image:src',    name: 'twitter:image:src',   content: `${applicationHost}${logo}` },

        { key: 'og:type',              property: 'og:type',         content: 'website' },
        { key: 'og:title',             property: 'og:title',        template: chunk => chunk ? `${chunk} | ${displayName}` : displayName },
        { key: 'og:description',       property: 'og:description',  template: chunk => chunk ? chunk : description },
        { key: 'og:site_name',         property: 'og:site_name',    content: displayName },
        { key: 'og:url',               property: 'og:url',          content: applicationHost },
        { key: 'og:image',             property: 'og:image',        content: `${applicationHost}${logo}` },

        { key: 'itemprop:name',        itemprop: 'name',            template: chunk => chunk ? `${chunk} | ${displayName}` : displayName },
        { key: 'itemprop:description', itemprop: 'description',     template: chunk => chunk ? chunk : description },
        { key: 'itemprop:image',       itemprop: 'image',           content: `${applicationHost}${logo}` }
      ]
    };
  }
}
</script>


<style lang="scss">
.application, .headline {
  font-family: 'Quicksand', 'Rounded Mplus 1c' !important;
  font-feature-settings: 'palt' 1;
}

.wrap-app {
  background-image: url('../assets/image/default-background.jpg');
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}

.wrap-app-mask {
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
}

.app-content {
  height: 100vh;
  overflow: auto;
}

.v-toolbar__content {
  margin: 0 8px 0 0;
}

.v-footer {
  padding: 0 24px;
}
</style>
