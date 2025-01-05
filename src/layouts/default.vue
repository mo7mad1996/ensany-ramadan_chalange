<template>
  <v-layout>
    <Header />

    <v-main>
      <NuxtPage />
      <AppFooter />
    </v-main>

    <!-- Global donation button -->
    <div
      class="donate_button fixed top-1/2 left-0 flex justify-center"
      v-if="$route.name !== 'campaign'"
      @click="openDialog"
    >
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

    <!-- donattion dilaog -->
    <dialog class="dialog m-auto rounded-[10px] h-full" ref="donate">
      <div class="close-icon p-3 w-full flex justify-end">
        <v-icon class="cursor-pointer" @click="closeDialog">mdi-close</v-icon>
      </div>
      <QuickDonation />
    </dialog>
  </v-layout>
</template>

<script setup>
import Header from "../global/Header.vue";
import AppFooter from "../global/AppFooter.vue";
import QuickDonation from "~/global/QuickDonation.vue";
import { useI18n } from "vue-i18n";

const donate = ref("");

const openDialog = () => {
  donate.value.showModal();
};

const closeDialog = () => {
  donate.value.close();
};

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
