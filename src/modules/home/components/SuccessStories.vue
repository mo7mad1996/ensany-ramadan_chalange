<template>
  <section
    aria-label="success stories section"
    class="success_stories"
    v-if="stories && stories.length > 0"
  >
    <Container>
      <!-- title -->
      <div class="flex items-center justify-between">
        <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
          {{ $t("home.success_stories") }}
        </h1>

        <nuxt-link
          to="/stories"
          class="underline text-primary cursor-pointer"
          >{{ $t("home.see_more") }}</nuxt-link
        >
      </div>

      <div
        class="grid pt-sm pb-sm gap-sm lg:grid-cols-3 md:grid-cols-1 grid-cols-1"
        v-if="status == 'pending'"
      >
        <v-card class="rounded-lg elevation-0">
          <v-skeleton-loader type="image, article"></v-skeleton-loader>
        </v-card>

        <v-card class="rounded-lg elevation-0">
          <v-skeleton-loader type="image, article"></v-skeleton-loader>
        </v-card>

        <v-card class="rounded-lg elevation-0">
          <v-skeleton-loader type="image, article"></v-skeleton-loader>
        </v-card>
      </div>

      <Carousel
        v-if="status == 'success'"
        v-bind="settings"
        :breakpoints="breakpoints4"
        class="mt-4"
      >
        <Slide v-for="(story, index) in stories" :key="index">
          <div
            @click="$router.push(`/stories/${story?.id}`)"
            class="grid gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 m-[10px] cursor-pointer"
          >
            <div class="image">
              <nuxt-img
                loading="lazy"
                v-if="story?.image"
                :src="story.image"
                class="rounded-tr-[60px] rounded-ee-[60px] shadow-xl"
                alt="ramadanchallenges image"
              />
            </div>

            <div
              class="content text-start"
              :dir="locale == 'ar' ? 'rtl' : 'ltr'"
            >
              <h2 class="font-bold mb-sm lg:text-4xl md:text-4xl text-2xl">
                {{ story?.title }}
              </h2>

              <p class="text-sm leading-20">
                {{ story?.content }}
              </p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <div class="lg:block md:hidden xl:block hidden">
            <Navigation />
          </div>

          <div class="lg:hidden md:block xl:hidden block">
            <Pagination />
          </div>
        </template>
      </Carousel>
    </Container>
  </section>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";

import { useStories } from "~/modules/stories/services/stories";
import Container from "../../../global/Container.vue";
import { useCarousel } from "../../../helpers/carousel";
const { settings, breakpoints4, Navigation, Carousel, Slide, Pagination } =
  useCarousel();
const { locale } = useI18n();
const { stories, status } = useStories();
</script>

<style>
@import "../style/success-sories.css";
</style>
