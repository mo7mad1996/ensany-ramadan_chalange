<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ $t("global.about_us") }} </template>
  </BreadCrumb>
  <AboutWhyRamadan />
  <AboutOurStory />
  <AboutOurMission />
  <AboutBringChallenges />
  <AboutOurImpact />
  <HomeSuccessStories />
  <HomeLastSection />
</template>

<script setup>
import BreadCrumb from "~/global/BreadCrumb.vue";
useSeoMeta({
  title: "Ramadan | About",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
