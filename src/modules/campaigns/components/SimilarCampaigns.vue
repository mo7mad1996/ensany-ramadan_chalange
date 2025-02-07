<template>
  <section aria-label="ramadan chalenges" class="pt-sm pb-sm">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("campaigns.similar_campaigns") }}
      </h1>

      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints1"
        class="mt-4"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      >
        <Slide
          v-if="similarCampaigns.length > 0"
          v-for="(campaign, index) in similarCampaigns"
          :key="campaign?.id"
        >
          <!-- Use unique `campaign.id` as the key -->
          <Card
            :id="campaign?.id"
            :rate="(campaign?.total_amount / campaign?.price_target) * 100"
            :shadow="true"
            :donatebtn="true"
            :route="`/campaigns/donate/${campaign?.id}`"
          >
            <template #image>
              <img
                @click="navigateTo(`/campaigns/${campaign?.id}`)"
                :src="campaign?.image"
                class="w-full max-h-[15rem] object-cover rounded-lg"
                alt="....."
              />
            </template>

            <template #company> {{ campaign?.user?.name }}</template>

            <template #title>{{ campaign?.name }}</template>

            <template #desc>
              <span v-html="stripHtmlTags(campaign?.short_desc)?.slice(0, 30)"></span>
            </template>

            <template #subscribers>{{ campaign?.total_donors }}</template>

            <template #total_donation>${{ campaign?.price_target }}</template>

            <template #donation>${{ campaign?.total_amount }}</template>
          </Card>
        </Slide>

        <template #addons>
          <pagination />
        </template>
      </Carousel>
    </Container>
  </section>
</template>

<script setup>
import { stripHtmlTags } from "~/helpers/string";
import Card from "../../../global/Card.vue";
import Container from "../../../global/Container.vue";
import { useCarousel } from "../../../helpers/carousel";
const { breakpoints1, settings, Carousel, Slide, Pagination } = useCarousel();
const { locale } = useI18n();

const props = defineProps({
  similarCampaigns: {
    required: true,
  },
});
</script>
