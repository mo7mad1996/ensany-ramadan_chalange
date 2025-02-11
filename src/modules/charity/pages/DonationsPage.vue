<template>
  <div class="dashboard_campaigns pb-sm">
    <dashbordBreadcrumb :is-buttons="true" :is-link="false">
      <template #title>{{ $t("dashboard.donation_overview") }}</template>
      <template #first_button>{{ $t("global.donate_now") }}</template>
      <template #second_button>
        <nuxt-link to="/start-campaign">
          {{ $t("global.start_campaign") }}
        </nuxt-link></template
      >
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
        </div>

        <v-data-table
          class="border"
          :items="charityDonat"
          :search="search"
          :headers="headers"
          :items-per-page="itemsPerPage"
          :page="currentPage"
          :server-items-length="totalItems"
          :loading="status === 'pending'"
          @update:page="currentPage = $event"
          @update:items-per-page="itemsPerPage = $event"
        >
          <template v-slot:item.total_amount="{ item }">
            <p class="mb-0 font-bold text-primary">${{ item.total_amount }}</p>
          </template>

          <template v-slot:item.donated_at="{ item }">
            {{ reFormat2(item.donated_at) }}
          </template>
          <template v-slot:item.campaign="{ item }">
            <nuxt-link
              className="text-blue-500 underline"
              :to="{
                name: 'view-campaign',
                params: { id: item.campaign?.id },
              }"
            >
              {{ item.campaign?.name }}
            </nuxt-link>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import { reFormat2 } from "~/helpers/format-date";
import "@vuepic/vue-datepicker/dist/main.css";
import { useCharityDonations } from "../services/charity-donations";
import dashbordBreadcrumb from "~/global/dashbord-breadcrumb.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useDonationsPage } from "../typescript/donations-page";
definePageMeta({
  layout: "charity",
  middleware: "require-auth",
});

const isFilter = ref(false);
const filter_date = ref("");
const amount = ref("");
const { search, headers } = useDonationsPage();
const { charityDonat, status, totalItems, itemsPerPage, currentPage } =
  useCharityDonations();

const openFilter = () => {
  isFilter.value = !isFilter.value;
};

const { siteName } = useGlobalVar();
siteName("dashboard.page_title_charity_donations");
</script>
