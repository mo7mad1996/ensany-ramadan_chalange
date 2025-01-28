<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ $t("blogs.blogs") }} </template>
  </BreadCrumb>

  <Container class="all-campaigns">
    <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("blogs.blogs") }}
    </h1>

    <SkeletonLoader :loading="status" />

    <div
      v-if="status == 'success'"
      class="campaigns grid gap-sm pt-sm pb-sm grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2"
    >
      <BlogCard
        v-for="(blog, index) in blogs"
        :key="index"
        :route="`/blogs/${blog.id}`"
        @click="$router.push(`/blogs/${blog.id}`)"
      >
        <template #image>
          <img
            :src="blog?.image"
            class="w-full max-h-[15rem] object-cover rounded-lg"
            alt=""
          />
        </template>

        <template #title>{{ blog.title }}</template>

        <template #desc>{{ blog.description }}</template>
      </BlogCard>
    </div>

    <div class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-model="currentPage"
        :length="blogsMeta.last_page"
        @input="fetchBlogs"
      ></v-pagination>
    </div>
  </Container>
</template>

<script setup>
import Container from "~/global/Container.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
import SkeletonLoader from "~/global/SkeletonLoader.vue";
import { useBlogs } from "../services/blogs";
import { useGlobalVar } from "~/helpers/global-var";
const { locale } = useI18n();

const page = ref(2);
const isLoading = ref(true);

const { ramadan_ar, ramadan_en } = useGlobalVar();
const { blogs, blogsMeta, refresh, status, clear, currentPage } = useBlogs();

const fetchBlogs = () => {
  refresh();
};

watch(currentPage, (newPage) => {
  fetchBlogs();
});

useSeoMeta({
  title: locale.value == "ar" ? ramadan_ar : ramadan_en,
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";
  useSeoMeta({
    title: isArabic ? ramadan_ar : ramadan_en,
  });
});

// only simulation for test skeleton loader
setTimeout(() => {
  isLoading.value = false;
}, 3000);
</script>
