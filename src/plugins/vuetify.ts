import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { VFileUpload } from "vuetify/labs/VFileUpload";

const vuetify = createVuetify({
  ssr: false,
  components: {
    VFileUpload,
    ...components,
  },
  directives,
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          primary: "#3E7E41",
        },
      },
    },
  },

  defaults: {
    VBtn: {
      color: "primary",
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetify);
});
