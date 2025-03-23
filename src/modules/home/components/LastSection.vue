<template>
  <Container>
    <section class="ready mt-md mb-md flex place-items-center">
      <div
        class="content relative text-white px-sm py-sm lg:px-xd md:px-md xl:px-xd lg:py-xd xl:py-xd md:py-md"
      >
        <h2
          class="font-bold lg:text-4xl md:text-4xl text-3xl lg:leading-54 md:leading-46 xl:leading-54 leading-46"
        >
          {{ $t("home.ready") }}
        </h2>

        <p class="text-sm pt-sm">
          {{ $t("home.ready_desc") }}
        </p>

        <v-btn
          class="text-capitalize rounded-lg mt-sm"
          variant="flat"
          size="default"
          color="primary"
          @click="navigateTo('signup')"
          >{{ $t("global.join_challenge") }}</v-btn
        >
      </div>
    </section>
  </Container>
</template>

<script setup>
import Container from "../../../global/Container.vue";
</script>

<style scoped>
@import "../style/last-section.css";
</style>
