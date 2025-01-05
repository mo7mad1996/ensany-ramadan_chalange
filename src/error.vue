<template>
  <v-layout>
    <Header />
  </v-layout>

  <Container>
    <div class="error_page pt-xl pb-lg">
      <div class="image flex justify-center">
        <img src="./assets/images/404.svg" alt="" />
      </div>

      <h1 class="text-4xl font-bold text-center leading-[48px]">
        We can't find the page you're looking for
      </h1>

      <p class="text-center text-[#12121299] text-sm">
        The page might have moved, been deleted, or never existed. Don't worry
        though - we've got some helpful places to go from here.
      </p>

      <div class="button flex justify-center mt-sm">
        <v-btn
          class="text-capitalize rounded-lg"
          variant="flat"
          append-icon="mdi-arrow-right"
          size="large"
          color="primary"
          @click="$router.push('/')"
          >Return Home</v-btn
        >
      </div>
    </div>
  </Container>

  <AppFooter />
</template>

<script setup>
import Container from "./global/Container.vue";
import Header from "./global/Header.vue";
import AppFooter from "./global/AppFooter.vue";
defineProps(["error"]);
</script>
