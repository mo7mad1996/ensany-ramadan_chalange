<template>
  <div class="start_campaign">
    <!-- start campaign banner -->
    <div class="start_campaign_banner">
      <div
        class="content relative w-full h-full flex items-center justify-center"
      >
        <div class="text-center">
          <h1 class="text-white text-[46px] font-bold">
            {{ $t("home.start_banner_title") }}
          </h1>

          <p class="text-sm text-white pt-2 pb-4">
            {{ $t("home.start_banner_desc") }}
          </p>
        </div>
      </div>
    </div>

    <!-- start campaign form -->
    <CampaignForm class="relative top-[-130px]" :initData="data" />
  </div>
</template>

<script setup>
import { useCampaign } from "../../services/campaign";
import CampaignForm from "~/modules/home/components/StartCampainForm.vue";

// config
const route = useRoute();
const { getCampaign } = useCampaign();

const { locale } = useI18n();

useSeoMeta({
  title: locale.value == "ar" ? "تعديل الحملة" : "Edit campaign",
});
// data
const { id } = route.params;
const { data, error, status } = await useAsyncData("get-campaign", () =>
  getCampaign(id)
);
</script>

<style scoped>
@import "~/modules/home/style/start-campaign.css";
</style>
