<template>
  <v-layout>
    <Header />

    <v-main>
      <NuxtPage />

      <AppFooter />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Header from "../global/Header.vue";
import AppFooter from "../global/AppFooter.vue";
import { useRouter } from "vue-router";

const router = useRouter();

console.log(router);

console.log("layout start");
</script>
