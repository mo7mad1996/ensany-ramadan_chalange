<template>
  <NuxtLink
    class="d-flex align-center ga-3 cursor-pointer"
    @click="setLocale(locale == 'ar' ? 'en' : 'ar')"
  >
    <span>{{ locale == "ar" ? "English" : "عربى" }}</span>
    <img
      loading="lazy"
      src="../assets/images/lang.svg"
      width="15"
      alt="ramadanchallenges image"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();
const cookie: any = useCookie("i18n_redirected");

// Set initial locale from cookie or default to Arabic
onMounted(() => {
  const savedLocale = cookie.value || "ar";
  cookie.value = savedLocale;
  setLocale(savedLocale);
});

watch(locale, async (newLocale: string) => {
  const isArabic = newLocale === "ar";
  cookie.value = newLocale;
  useHead({
    htmlAttrs: {
      dir: isArabic ? "rtl" : "ltr",
    },
  });
});
</script>
