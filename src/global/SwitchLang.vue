<template>
  <NuxtLink
    class="d-flex align-center ga-3 cursor-pointer"
    @click="setLocale(locale == 'ar' ? 'en' : 'ar')"
    :to="switchLocalePath(locale == 'ar' ? 'en' : 'ar')"
  >
    <span>{{ locale == "ar" ? "English" : "عربى" }}</span>
    <img src="../assets/images/lang.svg" width="15" alt="" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<style>
.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
