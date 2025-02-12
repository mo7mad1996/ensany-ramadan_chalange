<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { defineRule } from "vee-validate";
const { t } = useI18n();

defineRule("phone", (value) => {
  const phoneRegex = /^\+?[\d\s().-]{7,}$/;

  return phoneRegex.test(value) || t("auth.validation.phone");
});
</script>
