<template>
  <section
    aria-label="challenge steps section"
    class="bring pt-[2rem] pb-[2rem]"
  >
    <Container>
      <h1
        class="text-black font-bold lg:text-[36px] md:text-[36px] text-[28px]"
      >
        How We Bring Challenges to Life
      </h1>

      <div class="cards pt-[2rem]">
        <!-- first card -->
        <div
          class="card ms-[2rem] mt-[2rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div class="text flex flex-col justify-between ms-[2rem]">
            <span
              class="absolute rotate-[-90deg] left-[-100px] top-[50px] text-[14px]"
              >Start a Campaign
            </span>

            <span class="font-bold text-[46px]">01</span>
            <div>
              <h5 class="font-bold text-[26px] leading-[39px]">
                Start Your Challenge
              </h5>
              <p class="text-[#121212] w-[400px] text-[14px]">
                Log in and Create a unique campaign tailored to your goals and
                share it with your network.
              </p>
            </div>
          </div>

          <div class="image flex justify-end">
            <img src="../../../assets/images/about/steps.png" alt="" />
          </div>
        </div>

        <!-- second card -->
        <div
          class="card ms-[2rem] mt-[7rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div class="image flex justify-start">
            <img src="../../../assets/images/about/steps.png" alt="" />
          </div>

          <div class="text flex flex-col justify-between ms-[2rem]">
            <span
              class="absolute rotate-[-90deg] left-[-100px] top-[50px] text-[14px]"
              >Start a Campaign
            </span>

            <span class="font-bold text-[46px]">01</span>
            <div>
              <h5 class="font-bold text-[26px] leading-[39px]">
                Start Your Challenge
              </h5>
              <p class="text-[#121212] w-[400px] text-[14px]">
                Log in and Create a unique campaign tailored to your goals and
                share it with your network.
              </p>
            </div>
          </div>
        </div>

        <!-- third card -->
        <div
          class="card ms-[2rem] mt-[7rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div class="text flex flex-col justify-between ms-[2rem]">
            <span
              class="absolute rotate-[-90deg] left-[-100px] top-[50px] text-[14px]"
              >Start a Campaign
            </span>

            <span class="font-bold text-[46px]">01</span>
            <div>
              <h5 class="font-bold text-[26px] leading-[39px]">
                Start Your Challenge
              </h5>
              <p class="text-[#121212] w-[400px] text-[14px]">
                Log in and Create a unique campaign tailored to your goals and
                share it with your network.
              </p>
            </div>
          </div>

          <div class="image flex justify-end">
            <img src="../../../assets/images/about/steps.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
</script>

<style scoped>
@import "../style/bring-challenges.css";
</style>
