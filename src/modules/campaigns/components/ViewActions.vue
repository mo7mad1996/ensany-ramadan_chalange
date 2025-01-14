<template>
  <section class="view-actions" aria-label="more campaign details">
    <div class="card border rounded-lg p-4">
      <!-- loader for amount -->
      <v-skeleton-loader
        v-if="loading"
        :loading="loading"
        type="list-item-two-line"
      ></v-skeleton-loader>

      <div class="collected-amount flex gap-x-2 items-center" v-if="!loading">
        <h1 class="text-2xl font-bold text-primary">
          17608 {{ $t("campaigns.usd") }}
        </h1>
        <span class="text-sm text-[#12121299]">{{
          $t("campaigns.collected")
        }}</span>
      </div>

      <!-- donors -->
      <div class="doners mt-4">
        <div class="total-doners d-flex ga-2 align-center">
          <span class="text-[#12121299] text-sm"
            >247 {{ $t("campaigns.donater") }}</span
          >
        </div>

        <v-progress-linear
          v-observe-visibility="onEnterViewport"
          color="primary"
          :model-value="animatedRate"
          class="rounded mt-2"
          :height="10"
        ></v-progress-linear>
      </div>

      <!-- action buttons -->
      <div class="buttons mt-sm">
        <v-btn
          class="text-capitalize rounded-lg w-100"
          append-icon="mdi-share-variant-outline"
          :ripple="false"
          variant="flat"
          size="default"
          color="primary"
        >
          {{ $t("campaigns.share") }}
        </v-btn>

        <v-btn
          class="text-capitalize rounded-lg w-100 mt-3"
          :ripple="false"
          variant="flat"
          size="default"
          color="primary"
        >
          {{ $t("campaigns.make_donation") }}
        </v-btn>

        <v-btn
          class="text-capitalize rounded-lg w-100 mt-3"
          :ripple="false"
          variant="flat"
          size="default"
          color="primary"
        >
          {{ $t("campaigns.donate") }}
        </v-btn>
      </div>

      <!-- all doners part -->
      <div class="all-doners mt-5">
        <div class="title flex gap-x-3 items-center">
          <img src="../../../assets/images/increment.svg" width="20" alt="" />
          <span class="text-2xl font-bold text-primary"
            >247 {{ $t("campaigns.donater") }}</span
          >
        </div>

        <v-skeleton-loader
          v-for="(item, index) in 3"
          :key="index"
          v-if="loading"
          :loading="loading"
          type="avatar,list-item-two-line"
        ></v-skeleton-loader>

        <!-- list of doners -->
        <div class="doners-list mt-5" v-if="!loading">
          <!-- one doner -->
          <div
            class="doner mb-5 flex justify-between items-center"
            v-for="(item, index) in 3"
            :key="index"
          >
            <div class="flex gap-x-3 items-center">
              <img src="../../../assets/images/user.svg" alt="" />
              <div>
                <h4 class="text-2xl font-bold">Ali Omar</h4>
                <p class="text-sm text-[#121212] pt-1">
                  {{ $t("campaigns.highest_donor") }}
                </p>
              </div>
            </div>

            <div class="donation-amount">
              <h4 class="text-2xl font-bold text-primary">$450</h4>
              <span class="text-sm text-[#12121299] pt-2">{{
                $t("campaigns.last_week")
              }}</span>
            </div>
          </div>

          <div class="flex justify-between items-center gap-x-2 w-full mt-5">
            <v-btn
              class="text-capitalize rounded-lg w-1/2"
              :ripple="false"
              variant="flat"
              size="default"
              color="primary"
            >
              {{ $t("campaigns.view_all") }}
            </v-btn>

            <v-btn
              class="text-capitalize rounded-lg w-1/2"
              :ripple="false"
              variant="flat"
              size="default"
              color="primary"
            >
              {{ $t("campaigns.top_donors") }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const rate = ref(30);
const loading = ref(true);
import { useViewCampaign } from "../typescript/view-campaign";
const { onEnterViewport, animatedRate } = useViewCampaign();

onMounted(() => {
  onEnterViewport(true);
});

setTimeout(() => {
  loading.value = false;
}, 3000);
</script>
