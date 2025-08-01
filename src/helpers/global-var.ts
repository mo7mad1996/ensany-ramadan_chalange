export const useGlobalVar = () => {
  const ramadan_ar = ref("التحدى الرمضانى");
  const ramadan_en = ref("Ramadan Challenge");
  const user_type = ref("donoer");

  const { locale, t } = useI18n();

  function siteName(title: string | null, static_title: string = "") {
    definePageMeta({ lazy: true, keepalive: false });

    useSeoMeta({
      titleTemplate: (current_title) =>
        current_title ? `%s | ${t("home.site_name")} ` : t("home.site_name"),
      title: static_title ? static_title : title && t(title),
    });

    watch(locale, () => {
      useSeoMeta({
        title: static_title ? static_title : title && t(title),
      });
    });
  }

  return {
    siteName,
    ramadan_ar,
    ramadan_en,
    user_type,
  };
};
