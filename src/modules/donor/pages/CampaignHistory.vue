<template>
  <div class="dashboard">
    <h1 class="lg:flex xl:flex md:hidden hidden text-3xl font-bold">
      {{ $t("donor.campaigns_history") }}
    </h1>
    <div class="content mt-sm">
      <v-card flat>
        <v-data-table
          class="border rounded-lg"
          :items="donorCampaigns"
          :headers="headers"
          item-value="id"
        >
          <!-- Image & Name -->
          <template v-slot:item.name="{ item }">
            <div
              class="flex items-center gap-2 space-x-2 cursor-pointer hover:text-blue-600"
              @click="navigateToCampaign(item.id)"
            >
              <v-avatar size="40">
                <img
                  :src="item.image"
                  alt="Campaign Image"
                  class="rounded-lg"
                />
              </v-avatar>
              <span>{{ item.name }}</span>
            </div>
          </template>

          <!-- Bold &  Total Amount -->
          <template v-slot:item.amount="{ item }">
            <span class="font-bold text-green-600">
              ${{ parseFloat(item.amount).toLocaleString() }}
            </span>
          </template>

          <template v-slot:item.status="{ item }">
            <span
              class="inline-block w-full text-sm font-medium rounded-md text-center py-2 px-4 capitalize"
              :class="getStatusClass(item.status)"
            >
              {{ $t(`donor.${item.status}`) }}
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
import { useDonorCamoaigns } from "../services/donor-campaign";
import { useCampaignsHistoryPage } from "../typescript/campaign-history-page";
import { useRouter } from "vue-router";
definePageMeta({
  layout: "donor",
  middleware: "require-auth",
});
const router = useRouter();
const { headers } = useCampaignsHistoryPage();
const { donorCampMeta, donorCampaigns, status } = useDonorCamoaigns();
const formattedDate = (dateString) => {
  return dateString ? dayjs(dateString).format("YYYY-MM-DD HH:mm") : null;
};
const navigateToCampaign = (campaignId) => {
  router.push(`/campaigns/donate/${campaignId}`);
};
const getStatusClass = (status) => {
  switch (status) {
    case "pending":
      return "bg-yellow-200 text-black";
    case "published":
      return "bg-green-200 text-black";
    case "paused":
      return "bg-gray-400 text-white";
    case "ended":
      return "bg-red-500 text-white";
    case "completed":
      return "bg-blue-500 text-white";
    case "cancelled":
      return "bg-gray-600 text-white";
    case "rejected":
      return "bg-red-700 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};
</script>
