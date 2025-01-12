<template>
  <section aria-label="success stories section" class="success_stories">
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

      <Carousel v-bind="settings" :breakpoints="breakpoints4" class="mt-4">
        <Slide v-for="(item, index) in 4" :key="index">
          <div
            @click="$router.push(`/stories/${index}`)"
            class="grid gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 m-[10px] cursor-pointer"
          >
            <div class="image">
              <img
                src="../../../assets/images/success-stories.jpeg"
                class="rounded-tr-[60px] rounded-ee-[60px] shadow-xl"
                alt=""
              />
            </div>

            <div
              class="content text-start"
              :dir="locale == 'ar' ? 'rtl' : 'ltr'"
            >
              <h2 class="font-bold mb-sm lg:text-4xl md:text-4xl text-2xl">
                {{ $t("home.stories_title") }}
              </h2>

              <p class="text-sm leading-20">
                {{ $t("home.stories_desc") }}
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
import Container from "../../../global/Container.vue";
import { useCarousel } from "../../../helpers/carousel";
const { settings, breakpoints4, Navigation, Carousel, Slide, Pagination } =
  useCarousel();
const { locale } = useI18n();
</script>

<style>
@import "../style/success-sories.css";
</style>
