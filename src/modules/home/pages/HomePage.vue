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
const { locale } = useI18n();

console.log("currant language", locale.value);

useSeoMeta({
  title: "التحدى الرمضانى",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";
  useSeoMeta({
    title: isArabic ? "التحدى الرمضانى" : "Ramadan Challenge",
  });
});
</script>
