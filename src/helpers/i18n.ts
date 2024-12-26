import { createI18n } from "vue-i18n";

// let savedLocale: string = localStorage.getItem("app-locale") || "en";
// let direction: string = localStorage.getItem("dir") || "left";

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

  //   console.log(messages);

  return messages;
}

const i18n = createI18n({
  // locale: savedLocale,
  fallbackLocale: "en",
  messages: loadModuleLocales(),
});

// export function initialSettings(): void {
//   document.documentElement.setAttribute(
//     "dir",
//     direction == "right" ? "rtl" : "ltr"
//   );

//   document.documentElement.setAttribute("lang", savedLocale);

//   localStorage.setItem("dir", direction);
//   localStorage.setItem("app-locale", savedLocale);
// }

// Function to switch language and save preference
export function setLanguage(locale: string): void {
  i18n.global.locale = locale;
  const rtl = locale === "ar";
  // direction = rtl ? "right" : "left";

  // localStorage.setItem("dir", direction);
  // localStorage.setItem("app-locale", locale);

  document.documentElement.setAttribute("lang", locale);
  document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
}

export default i18n;
