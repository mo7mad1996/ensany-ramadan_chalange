<template>
  <section aria-label="success stories section" class="success_stories">
    <Container>
      <!-- title -->
      <h2 class="text-[36px] font-bold mb-8">Success Stories</h2>

      <Carousel v-bind="settings" :breakpoints="breakpoints4" class="mt-4">
        <Slide v-for="(item, index) in 4" :key="index">
          <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
            <div class="image">
              <img
                src="../../../assets/images/success-stories.jpeg"
                class="rounded-tr-[60px] rounded-ee-[60px]"
                alt=""
              />
            </div>

            <div class="content text-start">
              <h1 class="font-bold mb-[2rem] text-[36px]">
                Your Contribution, Real Impact
              </h1>

              <p class="text-[14px] leading-[20px]">
                Our heroes join hands to fund meals, build shelters, and support
                education, driven by the shared goal of spreading kindness. This
                year, we invite you to be part of this journey, turning small
                gestures into impactful change. By supporting a Ramadan
                challenge, you’re not only helping achieve a community goal but
                also creating lasting memories of giving during this blessed
                month See more.
              </p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../../../global/Container.vue";
import { useCarousel } from "../../../helpers/carousel";

const { settings, breakpoints4, Navigation, Carousel, Slide } = useCarousel();
</script>

<style>
.success_stories .carousel__prev {
  left: 92% !important;
  transform: translateY(5rem) !important;
  background-color: #e0e0e0;
  border-radius: 5px;
  color: #3e7e41;
}

.success_stories .carousel__next {
  right: 0 !important;
  transform: translateY(5rem) !important;
  color: #3e7e41;
  background-color: #e0e0e0;
  border-radius: 3px;
}
</style>
