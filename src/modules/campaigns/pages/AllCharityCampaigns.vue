<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ charityName }} </template>
  </BreadCrumb>

  <Container class="all-campaigns">
    <h2 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
      {{ charityName }}
    </h2>

    <SkeletonLoader :loading="isLoading.toString()" />

    <div
      v-if="status == 'success'"
      class="campaigns grid gap-6 pt-sm pb-sm grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2"
    >
      <Card
        v-for="(campaign, index) in campaigns"
        :id="campaign.id"
        :key="index"
        :rate="(campaign?.total_amount / campaign?.price_target) * 100"
        :shadow="true"
        :donatebtn="true"
        :status="campaign?.status"
        :in_cart="campaign?.in_cart || false"
        :cart_status="campaign?.cart_status || ''"
        :cart_id="campaign?.cart_id || ''"
        :route="`/campaigns/donate/${campaign?.id}`"
        class="max-w-full h-full"
      >
        <template #image>
          <nuxt-img
            loading="lazy"
            @click="$router.push(`/campaigns/${campaign.id}`)"
            :src="campaign?.image"
            class="w-full max-h-[15rem] object-cover rounded-lg"
            alt="ramadanchallenges image"
          />
        </template>

        <template #company> {{ campaign?.user?.name }}</template>

        <template #title>{{ campaign?.name }}</template>

        <template #desc>
          <span
            v-html="stripHtmlTags(campaign?.short_desc)?.slice(0, 30)"
          ></span>
        </template>

        <template #subscribers>{{ campaign?.total_donors }}</template>

        <template #total_donation>${{ campaign?.price_target }}</template>

        <template #donation>${{ campaign?.total_amount }}</template>
      </Card>
    </div>

    <div class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-model="currentPage"
        :length="campaignsMeta.last_page"
        @input="fetchcharityCampaigns"
        :total-visible="5"
      ></v-pagination>
    </div>
  </Container>
</template>

<script setup>
import { useRoute } from "vue-router";
import BreadCrumb from "~/global/BreadCrumb.vue";
import Card from "~/global/Card.vue";
import Container from "~/global/Container.vue";
import SkeletonLoader from "~/global/SkeletonLoader.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { stripHtmlTags } from "~/helpers/string";

import { useCharityCampaigns } from "../services/charitycampaigns";
const { locale } = useI18n();
const isLoading = ref(true);
const charityName = ref("");
const { t } = useI18n();
const route = useRoute();

const { siteName } = useGlobalVar();
const { campaigns, campaignsMeta, refresh, status, currentPage } =
  useCharityCampaigns(route.params.id);

const fetchcharityCampaigns = () => refresh();
watchEffect(() => {
  if (campaigns.value && campaigns.value.length > 0) {
    nextTick(() => {
      //   t("campaigns.all_campaigns") + " / " +
      charityName.value = campaigns.value[0]?.user?.name ?? "";
    });
  } else if (!campaigns.value) {
    navigateTo("/");
  }
});

watch(currentPage, (newPage) => {
  fetchcharityCampaigns();
});

siteName(null, charityName.value);

// only simulation for test skeleton loader
setTimeout(() => {
  isLoading.value = false;
}, 3000);
</script>
