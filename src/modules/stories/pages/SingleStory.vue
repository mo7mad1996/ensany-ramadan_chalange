<template>
  <Container>
    <BreadCrumb>
      <template #first_page>
        <NuxtLink to="/">
          {{ $t("global.home") }}
        </NuxtLink>
      </template>
      <template #second_page>
        <NuxtLink to="/stories">
          {{ $t("story.stories") }}
        </NuxtLink>
      </template>
      <template #third_page> {{ singleStory?.title }} </template>
    </BreadCrumb>

    <div class="content flex justify-center">
      <div class="w-[792px]">
        <div class="video">
          <nuxt-img
            loading="lazy"
            v-if="status == 'success'"
            class="rounded-md object-cover cursor-pointer w-full lg:h-[500px] xl:h-[500px] md:h-full h-full"
            :src="singleStory?.image"
          />
        </div>

        <div class="content_text py-5">
          <!-- title -->

          <v-skeleton-loader
            v-if="status == 'pending'"
            type="list-item-two-line"
          ></v-skeleton-loader>

          <h1
            v-if="status == 'success'"
            class="lg:text-4xl text-start xl:text-4xl md:text-3xl text-3xl font-bold leading-[54px]"
          >
            {{ singleStory?.title }}
          </h1>

          <!-- reading time and date -->
          <div class="flex items-center justify-end gap-x-sm">
            <span>{{ reFormat2(singleStory?.created_at) }}</span>
          </div>

          <!-- first text -->
          <v-skeleton-loader
            v-if="status == 'pending'"
            v-for="(item, index) in 3"
            :key="index"
            type="list-item-two-line"
          ></v-skeleton-loader>

          <p
            v-if="status == 'success'"
            class="text_one text-justify text-[20px] text-[#121212] leading-[32px] pt-4"
            v-html="singleStory?.content"
          ></p>
        </div>
      </div>
    </div>

    <StorySimilarStories :similarStories="singleStory?.similar_stories" />
  </Container>
</template>

<script setup lang="ts">
import BreadCrumb from "~/global/BreadCrumb.vue";
import Container from "~/global/Container.vue";
import { reFormat2 } from "~/helpers/format-date";
import { useGlobalVar } from "~/helpers/global-var";
import { useSingleStory } from "../services/single-story";

const route = useRoute();
const { siteName } = useGlobalVar();
const { singleStory, status } = useSingleStory(route.params.id);

siteName(null, singleStory.value.title);

useSeoMeta({
  title: singleStory.value.title,
  ogTitle: singleStory.value.title,
  ogImage: singleStory.value.image,
  twitterCard: singleStory.value.image,
  description: singleStory.value.content,
  ogDescription: singleStory.value.content,
});

watchEffect(() => {
  if (status.value == "error") {
    navigateTo("/stories");
  }
});

watch(singleStory, (story: any) => {
  useSeoMeta({
    title: story?.title,
    ogTitle: story?.title,
    ogImage: story?.image,
    twitterCard: story?.image,
    description: story?.content,
    ogDescription: story?.content,
  });
});
</script>
