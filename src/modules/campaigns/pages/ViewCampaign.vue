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
const { siteName } = useGlobalVar();
const route = useRoute();
const { viewCampaign, status, target, amount, similarCampaigns } =
  useViewCampaign(route.params.id);

watchEffect(() => {
  if (status.value == "error") {
    navigateTo(`/campaigns`);
  }
  siteName(null, viewCampaign.value?.name);
});
</script>
