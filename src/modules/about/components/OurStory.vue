<template>
  <section aria-label="our story section" class="pt-sm pb-sm">
    <Container>
      <h1 class="text-black font-bold lg:text-4xl md:text-4xl text-3xl">
        {{ $t("about.guided") }}
      </h1>

      <div
        class="grid gap-y-sm grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center pt-sm"
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
          <img loading="lazy" 
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
