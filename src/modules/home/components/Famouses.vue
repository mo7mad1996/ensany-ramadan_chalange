<template>
  <section aria-label="famouses section" class="pt-[2rem] pb-[2rem]">
    <Container>
      <!-- title -->
      <h2 class="text-[36px] font-bold mb-8">Trusted by those you trust</h2>

      <Carousel v-bind="settings" :breakpoints="breakpoints3" class="mt-4">
        <Slide>
          <div class="image overflow-hidden relative">
            <img
              src="../../../assets/images/scholar6.png"
              class="cursor-pointer"
              alt=""
            />

            <div
              class="hover_name text-start px-2 py-1 absolute rounded-md w-full"
            >
              <span class="font-bold">Ali Omar</span>
              <p class="text-[14px]">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              src="../../../assets/images/scholar1.png"
              class="cursor-pointer"
              alt=""
            />

            <div
              class="hover_name text-start px-2 py-1 absolute rounded-md w-full"
            >
              <span class="font-bold">Ali Omar</span>
              <p class="text-[14px]">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              src="../../../assets/images/scholar2.png"
              class="cursor-pointer"
              alt=""
            />

            <div
              class="hover_name text-start px-2 py-1 absolute rounded-md w-full"
            >
              <span class="font-bold">Ali Omar</span>
              <p class="text-[14px]">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              src="../../../assets/images/scholar3.png"
              class="cursor-pointer"
              alt=""
            />

            <div
              class="hover_name text-start px-2 py-1 absolute rounded-md w-full"
            >
              <span class="font-bold">Ali Omar</span>
              <p class="text-[14px]">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              src="../../../assets/images/scholar4.png"
              class="cursor-pointer"
              alt=""
            />

            <div
              class="hover_name text-start px-2 py-1 absolute rounded-md w-full"
            >
              <span class="font-bold">Ali Omar</span>
              <p class="text-[14px]">Head of Bayinah Institute</p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div class="image overflow-hidden relative">
            <img
              src="../../../assets/images/scholar5.png"
              class="cursor-pointer"
              alt=""
            />

            <div
              class="hover_name text-start px-2 py-1 absolute rounded-md w-full"
            >
              <span class="font-bold">Ali Omar</span>
              <p class="text-[14px]">Head of Bayinah Institute</p>
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
import { ref } from "vue";
import { useCarousel } from "../../../helpers/carousel";

const { settings, breakpoints3, Navigation, Carousel, Slide } = useCarousel();

const famouses = ref([
  {
    image: "/images/scholar1.png",
    name: "Ali Omar",
    desc: "Head of Bayinah Institute",
  },
  {
    image: "../../../src/assets/images/scholar2.png",
    name: "Ali Omar",
    desc: "Head of Bayinah Institute",
  },
  {
    image: "../../../src/assets/images/scholar3.png",
    name: "Ali Omar",
    desc: "Head of Bayinah Institute",
  },
  {
    image: "../../../src/assets/images/scholar4.png",
    name: "Ali Omar",
    desc: "Head of Bayinah Institute",
  },
  {
    image: "../../../src/assets/images/scholar5.png",
    name: "Ali Omar",
    desc: "Head of Bayinah Institute",
  },
  {
    image: "../../../src/assets/images/scholar6.png",
    name: "Ali Omar",
    desc: "Head of Bayinah Institute",
  },
]);
</script>

<style scoped>
.image {
  .hover_name {
    bottom: -100%;
    transition: all 0.3s ease;
    background: rgb(223, 255, 230);
    background: linear-gradient(
      6deg,
      rgba(223, 255, 230, 0.7175682773109244) 26%,
      rgba(217, 217, 217, 0.6363357843137255) 99%
    );
  }

  &:hover {
    .hover_name {
      bottom: 0;
    }
  }
}
</style>
