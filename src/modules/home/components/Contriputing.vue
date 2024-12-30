<template>
  <section aria-label="contributing section" class="contributing pb-10">
    <Container>
      <div class="card bg-customwhite2 p-md rounded-md">
        <v-row
          class="align-center lg:flex-row md:flex-col-reverse xl:flex-row flex-col-reverse"
        >
          <v-col lg="6" xl="6" md="12" cols="12">
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
          </v-col>

          <v-col lg="6" xl="6" md="12" cols="12">
            <video
              class="rounded-md object-cover cursor-pointer"
              src="../../../assets/videos/contribution-vid.mp4"
              poster="../../../assets/videos/contribution-poster.svg"
              controls
            ></video>
          </v-col>
        </v-row>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
</script>
