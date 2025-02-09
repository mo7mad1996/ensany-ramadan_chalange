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
    <CampaignForm class="relative top-[-130px]" :initData="payload" />
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
const { data } = await useAsyncData("get-campaign", () => getCampaign(id));

const payload = computed(() => {
  const enData = data.value.translations.find((i) => i.locale == "en");
  const arData = data.value.translations.find((i) => i.locale == "ar");

  // {a: 1}  =>  {"a:ar" : 1}
  const transformObj = (obj) => {
    const transformed = {};
    for (const key in obj) {
      transformed[`${key}:${obj.locale}`] = obj[key];
    }
    return transformed;
  };

  return {
    ...data.value,

    //
    category_id: data.value.category.id,
    currency_id: data.value.currency.id,

    // multi lang data
    ...transformObj(enData),
    ...transformObj(arData),

    // override
    sort: undefined,
  };
});
</script>

<style scoped>
@import "~/modules/home/style/start-campaign.css";
</style>
