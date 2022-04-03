import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import { createVuetify } from 'vuetify/lib'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'
Vue.use(Vuetify);

export default createVuetify({
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
        mdi,
      }
    },
  })