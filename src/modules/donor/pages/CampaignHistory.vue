<template>
  <div class="dashboard">
    <h1 class="lg:flex xl:flex md:hidden hidden text-3xl font-bold">
      {{ $t("donor.campaigns_history") }}
    </h1>
    <div class="content mt-sm">
      <v-card flat>
        <v-data-table
          class="border rounded-lg"
          :items="donors"
          :headers="headers"
          item-value="id"
        >
          <template v-slot:item.name="{ item }">
            {{ item.name }}
          </template>
          <template v-slot:item.total_amount="{ item }">
            {{ item.total_amount }}
          </template>
          <template v-slot:item.donations="{ item }">
            {{ item.donations }}
          </template>
          <template v-slot:item.created_at="{ item }">
            {{ item.created_at }}
          </template>
          <template v-slot:item.status="{ item }">
            <v-btn
              :color="item.status === $t('donor.active') ? 'green' : 'red'"
              variant="tonal"
              size="small"
            >
              {{ item.status }}
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCampaignsHistoryPage } from "../typescript/campaign-history-page";

definePageMeta({
  layout: "donor",
  // middleware: "require-auth",
});

const { headers, donors } = useCampaignsHistoryPage();
</script>
