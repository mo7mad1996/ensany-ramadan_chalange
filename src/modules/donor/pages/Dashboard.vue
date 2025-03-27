<template>
  <div class="dashboard">
    <h1 class="lg:flex xl:flex md:hidden hidden text-3xl font-bold">
      {{ $t("donor.overview") }}
    </h1>
    <div class="content mt-sm">
      <DonorWelcomeCard />
      <DonorStatisticsSection />
      <DonorTopDonors />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("donor.page_title_dashboard");

definePageMeta({
  layout: "donor",
  middleware: "require-auth",
});
</script>
