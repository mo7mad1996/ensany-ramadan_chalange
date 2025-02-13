<template>
  <div class="dashboard">
    <dashbordBreadcrumb :is-buttons="true" :is-link="false">
      <template #title>{{ $t("dashboard.overview") }}</template>
      <template #first_button>
        <v-btn
          class="text-capitalize rounded-lg"
          variant="flat"
          size="large"
          prepend-icon="mdi-content-copy"
          color="primary"
          @click="copy_url"
        >
          {{ $t("dashboard.copy") }}
        </v-btn>
      </template>
      <template #second_button>
        <nuxt-link to="/start-campaign">
          {{ $t("global.start_campaign") }}
        </nuxt-link>
      </template>
    </dashbordBreadcrumb>

    <div class="content mt-sm">
      <CharityStatistics />

      <ClientOnly>
        <!-- pie chart -->
        <v-card elevation="0" class="p-4 mt-sm w-full">
          <v-card-title>
            <div class="flex gap-x-2 items-center mb-4">
              <img
                loading="lazy"
                src="../../../assets/images/line-chart.svg"
                alt="...."
              />
              <h1 class="font-bold">
                {{ $t("dashboard.donation_transuctions") }}
              </h1>
            </div>
          </v-card-title>

          <div class="flex justify-center">
            <CharityPieChart />
          </div>
        </v-card>

        <!-- line chart -->
        <v-card elevation="0" class="p-4 mt-sm">
          <v-card-title>
            <div class="flex gap-x-2 items-center mb-4">
              <img
                loading="lazy"
                src="../../../assets/images/line-chart.svg"
                alt="...."
              />
              <h1 class="font-bold">
                {{ $t("dashboard.donation_growth") }}
              </h1>
            </div>
          </v-card-title>

          <CharityLineChart />
        </v-card>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CharityLineChart } from "#components";
import dashbordBreadcrumb from "~/global/dashbord-breadcrumb.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useAuth } from "~/modules/auth/services/auth";
const { user } = useAuth();
const { t } = useI18n();
const { $toast } = useNuxtApp();

definePageMeta({
  layout: "charity",
  middleware: "require-auth",
});

const { siteName } = useGlobalVar();
siteName("dashboard.page_title_dashboard");
const copy_url = () => {
  const url = `https://ramadanchallenges.com/${user.value.user_type}/${user.value.id}`;

  navigator.clipboard
    .writeText(url)
    .then(() => {
      $toast.success(t("home.toast_copy"));
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
};
</script>
