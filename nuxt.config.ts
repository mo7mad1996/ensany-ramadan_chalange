import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // main directory
  srcDir: "src/",

  // favicon
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // custom components prefixes
  components: [
    "~/components",
    { path: "~/modules/home/components", prefix: "Home" },
  ],

  // main style & tailwid config
  css: ["./src/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "./src/router/index",
    "@nuxtjs/i18n",
  ],

  // localization
  i18n: {
    locales: [
      {
        code: "en",
        language: "en-US",
      },
      {
        code: "ar",
        language: "ar",
      },
    ],
    defaultLocale: "en", // Resolve absolute path
    vueI18n: "./src/helpers/i18n.config.ts",
  },
});
