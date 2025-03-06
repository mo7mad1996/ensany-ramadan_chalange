<template>
  <ClientOnly>
    <HomeBanner />
    <HomeRamadanChalange />
    <HomeContriputing />
    <HomeChallengeHeros />
    <HomeTable />
    <HomeCampaigns />
    <HomeParteners />
    <!-- <HomeFamouses /> -->
    <HomeSuccessStories />
    <HomeLatestBlogs />
    <HomeLastSection />
  </ClientOnly>
</template>

<script setup>
import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("home.page_title_home");
</script>
