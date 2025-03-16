<template>
  <v-skeleton-loader
    type="image"
    class="h-400"
    v-if="status == 'pending'"
  />

  <section
  v-else
    aria-label="banner section"
    class="bg-black banner bg-cover relative"
  >
    <Container class="h-full relative text-white grid items-center">
      <div class="content pt-xd">
        <LazyHomeBannerContent />

        <div
          class="statistics grid gap-y-sm grid-cols-2 lg:grid-cols-3 md:grid-cols-3 py-xd px-0"
          v-observe-visibility="onEnterViewport"
        >
          <div class="statistic_item flex justify-center">
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount text-2xl font-bold">
                  {{ fixed.total_collected }}
                </span>
                <span>
                  <nuxt-img
                    loading="lazy"
                    src="/statistics1.svg"
                    width="24"
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
                  {{ fixed.total_donors }}
                </span>
                <span>
                  <nuxt-img
                    loading="lazy"
                    src="/doners.svg"
                    width="24"
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
                  {{ fixed.total_campaigns }}
                </span>
                <span>
                  <nuxt-img
                    loading="lazy"
                    src="/campaigns.svg"
                    width="24"
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
const { bannerData, banner_error, status } = useBannerData();

const animated = reactive<any>({
  total_campaigns: 0,
  total_donors: 0,
  total_collected: 0,
});

const fixed = computed(() => {
  return {
    total_campaigns: animated.total_campaigns.toFixed(0),
    total_donors: animated.total_donors.toFixed(0),
    total_collected: animated.total_collected.toFixed(2),
  };
});

const transition = (target: number, key: string, decimals = 0, duration = 3000) => {
  const frames = duration / (1000 / 60);
  const step = (target - animated[key]) / frames;

  const animate = () => {
    if (animated[key] < target) {
      animated[key] += step;
      if (animated[key] > target) animated[key] = target;

      animated[key] = Number(animated[key]);

      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

watch(
  bannerData,
  () => {
    if (bannerData.value) {
      transition(bannerData.value?.total_donors, "total_donors");
      transition(bannerData.value?.total_collected, "total_collected", 2);
      transition(bannerData.value?.total_campaigns, "total_campaigns");
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* @import "../style/banner.css"; */
</style>
