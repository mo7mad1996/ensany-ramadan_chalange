<template>
  <section aria-label="similar blogs" class="pt-sm pb-sm">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        Latest Blogs
      </h1>

      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints1"
        class="mt-4"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      >
        <Slide v-for="(item, index) in 5" :key="index">
          <Card class="text-start m-4">
            <template #video>
              <video
                class="rounded-md object-cover cursor-pointer"
                src="../../../assets/videos/contribution-vid.mp4"
                poster="../../../assets/videos/contribution-poster.svg"
                controls
              ></video>
            </template>

            <template #title>The Power of Collective Giving</template>

            <template #desc
              >Discover how a community-driven approach turns individual
              donations into transformative outcomes for those in need Learn
              more about the ripple effects of giving and how your contribution
              plays a vital role See more .</template
            >
          </Card>
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
import Card from "~/modules/blogs/components/Card.vue";
import { useCarousel } from "../../../helpers/carousel";
const { breakpoints1, settings, Carousel, Slide, Pagination } = useCarousel();
const { locale } = useI18n();
</script>
