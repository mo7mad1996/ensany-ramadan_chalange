<template>
  <section aria-label="view details section" class="view_details">
    <div class="image relative rounded-lg">
      <img
        src="../../../assets/images/chalenge-img.png"
        class="w-full h-[370px] object-cover rounded-lg"
        alt=""
      />

      <div class="text absolute bottom-5 p-4 w-full">
        <h1 class="text-white text-4xl font-bold">Feed a Family for Iftar</h1>

        <div class="progress_bar relative flex items-center gap-x-2">
          <v-progress-linear
            :model-value="progress"
            class="rounded-lg mt-2"
            :height="10"
          ></v-progress-linear>

          <span class="pers text-[16px] font-bold text-white"
            >{{ progress }}%</span
          >
        </div>
      </div>
    </div>

    <!-- campaign details -->
    <div class="details mt-5 flex items-center justify-between">
      <div class="collected flex items-cener gap-1">
        <span class="text-[#12121299]">Collected:</span>
        <span class="text-primary">17608 USD</span>
      </div>

      <div class="collected flex items-cener gap-1">
        <span class="text-[#12121299]">Remaining::</span>
        <span class="text-primary">13 days</span>
      </div>

      <div class="collected flex items-cener gap-1">
        <v-icon color="red">mdi-heart-outline</v-icon>
        <span class="text-primary">247 Donate</span>
      </div>

      <div class="collected flex items-cener gap-1">
        <span class="text-[#12121299]">Campaign Objective::</span>
        <span class="text-primary">17608 USD</span>
      </div>
    </div>

    <!-- campain maker -->
    <div class="honor-compan d-flex ga-2 align-center mt-5">
      <img src="../../../assets/images/honor-company.svg" width="35" alt="" />
      <p>Honor Company</p>
    </div>

    <!-- tabs -->
    <v-tabs
      v-model="tab"
      bg-color="white"
      class="mt-5 v-slide-group v-slide-group--mobile v-tabs v-tabs--horizontal v-tabs--align-tabs-start v-tabs--density-default bg-white"
    >
      <v-tab value="one" :ripple="false">Description</v-tab>
      <v-tab value="two" :ripple="false">Gallery</v-tab>
      <v-tab value="three" :ripple="false">Update</v-tab>
      <v-tab value="four" :ripple="false">Donors</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab" class="mt-4">
      <v-tabs-window-item
        v-for="(item, index) in tabs"
        :key="index"
        :value="item.value"
      >
        <p
          class="text-sm pb-5 leading-20 text-[#12121299]"
          v-for="(text, index) in item.item"
          :key="index"
        >
          {{ text }}
        </p>
      </v-tabs-window-item>
    </v-tabs-window>

    <!-- videos -->
    <div class="videos mt-5">
      <video
        class="rounded-md object-cover cursor-pointer w-full mb-5 h-[320px]"
        src="../../../assets/videos/contribution-vid.mp4"
        poster="../../../assets/videos/contribution-poster.svg"
        controls
      ></video>

      <video
        class="rounded-md object-cover cursor-pointer w-full h-[320px]"
        src="../../../assets/videos/contribution-vid.mp4"
        poster="../../../assets/videos/contribution-poster.svg"
        controls
      ></video>
    </div>
  </section>
</template>

<script setup lang="ts">
const progress = ref<number>(30);
const tab = ref<null | string>(null);

const text = ref<string[]>([
  "If a woman feeds a thirsty dog, Allah thanks her deed, forgives her, and enters her into Paradise. So what about those who feed and support those who are oppressed by injustice and hardship while they defend Islam and its sanctities, facing the nation's fiercest enemies.Today we spare you the trouble of conveying your feelings to the people of Gaza, as we deliver the basic necessities to them in the north and south.",
  "When you donate your money to those whom Allah has chosen to be among the martyrs, Your generosity will be multiplied, and leaving them with their invasion and with those behind them as warriors with their families in goodness, they have indeed invaded",
  "You never know how much your participation in the campaign can benefit the people of Gaza, and perhaps it will be one of the good deeds that will be the reason for your entry into Paradise",
  "None of our success would be possible without generous donors like you. Thank you again for your commitment and kindness. When you donate your money to the most needy people and those who are surrounded by a visible enemy to Islam and Muslims",
]);

const tabs = ref<any>([
  {
    value: "one",
    item: text.value,
  },

  {
    value: "two",
    item: text.value,
  },

  {
    value: "three",
    item: text.value,
  },

  {
    value: "four",
    item: text.value,
  },
]);
</script>

<style>
.v-tab {
  text-transform: capitalize;
}
</style>
