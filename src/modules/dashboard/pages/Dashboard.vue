<template>
  <div class="dashboard">
    <dashbordBreadcrumb :is-buttons="true" :is-link="false">
      <template #title>Overview</template>
      <template #first_button>{{ $t("global.donate_now") }}</template>
      <template #second_button>{{ $t("global.start_campaign") }}</template>
    </dashbordBreadcrumb>

    <div class="content mt-sm">
      <div class="cards grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-3">
        <div class="card bg-[#e0fce0] p-3 rounded-lg">
          <span>Total donations</span>

          <h4>40,689</h4>

          <div class="statistics flex items-center gap-x-3">
            <img
              src="../../../assets/images/dashboard/increment.svg"
              width="15"
              alt=""
            />

            <span>8.5% Up from yesterday</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dashbordBreadcrumb from "~/global/dashbord-breadcrumb.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "require-auth",
});
</script>
