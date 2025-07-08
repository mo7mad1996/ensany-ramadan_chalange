<template>
  <span
    class="d-flex align-center gap-3 cursor-pointer"
    @click="setLocale(locale == 'ar' ? 'en' : 'ar')"
  >
    <span>{{ locale == "ar" ? "English" : "عربى" }}</span>

    <nuxt-img loading="lazy" src="/lang.svg" alt="ramadan challenges image" />
  </span>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();
const cookie: any = useCookie("i18n_redirected");

// Set initial locale from cookie or default to Arabic
onMounted(() => {
  const savedLocale = cookie.value || "ar";
  cookie.value = savedLocale;
  setLocale(savedLocale);
});

watch(locale, async (newLocale: string) => {
  const isArabic = newLocale === "ar";
  cookie.value = newLocale;
  useHead({
    htmlAttrs: {
      dir: isArabic ? "rtl" : "ltr",
      lang: locale.value,
    },
  });
});
</script>
