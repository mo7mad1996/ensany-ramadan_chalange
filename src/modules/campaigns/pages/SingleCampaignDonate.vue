<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page>
      {{ $t("campaigns.donate") }}
    </template>
  </BreadCrumb>

  <div class="flex justify-center">
    <div class="flex xl:flex-row lg:flex-row md:flex-col flex-col gap-3">
      <CampaignsOverView />

      <CampaignsDonationForm />
    </div>
  </div>

  <CampaignsSimilarCampaigns />
</template>

<script setup lang="ts">
import BreadCrumb from "~/global/BreadCrumb.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useViewCampaign } from "../services/single-campaign";
import { useRoute } from "vue-router";
const route = useRoute();
const { ramadan_ar, ramadan_en } = useGlobalVar();

const { locale } = useI18n();

const { viewCampaign, status, target, amount } = useViewCampaign(
  route.params.id
);

useSeoMeta({
  title: locale.value == "ar" ? ramadan_ar : ramadan_en,
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

watch(locale, (newLocale) => {
  // const name = viewCampaign?.value?.name;

  const isArabic = newLocale === "ar";

  useSeoMeta({
    title: isArabic ? ramadan_ar : ramadan_en,
  });
});
</script>
