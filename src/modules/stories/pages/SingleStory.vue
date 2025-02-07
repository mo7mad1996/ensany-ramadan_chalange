<template>
  <Container>
    <BreadCrumb>
      <template #first_page> {{ $t("global.home") }} </template>
      <template #second_page> {{ $t("story.stories") }} </template>
    </BreadCrumb>

    <div class="content flex justify-center">
      <div class="w-[792px]">
        <div class="video">
          <img
            class="rounded-md object-cover cursor-pointer w-full lg:h-[500px] xl:h-[500px] md:h-full h-full"
            :src="singleStory?.image"

          ></img>
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

    <StorySimilarStories />
  </Container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import BreadCrumb from "~/global/BreadCrumb.vue";
import Container from "~/global/Container.vue";
import { reFormat2 } from "~/helpers/format-date";
import { useGlobalVar } from "~/helpers/global-var";
import { useSingleStory } from "../services/single-story";

const route = useRoute();
const { locale } = useI18n();
const { ramadan_ar, ramadan_en } = useGlobalVar();
const { singleStory, status } = useSingleStory(route.params.id);

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
