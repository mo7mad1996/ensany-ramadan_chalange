<template>
  <section aria-label="banner section" class="banner">
    <Container class="h-100">
      <div class="content">
        <!-- large text -->
        <h2 class="mb-0">
          {{ $t("home.banner_title") }}
        </h2>

        <!-- small text -->
        <p class="mb-0 mt-5">
          {{ $t("home.banner_desc") }}
        </p>

        <!-- banner buttons -->
        <div class="banner_buttons d-flex ga-3 align-center mt-5">
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
            >{{ $t("global.start_campaign") }}</v-btn
          >
        </div>

        <div
          class="statistics grid gap-y-sm grid-cols-2 lg:grid-cols-4 md:grid-cols-4"
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

              <h5>{{ stat.label }}</h5>
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
@import "../style/banner.css";
</style>
