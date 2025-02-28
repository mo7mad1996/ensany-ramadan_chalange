<template>
  <section aria-label="view details section" class="view_details">
    <div class="image relative rounded-lg">
      <img
        loading="lazy"
        :src="campaign?.image"
        class="w-full h-[370px] object-cover rounded-lg"
        alt="ramadanchallenges image"
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
            >{{
              ((amount / target) * 100).toFixed(1) > 100
                ? 100
                : ((amount / target) * 100).toFixed(1)
            }}%</span
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
        <span class="text-primary">
          {{ campaign?.total_amount }} {{ $t("campaigns.usd") }}</span
        >
      </div>

      <div class="collected flex items-cener gap-1">
        <v-icon color="red">mdi-heart-outline</v-icon>
        <span class="text-primary"
          >{{ campaign?.total_donors }} {{ $t("campaigns.donater") }}</span
        >
      </div>

      <div class="collected flex items-cener gap-1">
        <span class="text-[#12121299]">{{ $t("campaigns.r") }}:</span>
        <span class="text-primary"
          >{{ campaign?.remaining_days }} {{ $t("campaigns.days") }}</span
        >
      </div>
      <div
        class="collected flex items-cener gap-1"
        v-if="campaign?.status == 'completed'"
      >
        <span class="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span class="text-primary">
          {{ $t("campaigns.completed") }}
        </span>
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
    <NuxtLink
      :to="{ name: 'affiliate-charity', params: { id: campaign.user.id } }"
      class="honor-compan d-flex ga-2 align-center mt-5"
      v-if="status == 'success'"
    >
      <img
        loading="lazy"
        src="../../../assets/images/honor-company.svg"
        width="35"
        alt="ramadanchallenges image"
      />
      <p>{{ campaign?.user?.name }}</p>
    </NuxtLink>

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
      <!-- description tap -->
      <v-tabs-window-item value="one">
        <p
          class="text-sm pb-5 leading-20 text-[#12121299]"
          v-html="campaign?.content"
        ></p>
      </v-tabs-window-item>

      <!-- glary tap -->
      <v-tabs-window-item value="two">
        <v-row v-if="campaign?.gallery.length">
          <v-col
            v-for="(image, n) in campaign?.gallery"
            :key="n"
            class="d-flex child-flex"
            cols="4"
          >
            <v-img
              :lazy-src="image?.url"
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

        <div v-else>
          <div class="image flex justify-center">
            <img
              loading="lazy"
              src="../../../assets/images/no-data.jpg"
              width="150"
              alt="ramadan challenges image"
            />
          </div>

          <h6 class="text-center">{{ $t("campaigns.no_doners") }}</h6>
        </div>
      </v-tabs-window-item>

      <!-- updates tap -->
      <v-tabs-window-item value="three">
        <v-row v-if="campaign?.updates?.data.length">
          <v-col
            v-for="(update, index) in campaign?.updates?.data"
            :key="index"
            class="d-flex child-flex"
            cols="4"
          >
            <div class="card p-2 rounded-lg text-center bg-[#f8f8f8] w-full">
              <div class="image flex justify-center max-h-[10rem]">
                <img
                  loading="lazy"
                  :src="update?.image"
                  class="rounded-lg max-w-full h-[10rem] object-cover"
                  alt="ramadan challenges image"
                />
              </div>

              <div class="content pt-2">
                <h6 class="text-xl">{{ update?.title }}</h6>

                <p class="text-sm">{{ update?.content }}</p>
              </div>
            </div>
          </v-col>
        </v-row>

        <div v-else>
          <div class="image flex justify-center">
            <img
              loading="lazy"
              src="../../../assets/images/no-data.jpg"
              width="150"
              alt="ramadan challenges image"
            />
          </div>

          <h6 class="text-center">{{ $t("campaigns.no_doners") }}</h6>
        </div>
      </v-tabs-window-item>

      <!-- donors tap -->
      <v-tabs-window-item value="four">
        <v-row v-if="campaign.all_donors.data.length">
          <v-col
            v-for="(donor, index) in donors"
            :key="index"
            class="d-flex child-flex"
            cols="4"
          >
            <div class="card p-3 rounded-lg text-center bg-[#f8f8f8] w-full">
              <div class="image flex justify-center">
                <img
                  loading="lazy"
                  src="../../../assets/images/user.svg"
                  alt="ramadan challenges image"
                />
              </div>

              <h6>{{ donor?.name }}</h6>

              <span class="font-bold text-primary">
                {{ donor?.total_amount }} {{ campaign?.currency.name }}
              </span>
            </div>
          </v-col>

          <v-col cols="12">
            <div class="pagination items-center justify-center pb-sm">
              <v-pagination
                v-model="currentPage"
                :length="donorsMeta.last_page"
                @imput="fetchDonors"
                :total-visible="5"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>

        <div v-else>
          <div class="image flex justify-center">
            <img
              loading="lazy"
              src="../../../assets/images/no-data.jpg"
              width="150"
              alt="ramadan challenges image"
            />
          </div>

          <h6 class="text-center">{{ $t("campaigns.no_doners") }}</h6>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>

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

import { reFormat } from "~/helpers/format-date";
import { useDonors } from "../services/donors";
const route = useRoute();

const { donors, status, currentPage, donorsMeta, refresh } = useDonors(
  route.params.id
);

const fetchDonors = () => {
  refresh();
};

watch(currentPage, (newPage) => {
  fetchDonors();
});
</script>

<style>
.v-tab {
  text-transform: capitalize;
}
</style>
