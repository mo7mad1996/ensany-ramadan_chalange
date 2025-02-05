<template>
    <div class="dashboard_campaigns pb-sm">
      <div>
        <h1 class="text-3xl text-start font-bold">
          {{ $t("donor.settings") }}
        </h1>
        <p>{{ $t("donor.settings_desc") }}</p>
      </div>
  
      <div class="content pt-sm">
        <DonorAccountSettings />
      </div>
    </div>
  </template>
  
  <script setup>

  
  definePageMeta({
    layout: "donor",
    middleware: "require-auth",
  });
  </script>
  