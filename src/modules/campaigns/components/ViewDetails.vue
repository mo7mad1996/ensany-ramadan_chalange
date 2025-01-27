<template>
  <section aria-label="view details section" class="view_details">
    <div class="image relative rounded-lg">
      <img
        :src="campaign?.image"
        class="w-full h-[370px] object-cover rounded-lg"
        alt=""
      />

      <div class="text absolute bottom-5 p-4 w-full">
        <h1 class="text-white text-4xl font-bold">
          {{ campaign?.name }}
        </h1>

        <div class="progress_bar relative flex items-center gap-x-2">
          <v-progress-linear
            :model-value="(amount / target) * 100"
            class="rounded-lg mt-2"
            :height="10"
          ></v-progress-linear>

          <span class="pers text-[16px] font-bold text-white"
            >{{ ((amount / target) * 100).toFixed(1) }}%</span
          >
        </div>
      </div>
    </div>

    <!-- skeleton loader for camapin details section -->
    <v-skeleton-loader
      v-if="status == 'pending'"
      type="list-item-two-line"
    ></v-skeleton-loader>

    <!-- campaign details -->
    <div
      v-if="status == 'success'"
      class="details mt-5 flex flex-wrap gap-y-3 items-center justify-between"
    >
      <div class="collected flex items-cener gap-1">
        <span class="text-[#12121299]">{{ $t("campaigns.collected") }}:</span>
        <span class="text-primary"
          >{{ campaign?.total_amount }} {{ $t("campaigns.usd") }}</span
        >
      </div>

      <div class="collected flex items-cener gap-1">
        <v-icon color="red">mdi-heart-outline</v-icon>
        <span class="text-primary"
          >{{ campaign?.total_donors }} {{ $t("campaigns.donater") }}</span
        >
      </div>

      <div class="collected flex items-cener gap-1">
        <span class="text-[#12121299]">{{ $t("campaigns.remaining") }}:</span>
        <span class="text-primary"
          >{{ campaign?.remaining_days }} {{ $t("campaigns.days") }}</span
        >
      </div>

      <div class="collected flex items-cener gap-1">
        <span class="text-[#12121299]"
          >{{ $t("campaigns.campaign_objective") }}:</span
        >
        <span class="text-primary"
          >{{ campaign?.price_target }} {{ $t("campaigns.usd") }}</span
        >
      </div>
    </div>

    <v-skeleton-loader
      v-if="status == 'pending'"
      type="avatar, list-item-two-line"
    ></v-skeleton-loader>

    <!-- campain maker -->
    <div
      class="honor-compan d-flex ga-2 align-center mt-5"
      v-if="status == 'success'"
    >
      <img src="../../../assets/images/honor-company.svg" width="35" alt="" />
      <p>{{ campaign?.user?.name }}</p>
    </div>

    <!-- tabs -->
    <v-tabs
      v-model="tab"
      bg-color="white"
      class="mt-5 v-slide-group v-slide-group--mobile v-tabs v-tabs--horizontal v-tabs--align-tabs-start v-tabs--density-default bg-white"
    >
      <v-tab value="one" :ripple="false">{{
        $t("campaigns.description")
      }}</v-tab>
      <v-tab value="two" :ripple="false">{{ $t("campaigns.gallery") }}</v-tab>
      <v-tab value="three" :ripple="false">{{ $t("campaigns.update") }}</v-tab>
      <v-tab value="four" :ripple="false">{{ $t("campaigns.donors") }}</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab" class="mt-4 pb-4">
      <v-tabs-window-item value="one">
        <p class="text-sm pb-5 leading-20 text-[#12121299]">
          {{ campaign?.content }}
        </p>
      </v-tabs-window-item>

      <v-tabs-window-item value="two">
        <v-row>
          <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
            <v-img
              :lazy-src="img"
              :src="img"
              aspect-ratio="1"
              class="bg-grey-lighten-2 rounded-md"
              cover
            >
              <template v-slot:placeholder v-if="isImageLoaded">
                <v-row align="center" class="fill-height ma-0" justify="center">
                  <v-progress-circular
                    color="grey-lighten-5"
                    indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-tabs-window-item>

      <v-tabs-window-item value="three">
        <p
          class="text-sm pb-5 leading-20 text-[#12121299]"
          v-for="(text, index) in tabs[2].item"
          :key="index"
        >
          {{ text }}
        </p>
      </v-tabs-window-item>

      <v-tabs-window-item value="four">
        <v-row v-if="campaign.latest.length">
          <v-col
            v-for="(donor, index) in campaign.latest"
            :key="index"
            class="d-flex child-flex"
            cols="4"
          >
            <div class="card p-3 rounded-lg text-center bg-[#f8f8f8] w-full">
              <div class="image flex justify-center">
                <img src="../../../assets/images/user.svg" alt="..." />
              </div>

              <h6>{{ donor?.name }}</h6>

              <span class="font-bold text-primary"
                >${{ donor?.total_amount }}</span
              >
            </div>
          </v-col>
        </v-row>

        <div v-else>
          <div class="image flex justify-center">
            <img src="../../../assets/images/no-data.jpg" width="150" alt="" />
          </div>

          <h6 class="text-center">{{ $t("campaigns.no_doners") }}</h6>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>

    <!-- videos -->
    <div class="videos mt-5">
      <video
        class="rounded-md object-cover cursor-pointer w-full mb-5 h-[320px]"
        src="../../../assets/videos/contribution-vid.mp4"
        poster="../../../assets/videos/contribution-poster.svg"
        controls
      ></video>

      <video
        class="rounded-md object-cover cursor-pointer w-full h-[320px]"
        src="../../../assets/videos/contribution-vid.mp4"
        poster="../../../assets/videos/contribution-poster.svg"
        controls
      ></video>
    </div>

    <CampaignsComments />
  </section>
</template>

<script setup>
import img from "../../../assets/images/chalenge-img.png";
import { useCampaign } from "../typescript/view-campaign";
const props = defineProps({
  campaign: {
    required: true,
  },
  target: {
    required: true,
  },
  amount: {
    required: true,
  },
  status: {
    required: true,
  },
});

const {
  onEnterViewport,
  tab,
  tabs,
  loading,
  animatedRate,
  isImageLoaded,
  targetRate,
} = useCampaign();

onMounted(() => {
  onEnterViewport(true);
});
</script>

<style>
.v-tab {
  text-transform: capitalize;
}
</style>
