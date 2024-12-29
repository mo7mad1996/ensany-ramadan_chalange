<template>
  <section aria-label="our story section" class="pt-[2rem] pb-[2rem]">
    <Container
      class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center gap-x-[3rem]"
    >
      <div class="image">
        <img
          src="../../../assets/images/about/our-mission.png"
          class="rounded-tr-[60px] rounded-ee-[60px]"
          alt=""
        />
      </div>

      <div class="content">
        <h1 class="font-bold text-[32px] leading-[48px] mb-[1rem]">
          Our Mission & Vision
        </h1>
        <p class="text-[#12121299] text-[14px] w-[500px]">
          To create a world where generosity knows no bounds, empowering
          communities to thrive through innovative campaigns that inspire,
          connect, and transform lives.At Ramadan Challenge, we believe that
          giving back is more than an act; it’s a way to inspire hope and build
          a better future. Our platform connects individuals and nonprofits to
          unite for impactful causes. Whether you’re starting a challenge or
          supporting one, every action matters.
        </p>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
</script>
