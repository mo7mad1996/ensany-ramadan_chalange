<template>
  <section aria-label="ramadan chalenges" class="pt-sm pb-sm">
    <Container>
      <div class="flex items-center justify-between">
        <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
          {{ $t("home.ramadan_challenge") }}
        </h1>
        <nuxt-link
          to="/campaigns"
          class="underline text-primary cursor-pointer"
          >{{ $t("global.see_more_campaigns") }}</nuxt-link
        >
      </div>

      <div
        class="grid pt-sm pb-sm gap-sm lg:grid-cols-3 md:grid-cols-1 grid-cols-1"
        v-if="status == 'pending'"
      >
        <v-card class="rounded-lg elevation-0">
          <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
        </v-card>

        <v-card class="rounded-lg elevation-0">
          <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
        </v-card>

        <v-card class="rounded-lg elevation-0">
          <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
        </v-card>
      </div>

      <Carousel
        v-if="status == 'success'"
        v-bind="settings"
        :breakpoints="breakpoints1"
        class="mt-4"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      >
        <Slide
          v-for="(campaign, index) in publicCampaigns.slice(0, 10)"
          :key="index"
        >
          <Card
            :rate="(campaign?.total_amount / campaign?.price_target) * 100"
            :shadow="true"
            :donatebtn="true"
            :status="campaign?.status"
            :in_cart="campaign?.in_cart || false"
            :cart_status="campaign?.cart_status || ''"
            :cart_id="campaign?.cart_id || ''"
            :route="`/campaigns/donate/${campaign.id}`"
            :id="campaign.id"
            class="h-full"
          >
            <template #image>
              <nuxt-img
                loading="lazy"
                height="240px"
                fit="cover"
                @click="$router.push(`/campaigns/${campaign.id}`)"
                :src="campaign?.image"
                class="w-full object-cover h-60 rounded-lg aspect-square"
                alt="ramadan challenges image"
              />
            </template>

            <template #company> {{ campaign?.user?.name }}</template>

            <template #title>
              <!-- <nuxt-link
                :to="{ name: 'view-campaign', params: { id: campaign.id } }"
                class="hover:underline"
                @click.prevent.stop
              > -->
              {{ campaign.name }}
              <!-- </nuxt-link> -->
            </template>

            <template #desc>
              <span
                v-html="stripHtmlTags(campaign?.short_desc)?.slice(0, 30)"
              ></span
            ></template>

            <template #subscribers>{{ campaign.total_donors }}</template>

            <template #total_donation>{{ campaign.price_target }}</template>

            <template #donation>{{ campaign.total_amount }}</template>
          </Card>
        </Slide>

        <template #addons>
          <pagination />
          <!-- <Navigation /> -->
        </template>
      </Carousel>
    </Container>
  </section>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";

import { stripHtmlTags } from "~/helpers/string";
import Card from "../../../global/Card.vue";
import Container from "../../../global/Container.vue";
import { useCarousel } from "../../../helpers/carousel";
import { usePublicCmapaigns } from "../services/public-campaigns";
const { breakpoints1, settings, Carousel, Slide, Pagination, Navigation } =
  useCarousel();
const { publicCampaigns, status } = usePublicCmapaigns();
const { locale } = useI18n();
const isLoading = ref(true);

// only simulation for test skeleton loader
setTimeout(() => {
  isLoading.value = false;
}, 3000);
</script>
