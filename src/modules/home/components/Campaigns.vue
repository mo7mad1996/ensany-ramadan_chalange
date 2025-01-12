<template>
  <section aria-label="ramadan chalenges" class="pt-sm pb-sm">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("home.campaigns") }}
      </h1>

      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints1"
        class="mt-4"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      >
        <Slide v-for="(item, index) in 5" :key="index">
          <Card
            :shadow="true"
            :donatebtn="true"
            :rate="20"
            :route="`/campaigns/donate/${index + 1}`"
          >
            <template #image>
              <img
                src="../../../assets/images/chalenge-img.png"
                class="w-100"
                alt=""
              />
            </template>

            <template #company> {{ $t("home.honor_company") }}</template>

            <template #title>{{ $t("home.feed_familly") }}</template>

            <template #desc> {{ $t("home.card_desc") }}</template>

            <template #subscribers>150</template>

            <template #total_donation>$6000</template>

            <template #donation>$600</template>
          </Card>
        </Slide>

        <template #addons>
          <pagination />
        </template>
      </Carousel>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
import Card from "../../../global/Card.vue";
import { useCarousel } from "../../../helpers/carousel";
const { breakpoints1, settings, Carousel, Slide, Pagination } = useCarousel();
const { locale } = useI18n();
</script>
