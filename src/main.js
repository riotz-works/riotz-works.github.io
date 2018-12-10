import Vuetify from 'vuetify';
import DefaultLayout from '~/layouts/default.vue';

import 'vuetify/dist/vuetify.min.css';


export default (Vue, { head }) => {
  Vue.use(Vuetify);
  head.link.push({ rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' });

  Vue.component('Layout', DefaultLayout);
};
