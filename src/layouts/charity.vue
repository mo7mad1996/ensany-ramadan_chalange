<template>
  <v-layout>
    <Header />
    <v-main class="mt-10 flex flex-col min-h-screen">
      <Container>
        <div class="grid grid-cols-12 gap-4">
          <!-- Sidebar Toggle Button (Small Screens) -->
          <div class="lg:hidden col-span-12 flex justify-start mb-4">
            <v-btn
              color="primary"
              size="small"
              variant="outlined"
              elevation="0"
              @click="isSidebarOpen = true"
              style="text-transform: capitalize"
            >
              <v-icon class="mr-2">mdi-menu</v-icon>
              Menu
            </v-btn>
          </div>

          <!-- Sidebar (Large Screens) -->
          <div
            class="hidden lg:block lg:col-span-3 xl:col-span-2 h-full sticky top-0"
          >
            <CharitySidebar />
          </div>

          <!-- Main Content -->
          <div class="col-span-12 lg:col-span-9 xl:col-span-10">
            <NuxtPage />
          </div>
        </div>
      </Container>

      <AppFooter />

      <!-- Sidebar as a Drawer (Small Screens) -->
      <v-navigation-drawer
        v-model="isSidebarOpen"
        temporary
        location="left"
        class="lg:hidden"
      >
        <div class="p-4">
          <CharitySidebar />
        </div>
      </v-navigation-drawer>
    </v-main>

    <!-- Global donation button -->
    <div
      class="donate_button fixed top-1/2 left-0 flex justify-center"
      v-if="$route.name !== 'donate-all'"
      @click="$router.push({ name: 'donate-all' })"
    >
      <!-- @click="openDialog" -->
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
        <!-- <p>{{ $t("global.donation") }}</p> -->

        <p>{{ $t("global.donation-all-btn") }}</p>
      </v-btn>
    </div>

    <!-- donattion dilaog -->
    <dialog class="dialog m-auto rounded-[10px] h-full" ref="donate">
      <div class="close-icon p-3 w-full flex justify-end">
        <v-icon class="cursor-pointer" @click="closeDialog">mdi-close</v-icon>
      </div>
      <CampaignsDonationForm />
    </dialog>
  </v-layout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import CharitySidebar from "~/global/CharitySidebar.vue";
import Container from "~/global/Container.vue";
import AppFooter from "../global/AppFooter.vue";
import Header from "../global/Header.vue";
import { api } from "~/helpers/axios";
const router = useRouter();

const { locale } = useI18n();

const isSidebarOpen = ref(false);

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

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";

  useHead({
    htmlAttrs: {
      dir: isArabic ? "rtl" : "ltr",
      lang: locale.value,
    },
  });
});
</script>

<style scoped></style>
