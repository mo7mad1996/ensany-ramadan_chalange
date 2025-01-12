<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ $t("campaigns.donate") }} </template>
  </BreadCrumb>

  <div class="flex justify-center">
    <div class="flex xl:flex-row lg:flex-row md:flex-col flex-col gap-3">
      <CampaignsOverView />

      <CampaignsDonationForm />
    </div>
  </div>

  <CampaignsSimilarCampaigns />
</template>

<script setup>
import BreadCrumb from "~/global/BreadCrumb.vue";
const { locale } = useI18n();

useSeoMeta({
  title: "رمضان | حمله",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";
  useSeoMeta({
    title: isArabic ? "رمضان |حمله" : "Ramadan | Campain",
  });
});
</script>
