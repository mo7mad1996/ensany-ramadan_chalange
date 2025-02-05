<template>
  <section aria-label="ramadan heros" class="pt-sm pb-sm">
    <Container>
      <!-- Title -->
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("donor.top_donors") }}
      </h1>
      <div
        class="cards mt-[2rem] grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
      >
        <!-- card one -->
        <div
          class="card card-one p-[1rem] bg-green-50 rounded-lg border-[1px] border-gray-100 border-solid"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img
              src="../../../assets/images/donor/Second Donor.png"
              alt="..."
            />

            <h5 class="font-bold text-3xl text-black">
              {{ $t("donor.second_donor") }}
            </h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <div class="flex justify-between items-center">
              <img src="../../../assets/images/donor/Rectangle.png" alt="..." />
              <span class="font-semibold text-lg">
                {{ donorOverview?.data?.top_doners?.middle?.name }}</span
              >
            </div>
            <span class="font-bold text-lg">
              ${{ donorOverview?.data?.top_doners?.middle?.total_amount }}</span
            >
          </div>
        </div>

        <!-- card two -->
        <div
          class="card p-[1rem] bg-green-50 rounded-lg border-[1px] border-solid border-gray-100 h-fit"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img
              src="../../../assets/images/donor/First Donor .png"
              alt="..."
            />

            <h5 class="font-bold text-3xl text-black">
              {{ $t("donor.first_donor") }}
            </h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <div class="flex justify-between items-center">
              <img src="../../../assets/images/donor/Rectangle.png" alt="..." />
              <span class="font-semibold text-lg">
                {{ donorOverview?.data?.top_doners?.first?.name }}</span
              >
            </div>
            <span class="font-bold text-lg">
              ${{ donorOverview?.data?.top_doners?.first?.total_amount }}</span
            >
          </div>
        </div>

        <!-- card three -->
        <div
          class="card card-three p-[1rem] bg-green-50 rounded-lg border-[1px] border-solid border-gray-100"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img src="../../../assets/images/donor/Third Donor.png" alt="..." />

            <h5 class="font-bold text-3xl text-black">
              {{ $t("donor.third_donor") }}
            </h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <div class="flex justify-between items-center">
              <img src="../../../assets/images/donor/Rectangle.png" alt="..." />
              <span class="font-semibold text-lg">
                {{ donorOverview?.data?.top_doners?.top?.name }}</span
              >
            </div>

            <span class="font-bold text-lg">
              ${{ donorOverview?.data?.top_doners?.top?.total_amount }}</span
            >
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
<script setup>
import Container from "../../../global/Container.vue";
import { useDonorOverview } from "../services/overview";

const { donorOverview } = useDonorOverview();
const top_doners = donorOverview.value?.data?.top_doners;
console.log(top_doners);
</script>
<style scoped>
@import "../../home/style/challenge-heros.css";
</style>
