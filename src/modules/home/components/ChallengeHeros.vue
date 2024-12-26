<template>
  <section aria-label="ramadan heros" class="pt-[2rem] pb-[2rem]">
    <Container>
      <!-- Title -->
      <h2 class="text-[36px] font-bold mb-8 text-center">
        Meet Our Ramadan Challenge Heroes
      </h2>

      <!-- Heros cards -->
      <div class="cards grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <!-- card one -->
        <div
          class="card p-[1rem] bg-[#FAFAFA] rounded-md border-[1px] border-solid border-gray-100 mt-[5rem]"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img src="../../../assets/images/number1.svg" alt="..." />

            <h5 class="font-bold text-[28px] text-black">Second Donor</h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <span class="font-bold text-[18px]">Aliyah M.</span>
            <span class="font-bold text-[18px]">$29k</span>
          </div>

          <p class="text-[14px] leading-[20px] pt-[1rem]">
            Thank you for your extraordinary generosity and commitment to making
            a difference.
          </p>
        </div>

        <!-- card two -->
        <div
          class="card p-[1rem] bg-[#FAFAFA] rounded-md border-[1px] border-solid border-gray-100 h-fit"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img src="../../../assets/images/number2.svg" alt="..." />

            <h5 class="font-bold text-[28px] text-black">First Donor</h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <span class="font-bold text-[18px]">Mohammed M.</span>
            <span class="font-bold text-[18px]">$30k</span>
          </div>

          <p class="text-[14px] leading-[20px] pt-[1rem]">
            Thank you for your extraordinary generosity and commitment to making
            a difference.
          </p>
        </div>

        <!-- card three -->
        <div
          class="card p-[1rem] bg-[#FAFAFA] rounded-md border-[1px] border-solid border-gray-100 mt-[5rem]"
        >
          <div class="flex flex-col gap-y-2 items-center">
            <img src="../../../assets/images/number3.svg" alt="..." />

            <h5 class="font-bold text-[28px] text-black">Third Donor</h5>
          </div>

          <div class="flex justify-between items-center pt-[1rem]">
            <span class="font-bold text-[18px]">Aref M.</span>
            <span class="font-bold text-[18px]">$26k</span>
          </div>

          <p class="text-[14px] leading-[20px] pt-[1rem]">
            Thank you for your extraordinary generosity and commitment to making
            a difference.
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
import { ref } from "vue";

const donors = ref([
  {
    image: "../../assets/images/number1.svg",
    title: "Second Donor",
    name: "Aliyah M.",
    amount: "$29k",
    desc: "Thank you for your extraordinary generosity and commitment to making a difference.",
  },
  {
    image: "../../../src/assets/images/number2.svg",
    title: "First Donor",
    name: "Mohammed M.",
    amount: "$30k",
    desc: "Thank you for your extraordinary generosity and commitment to making a difference.",
  },
  {
    image: "../../../src/assets/images/number3.svg",
    title: "Third Donor",
    name: "Aref M.",
    amount: "$26k",
    desc: "Thank you for your extraordinary generosity and commitment to making a difference.",
  },
]);
</script>
