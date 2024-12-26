import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  srcDir: "src/",

  components: [
    "~/components",
    { path: "~/modules/home/components", prefix: "Home" },
  ],

  build: {
    transpile: ["vuetify"],
  },

  css: ["./src/assets/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  plugins: ["~/plugins/i18n.ts"],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "./src/router/index",
  ],

  alias: {
    "@": "/<absolute-path-to-your-project>",
  },

  vite: {
    resolve: {
      alias: {
        "@": "/<absolute-path-to-your-project>",
      },
    },
  },
});
