<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ $t("campaigns.donate") }} </template>
  </BreadCrumb>

  <CampaignsOverView />

  <CampaignsDonationForm />

  <CampaignsSimilarCampaigns />
</template>

<script setup>
import BreadCrumb from "~/global/BreadCrumb.vue";
useSeoMeta({
  title: "Ramadan | Campain",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
