import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  experimental: {
    sharedPrerenderData: true,
  },
  compatibilityDate: "2025-01-13",

  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  webpack: {
    extractCSS: true,
    optimization: {
      checkWasmTypes: true,
      chunkIds: "named",
      emitOnErrors: true,
      concatenateModules: true,
      avoidEntryIife: true,
      flagIncludedChunks: true,
      innerGraph: false,
      mangleExports: true,
      mangleWasmImports: true,
      mergeDuplicateChunks: false,
      minimize: true,
      moduleIds: "deterministic",
      nodeEnv: "production",
      portableRecords: true,
      providedExports: true,
      realContentHash: true,
      usedExports: true,
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },
  devtools: { enabled: false },
  // main directory
  srcDir: "src/",
  ssr: true,

  // favicon & fonts
  app: {
    baseURL: "/",
    pageTransition: false, // Completely disables transitions
    layoutTransition: false,

    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      script: [
        {
          type: "text/javascript",
          innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PWKGS9VZ');
          `,
          defer: true,
        },
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWKGS9VZ" height="0" width="0" style="display: none; visibility: hidden" />`,
        },
      ],
      link: [
        { rel: "icon", type: "image/ico", href: "/_nuxt/assets/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap",
        },
      ],
    },
  },

  // custom components prefixes for auto importing
  components: [
    "~/components",
    { path: "~/modules/home/components", prefix: "Home" },
    { path: "~/modules/about/components", prefix: "About" },
    { path: "~/modules/contact/components", prefix: "Contact" },
    { path: "~/modules/campaigns/components", prefix: "Campaigns" },
    { path: "~/modules/auth/components", prefix: "Auth" },
    { path: "~/modules/blogs/components", prefix: "Blog" },
    { path: "~/modules/stories/components", prefix: "story" },
    { path: "~/modules/charity/components", prefix: "Charity" },
    { path: "~/modules/donor/components", prefix: "Donor" },
    { path: "~/modules/videos/components", prefix: "Video" },
  ],

  // main style & tailwind config
  css: [
    "@mdi/font/css/materialdesignicons.css", // Import Material Design Icons
    "vuetify/styles",
    "./src/assets/main.min.css",
    "./src/modules/home/style/banner.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    optimizeDeps: {
      include: ["vuetify"],
    },
    build: {
      chunkSizeWarningLimit: 1000,
      sourcemap: false,

      minify: "esbuild",

      rollupOptions: {
        output: {
          // manualChunks(id) {
          //   if (id.includes("node_modules")) {
          //     if (id.includes("vuetify")) {
          //       return "vuetify";
          //     }
          //     return "vendor";
          //   }
          // },
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      backendUrl: process.env.VITE_BACKEND_URL,
    },
  },

  modules: [
    "nuxt-lazytube",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "./src/router/index",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/image",
  ],

  plugins: [
    "./src/plugins/observe-visibility.ts",
    "./src/plugins/vee-validate.ts",
    "./src/plugins/toaster.client.ts",
  ],

  image: {
    quality: 80,
  },

  // localization
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "ar",
        language: "ar",
      },
      {
        code: "en",
        language: "en-US",
      },
    ],

    defaultLocale: "en",
    vueI18n: "./src/helpers/i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      fallbackLocale: "ar",
    },

    // detectBrowserLanguage: false,
  },
});
