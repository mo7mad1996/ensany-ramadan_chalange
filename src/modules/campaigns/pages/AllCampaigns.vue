<template>
  <BreadCrumb>
    <template #first_page>
      <NuxtLink to="/">
        {{ $t("global.home") }}
      </NuxtLink>
    </template>
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
        :id="campaign?.id"
        :key="index"
        :rate="(campaign?.total_amount / campaign?.price_target) * 100"
        :shadow="true"
        :donatebtn="true"
        :status="campaign?.status"
        :route="`/campaigns/donate/${campaign?.id}`"
        :in_cart="campaign?.in_cart || false"
        :cart_status="campaign?.cart_status || ''"
        :cart_id="campaign?.cart_id || ''"
        class="max-w-full h-full"
      >
        <template #image>
          <img
            loading="lazy"
            style="height: 240px"
            @click="$router.push(`/campaigns/${campaign.id}`)"
            :src="campaign?.image"
            class="w-full max-h-[15rem] object-cover rounded-lg"
            alt="ramadanchallenges image"
          />
        </template>

        <template #company> {{ campaign?.user?.name }}</template>

        <template #title>{{ campaign?.name }}</template>

        <template #desc>
          <span v-html="stripHtmlTags(campaign?.short_desc)?.slice(0, 30)"></span>
        </template>

        <template #subscribers>{{ campaign?.total_donors }}</template>

        <template #total_donation>${{ campaign?.price_target }}</template>

        <template #donation>${{ campaign?.total_amount }}</template>
      </Card>
    </div>

    <div class="pagination items-center justify-center pb-sm">
      <v-pagination
        v-if="status == 'success' && campaigns.length > 0"
        v-model="currentPage"
        :length="campaignsMeta.last_page"
        @click="handlePageChange(currentPage)"
        :total-visible="5"
      ></v-pagination>
    </div>
  </Container>
</template>

<script setup>
import BreadCrumb from "~/global/BreadCrumb.vue";
import Card from "~/global/Card.vue";
import Container from "~/global/Container.vue";
import SkeletonLoader from "~/global/SkeletonLoader.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { stripHtmlTags } from "~/helpers/string";
import { useCampaigns } from "../services/campaigns";

const isLoading = ref(true);
const router = useRouter();
const route = useRoute();

const lastPage = ref(1);
const { campaigns, currentPage, campaignsMeta, refresh, status } = useCampaigns();

const handlePageChange = async (newPage) => {
  isLoading.value = true;
  if (isLoading.value) return;
  if (newPage > campaignsMeta.value.last_page) {
    lastPage.value = campaignsMeta.value.last_page;
    currentPage.value = 1;
    router.push({ query: { page: 1 } });
  } else {
    currentPage.value = newPage;
    router.push({ query: { page: newPage } });
  }

  await refresh({ page: currentPage.value });
};

watch(currentPage, (page) => {
  router.push({ query: { page: page } });
});

const { siteName } = useGlobalVar();
siteName("campaigns.page_title_campaigns");

setTimeout(() => {
  isLoading.value = false;
}, 3000);
</script>
