<template>
  <v-layout>
    <ClientOnly>
      <Header />
    </ClientOnly>

    <v-main class="flex flex-col min-h-screen">
      <ClientOnly>
        <NuxtPage />
        <AppFooter />
      </ClientOnly>
    </v-main>

    <!-- Global donation button -->
    <ClientOnly>
      <div
        class="donate_button fixed top-1/2 left-0 flex justify-center"
        v-if="$route.name !== 'donate-all'"
        @click="$router.push({ name: 'donate-all' })"
      >
        <!-- @click="openDialog" -->
        <v-btn
          class="text-capitalize custom-border-radius py-2 h-auto"
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
          <!-- <p>{{ $t("global.donation") }}</p> -->
          <p>{{ $t("global.donation-all-btn") }}</p>
        </v-btn>
      </div>

      <!-- donattion dilaog -->
      <dialog class="dialog m-auto rounded-[10px]" ref="donate">
        <div class="close-icon p-3 w-full flex justify-end">
          <v-icon class="cursor-pointer" @click="closeDialog">mdi-close</v-icon>
        </div>
        <CampaignsDonationForm />
      </dialog>
    </ClientOnly>
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
