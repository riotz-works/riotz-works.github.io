<template>

  <v-footer app height="18px" class="footer" style="background-color: rgba(0, 0, 0, 0); min-height: 0;">
    <v-spacer />
    <small>© Since {{ inceptionYear }} <g-link to="/">{{ displayName }}</g-link>.</small>
  </v-footer>

</template>


<script>
import Vue from 'vue';
import { displayName, inceptionYear } from '../../package.json';

export default Vue.extend({
  props: {
    displayName: String,
    inceptionYear: Number
  }
});
</script>
