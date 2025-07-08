// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  srcDir: "src/",

  // styles => [css, scss]
  css: [
    "~/assets/css/main.scss",
    "~/assets/css/sass-setup.scss",
    "@vuepic/vue-datepicker/dist/main.css",
  ],

  app: {
    head: {
      // favicon and links
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],

      // Google tag manager
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
    },
  },

  // app modules
  modules: [
    "~/router/index",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "vuetify-nuxt-module",
    "nuxt-lazytube",
    "@pinia/nuxt",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/image",
  ],

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

  // robots.txt file
  robots: {
    disallow: "/dashboard/",
    sitemap: "/sitemap.xml",
  },

  // vuetify configuration
  vuetify: {
    vuetifyOptions: {
      labComponents: ["VFileUpload"],
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
    },
  },

  // <nuxt-img /> Tag
  image: {
    quality: 80,
    dir: "assets/images",
    domains: [
      // baseURL for API images
      "be.ramadanchallenges.com",
    ],
  },

  // localization
  i18n: {
    strategy: "no_prefix",
    locales: [
      { code: "ar", language: "ar" },
      { code: "en", language: "en-US" },
    ],
    defaultLocale: "ar",
    vueI18n: "~/helpers/i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: false,
      fallbackLocale: "ar",
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
});
2;
