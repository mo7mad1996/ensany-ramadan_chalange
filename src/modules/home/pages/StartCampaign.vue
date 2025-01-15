<template>
  <div class="start_campaign">
    <!-- start campaign banner -->
    <div class="start_campaign_banner">
      <div
        class="content relative w-full h-full flex items-center justify-center"
      >
        <div class="text-center">
          <h1 class="text-white text-[46px] font-bold">
            {{ $t("home.start_banner_title") }}
          </h1>

          <p class="text-sm text-white pt-2 pb-4">
            {{ $t("home.start_banner_desc") }}
          </p>
        </div>
      </div>
    </div>

    <!-- start campaign form -->
    <HomeStartCampainForm class="relative top-[-130px]" />
  </div>
</template>

<script setup>
import { useGlobalVar } from "~/helpers/global-var";
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

<style scoped>
@import "../style/start-campaign.css";
</style>
