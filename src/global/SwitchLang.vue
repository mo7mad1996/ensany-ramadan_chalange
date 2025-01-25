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
import { startLoader } from "~/helpers/nprogress";
import { stopLoader } from "~/helpers/nprogress";
import { useCountries } from "~/modules/auth/services/countries";
import { useCampaigns } from "~/modules/campaigns/services/api";
import { useBlogs } from "~/modules/blogs/services/blogs";
const { locale, setLocale } = useI18n();
const { refresh: refreshCountries, clear: clearCountries } = useCountries();
const { refresh: refreshBlogs } = useBlogs();
const { refresh: refrechCamapaigns } = useCampaigns();

//this function to refresh api calls after switch lang
const recall = async () => {
  startLoader();
  clearCountries();
  refreshCountries();
  refrechCamapaigns();
  refreshBlogs();
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
