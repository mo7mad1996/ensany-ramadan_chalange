<template>
  <section aria-label="our story section" class="pt-[2rem] pb-[2rem]">
    <Container
      class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center"
    >
      <div class="content">
        <h1 class="font-bold text-[32px] leading-[48px] mb-[1rem]">
          Our Story
        </h1>
        <p class="text-[#12121299] text-[14px] w-[500px]">
          Founded in 2010, our organization grew from a small group of
          passionate volunteers to a dedicated team of professionals committed
          to making a difference. What started as a local initiative has now
          expanded to support communities across multiple regions.
        </p>
      </div>

      <div class="image">
        <img
          src="../../../assets/images/about/our-story.png"
          class="rounded-tr-[60px] rounded-ee-[60px]"
          alt=""
        />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
</script>
