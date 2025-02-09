<template>
  <Container>
    <BreadCrumb>
 
 
      <template #first_page> 
        <NuxtLink to="/">
          {{ $t("global.home") }} 
        </NuxtLink>
      </template>
      <template #second_page> 
      <NuxtLink to="/blogs">
          {{ $t("blogs.blogs") }} 
        </NuxtLink>
      </template>
      <template #third_page> {{ singleBlog?.title }} </template>

    </BreadCrumb>
    <div class="content">
      <div class="video">
        <img
            v-if="status == 'success'"
          class="rounded-md object-cover cursor-pointer w-full lg:h-[500px] xl:h-[500px] md:h-full h-full"
          :src="singleBlog?.image"
        ></img>
      </div>

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
            {{ singleBlog?.title }}
          </h1>

          <div class="flex items-center pt-2 justify-between">
            <!-- writer -->
            <div class="flex items-center gap-x-2">
              <img src="../../../assets/images/honor-company.svg " alt="" />
              <span>{{ singleBlog?.user?.full_name }}</span>
            </div>

            <!-- reading time and date -->
            <div class="flex items-center gap-x-sm">
              <span>{{ reFormat2(singleBlog?.created_at)  }}</span>
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
            {{ singleBlog?.description }}
          </p>

          <!-- second text -->
          <div class="pt-4" v-if="status == 'success'">
            <p class="text-[20px] text-[#121212] leading-[32px] text-justify" v-html="singleBlog?.content"></p>
          </div>
        </div>
      </div>
    </div>

    <BlogSimilarBlogs v-if="singleBlog.length > 0" :similar="singleBlog?.similar_blogs" :status="status" />
  </Container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import BreadCrumb from "~/global/BreadCrumb.vue";
import Container from "~/global/Container.vue";
import { reFormat2 } from "~/helpers/format-date";
import { useGlobalVar } from "~/helpers/global-var";
import { useSingleBlog } from "../services/single-blog";

const { locale } = useI18n();
const route = useRoute();

const { ramadan_ar, ramadan_en } = useGlobalVar();
const { singleBlog, status } = useSingleBlog(route.params.id);

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
