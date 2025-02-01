<template>
    <div class="dashboard">
      <dashbordBreadcrumb :is-buttons="true" :is-link="false">
        <template #title>{{ $t("dashboard.overview") }}</template>
        <template #first_button>{{ $t("global.donate_now") }}</template>
        <template #second_button>{{ $t("global.start_campaign") }}</template>
      </dashbordBreadcrumb>
  
      <div class="content mt-sm">
        <CharityStatistics />
  
        <CharityCurrentCampaign />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import dashbordBreadcrumb from "~/global/dashbord-breadcrumb.vue";
  
  definePageMeta({
    layout: "donor",
    middleware: "require-auth",
  });
  </script>
  