<template>
  <section aria-label="similar blogs" class="pt-sm pb-sm">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("story.similar_blogs") }}
      </h1>

      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints1"
        class="mt-4"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      >
        <Slide v-for="(item, index) in 5" :key="index">
          <StoryCard :route="`/stories/${index + 1}`" class="text-start m-1">
            <template #video>
              <video
                class="rounded-md object-cover cursor-pointer"
                src="../../../assets/videos/contribution-vid.mp4"
                poster="../../../assets/videos/contribution-poster.svg"
                controls
              ></video>
            </template>

            <template #title>{{ $t("story.title") }}</template>

            <template #desc>{{ $t("story.desc") }}</template>
          </StoryCard>
        </Slide>

        <template #addons>
          <pagination />
        </template>
      </Carousel>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
import Card from "./Card.vue";
import { useCarousel } from "../../../helpers/carousel";
const { breakpoints1, settings, Carousel, Slide, Pagination } = useCarousel();
const { locale } = useI18n();
</script>
