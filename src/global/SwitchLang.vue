<template>
  <div
    class="d-flex align-center ga-3 cursor-pointer"
    @click="switchLanguage(currentLocale == 'ar' ? 'en' : 'ar')"
  >
    <span>{{ currentLocale == "ar" ? "English" : "عربى" }}</span>
    <img src="../assets/images/lang.svg" width="15" alt="" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
// import { setLanguage } from "@/helpers/i18n";

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const switchLanguage = (newLocale: string) => {
  // setLanguage(newLocale);
};
</script>

<style>
.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
