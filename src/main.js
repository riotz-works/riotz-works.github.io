import VueAnalytics from 'vue-analytics';
import Vuetify from 'vuetify';
import DefaultLayout from '~/layouts/default.vue';

import 'vuetify/dist/vuetify.min.css';


export default (Vue, { router, head }) => {
  Vue.use(VueAnalytics, { id: 'UA-109297390-1', router });

  Vue.use(Vuetify);
  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' });

  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Quicksand' });
  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/earlyaccess/roundedmplus1c.css' });
  head.link.push({ rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.min.css' });

  Vue.component('Layout', DefaultLayout);
};
