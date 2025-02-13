<template>
  <section aria-label="famouses section" class="pt-sm pb-sm">
    <Container>
      <!-- title -->
      <h2 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("home.famouses") }}
      </h2>

      <Carousel v-bind="settings" :breakpoints="breakpoints3" class="mt-4">
        <Slide>
          <div class="image overflow-hidden relative">
            <img
              loading="lazy"
              src="../../../assets/images/scholar6.png"
              class="cursor-pointer"
              alt=""
            />

            <div class="hover_name text-start px-2 py-1 absolute rounded-md w-full">
              <span class="font-bold">Ali Omar</span>
              <p class="text-sm">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              loading="lazy"
              src="../../../assets/images/scholar1.png"
              class="cursor-pointer"
              alt=""
            />

            <div class="hover_name text-start px-2 py-1 absolute rounded-md w-full">
              <span class="font-bold">Ali Omar</span>
              <p class="text-sm">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              loading="lazy"
              src="../../../assets/images/scholar2.png"
              class="cursor-pointer"
              alt=""
            />

            <div class="hover_name text-start px-2 py-1 absolute rounded-md w-full">
              <span class="font-bold">Ali Omar</span>
              <p class="text-sm">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              loading="lazy"
              src="../../../assets/images/scholar3.png"
              class="cursor-pointer"
              alt=""
            />

            <div class="hover_name text-start px-2 py-1 absolute rounded-md w-full">
              <span class="font-bold">Ali Omar</span>
              <p class="text-sm">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              loading="lazy"
              src="../../../assets/images/scholar4.png"
              class="cursor-pointer"
              alt=""
            />

            <div class="hover_name text-start px-2 py-1 absolute rounded-md w-full">
              <span class="font-bold">Ali Omar</span>
              <p class="text-sm">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              loading="lazy"
              src="../../../assets/images/scholar5.png"
              class="cursor-pointer"
              alt=""
            />

            <div class="hover_name text-start px-2 py-1 absolute rounded-md w-full">
              <span class="font-bold">Ali Omar</span>
              <p class="text-sm">Head of Bayinah Institute</p>
            </div>
          </div>
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
const { settings, breakpoints3, Navigation, Carousel, Slide } = useCarousel();
</script>

<style scoped>
@import "../style/famouses.css";
</style>
