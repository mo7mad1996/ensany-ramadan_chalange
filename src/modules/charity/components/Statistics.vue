<template>
  <div class="cards grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-3">
    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">
          {{ statisticsData?.total_donations }}
        </h4>
        <nuxt-img
          loading="lazy"
          src="/dashboard/donation.svg"
          alt="ramadanchallenges image"
        />
      </div>

      <span>{{ $t("dashboard.total_donations") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">
          {{ statisticsData?.total_donations_amount }}
        </h4>

        <nuxt-img
          loading="lazy"
          src="/mony.svg"
          alt="ramadanchallenges image"
        />
      </div>

      <span>{{ $t("dashboard.total_donations_amount") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">
          {{ statisticsData?.total_campaigns }}
        </h4>
        <nuxt-img
          loading="lazy"
          src="/dashboard/campaigns.svg"
          alt="ramadanchallenges image"
        />
      </div>

      <span>{{ $t("dashboard.total_campaigns") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">
          {{ statisticsData?.active_campaigns }}
        </h4>

        <nuxt-img
          loading="lazy"
          src="/dashboard/doners.svg"
          alt="ramadanchallenges image"
        />
      </div>

      <span>{{ $t("dashboard.active_campaigns") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">
          {{ statisticsData?.faild_donations }}
        </h4>
        <nuxt-img
          loading="lazy"
          src="/dashboard/warning.svg"
          alt="ramadanchallenges image"
        />
      </div>

      <span>{{ $t("dashboard.field_donations") }}</span>
    </div>

    <div class="card shadow-sm p-5 border rounded-lg">
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-bold pt-3 pb-3">
          {{ statisticsData?.successful_donations }}
        </h4>
        <nuxt-img
          loading="lazy"
          src="/dashboard/doners.svg"
          alt="ramadanchallenges image"
        />
      </div>

      <span>{{ $t("dashboard.success_donations") }}</span>
    </div>
  </div>
</template>
<script setup>
import { useCharityOverview } from "../services/overview";

const { charityOverview } = useCharityOverview();
const statisticsData = charityOverview.value?.data;
</script>
