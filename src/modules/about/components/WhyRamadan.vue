<template>
  <Container>
    <section class="ready mb-sm flex items-center">
      <div
        class="content relative text-white px-sm py-sm lg:px-xd md:px-md xl:px-xd lg:py-xd xl:py-xd md:py-md"
      >
        <h2
          class="font-bold mb-0 lg:text-4xl md:text-4xl text-2xl lg:leading-[54px] md:leading-[46px] xl:leading-[54px] leading-[46px]"
        >
          {{ $t("about.why_ramadan") }}
        </h2>

        <p
          class="text-sm pt-[1.5rem] text-[#F6FFF6] lg:w-[400px] xl:w-[400px] md:w-[322px] w-[322px] leading-[20px]"
        >
          {{ $t("about.why_desc") }}
        </p>

        <div class="buttons mt-[1.5rem] flex items-center gap-x-3">
          <v-btn
            class="text-capitalize rounded-lg"
            variant="flat"
            :to="'/signup'"
            size="default"
            color="primary"
            >{{ $t("global.join_challenge") }}</v-btn
          >

          <v-btn
            class="text-capitalize rounded-lg"
            variant="outlined"
            :to="'/signup-charity'"
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
