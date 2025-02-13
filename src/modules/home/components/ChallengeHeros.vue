<template>
  <section aria-label="ramadan heros" class="pt-sm pb-sm">
    <Container>
      <!-- Title -->
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("home.heroes") }}
      </h1>

      <!-- Heros cards -->
      <div
        class="cards mt-[2rem] grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
      >
        <!-- card one -->
        <div
          class="card card-one p-[1rem] bg-customwhite rounded-md border-[1px] border-gray-100 border-solid"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img loading="lazy" src="../../../assets/images/number1.svg" alt="..." />

            <h5 class="font-bold text-3xl text-black">
              {{ $t("home.second_donor") }}
            </h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <span class="font-bold text-lg">{{ topDonors[1]?.name }}</span>
            <span class="font-bold text-lg">{{
              topDonors[1]?.total_amount
            }}</span>
          </div>

          <p class="text-sm leading-20 pt-[1rem]">
            {{ $t("home.heros_desc") }}
          </p>
        </div>

        <!-- card two -->
        <div
          class="card p-[1rem] bg-customwhite rounded-md border-[1px] border-solid border-gray-100 h-fit"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img loading="lazy" src="../../../assets/images/number2.svg" alt="..." />

            <h5 class="font-bold text-3xl text-black">
              {{ $t("home.first_donor") }}
            </h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <span class="font-bold text-lg">{{ topDonors[0]?.name }}</span>
            <span class="font-bold text-lg"
              >${{ topDonors[0]?.total_amount }}</span
            >
          </div>

          <p class="text-sm leading-20 pt-[1rem]">
            {{ $t("home.heros_desc") }}
          </p>
        </div>

        <!-- card three -->
        <div
          class="card card-three p-[1rem] bg-customwhite rounded-md border-[1px] border-solid border-gray-100"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img loading="lazy" src="../../../assets/images/number3.svg" alt="..." />

            <h5 class="font-bold text-3xl text-black">
              {{ $t("home.third_donor") }}
            </h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <span class="font-bold text-lg">{{ topDonors[2]?.name }}</span>
            <span class="font-bold text-lg"
              >${{ topDonors[2]?.total_amount }}</span
            >
          </div>

          <p class="text-sm leading-20 pt-xs">
            {{ $t("home.heros_desc") }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
import { useDonors } from "../services/top-donors";

const { topDonors } = useDonors();
</script>

<style scoped>
@import "../style/challenge-heros.css";
</style>
