<template>
  <Container>
    <BreadCrumb>
      <template #first_page>
        <a :href="'/'">{{ $t("global.home") }}</a>
      </template>
      <template #second_page>
        <a :href="'/videos'">{{ $t("videos.videos") }}</a>
      </template>
      <template #third_page> {{ video?.title }} </template>
    </BreadCrumb>
    <div class="content">
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
              <nuxt-img
                loading="lazy"
                src="/honor-company.svg"
                alt="ramadan challenges image"
              />
              <span>{{ video?.user?.name }}</span>
            </div>

            <!-- reading time and date -->
            <div class="flex items-center gap-x-sm">
              <span>{{ reFormat2(video?.created_at) }}</span>
            </div>
          </div>

          <!-- first text -->
          <template v-if="status == 'pending'">
            <v-skeleton-loader
              v-for="(item, index) in 3"
              :key="index"
              type="list-item-two-line"
            />
          </template>

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
// @ts-ignore
import BreadCrumb from "~/global/BreadCrumb.vue";
import Container from "~/global/Container.vue";
import { reFormat2 } from "~/helpers/format-date";
import { useGlobalVar } from "~/helpers/global-var";
import { useShowVideo } from "../services/single-video";

const route = useRoute();

const { video, status } = useShowVideo(route.params.id);

const { siteName } = useGlobalVar();
siteName(null, video.value?.title);
</script>
