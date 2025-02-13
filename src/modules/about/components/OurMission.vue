<template>
  <section aria-label="our story section" class="pt-sm pb-sm">
    <Container
      class="grid gap-y-sm grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center gap-x-xm"
    >
      <div class="image">
        <img
          loading="lazy"
          src="../../../assets/images/about/our-mission.png"
          class="ltr:rounded-tr-[60px] rtl:rounded-tl-[60px] ltr:rounded-ee-[60px] rtl:rounded-ee-[60px]"
          alt=""
        />
      </div>

      <div class="content">
        <h1 class="font-bold text-[32px] leading-[48px] mb-[1rem]">
          {{ $t("about.missions") }}
        </h1>
        <p
          class="text-[#12121299] text-[14px] lg:w-[500px] xl:w-[500px] md:w-[382px] w-[382px]"
        >
          {{ $t("about.mission_desc") }}
        </p>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
</script>
