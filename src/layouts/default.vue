<template>
  <v-layout>
    <Header />

    <v-main>
      <NuxtPage />

      <AppFooter />
    </v-main>
  </v-layout>
</template>

<script setup>
import Header from "../global/Header.vue";
import AppFooter from "../global/AppFooter.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

useHead({
  htmlAttrs: {
    dir: locale.value === "ar" ? "rtl" : "ltr",
  },
});

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";

  useHead({
    htmlAttrs: {
      dir: isArabic ? "rtl" : "ltr",
    },
  });
});
</script>
