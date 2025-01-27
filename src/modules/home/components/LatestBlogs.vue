<template>
  <section aria-label="similar blogs" class="pt-sm pb-sm">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("home.latest_blogs") }}
      </h1>

      <div
        class="grid pt-sm pb-sm gap-sm lg:grid-cols-3 md:grid-cols-1 grid-cols-1"
        v-if="status == 'pending'"
      >
        <v-card class="rounded-lg elevation-0">
          <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
        </v-card>

        <v-card class="rounded-lg elevation-0">
          <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
        </v-card>

        <v-card class="rounded-lg elevation-0">
          <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
        </v-card>
      </div>

      <Carousel
        v-if="status == 'success'"
        v-bind="settings"
        :breakpoints="breakpoints1"
        class="mt-4"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      >
        <Slide v-for="(blog, index) in blogs" :key="index">
          <BlogCard
            :route="`/blogs/${blog?.id}`"
            class="text-start m-4"
            @click="$router.push(`/blogs/${blog?.id}`)"
          >
            <template #image>
              <img :src="blog?.image" class="w-full rounded-lg" alt="" />
            </template>

            <template #title>{{ blog.title }}</template>

            <template #desc
              >{{ blog.description.slice(0, 110) }}.....<span
                class="underline text-sm font-semibold"
                >Read More</span
              >
            </template>
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
import { useBlogs } from "~/modules/blogs/services/blogs";
const { locale } = useI18n();
const { blogs, status } = useBlogs();
</script>
