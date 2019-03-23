import Vuetify from 'vuetify';
import DefaultLayout from '~/layouts/default.vue';

import 'vuetify/dist/vuetify.min.css';


export default (Vue, { head }) => {
  Vue.use(Vuetify);
  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' });
  head.link.push({ rel: 'stylesheet', href: '//unicons.iconscout.com/release/v0.0.3/css/unicons.css' });

  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Quicksand' });
  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/earlyaccess/roundedmplus1c.css' });
  head.link.push({ rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.min.css' });

  Vue.component('Layout', DefaultLayout);
};
