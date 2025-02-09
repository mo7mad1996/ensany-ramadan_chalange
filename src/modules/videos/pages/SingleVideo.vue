<template>
  <Container>
    <BreadCrumb>
      <template #first_page> {{ $t("global.home") }} </template>
      <template #second_page> {{ $t("videos.videos") }} </template>
    </BreadCrumb>
    <div class="content">
      <div class="video">Video Is Here</div>

      <div class="flex justify-center">
        <div class="content_text py-5 w-[792px]">
          <!-- title -->
          <v-skeleton-loader
            v-if="status == 'pending'"
            type="list-item-two-line"
          ></v-skeleton-loader>

          <h1
            v-if="status == 'success'"
            class="lg:text-4xl text-start xl:text-4xl md:text-3xl text-3xl font-bold leading-[54px]"
          >
            {{ video?.title }}
          </h1>

          <div class="flex items-center pt-2 justify-between">
            <!-- writer -->
            <div class="flex items-center gap-x-2">
              <img src="../../../assets/images/honor-company.svg " alt="" />
              <span>{{ video?.user?.name }}</span>
            </div>

            <!-- reading time and date -->
            <div class="flex items-center gap-x-sm">
              <span>{{ reFormat2(video?.created_at) }}</span>
            </div>
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
          >
            <!-- {{ video?.description }} -->
          </p>

          <!-- second text -->
          <div class="pt-4" v-if="status == 'success'">
            <div class="video-container" v-if="video">
              <ClientOnly>
                <LazyYoutube
                  :src="video?.video_url"
                  :customTitle="video?.title"
                  :customThumbnail="video?.thumbnail"
                  max-width="100%"
                  aspect-ratio="16:9"
                  thumbnail-quality="standard"
                  iframe-policy="credentialless"
                  style="width: 100%; height: auto"
                />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <BlogSimilarBlogs v-if="video.length > 0" :similar="video?.similar_blogs" :status="status" /> -->
  </Container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import BreadCrumb from "~/global/BreadCrumb.vue";
import Container from "~/global/Container.vue";
import { reFormat2 } from "~/helpers/format-date";
import { useGlobalVar } from "~/helpers/global-var";
import { useShowVideo } from "../services/single-video";

const { locale } = useI18n();
const route = useRoute();

const { ramadan_ar, ramadan_en } = useGlobalVar();
const { video, status } = useShowVideo(route.params.id);

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
