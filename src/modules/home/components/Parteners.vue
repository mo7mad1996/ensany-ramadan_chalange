<template>
  <section aria-label="partiners section" class="parteners pb-10">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("home.partners") }}
      </h1>

      <div
        class="grid pt-sm pb-sm gap-sm lg:grid-cols-3 md:grid-cols-1 grid-cols-1"
        v-if="status == 'pending'"
      >
        <v-card
          class="rounded-lg elevation-0"
          v-for="(item, index) in 3"
          :key="index"
        >
          <v-skeleton-loader type="image"></v-skeleton-loader>
        </v-card>
      </div>

      <Carousel
        v-if="status == 'success'"
        v-bind="settings"
        :breakpoints="breakpoints2"
        class="mt-4"
      >
        <Slide v-for="(item, index) in Parteners" :key="index">
          <a :href="item.url || '#'" target="_blank" rel="noopener noreferrer">
            <div class="image overflow-hidden relative">
              <nuxt-img
                loading="lazy"
                :src="item.image"
                :class="{
                  'w-[17rem]': Parteners.length >= 4,
                  'w-[26rem]': Parteners.length == 2,
                  'w-[22rem]': Parteners.length == 3,
                }"
                class="cursor-pointer rounded-lg m-1 border"
                style="height: 272px"
                alt="partenerImage"
              />

              <div
                class="hover_name text-center px-2 py-1 absolute rounded-md w-full"
              >
                <span class="font-bold">{{ item.name }}</span>
              </div>
            </div>
          </a>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </Container>
  </section>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";

import Container from "~/global/Container.vue";
import { useCarousel } from "~/helpers/carousel";
import { useParteners } from "../services/parteners";
const { breakpoints2, settings, Carousel, Slide, Navigation } = useCarousel();
const { Parteners, status } = useParteners();
</script>

<style scoped>
@import "../style/famouses.css";
</style>
