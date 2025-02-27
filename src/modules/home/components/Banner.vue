<template>
  <section aria-label="banner section" class="banner bg-cover relative">
    <Container class="h-100 relative text-white grid items-center">
      <div class="content pt-xd">
        <!-- large text -->
        <h2
          class="mb-0 font-bold lg:text-5xl xl:text-5xl md:text-[30px] text-[30px] lg:leading-[64.4px] xl:leading-[64.4px] md:leading-[44.4px] leading-[44.4px] lg:w-[520px] xl:w-[520px] md:w-[326px] w-[326px]"
        >
          {{ $t("home.banner_title") }}
        </h2>

        <!-- small text -->
        <p class="mb-0 mt-5 font-thin text-sm leading-20">
          {{ $t("home.banner_desc") }}
        </p>

        <!-- banner buttons -->
        <div class="banner_buttons flex gap-3 items-center mt-5">
          <v-btn
            class="text-capitalize rounded-lg"
            variant="flat"
            size="default"
            color="primary"
            @click="$router.push('/donate/all')"
            >{{ $t("global.join_challenge") }}</v-btn
          >

          <v-btn
            class="text-capitalize rounded-lg"
            variant="outlined"
            size="default"
            color="#fff"
            @click="$router.push('/start-campaign')"
            >{{ $t("global.start_campaign") }}</v-btn
          >
          <v-btn
            class="text-capitalize rounded-lg"
            variant="outlined"
            size="default"
            color="#fff"
            @click="$router.push('/donate/all')"
            >{{ $t("home.donate-all") }}</v-btn
          >
        </div>

        <div
          class="statistics grid gap-y-sm grid-cols-2 lg:grid-cols-3 md:grid-cols-3 py-xd px-0"
          v-observe-visibility="onEnterViewport"
        >
          <div class="statistic_item flex justify-center">
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount text-2xl font-bold">
                  {{ bannerData?.total_collected }}
                </span>
                <span>
                  <img
                    loading="lazy"
                    src="../../../assets/images/statistics1.svg"
                    alt="ramadanchallenges image"
                  />
                </span>
              </div>

              <h5 class="font-bold text-2xl leading-[39px] text-[#ffffff9e]">
                {{ $t("home.raised") }}
              </h5>
            </div>
          </div>

          <div class="statistic_item flex justify-center">
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount text-2xl font-bold">
                  {{ bannerData?.total_donors }}
                </span>
                <span>
                  <img
                    loading="lazy"
                    src="../../../assets/images/doners.svg"
                    alt="ramadanchallenges image"
                  />
                </span>
              </div>

              <h5 class="font-bold text-2xl leading-[39px] text-[#ffffff9e]">
                {{ $t("home.doners") }}
              </h5>
            </div>
          </div>

          <div class="statistic_item flex justify-center">
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount text-2xl font-bold">
                  {{ bannerData?.total_campaigns }}
                </span>
                <span>
                  <img
                    loading="lazy"
                    src="../../../assets/images/campaigns.svg"
                    alt="ramadanchallenges image"
                  />
                </span>
              </div>

              <h5 class="font-bold text-2xl leading-[39px] text-[#ffffff9e]">
                {{ $t("home.campaign") }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
import { useBannerData } from "../services/banner";
import { useBanner } from "../typescript/banner";
const { onEnterViewport, stats, animatedValues } = useBanner();
const { bannerData, banner_error } = useBannerData();

const animated = reactive<any>({
  total_campaigns: 0,
  total_donors: 0,
  total_collected: 0,
});

// const transition = (
//   target: number,
//   key: string,
//   decimals = 0,
//   duration = 1000
// ) => {
//   const frames = duration / (1000 / 60);
//   const step = (target - animated[key]) / frames;

//   const animate = () => {
//     if (animated[key] < target) {
//       animated[key] += step;
//       if (animated[key] > target) animated[key] = target;

//       animated[key] = Number(animated[key].toFixed(decimals));

//       requestAnimationFrame(animate);
//     }
//   };

//   animate();
// };

// watch(
//   bannerData,
//   () => {
//     if (bannerData.value) {
//       transition(bannerData.value?.total_donors, "total_donors");
//       transition(bannerData.value?.total_collected, "total_collected", 2);
//       transition(bannerData.value?.total_campaigns, "total_campaigns");
//     }
//   },
//   { immediate: true }
// );
</script>

<style scoped>
/* @import "../style/banner.css"; */
</style>
