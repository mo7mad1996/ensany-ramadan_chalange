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
              class="flex items-center space-x-2 cursor-pointer hover:text-blue-600"
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
          <template v-slot:item.total_amount="{ item }">
            <span class="font-bold text-green-600">
              {{ parseFloat(item.total_amount).toLocaleString() }}
            </span>
          </template>

          <template v-slot:item.status="{ item }">
            <v-btn
              class="w-full"
              :color="item.status === 'published' ? '#bafbc4' : '#5C7762'"
              elevation="0"
              size="small"
              style="text-transform: capitalize"
            >
              {{ item.status }}
            </v-btn>
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
</script>
