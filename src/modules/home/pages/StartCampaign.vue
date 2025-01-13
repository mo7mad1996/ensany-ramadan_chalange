<template>
  <div class="start_campaign">
    <!-- start campaign banner -->
    <div class="start_campaign_banner">
      <div
        class="content relative w-full h-full flex items-center justify-center"
      >
        <div class="text-center">
          <h1 class="text-white text-[46px] font-bold">
            {{ $t("home.start_banner_title") }}
          </h1>

          <p class="text-sm text-white pt-2 pb-4">
            {{ $t("home.start_banner_desc") }}
          </p>
        </div>
      </div>
    </div>

    <!-- start campaign form -->
    <HomeStartCampainForm class="relative top-[-130px]" />
  </div>
</template>

<style scoped>
@import "../style/start-campaign.css";
</style>
