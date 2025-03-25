<template>
  <LazyHomeBanner hydrate-never />
  <LazyHomeRamadanChalange hydrate-on-visible />
  <LazyHomeContriputing hydrate-on-visible />
  <LazyHomeChallengeHeros hydrate-on-visible />
  <LazyHomeTable hydrate-on-visible />

  <LazyHomeCampaigns hydrate-on-visible />
  <LazyHomeParteners hydrate-on-visible />
  <!-- <LazyHomeFamouses  hydrate-on-visible/> -->
  <LazyHomeSuccessStories hydrate-on-visible />
  <LazyHomeLatestBlogs hydrate-on-visible />
  <LazyHomeLastSection hydrate-on-visible />
</template>

<script setup>
import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("home.page_title_home");
</script>
