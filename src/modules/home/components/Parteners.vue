<template>
  <section aria-label="partiners section" class="parteners pb-10">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("home.partners") }}
      </h1>

      <Carousel v-bind="settings" :breakpoints="breakpoints2" class="mt-4">
        <Slide>
          <img src="../../../assets/images/islamic-institute-logo.png" alt="" />
        </Slide>

        <Slide>
          <img
            src="../../../assets/images/islamic-institutes-logos.png"
            alt=""
          />
        </Slide>

        <Slide>
          <img src="../../../assets/images/islamic-logos.png" alt="" />
        </Slide>

        <Slide>
          <img src="../../../assets/images/logo-islamic.png" alt="" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
import { useCarousel } from "../../../helpers/carousel";
const { breakpoints2, settings, Carousel, Slide, Navigation } = useCarousel();
</script>
