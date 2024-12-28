<template>
  <section aria-label="ramadan chalenges" class="pt-[2rem] pb-[2rem]">
    <Container>
      <h1
        class="text-black font-bold lg:text-[36px] md:text-[36px] text-[28px]"
      >
        Other Platform Campaigns
      </h1>

      <Carousel v-bind="settings" :breakpoints="breakpoints1" class="mt-4">
        <Slide v-for="(item, index) in 5" :key="index">
          <Card :rate="20">
            <template #image>
              <img
                src="../../../assets/images/chalenge-img.png"
                class="w-100"
                alt=""
              />
            </template>

            <template #company> Honor Company </template>

            <template #title>Feed a Family for Iftar</template>

            <template #desc>
              Join our Ramadan challenge to provide iftar meals for families in
              need. Every $50 feeds a family for a day.</template
            >

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
</script>

<style scoped></style>
