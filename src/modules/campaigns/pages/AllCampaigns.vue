<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ $t("global.campaigns") }} </template>
  </BreadCrumb>

  <Container class="all-campaigns">
    <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ $t("campaigns.all_campaigns") }}
    </h1>

    <SkeletonLoader :loading="status" />

    <div
      v-if="status == 'success'"
      class="campaigns grid gap-6 pt-sm pb-sm grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2"
    >
      <Card
        v-for="(campaign, index) in campaigns"
        :key="index"
        :rate="20"
        :shadow="true"
        :donatebtn="true"
        :route="`/campaigns/donate/${index + 1}`"
      >
        <template #image>
          <img
            @click="$router.push(`/campaigns/${index + 1}`)"
            src="../../../assets/images/chalenge-img.png"
            class="w-100"
            alt=""
          />
        </template>

        <template #company> {{ campaign?.user?.name }}</template>

        <template #title>{{ campaign?.name }}</template>

        <template #desc> {{ $t("home.card_desc") }}</template>

        <template #subscribers>{{ campaign?.total_donors }}</template>

        <template #total_donation>${{ campaign?.price_target }}</template>

        <template #donation>${{ campaign.total_amount }}</template>
      </Card>
    </div>

    <div class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-model="currentPage"
        :length="campaignsMeta.last_page"
        :total-visible="5"
        @click="fetchCampaigns"
      ></v-pagination>
    </div>
  </Container>
</template>

<script setup>
import Container from "~/global/Container.vue";
import Card from "~/global/Card.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
import SkeletonLoader from "~/global/SkeletonLoader.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useCampaigns } from "../services/api";
const { locale } = useI18n();
const isLoading = ref(true);

const { ramadan_ar, ramadan_en } = useGlobalVar();
const {
  campaigns,
  campaignsMeta,
  campaigns_error,
  refresh,
  status,
  currentPage,
} = useCampaigns();

const fetchCampaigns = () => {
  refresh();
};

watch(currentPage, (newPage) => {
  fetchCampaigns();
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

// only simulation for test skeleton loader
setTimeout(() => {
  isLoading.value = false;
}, 3000);
</script>
