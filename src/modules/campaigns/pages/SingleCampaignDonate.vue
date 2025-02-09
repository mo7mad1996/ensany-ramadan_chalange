<template>
  <BreadCrumb>
    <template #first_page>
      <NuxtLink to="/">
        {{ $t("global.home") }}
      </NuxtLink>
    </template>
    <template #second_page>
      <NuxtLink to="/campaigns">
        {{ $t("campaigns.campaigns") }}
      </NuxtLink>
    </template>
    <template #third_page> {{ viewCampaign?.name }} </template>
  </BreadCrumb>

  <div class="flex justify-center">
    <div class="flex xl:flex-row lg:flex-row md:flex-col flex-col gap-3">
      <CampaignsOverView :campaignData="viewCampaign" :status="status" />

      <CampaignsDonationForm />
    </div>
  </div>

  <CampaignsSimilarCampaigns :similarCampaigns="similarCampaigns" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import BreadCrumb from "~/global/BreadCrumb.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useViewCampaign } from "../services/single-campaign";
const route = useRoute();
const { ramadan_ar, ramadan_en } = useGlobalVar();
const { locale } = useI18n();
const { viewCampaign, status, similarCampaigns } = useViewCampaign(route.params.id);

watchEffect(() => {
  if (status.value == "error") {
    console.log("Campaign not found, redirecting...");
    navigateTo(`/campaigns`);
  }
});

useSeoMeta({
  title: locale.value == "ar" ? ramadan_ar : ramadan_en,
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

watch(locale, (newLocale) => {
  c;
  const isArabic = newLocale === "ar";

  useSeoMeta({
    title: isArabic ? ramadan_ar : ramadan_en,
  });
});
</script>
