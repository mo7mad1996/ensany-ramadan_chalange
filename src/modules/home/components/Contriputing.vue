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
              {{ mainVideo?.title }}
            </h2>
            <p class="mb-2">
              {{ $t("home.contributing_desc") }}
            </p>
            <v-btn
              class="text-capitalize rounded-lg mt-2"
              variant="flat"
              size="default"
              color="#3E7E41"
              @click="openDialog"
              >{{ $t("global.donate_now") }}</v-btn
            >
          </div>

          <div class="video">
            <video
              class="rounded-md object-cover cursor-pointer w-full"
              :src="mainVideo?.video_url"
              poster="../../../assets/videos/contribution-poster.svg"
              controls
            ></video>
          </div>
        </div>
      </div>

      <!-- donattion dilaog -->
      <dialog class="dialog m-auto rounded-[10px]" ref="donate">
        <div class="close-icon p-3 w-full flex justify-end">
          <v-icon class="cursor-pointer" @click="closeDialog">mdi-close</v-icon>
        </div>
        <CampaignsDonationForm />
      </dialog>
    </Container>
  </section>
</template>

<script setup>
import Container from "../../../global/Container.vue";
import { useMainVideo } from "../services/main-video";

const { mainVideo, status } = useMainVideo();

const donate = ref("");

const openDialog = () => {
  donate.value.showModal();
};

const closeDialog = () => {
  donate.value.close();
};
</script>
