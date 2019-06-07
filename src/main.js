import Vuetify from 'vuetify';
import DefaultLayout from '~/layouts/default.vue';

import 'vuetify/dist/vuetify.min.css';


export default (Vue, { head }) => {
  Vue.use(Vuetify);
  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' });

  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Quicksand&display=swap' });
  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap&subset=japanese' });
  head.link.push({ rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.min.css' });
  head.link.push({ rel: 'stylesheet', href: '//unicons.iconscout.com/release/v0.0.4/css/unicons.css' });

  Vue.component('Layout', DefaultLayout);
};
