<template>
  <NuxtLink
    class="d-flex align-center ga-3 cursor-pointer"
    @click="setLocale(locale == 'ar' ? 'en' : 'ar')"
  >
    <span>{{ locale == "ar" ? "English" : "عربى" }}</span>
    <img src="../assets/images/lang.svg" width="15" alt="" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { startLoader } from "~/helpers/nprogress";
import { stopLoader } from "~/helpers/nprogress";
import { useCountries } from "~/modules/auth/services/countries";
import { useCampaigns } from "~/modules/campaigns/services/campaigns";
import { useBlogs } from "~/modules/blogs/services/blogs";
import { usePublicCmapaigns } from "~/modules/home/services/public-campaigns";
import { useParteners } from "~/modules/home/services/parteners";
import { useStories } from "~/modules/stories/services/stories";
import { useFaqs } from "~/modules/auth/services/faqs";
import { useViewCampaign } from "~/modules/campaigns/services/single-campaign";
const route = useRoute();
const { locale, setLocale } = useI18n();
const { refresh: refreshCountries, clear: clearCountries } = useCountries();
const { refresh: refreshBlogs } = useBlogs();
const { refresh: refrechCamapaigns } = useCampaigns();
const { refresh: refrechPublicCampaigns } = usePublicCmapaigns();
const { refresh: refreshParteners } = useParteners();
const { refresh: refreshStories } = useStories();
const { refresh: refreshFaqs } = useFaqs();
const { refresh: refreshViewCamp } = useViewCampaign(route.params.id);

//this function to refresh api calls after switch lang
const recall = async () => {
  startLoader();
  clearCountries();
  refreshCountries();
  refrechCamapaigns();
  refreshBlogs();
  refrechPublicCampaigns();
  refreshParteners();
  refreshStories();
  refreshFaqs();
  refreshViewCamp();
  stopLoader();
};

watch(locale, async (newLocale) => {
  recall();
  const isArabic = newLocale === "ar";
  useHead({
    htmlAttrs: {
      dir: isArabic ? "rtl" : "ltr",
    },
  });
});
</script>
