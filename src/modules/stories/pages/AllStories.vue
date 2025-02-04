<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }}</template>
    <template #second_page> {{ $t("story.stories") }} </template>
  </BreadCrumb>

  <Container class="all-campaigns">
    <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("story.stories") }}
    </h1>

    <SkeletonLoader :loading="status" />

    <div
      v-if="status == 'success'"
      class="campaigns grid gap-x-2 gap-y-sm pt-sm pb-sm grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2"
    >
      <StoryCard
        v-for="(story, index) in stories"
        :key="index"
        :route="`/stories/${story?.id}`"
      >
        <template #video>
          <img
            @click="$router.push(`/stories/${story.id}`)"
            class="w-full max-h-[15rem] object-cover rounded-lg"
            :src="story?.image"
          ></img>
        </template>

        <template #title>{{ story?.title }}</template>

        <template #desc>{{ story.content }}</template>
      </StoryCard>
    </div>

    <div class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-model="currentPage"
        :length="storiesMeta.last_page"
        @input="fetchStories"
        :total-visible="5"
      ></v-pagination>
    </div>
  </Container>
</template>

<script setup>
import Container from "~/global/Container.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
import SkeletonLoader from "~/global/SkeletonLoader.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useStories } from "../services/stories";
const { locale } = useI18n();

const { ramadan_ar, ramadan_en } = useGlobalVar();
const { stories, status, currentPage, storiesMeta, refresh } = useStories();

const fetchStories = () => {
  refresh();
};

watch(currentPage, (newPage) => {
  fetchStories();
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
</script>
