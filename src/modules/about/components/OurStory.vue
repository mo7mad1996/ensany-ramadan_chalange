<template>
  <section aria-label="our story section" class="pt-[2rem] pb-[2rem]">
    <Container>
      <h1
        class="text-black font-bold lg:text-[36px] md:text-[36px] text-[28px]"
      >
        {{ $t("about.guided") }}
      </h1>

      <div
        class="grid gap-y-[2rem] grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center pt-[2rem]"
      >
        <div class="content">
          <h1 class="font-bold text-[32px] leading-[48px] mb-[1rem]">
            {{ $t("about.guided_sories") }}
          </h1>
          <p
            class="text-[#12121299] text-[14px] lg:w-[500px] xl:w-[500px] md:w-[382px] w-[382px]"
          >
            {{ $t("about.guided_desc") }}
          </p>
        </div>

        <div class="image">
          <img
            src="../../../assets/images/about/our-story.png"
            class="rounded-tr-[60px] ltr:rounded-ee-[60px] rtl:rounded-es-[60px]"
            alt=""
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
</script>
