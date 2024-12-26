import { createI18n } from "vue-i18n";

// Load module-specific locales
function loadModuleLocales(): Record<
  string,
  Record<string, Record<string, string>>
> {
  const modules: Record<string, { default: Record<string, string> }> =
    import.meta.glob("../modules/**/locales/*.json", {
      eager: true,
    });

  const messages: Record<string, Record<string, Record<string, string>>> = {};

  for (const path in modules) {
    const match = path.match(/modules\/(.*?)\/locales\/(.*?).json$/);
    if (match) {
      const moduleName = match[1];
      const locale = match[2];

      if (!messages[locale]) {
        messages[locale] = {};
      }

      messages[locale][moduleName] = modules[path].default;
    }
  }

  return messages;
}

// Set up the i18n instance
export default defineNuxtPlugin((nuxtApp) => {
  //   const savedLocale = localStorage.getItem("app-locale") || "en";
  //   const rtl = savedLocale === "ar";
  const fallbackLocale = "en";

  // Initialize i18n
  const i18n = createI18n({
    legacy: false, // Composition API mode
    globalInjection: true,
    // locale: savedLocale,
    fallbackLocale,
    messages: loadModuleLocales(),
  });

  // Set language direction and HTML attributes
  //   document.documentElement.setAttribute("lang", savedLocale);
  //   document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");

  // Use i18n in the Nuxt app
  nuxtApp.vueApp.use(i18n);

  // Provide a helper function to switch languages
  //   nuxtApp.provide("setLanguage", (locale: string) => {
  //     i18n.global.locale = locale;
  //     const isRtl = locale === "ar";
  //     document.documentElement.setAttribute("lang", locale);
  //     document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
  //     localStorage.setItem("app-locale", locale);
  //   });
});
