<template>
  <BreadCrumb>
    <template #first_page>
      <a :href="'/'">{{ $t("global.home") }}</a>
    </template>
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
        :key="blog?.id"
        :route="`/blogs/${blog.id}`"
        class="h-full"
        :to="`/blogs/${blog.id}`"
      >
        <template #image>
          <img
            loading="lazy"
            :src="blog?.image"
            class="w-full max-h-[15rem] object-cover rounded-lg"
            alt="ramadanchallenges image"
          />
        </template>

        <template #title>{{ blog.title }}</template>

        <template #desc
          >{{ blog.description.slice(0, 110) }}.....<span
            class="underline text-sm font-semibold"
            >Read More</span
          >
        </template>
      </BlogCard>
    </div>

    <div class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-if="fetchBlogs.length > 0"
        v-model="currentPage"
        :length="blogsMeta.last_page"
        @input="fetchBlogs"
        :total-visible="5"
      ></v-pagination>
    </div>
    <NoData :data="blogs" :status="status" />
  </Container>
</template>

<script setup>
import BreadCrumb from "~/global/BreadCrumb.vue";
import Container from "~/global/Container.vue";
import NoData from "~/global/NoData.vue";
import SkeletonLoader from "~/global/SkeletonLoader.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useBlogs } from "../services/blogs";
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

const { siteName } = useGlobalVar();
siteName("blogs.page_title_blogs");

// only simulation for test skeleton loader
setTimeout(() => {
  isLoading.value = false;
}, 3000);
</script>
