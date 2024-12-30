<template>
  <Container>
    <section class="ready mt-[2rem] mb-[2rem] flex items-center">
      <div
        class="content relative text-white px-[2rem] py-[2rem] lg:px-[5rem] md:px-[4rem] xl:px-[5rem] lg:py-[5rem] xl:py-[5rem] md:py-[4rem]"
      >
        <h2
          class="font-bold mb-0 lg:text-[36px] md:text-[36px] text-[28px] lg:leading-[54px] md:leading-[46px] xl:leading-[54px] leading-[46px]"
        >
          {{ $t("about.why_ramadan") }}
        </h2>

        <p
          class="text-[14px] pt-[1.5rem] text-[#F6FFF6] lg:w-[400px] xl:w-[400px] md:w-[322px] w-[322px] leading-[20px]"
        >
          {{ $t("about.why_desc") }}
        </p>

        <div class="buttons mt-[1.5rem] flex items-center gap-x-3">
          <v-btn
            class="text-capitalize rounded-lg"
            variant="flat"
            size="default"
            color="#3E7E41"
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
      </div>
    </section>
  </Container>
</template>

<script setup>
import Container from "~/global/Container.vue";
</script>

<style scoped>
@import "../style/whyramadan.css";
</style>
