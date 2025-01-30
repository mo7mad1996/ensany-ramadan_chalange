<template>
  <div class="dashboard_campaigns pb-sm">
    <dashbordBreadcrumb :is-buttons="true" :is-link="false">
      <template #title>{{ $t("dashboard.donation_overview") }}</template>
      <template #first_button>{{ $t("global.donate_now") }}</template>
      <template #second_button>{{ $t("global.start_campaign") }}</template>
    </dashbordBreadcrumb>

    <div class="content pt-sm">
      <h2 class="text-xl font-bold">
        {{ $t("dashboard.donation_history") }}
      </h2>

      <v-card flat>
        <div class="flex items-center justify-between">
          <div class="w-full">
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
          </div>
          <v-btn
            prepend-icon="mdi-filter-outline"
            style="text-transform: capitalize"
            elevation="0"
            variant="outlined"
            @click="openFilter"
            >{{ $t("dashboard.add_filter") }}</v-btn
          >
        </div>

        <div
          class="filter-inputs flex items-center gap-x-3 pb-3"
          v-if="isFilter"
        >
          <select
            id="filter_status"
            class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          >
            <option value="" disabled selected>
              {{ $t("dashboard.select_status") }}
            </option>
            <option value="active">{{ $t("dashboard.active") }}</option>
            <option value="active">{{ $t("dashboard.completed") }}</option>
          </select>

          <Datepicker
            v-model="filter_date"
            class="custom-datepicker"
            date-picker
            placeholder="MM/DD/YY"
          />
          <input
            type="text"
            id="filter_status"
            v-model="amount"
            placeholder="$0"
            class="block w-full px-3 py-3 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
          />
        </div>

        <v-data-table
          class="border"
          :headers="headers"
          :items="donations"
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
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import dashbordBreadcrumb from "~/global/dashbord-breadcrumb.vue";
import { useDonationsPage } from "../typescript/donations-page";
definePageMeta({
  layout: "charity",
  middleware: "require-auth",
});

const isFilter = ref(false);
const filter_date = ref("");
const amount = ref("");
const { search, donations, headers } = useDonationsPage();

const openFilter = () => {
  isFilter.value = !isFilter.value;
};
</script>
