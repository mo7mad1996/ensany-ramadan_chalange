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
        </div>

        <div
          class="statistics grid gap-y-sm grid-cols-2 lg:grid-cols-4 md:grid-cols-4 py-xd px-0"
          v-observe-visibility="onEnterViewport"
        >
          <div
            class="statistic_item flex justify-center"
            v-for="(stat, index) in stats"
            :key="index"
          >
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount text-2xl font-bold">{{
                  animatedValues[index]
                }}</span>
                <span>
                  <img :src="stat.imgSrc" :alt="stat.alt" />
                </span>
              </div>

              <h5 class="font-bold text-2xl leading-[39px] text-[#ffffff9e]">
                {{ stat.label }}
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
import { useBanner } from "../typescript/banner";
const { onEnterViewport, stats, animatedValues } = useBanner();
</script>

<style scoped>
/* @import "../style/banner.css"; */
</style>
