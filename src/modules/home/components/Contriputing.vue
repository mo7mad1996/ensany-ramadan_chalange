<template>
  <section aria-label="contributing section" class="contributing pb-10">
    <Container>
      <div class="card bg-customwhite2 xl:p-md lg:p-md md:p-sm p-sm rounded-md">
        <div
          class="gap-sm flex items-center justify-between lg:flex-row md:flex-col-reverse xl:flex-row flex-col-reverse"
        >
          <div class="text-container">
            <h2 class="mb-2 font-bold text-2xl lg:text-4xl md:text-4xl xl:text-4xl">
              {{ mainVideo?.title }}
            </h2>
            <p class="mb-2">
              {{ $t("home.contributing_desc") }}
            </p>
            <!-- <v-btn
              class="text-capitalize rounded-lg mt-2"
              variant="flat"
              size="default"
              color="#3E7E41"
              @click="openDialog"
              >{{ $t("global.donate_now") }}</v-btn
            > -->
            <v-btn
              class="text-capitalize rounded-lg mt-2"
              variant="flat"
              size="default"
              color="#3E7E41"
              @click="navigateTo('donate/all')"
              >{{ $t("global.donate_now") }}</v-btn
            >
          </div>

          <div class="video-container">
            <v-skeleton-loader
              v-if="status == 'pending'"
              type="image"
              class="w-full max-w-lg h-[200px] rounded-lg bg-gray-200"
            ></v-skeleton-loader>

            <ClientOnly v-if="status == 'success' && mainVideo">
              <LazyYoutube
                :src="mainVideo?.video_url"
                max-width="100%"
                aspect-ratio="16:9"
                thumbnail-quality="standard"
                iframe-policy="credentialless"
                style="width: 100%; height: auto"
              />
            </ClientOnly>
          </div>
        </div>
      </div>

      <!-- donation dialog -->
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
<style scoped>
.contributing {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.video-container {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.video-container iframe,
.video-container video {
  width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  .gap-sm {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .video-container {
    max-width: 80%;
  }
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
    padding: 1rem;
  }

  .text-container {
    margin-bottom: 1rem;
  }

  .video-container {
    margin-bottom: 1rem;
    max-width: 100%;
  }

  .text-container h2,
  .text-container p {
    text-align: center;
  }
}
</style>
