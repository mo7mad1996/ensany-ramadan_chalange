<template>
  <BreadCrumb>
    <template #first_page>
      <a :href="'/'">{{ $t("global.home") }}</a>
    </template>
    <template #second_page> {{ $t("global.videos") }} </template>
  </BreadCrumb>

  <Container class="all-campaigns">
    <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("global.videos") }}
    </h1>

    <SkeletonLoader :loading="status" />

    <div
      v-if="status == 'success'"
      class="campaigns grid gap-sm pt-sm pb-sm grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2"
    >
      <VideoCard
        v-for="(video, index) in videos"
        :key="index"
        :route="`/videos/${video.id}`"
        class="h-full"
        @click="$router.push(`/videos/${video.id}`)"
      >
        <template #image>
          <div class="relative w-full max-h-[15rem]">
            <img
              :src="video?.thumbnail"
              class="w-full max-h-[15rem] object-cover rounded-lg"
              alt="{{ video?.title }}"
            />
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </template>

        <template #title>{{ video?.title }}</template>

        <!-- <template #desc
          >{{ video?.description?.slice(0, 110) }}.....<span
            class="underline text-sm font-semibold"
            >Read More</span
          >
        </template> -->
      </VideoCard>
    </div>

    <div v-if="videos.length > 0" class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-model="currentPage"
        :length="videosMeta.last_page"
        @input="fetchVideos"
        :total-visible="5"
      ></v-pagination>
    </div>
  </Container>
</template>

<script setup>
import BreadCrumb from "~/global/BreadCrumb.vue";
import Container from "~/global/Container.vue";
import SkeletonLoader from "~/global/SkeletonLoader.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useVideos } from "../services/videos";
const { locale } = useI18n();

const isLoading = ref(true);

const { ramadan_ar, ramadan_en } = useGlobalVar();
const { videos, videosMeta, refresh, status, clear, currentPage } = useVideos();

const fetchVideos = () => {
  refresh();
};

watch(currentPage, (newPage) => {
  fetchVideos();
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
