<template>
  <Container>
    <section class="ready mt-[3rem] mb-[3rem]">
      <div
        class="content relative text-white px-[2rem] py-[2rem] lg:px-[5rem] md:px-[4rem] xl:px-[5rem] lg:py-[5rem] xl:py-[5rem] md:py-[4rem]"
      >
        <h2
          class="font-bold lg:text-[36px] md:text-[36px] text-[28px] lg:leading-[54px] md:leading-[46px] xl:leading-[54px] leading-[46px]"
        >
          {{ $t("home.ready") }}
        </h2>

        <p class="text-[14px] pt-[2rem]">
          {{ $t("home.ready_desc") }}
        </p>

        <v-btn
          class="text-capitalize rounded-lg mt-[2rem]"
          variant="flat"
          size="default"
          color="#3E7E41"
          >{{ $t("global.join_challenge") }}</v-btn
        >
      </div>
    </section>
  </Container>
</template>

<script setup>
import Container from "../../../global/Container.vue";
</script>

<style scoped>
@import "../style/last-section.css";
</style>
