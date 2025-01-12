<template>
  <section aria-label="similar blogs" class="pt-sm pb-sm">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("home.latest_blogs") }}
      </h1>

      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints1"
        class="mt-4"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      >
        <Slide v-for="(item, index) in 5" :key="index">
          <BlogCard :route="`/blogs/${index + 1}`" class="text-start m-4">
            <template #image>
              <img
                src="../../../assets/images/blogs-img.png"
                class="w-full"
                alt=""
              />
            </template>

            <template #title>{{ $t("blogs.blog_title") }}</template>

            <template #desc>{{ $t("blogs.blog_desc") }}</template>
          </BlogCard>
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
import { useCarousel } from "../../../helpers/carousel";
const { breakpoints1, settings, Carousel, Slide, Pagination } = useCarousel();
const { locale } = useI18n();
</script>
