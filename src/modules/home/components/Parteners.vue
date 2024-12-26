<template>
  <section aria-label="partiners section" class="parteners pb-10">
    <Container>
      <h1>Trusted by our partners</h1>

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
import { ref } from "vue";

const { breakpoints2, settings, Carousel, Slide, Navigation } = useCarousel();
// const images = ref([
//   "../../../src/assets/images/islamic-institute-logo.png",
//   "../../../src/assets/images/islamic-institutes-logos.png",
//   "../../../src/assets/images/islamic-logos.png",
//   "../../../src/assets/images/logo-islamic.png",
// ]);
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 36px;
}
</style>
