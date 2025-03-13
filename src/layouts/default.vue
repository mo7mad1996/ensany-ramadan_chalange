<template>
  <v-layout>
    <Header />

    <v-main class="flex flex-col min-h-screen">
      <NuxtPage />
      <AppFooter />
    </v-main>

    <!-- Global donation button -->
    <nuxt-link
      class="donate_button fixed top-1/2 left-0 flex justify-center"
      v-if="$route.name !== 'donate-all'"
      :to="{ name: 'donate-all' }"
    >
      <v-btn
        class="text-capitalize custom-border-radius py-2 h-auto"
        stacked
        size="x-small"
        color="primary"
      >
        <!-- @click="openDialog" -->
        <nuxt-img
          loading="lazy"
          src="/statistics1.svg"
          width="15"
          class="mb-2"
          alt="ramadan challenges image"
        />
        <!-- <p>{{ $t("global.donation") }}</p> -->
        <p>{{ $t("global.donation-all-btn") }}</p>
      </v-btn>
    </nuxt-link>

    <!-- donation dialog -->
    <dialog class="dialog m-auto rounded-[10px]" ref="donate">
      <div class="close-icon p-3 w-full flex justify-end">
        <v-icon class="cursor-pointer" @click="closeDialog">mdi-close</v-icon>
      </div>
      <CampaignsDonationForm />
    </dialog>
  </v-layout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import AppFooter from "../global/AppFooter.vue";
import Header from "../global/Header.vue";

const { locale } = useI18n();

const donate = ref("");

const openDialog = () => {
  donate.value.showModal();
};

const closeDialog = () => {
  donate.value.close();
};

useHead({
  htmlAttrs: {
    dir: locale.value === "ar" ? "rtl" : "ltr",
    lang: locale.value,
  },
});
</script>
