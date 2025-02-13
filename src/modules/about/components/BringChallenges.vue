<template>
  <section aria-label="challenge steps section" class="bring pt-sm pb-sm">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("about.steps_challenges") }}
      </h1>

      <div class="cards pt-sm">
        <!-- first card -->
        <div
          class="card gap-y-sm ms-sm mt-sm grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div class="text flex flex-col justify-between ms-sm">
            <span
              class="absolute rotate-[-90deg] rtl:right-[-60px] ltr:left-[-85px] rtl:top-[25px] ltr:top-[50px] text-sm"
              >{{ $t("about.step1_small_text") }}
            </span>

            <span class="font-bold text-[46px]">01</span>
            <div>
              <h5 class="font-bold text-2xl leading-[39px]">
                {{ $t("about.step1_tite") }}
              </h5>
              <p
                class="text-black lg:w-[400px] xl:w-[400px] md:w-[322px] w-[322px] text-sm"
              >
                {{ $t("about.step1_desc") }}
              </p>
            </div>
          </div>

          <div
            class="image flex lg:justify-end xl:justify-end md:justify-center justify-center"
          >
            <img
              loading="lazy"
              src="../../../assets/images/about/steps.png"
              alt=""
            />
          </div>
        </div>

        <!-- second card -->
        <div
          class="card gap-y-sm ms-sm mt-xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div
            class="image flex lg:justify-start xl:justify-start md:justify-center justify-center"
          >
            <img
              loading="lazy"
              src="../../../assets/images/about/steps.png"
              alt=""
            />
          </div>

          <div class="text flex flex-col justify-between ms-sm">
            <span
              class="absolute rotate-[-90deg] rtl:right-[-80px] ltr:left-[-75px] rtl:top-[40px] ltr:top-[35px] text-sm"
              >{{ $t("about.step2_small_text") }}
            </span>

            <span class="font-bold text-[46px]">02</span>
            <div>
              <h5 class="font-bold text-2xl leading-[39px]">
                {{ $t("about.step2_tite") }}
              </h5>
              <p
                class="text-[#121212] lg:w-[400px] xl:w-[400px] md:w-[322px] w-[322px] text-sm"
              >
                {{ $t("about.step2_desc") }}
              </p>
            </div>
          </div>
        </div>

        <!-- third card -->
        <div
          class="card gap-y-sm ms-sm mt-xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1"
        >
          <div class="text flex flex-col justify-between ms-sm">
            <span
              class="absolute rotate-[-90deg] rtl:right-[-65px] ltr:left-[-90px] rtl:top-[25px] ltr:top-[50px] text-sm"
              >{{ $t("about.step3_small_text") }}
            </span>

            <span class="font-bold text-[46px]">03</span>
            <div>
              <h5 class="font-bold text-2xl leading-[39px]">
                {{ $t("about.step3_tite") }}
              </h5>
              <p
                class="text-[#121212] lg:w-[400px] xl:w-[400px] md:w-[322px] w-[322px] text-sm"
              >
                {{ $t("about.step3_desc") }}
              </p>
            </div>
          </div>

          <div
            class="image flex lg:justify-end xl:justify-end md:justify-center justify-center"
          >
            <img
              loading="lazy"
              src="../../../assets/images/about/steps.png"
              alt=""
            />
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
