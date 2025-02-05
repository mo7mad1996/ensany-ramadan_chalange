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
          <!-- Image & Name -->
          <!-- <template v-slot:item.name="{ item }">
            <div class="flex items-center space-x-2">
              <v-avatar size="40">
                <img
                  :src="item.image"
                  alt="Donation Image"
                  class="rounded-lg"
                />
              </v-avatar>
              <span>{{ item.name }}</span>
            </div>
          </template> -->
          <!-- Bold &  Total Amount -->
          <template v-slot:item.amount="{ item }">
            <span class="font-bold text-green-600">
              ${{ parseFloat(item.amount).toLocaleString() }}
            </span>
          </template>
          <template v-slot:item.status="{ item }">
            <span
              class="inline-block text-white text-sm font-medium rounded-md"
              :style="`background-color: ${getStatusColor(
                item.status
              )}; padding: 3px 6px; text-transform: capitalize; min-width: 70px; display: inline-flex; justify-content: center; align-items: center;`"
            >
              {{ item.status }}
            </span>
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
