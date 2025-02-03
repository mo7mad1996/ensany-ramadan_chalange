<template>
  <div class="dashboard">
    <h1 class="lg:flex xl:flex md:hidden hidden text-3xl font-bold">
      {{ $t("donor.donation_history") }}
    </h1>
    <div class="content mt-sm">
      <v-card flat>
        <v-data-table
          class="border rounded-lg"
          :items="donorDonation"
          :headers="headers"
          item-value="id"
        >
          <template v-slot:item.status="{ item }">
            <v-btn
              class="w-50"
              :color="getStatusColor(item.status)"
              elevation="0"
              size="small"
              style="text-transform: capitalize"
            >
              {{ item.status }}
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { useDonationHistoryPage } from "../typescript/donation";
import { useDonorDonationes } from "../services/donor-donation";

definePageMeta({
  layout: "donor",
  middleware: "require-auth",
});

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
</script>
