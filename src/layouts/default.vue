<template>
  <!-- Google Tag Manager (noscript) -->
  <ClientOnly>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PWKGS9VZ"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe>
    </noscript>
  </ClientOnly>

  <!-- End Google Tag Manager (noscript) -->
  <v-layout>
    <Header />

    <v-main class="flex flex-col min-h-screen">
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
          loading="lazy"
          src="../assets/images/statistics1.svg"
          width="15"
          class="mb-2"
          alt="ramadanchallenges image"
        />
        <p>{{ $t("global.donation") }}</p>
      </v-btn>
    </div>

    <!-- donattion dilaog -->
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
import { useCountries } from "~/modules/auth/services/countries";
import AppFooter from "../global/AppFooter.vue";
import Header from "../global/Header.vue";

const { refresh, countries } = useCountries();
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
  },
});
</script>
