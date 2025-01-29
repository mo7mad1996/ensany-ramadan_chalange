<template>
  <div class="dashboard_campaigns pb-sm">
    <dashbordBreadcrumb :is-buttons="true" :is-link="false">
      <template #title>Campaigns Overview</template>
      <template #first_button>{{ $t("global.donate_now") }}</template>
      <template #second_button>{{ $t("global.start_campaign") }}</template>
    </dashbordBreadcrumb>

    <div class="content pt-sm">
      <h2 class="text-xl font-bold">Fundraising History</h2>

      <!-- Data Table -->
      <v-card flat>
        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
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
          :items="desserts"
          :search="search"
        >
          <template v-slot:item.campaign_status="{ item }">
            <v-btn
              :color="item.campaign_status === 'Active' ? 'green' : 'red'"
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
import { ref } from "vue";

definePageMeta({
  layout: "dashboard",
  middleware: "require-auth",
});

const search = ref("");

const headers = ref([
  { key: "campaign_id", title: "Campaign ID", align: "start" },
  { key: "name", title: "Name" },
  { key: "campaign_goal", title: "Campaign Goal" },
  { key: "donation_amount", title: "Donation Amount" },
  { key: "no_donors", title: "No. of Donors" },
  { key: "campaign_status", title: "Campaign Status" },
]);

const desserts = ref([
  {
    campaign_id: "#0120000",
    name: "Feed a Family for Iftar",
    campaign_goal: "$1,000,000",
    donation_amount: "$125k",
    no_donors: 6000,
    campaign_status: "Active",
  },
  {
    campaign_id: "#0120001",
    name: "Build a Water Well",
    campaign_goal: "$500,000",
    donation_amount: "$200k",
    no_donors: 3200,
    campaign_status: "Completed",
  },
  {
    campaign_id: "#0120002",
    name: "Medical Aid for Refugees",
    campaign_goal: "$800,000",
    donation_amount: "$400k",
    no_donors: 4500,
    campaign_status: "Active",
  },
  {
    campaign_id: "#0120003",
    name: "Education for Orphans",
    campaign_goal: "$300,000",
    donation_amount: "$150k",
    no_donors: 2500,
    campaign_status: "Completed",
  },
]);
</script>
