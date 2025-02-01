<template>
  <div class="dashboard_campaigns pb-sm">
    <div>
      <h1 class="text-3xl text-start font-bold">
        {{ $t("dashboard.settings") }}
      </h1>
      <p>{{ $t("dashboard.settings_desc") }}</p>
    </div>

    <div class="content pt-sm">
      <CharityAccountSettings />
    </div>
  </div>
</template>

<script setup>
import { CharityAccountSettings } from "#components";

definePageMeta({
  layout: "charity",
  middleware: "require-auth",
});
</script>
