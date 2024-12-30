<template>
  <section aria-label="our impact section" class="pt-[2rem] pb-[2rem]">
    <Container>
      <h1
        class="text-black font-bold lg:text-[36px] md:text-[36px] text-[28px]"
      >
        {{ $t("about.impact") }}
      </h1>

      <div
        class="content pt-[2rem] grid gap-y-[2rem] lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
      >
        <video
          class="rounded-md cursor-pointer"
          src="../../../assets/videos/contribution-vid.mp4"
          poster="../../../assets/videos/ramadan-poster.png"
          controls
        ></video>

        <div
          class="statistics grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 items-center"
          v-observe-visibility="onEnterViewport"
        >
          <div
            class="statistic_item flex justify-center"
            v-for="(stat, index) in stats"
            :key="index"
          >
            <div>
              <div class="d-flex ga-3 align-center">
                <span class="amount text-black font-bold text-[26px]">{{
                  animatedValues[index]
                }}</span>
                <span>
                  <img :src="stat.imgSrc" :alt="stat.alt" />
                </span>
              </div>

              <h5 class="text-[#12121299] text-[26px] font-bold">
                {{ stat.label }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/global/Container.vue";
import { useBanner } from "../../home/typescript/banner";
const { onEnterViewport, stats, animatedValues } = useBanner();
</script>
