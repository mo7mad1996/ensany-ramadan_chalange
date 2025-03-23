<template>
  <div class="dashboard">
    <h1 class="lg:flex xl:flex md:hidden hidden text-3xl font-bold">
      {{ $t("donor.donation_history") }}
    </h1>
    <div class="content mt-sm">
      <div class="loader" v-if="status == 'pending'" />
      <v-card flat v-else-if="status == 'success'">
        <v-data-table
          class="border rounded-lg"
          :items="donorDonation"
          :headers="headers"
          item-value="id"
        >
          <!-- Image & Name -->
          <!-- <template v-slot:item.name="{ item }">
            <div class="flex items-center space-x-2">
              <v-avatar size="40">
                <nuxt-img loading="lazy" 
                  :src="item.image"
                  alt="Donation Image"
                  class="rounded-lg"
                />
              </v-avatar>
              <span>{{ item.name }}</span>
            </div>
          </template> -->
          <!-- Bold &  Total Amount -->
          <template v-slot:item.total_amount="{ item }">
            <span class="font-bold text-green-600">
              ${{ parseFloat(item.total_amount).toLocaleString() }}
            </span>
          </template>
          <template v-slot:item.status="{ item }">
            <span
              class="inline-block text-white text-sm font-medium rounded-md"
              :style="`background-color: ${getStatusColor(
                item.status
              )}; padding: 3px 6px; text-transform: capitalize; min-width: 70px; display: inline-flex; justify-content: center; align-items: center;`"
            >
              {{ getStatusText(item.status) }}
            </span>
          </template>
          <template v-slot:item.created_at="{ item }">
            {{ formattedDate(item.created_at) }}
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import { useDonorDonationes } from "../services/donor-donation";
import { useDonationHistoryPage } from "../typescript/donation";

import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("donor.page_title_donor_donation_history");

definePageMeta({
  layout: "donor",
  middleware: "require-auth",
});

const { t } = useI18n();
const { headers } = useDonationHistoryPage();
const { donorCampMeta, donorDonation, status } = useDonorDonationes();
const getStatusColor = (status) => {
  switch (status) {
    case "donated":
      return "#28A745";
    case "wait":
      return "#FFC107";
    case "rejected":
      return "#DC3545";
    default:
      return "#5C7762";
  }
};
const formattedDate = (dateString) => {
  return dateString ? dayjs(dateString).format("YYYY-MM-DD HH:mm") : null;
};
const getStatusText = (status) => {
  const statusKeys = {
    donated: "donor.status_donated",
    wait: "donor.status_wait",
    rejected: "donor.status_rejected",
  };
  return statusKeys[status] ? t(statusKeys[status]) : status;
};
</script>
