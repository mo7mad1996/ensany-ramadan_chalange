<template>
  <section class="view-actions" aria-label="more campaign details">
    <div class="card border rounded-lg p-4">
      <!-- loader for amount -->
      <v-skeleton-loader
        v-if="status == 'pending'"
        :loading="status == 'pending'"
        type="list-item-two-line"
      ></v-skeleton-loader>

      <div class="collected-amount flex gap-x-2 items-center" v-if="status == 'success'">
        <h1 class="text-2xl font-bold text-primary">
          {{ campaign?.total_amount }} {{ $t("campaigns.usd") }}
        </h1>
        <span class="text-sm text-[#12121299]">{{ $t("campaigns.collected") }}</span>
      </div>

      <!-- donors -->
      <div class="doners mt-4">
        <div class="total-doners d-flex ga-2 align-center">
          <span class="text-[#12121299] text-sm"
            >{{ campaign?.total_donors }} {{ $t("campaigns.donater") }}</span
          >
        </div>

        <v-progress-linear
          color="primary"
          :model-value="(amount / target) * 100"
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
          @click="sharePage"
        >
          {{ $t("campaigns.share") }}
        </v-btn>

        <v-btn
          class="text-capitalize rounded-lg w-100 mt-3"
          :ripple="false"
          variant="flat"
          size="default"
          color="primary"
          @click="$router.push(`/campaigns/donate/${campaign?.id}`)"
        >
          {{ $t("campaigns.donate") }}
        </v-btn>
      </div>

      <!-- all doners part -->
      <div class="all-doners mt-5">
        <div class="title flex gap-x-3 items-center">
          <img src="../../../assets/images/increment.svg" width="20" alt="" />
          <span class="text-2xl font-bold text-primary"
            >{{ campaign?.total_donors }} {{ $t("campaigns.donater") }}</span
          >
        </div>

        <v-skeleton-loader
          v-for="(item, index) in 3"
          :key="index"
          v-if="status == 'pending'"
          :loading="status == 'pending'"
          type="avatar,list-item-two-line"
        ></v-skeleton-loader>

        <!-- list of doners -->
        <div class="doners-list mt-5" v-if="status == 'success'">
          <div
            v-if="campaign.latest.length"
            class="doner mb-5 flex justify-between items-center"
            v-for="(donor, index) in campaign?.latest"
            :key="index"
          >
            <div class="flex gap-x-3 items-center">
              <img src="../../../assets/images/user.svg" alt="" />
              <div>
                <h4 class="text-2xl font-bold">{{ donor?.name }}</h4>
                <p class="text-sm text-[#121212] pt-1">
                  {{ $t("campaigns.highest_donor") }}
                </p>
              </div>
            </div>

            <div class="donation-amount text-center">
              <h4 class="text-2xl font-bold text-primary">${{ donor?.total_amount }}</h4>
              <span class="text-sm text-[#12121299] pt-2">{{
                reFormat2(donor?.donated_at)
              }}</span>
            </div>
          </div>

          <div v-else>
            <div class="image flex justify-center">
              <img src="../../../assets/images/no-data.jpg" width="150" alt="" />
            </div>

            <h6 class="text-center">{{ $t("campaigns.no_doners") }}</h6>
          </div>

          <div
            v-if="campaign.latest.length"
            class="flex justify-between items-center gap-x-2 w-full mt-5"
          >
            <v-btn
              class="text-capitalize rounded-lg w-1/2"
              :ripple="false"
              variant="flat"
              size="default"
              color="primary"
              @click="openDialog2"
            >
              {{ $t("campaigns.view_all") }}
            </v-btn>

            <v-btn
              class="text-capitalize rounded-lg w-1/2"
              :ripple="false"
              variant="flat"
              size="default"
              color="primary"
              @click="openDialog"
            >
              {{ $t("campaigns.top_donors") }}
            </v-btn>

            <!-- top-doners dilaog -->
            <dialog class="dialog m-auto rounded-[10px]" ref="top_donors">
              <div class="close-icon p-3 w-full">
                <v-icon class="cursor-pointer" @click="closeDialog">mdi-close</v-icon>

                <!-- firt donor -->
                <div class="pt-4" v-if="campaign?.top_doners?.top?.total_amount > 0">
                  <div
                    v-if="campaign?.top_doners"
                    class="doner mb-5 flex justify-between gap-x-md items-center"
                  >
                    <div class="flex gap-x-3 items-center">
                      <img src="../../../assets/images/user.svg" alt="" />
                      <div>
                        <h4 class="text-2xl font-bold">
                          {{ campaign?.top_doners?.top?.name }}
                        </h4>
                        <p class="text-sm text-[#121212] pt-1">
                          {{ $t("campaigns.highest_donor") }}
                        </p>
                      </div>
                    </div>

                    <div class="donation-amount text-center">
                      <h4 class="text-2xl font-bold text-primary">
                        ${{ campaign?.top_doners?.top?.total_amount }}
                      </h4>
                      <span class="text-sm text-[#12121299] pt-2">{{
                        reFormat2(campaign?.top_doners?.top?.donated_at)
                      }}</span>
                    </div>
                  </div>
                </div>

                <!-- second donor -->
                <div class="pt-3" v-if="campaign?.top_doners?.middle?.total_amount > 0">
                  <div
                    v-if="campaign?.top_doners"
                    class="doner mb-5 flex justify-between gap-x-md items-center"
                  >
                    <div class="flex gap-x-3 items-center">
                      <img src="../../../assets/images/user.svg" alt="" />
                      <div>
                        <h4 class="text-2xl font-bold">
                          {{ campaign?.top_doners?.middle?.name }}
                        </h4>
                        <p class="text-sm text-[#121212] pt-1">
                          {{ $t("campaigns.highest_donor") }}
                        </p>
                      </div>
                    </div>

                    <div class="donation-amount text-center">
                      <h4 class="text-2xl font-bold text-primary">
                        ${{ campaign?.top_doners?.middle?.total_amount }}
                      </h4>
                      <span class="text-sm text-[#12121299] pt-2">
                        {{ reFormat2(campaign?.top_doners?.middle?.donated_at) }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- third donor -->
                <div class="pt-3" v-if="campaign?.top_doners?.first?.total_amount > 0">
                  <div
                    v-if="campaign?.top_doners"
                    class="doner mb-5 flex justify-between gap-x-md items-center"
                  >
                    <div class="flex gap-x-3 items-center">
                      <img src="../../../assets/images/user.svg" alt="" />
                      <div>
                        <h4 class="text-2xl font-bold">
                          {{ campaign?.top_doners?.first?.name }}
                        </h4>
                        <p class="text-sm text-[#121212] pt-1">
                          {{ $t("campaigns.highest_donor") }}
                        </p>
                      </div>
                    </div>

                    <div class="donation-amount text-center">
                      <h4 class="text-2xl font-bold text-primary">
                        ${{ campaign?.top_doners?.first?.total_amount }}
                      </h4>
                      <span class="text-sm text-[#12121299] pt-2">
                        {{ reFormat2(campaign?.top_doners?.first?.donated_at) }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>

            <!-- view all donors -->
            <dialog class="dialog m-auto rounded-[10px]" ref="all_donors">
              <div class="close-icon p-3 w-full">
                <v-icon class="cursor-pointer" @click="closeDialog2">mdi-close</v-icon>

                <!-- firt donor -->
                <div
                  class="pt-4"
                  v-if="campaign?.all_donors"
                  v-for="(donor, index) in campaign?.all_donors"
                  :key="index"
                >
                  <div class="doner mb-5 flex justify-between gap-x-md items-center">
                    <div class="flex gap-x-3 items-center">
                      <img src="../../../assets/images/user.svg" alt="" />
                      <div>
                        <h4 class="text-2xl font-bold">
                          {{ donor?.name }}
                        </h4>
                        <p class="text-sm text-[#121212] pt-1">
                          {{ $t("campaigns.highest_donor") }}
                        </p>
                      </div>
                    </div>

                    <div class="donation-amount text-center">
                      <h4 class="text-2xl font-bold text-primary">
                        ${{ donor?.total_amount }}
                      </h4>
                      <span class="text-sm text-[#12121299] pt-2">{{
                        reFormat2(donor?.donated_at)
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reFormat2 } from "~/helpers/format-date";
import { sharePage } from "~/helpers/share";
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

const top_donors = ref("");
const all_donors = ref("");

const { onEnterViewport, animatedRate } = useCampaign();

const openDialog = () => {
  top_donors.value.showModal();
};

const openDialog2 = () => {
  all_donors.value.showModal();
};

const closeDialog = () => {
  top_donors.value.close();
};

const closeDialog2 = () => {
  all_donors.value.close();
};

onMounted(() => {
  onEnterViewport(true, props.target, props.amount);
});
</script>
