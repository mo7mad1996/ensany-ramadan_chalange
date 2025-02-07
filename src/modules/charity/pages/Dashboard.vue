<template>
  <div class="dashboard">
    <dashbordBreadcrumb :is-buttons="true" :is-link="false">
      <template #title>{{ $t("dashboard.overview") }}</template>
      <template #first_button>{{ $t("global.donate_now") }}</template>
      <template #second_button>
        <nuxt-link to="/start-campaign">
          {{ $t("global.start_campaign") }}
        </nuxt-link>
      </template>
      <template #third_button>
        <nuxt-link to="/start-campaign">
       Copy Link
        </nuxt-link>
      </template>
    </dashbordBreadcrumb>

    <div class="content mt-sm">
      <CharityStatistics />

      <ClientOnly>
        <!-- pie chart -->
        <v-card elevation="0" class="p-4 mt-sm w-full">
          <v-card-title>
            <div class="flex gap-x-2 items-center mb-4">
              <img src="../../../assets/images/line-chart.svg" alt="...." />
              <h1 class="font-bold">
                {{ $t("dashboard.donation_transuctions") }}
              </h1>
            </div>
          </v-card-title>

          <div class="flex justify-center">
            <CharityPieChart />
          </div>
        </v-card>

        <!-- line chart -->
        <v-card elevation="0" class="p-4 mt-sm">
          <v-card-title>
            <div class="flex gap-x-2 items-center mb-4">
              <img src="../../../assets/images/line-chart.svg" alt="...." />
              <h1 class="font-bold">
                {{ $t("dashboard.donation_growth") }}
              </h1>
            </div>
          </v-card-title>

          <CharityLineChart />
        </v-card>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CharityLineChart } from "#components";
import dashbordBreadcrumb from "~/global/dashbord-breadcrumb.vue";

definePageMeta({
  layout: "charity",
  middleware: "require-auth",
});
</script>
