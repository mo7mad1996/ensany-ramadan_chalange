<template>
  <div class="dashboard_campaigns pb-sm">
    <dashbordBreadcrumb :is-buttons="true" :is-link="false">
      <template #title>{{ $t("dashboard.campaigns_overview") }}</template>
      <template #first_button>{{ $t("global.donate_now") }}</template>
      <template #second_button>{{ $t("global.start_campaign") }}</template>
    </dashbordBreadcrumb>

    <div class="content pt-sm">
      <h2 class="text-xl font-bold">
        {{ $t("dashboard.fundraising_history") }}
      </h2>

      <v-card flat>
        <v-text-field
          v-model="search"
          density="compact"
          :label="$t('global.search')"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          flat
          hide-details
          single-line
          class="pb-4 pt-4 rounded-lg w-1/4"
        ></v-text-field>

        <v-data-table
          class="border"
          :headers="headers"
          :items="campaigns"
          :search="search"
        >
          <template v-slot:item.campaign_status="{ item }">
            <v-btn
              :color="
                item.campaign_status === $t('dashboard.active') ||
                item.campaign_status === 'نشط'
                  ? 'green'
                  : 'red'
              "
              variant="tonal"
              size="small"
            >
              {{ item.campaign_status }}
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import dashbordBreadcrumb from "~/global/dashbord-breadcrumb.vue";
import { useCampaignsPage } from "../typescript/campaigns-page";
definePageMeta({
  layout: "charity",
  middleware: "require-auth",
});

const { search, campaigns, headers } = useCampaignsPage();
</script>
