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
const { siteName } = useGlobalVar();
const { viewCampaign, status, similarCampaigns } = useViewCampaign(
  route.params.id
);

watchEffect(() => {
  if (status.value == "error") {
    console.log("Campaign not found, redirecting...");
    navigateTo(`/campaigns`);
  }
  siteName(viewCampaign.value?.name);
});

siteName(viewCampaign.value?.name);
</script>
