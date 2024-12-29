<template>
  <section aria-label="ramadan heros" class="pt-[2rem] pb-[2rem]">
    <Container>
      <!-- Title -->
      <h1
        class="text-black font-bold lg:text-[36px] md:text-[36px] text-[28px]"
      >
        {{ $t("home.heroes") }}
      </h1>

      <!-- Heros cards -->
      <div
        class="cards mt-[2rem] grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
      >
        <!-- card one -->
        <div
          class="card card-one p-[1rem] bg-[#FAFAFA] rounded-md border-[1px] border-solid border-gray-100"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img src="../../../assets/images/number1.svg" alt="..." />

            <h5 class="font-bold text-[28px] text-black">
              {{ $t("home.second_donor") }}
            </h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <span class="font-bold text-[18px]">Aliyah M.</span>
            <span class="font-bold text-[18px]">$29k</span>
          </div>

          <p class="text-[14px] leading-[20px] pt-[1rem]">
            {{ $t("home.heros_desc") }}
          </p>
        </div>

        <!-- card two -->
        <div
          class="card p-[1rem] bg-[#FAFAFA] rounded-md border-[1px] border-solid border-gray-100 h-fit"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img src="../../../assets/images/number2.svg" alt="..." />

            <h5 class="font-bold text-[28px] text-black">
              {{ $t("home.first_donor") }}
            </h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <span class="font-bold text-[18px]">Mohammed M.</span>
            <span class="font-bold text-[18px]">$30k</span>
          </div>

          <p class="text-[14px] leading-[20px] pt-[1rem]">
            {{ $t("home.heros_desc") }}
          </p>
        </div>

        <!-- card three -->
        <div
          class="card card-three p-[1rem] bg-[#FAFAFA] rounded-md border-[1px] border-solid border-gray-100"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img src="../../../assets/images/number3.svg" alt="..." />

            <h5 class="font-bold text-[28px] text-black">
              {{ $t("home.third_donor") }}
            </h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <span class="font-bold text-[18px]">Aref M.</span>
            <span class="font-bold text-[18px]">$26k</span>
          </div>

          <p class="text-[14px] leading-[20px] pt-[1rem]">
            {{ $t("home.heros_desc") }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
</script>

<style scoped>
@import "../style/challenge-heros.css";
</style>
