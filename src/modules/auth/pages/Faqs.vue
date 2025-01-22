<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ $t("auth.fq_title") }} </template>
  </BreadCrumb>

  <Container class="faqs">
    <div class="title_desc">
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("auth.fq_title") }}
      </h1>

      <p class="text-sm">{{ $t("auth.fq_desc") }}</p>
    </div>

    <div class="questions w-full">
      <v-expansion-panels class="mb-6 mt-6" elevation="0">
        <v-expansion-panel v-for="(item, index) in faqs" :key="index">
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            <div class="flex items-center gap-x-3">
              <img :src="item.icon" alt="" />
              <h2 class="text-[#121212] text-xl font-bold">
                {{ item.question }}
              </h2>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>{{ item.answer }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
import { useFaqs } from "../typescript/faqs";
import { useGlobalVar } from "~/helpers/global-var";

const { faqs } = useFaqs();

const { locale } = useI18n();

const { ramadan_ar, ramadan_en } = useGlobalVar();

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
