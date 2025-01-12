<template>
  <section aria-label="contributing section" class="contributing pb-10">
    <Container>
      <div class="card bg-customwhite2 xl:p-md lg:p-md md:p-sm p-sm rounded-md">
        <div
          class="gap-sm flex items-center justify-between lg:flex-row md:flex-col-reverse xl:flex-row flex-col-reverse"
        >
          <div>
            <h2
              class="mb-2 font-bold text-2xl lg:text-4xl md:text-4xl xl:text-4xl"
            >
              {{ $t("home.contributing") }}
            </h2>
            <p class="mb-2">
              {{ $t("home.contributing_desc") }}
            </p>
            <v-btn
              class="text-capitalize rounded-lg"
              variant="flat"
              size="default"
              color="#3E7E41"
              >{{ $t("global.donate_now") }}</v-btn
            >
          </div>

          <div class="video">
            <video
              class="rounded-md object-cover cursor-pointer w-full"
              src="../../../assets/videos/contribution-vid.mp4"
              poster="../../../assets/videos/contribution-poster.svg"
              controls
            ></video>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
</script>
