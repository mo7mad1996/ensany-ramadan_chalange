<template>
  <HomeBanner />
  <HomeRamadanChalange />
  <HomeContriputing />
  <HomeParteners />
  <HomeChallengeHeros />
  <HomeCampaigns />
  <HomeFamouses />
  <HomeSuccessStories />
  <HomeLatestBlogs />
  <HomeLastSection />
</template>

<script setup>
import { useGlobalVar } from "~/helpers/global-var";
const { ramadan_ar, ramadan_en } = useGlobalVar();
const { locale } = useI18n();

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
