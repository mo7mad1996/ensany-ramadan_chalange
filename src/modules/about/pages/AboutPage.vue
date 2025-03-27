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
import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("about.page_title_about");
</script>
