<template>
  <LazyHomeBanner />
  <LazyHomeRamadanChalange />
  <LazyHomeContriputing />
  <LazyHomeChallengeHeros />
  <LazyHomeTable hydrate-never />

  <LazyHomeCampaigns hydrate-never />
  <LazyHomeParteners hydrate-never />
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
