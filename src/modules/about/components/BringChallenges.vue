<template>
  <section
    aria-label="challenge steps section"
    class="bring pt-[2rem] pb-[2rem]"
  >
    <Container>
      <h1
        class="text-black font-bold lg:text-[36px] md:text-[36px] text-[28px]"
      >
        {{ $t("about.steps_challenges") }}
      </h1>

      <div class="cards pt-[2rem]">
        <!-- first card -->
        <div
          class="card gap-y-[2rem] ms-[2rem] mt-[2rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div class="text flex flex-col justify-between ms-[2rem]">
            <span
              class="absolute rotate-[-90deg] rtl:right-[-60px] ltr:left-[-85px] rtl:top-[25px] ltr:top-[50px] text-[14px]"
              >{{ $t("about.step1_small_text") }}
            </span>

            <span class="font-bold text-[46px]">01</span>
            <div>
              <h5 class="font-bold text-[26px] leading-[39px]">
                {{ $t("about.step1_tite") }}
              </h5>
              <p
                class="text-[#121212] lg:w-[400px] xl:w-[400px] md:w-[322px] w-[322px] text-[14px]"
              >
                {{ $t("about.step1_desc") }}
              </p>
            </div>
          </div>

          <div
            class="image flex lg:justify-end xl:justify-end md:justify-center justify-center"
          >
            <img src="../../../assets/images/about/steps.png" alt="" />
          </div>
        </div>

        <!-- second card -->
        <div
          class="card gap-y-[2rem] ms-[2rem] mt-[7rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div
            class="image flex lg:justify-start xl:justify-start md:justify-center justify-center"
          >
            <img src="../../../assets/images/about/steps.png" alt="" />
          </div>

          <div class="text flex flex-col justify-between ms-[2rem]">
            <span
              class="absolute rotate-[-90deg] rtl:right-[-80px] ltr:left-[-75px] rtl:top-[40px] ltr:top-[35px] text-[14px]"
              >{{ $t("about.step2_small_text") }}
            </span>

            <span class="font-bold text-[46px]">02</span>
            <div>
              <h5 class="font-bold text-[26px] leading-[39px]">
                {{ $t("about.step2_tite") }}
              </h5>
              <p
                class="text-[#121212] lg:w-[400px] xl:w-[400px] md:w-[322px] w-[322px] text-[14px]"
              >
                {{ $t("about.step2_desc") }}
              </p>
            </div>
          </div>
        </div>

        <!-- third card -->
        <div
          class="card gap-y-[2rem] ms-[2rem] mt-[7rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div class="text flex flex-col justify-between ms-[2rem]">
            <span
              class="absolute rotate-[-90deg] rtl:right-[-65px] ltr:left-[-90px] rtl:top-[25px] ltr:top-[50px] text-[14px]"
              >{{ $t("about.step3_small_text") }}
            </span>

            <span class="font-bold text-[46px]">03</span>
            <div>
              <h5 class="font-bold text-[26px] leading-[39px]">
                {{ $t("about.step3_tite") }}
              </h5>
              <p
                class="text-[#121212] lg:w-[400px] xl:w-[400px] md:w-[322px] w-[322px] text-[14px]"
              >
                {{ $t("about.step3_desc") }}
              </p>
            </div>
          </div>

          <div
            class="image flex lg:justify-end xl:justify-end md:justify-center justify-center"
          >
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
