<template>
  <HomeBanner />
  <HomeRamadanChalange />
  <HomeContriputing />
  <HomeParteners />
  <HomeChallengeHeros />
  <HomeTable />
  <HomeCampaigns />
  <HomeFamouses />
  <HomeSuccessStories />
  <HomeLatestBlogs />
  <HomeLastSection />
</template>

<script setup>
import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("home.page_title_home");
</script>
