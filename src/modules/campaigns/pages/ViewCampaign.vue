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

  <Container class="relative">
    <div class="grid grid-cols-12 gap-5">
      <div class="xl:col-span-8 lg:col-span-8 md:col-span-12 col-span-12">
        <CampaignsViewDetails
          :campaign="viewCampaign"
          :target="target"
          :amount="amount"
          :status="status"
        />
      </div>

      <div
        class="xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12 sticky top-0 z-10"
      >
        <CampaignsViewActions
          :campaign="viewCampaign"
          :target="target"
          :amount="amount"
          :status="status"
        />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import BreadCrumb from "~/global/BreadCrumb.vue";
import Container from "~/global/Container.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useViewCampaign } from "../services/single-campaign";
const { locale } = useI18n();
const route = useRoute();

const { ramadan_ar, ramadan_en } = useGlobalVar();
const { viewCampaign, status, target, amount, similarCampaigns } = useViewCampaign(
  route.params.id
);

watchEffect(() => {
  if (status.value == "error") {
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
  const isArabic = newLocale === "ar";
  useSeoMeta({
    title: isArabic ? ramadan_ar : ramadan_en,
  });
});
</script>
