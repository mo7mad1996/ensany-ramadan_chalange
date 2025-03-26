<template>
  <div class="mt-4 flex flex-row">
    <v-col v-for="(item, index) in stats" :key="index" cols="12" md="4">
      <v-card class="px-4 py-4 elevation-1 bg-white">
        <v-row class="ma-0">
          <v-col cols="8">
            <p class="text-grey-darken-2">
              {{ $t(item.label) }}
            </p>
          </v-col>
          <v-col cols="4" class="d-flex justify-end">
            <v-img
              :src="item.icon"
              :alt="$t(item.label) + ' icon'"
              max-width="20"
              contain
              class="justify-end"
            />
          </v-col>
        </v-row>
        <h2 class="font-weight-bold mt-2">{{ item.value }}</h2>
      </v-card>
    </v-col>
  </div>
</template>

<script setup>
import { useDonorOverview } from "../services/overview";
import total_donations from "~/assets/images/donor/Frame 17.svg";
import active_campaigns from "~/assets/images/donor/Icon.png";
import upcoming_payments from "~/assets/images/donor/Money.png";
const { donorOverview } = useDonorOverview();

const stats = computed(() => [
  {
    label: "donor.total_donations",
    value: `$${donorOverview.value?.data?.total_donations ?? "0.00"}`,
    icon: total_donations,
  },
  {
    label: "donor.active_campaigns",
    value: donorOverview.value?.data?.active_campaigns || 0,
    icon: active_campaigns,
  },
  {
    label: "donor.upcoming_scheduled",
    value: `$${donorOverview.value?.data?.upcoming_payments ?? "0.00"}`,
    icon: upcoming_payments,
  },
]);
</script>

<style scoped></style>
