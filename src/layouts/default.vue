<template>
  <v-layout>
    <Header />

    <v-main>
      <NuxtPage />
      <AppFooter />
    </v-main>

    <!-- Global donation button -->
    <div class="donate_button fixed top-1/2 left-0 flex justify-center">
      <v-btn
        class="text-capitalize custom-border-radius"
        stacked
        size="x-small"
        color="primary"
      >
        <img
          src="../assets/images/statistics1.svg"
          width="15"
          class="mb-2"
          alt=""
        />
        <p>{{ $t("global.donation") }}</p>
      </v-btn>
    </div>
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

// if (process.client) {
//   locale.value = localStorage.getItem("lang") || "ar";
// }
</script>
