<template>
  <v-navigation-drawer
    class="v-navigation-drawer--mobile p-[2rem]"
    v-model="isOpen"
    location="right"
    temporary
    color="#F6FFF6"
  >
    <div class="card flex flex-col gap-y-[1.5rem] items-center" v-if="isOpen">
      <nuxt-link :to="localePath('/about')" class="text-black">{{
        $t("global.campaigns")
      }}</nuxt-link>

      <router-link to="/" class="text-black">About Us</router-link>

      <router-link to="/" class="d-flex ga-2 text-black">
        <img src="../assets/images/search.svg" width="15" alt="" />
        <span>Search...</span>
      </router-link>

      <div class="flex flex-col gap-y-[1.5rem]">
        <v-btn
          class="text-capitalize text-red-500"
          variant="flat"
          size="default"
          color="#3E7E41"
          >Sign in</v-btn
        >

        <v-btn
          class="text-capitalize"
          variant="outlined"
          size="default"
          color="#3E7E41"
          >Contact Us</v-btn
        >
      </div>

      <router-link to="/" class="text-black">
        <SwitchLang />
      </router-link>
    </div>
  </v-navigation-drawer>

  <v-app-bar elevation="0" color="#F6FFF6">
    <Container class="w-100">
      <div class="d-flex justify-space-between align-center w-100">
        <!-- logo -->
        <div class="logo">
          <img src="../assets/images/logo.svg" width="136" height="48" alt="" />
        </div>

        <!-- menue in small screens -->
        <div class="phone_menue d-flex d-lg-none d-md-flex d-xl-none">
          <img
            src="../assets/images/menue.svg"
            class="cursor-pointer"
            width="30"
            alt=""
            @click="openMenue"
          />
        </div>

        <!-- links and searchbar -->
        <ul
          aria-label="links of the website"
          class="d-none d-lg-flex d-xl-flex d-md-none ga-5 align-center"
        >
          <li>
            <nuxt-link :to="localePath('/')" class="text-black">{{
              $t("global.campaigns")
            }}</nuxt-link>
          </li>

          <li>
            <nuxt-link :to="localePath('/')" class="text-black">{{
              $t("global.about_us")
            }}</nuxt-link>
          </li>

          <li>
            <nuxt-link :to="localePath('/')" class="d-flex ga-2">
              <img src="../assets/images/search.svg" width="15" alt="" />
              <span>{{ $t("global.search") }}...</span>
            </nuxt-link>
          </li>
        </ul>

        <!-- contact & signin-btn & lang -->
        <div
          class="buttons d-none d-lg-flex d-xl-flex d-md-none ga-3 align-center"
        >
          <v-btn
            class="text-capitalize rounded-lg"
            variant="flat"
            size="default"
            color="#3E7E41"
            >{{ $t("global.signin") }}</v-btn
          >

          <v-btn
            class="text-capitalize rounded-lg"
            variant="outlined"
            size="default"
            color="#3E7E41"
            >{{ $t("global.contact_us") }}</v-btn
          >

          <div class="lang-switcher">
            <SwitchLang />
          </div>
        </div>
      </div>
    </Container>
  </v-app-bar>
</template>

<script setup lang="ts">
import Container from "./Container.vue";
import SwitchLang from "./SwitchLang.vue";
import { ref } from "vue";
const localePath = useLocalePath();
const isOpen = ref(false);

const openMenue = (): void => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
ul {
  list-style: none;
  a {
    text-decoration: none;
    color: #121212;
  }
}

.phone_menue {
  position: relative;
  .card {
    position: absolute;
    z-index: 999999;
    background-color: #f6fff6;
    left: -132px;
    top: 44px;
    padding: 20px 26px;
  }
}
</style>
