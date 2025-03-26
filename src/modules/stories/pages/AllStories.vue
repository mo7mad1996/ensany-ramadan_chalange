<template>
  <BreadCrumb>
    <template #first_page>
      <a :href="'/'">{{ $t("global.home") }}</a>
    </template>
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
          <nuxt-img
            loading="lazy"
            @click="$router.push(`/stories/${story.id}`)"
            class="w-full max-h-[15rem] object-cover rounded-lg"
            :src="story?.image"
          />
        </template>

        <template #title>{{ story?.title }}</template>

        <template #desc>
          <ClientOnly>
            <div>
              {{ getTextFromHTML(story.content) }}
            </div>
          </ClientOnly>
        </template>
      </StoryCard>
    </div>

    <div class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-if="stories.length > 0"
        v-model="currentPage"
        :length="storiesMeta.last_page"
        @input="fetchStories"
        :total-visible="5"
      />
    </div>
    <NoData :data="stories" :status="status" />
  </Container>
</template>

<script setup>
import NoData from "~/global/NoData.vue";

import BreadCrumb from "~/global/BreadCrumb.vue";
import Container from "~/global/Container.vue";
import SkeletonLoader from "~/global/SkeletonLoader.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useStories } from "../services/stories";
const { locale } = useI18n();
const router = useRouter();
const route = useRoute();
const { stories, status, currentPage, storiesMeta, refresh } = useStories();

const fetchStories = async () => {
  handlePageChange(currentPage.value);
  await refresh({ page: currentPage.value });
};

const handlePageChange = (page) => {
  if (page > storiesMeta.value.last_page) {
    lastPage.value = storiesMeta.value.last_page;
    currentPage.value = 1;
    router.push({ query: { page: 1 } });
  } else {
    currentPage.value = page;
    router.push({ query: { page: page } });
  }
};

const getTextFromHTML = (htmlString) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  const text = Array.from(tempDiv.childNodes)
    .map((node) => node.textContent.trim())
    .filter((text) => text !== "")
    .join(" ");

  return text;
};

watch([currentPage], (page) => {
  handlePageChange(currentPage.value);
  fetchStories();
});

const { siteName } = useGlobalVar();
siteName("story.page_title_stories");
</script>
