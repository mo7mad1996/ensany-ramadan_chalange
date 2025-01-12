<template>
  <Container>
    <BreadCrumb>
      <template #first_page> {{ $t("global.home") }} </template>
      <template #second_page> {{ $t("story.stories") }} </template>
    </BreadCrumb>

    <div class="content flex justify-center">
      <div class="w-[792px]">
        <div class="video">
          <video
            class="rounded-md object-cover cursor-pointer w-full lg:h-[500px] xl:h-[500px] md:h-full h-full"
            src="../../../assets/videos/contribution-vid.mp4"
            poster="../../../assets/videos/contribution-poster.svg"
            controls
          ></video>
        </div>

        <div class="content_text py-5">
          <!-- title -->
          <h1
            class="lg:text-4xl text-start xl:text-4xl md:text-3xl text-3xl font-bold leading-[54px]"
          >
            {{ $t("story.single_title") }}
          </h1>

          <!-- reading time and date -->
          <div class="flex items-center justify-end gap-x-sm">
            <span>{{ $t("story.single_time") }}</span>
            <span>{{ $t("story.single_date") }}</span>
          </div>

          <!-- first text -->
          <p
            class="text_one text-justify text-[20px] text-[#121212] leading-[32px] pt-4"
          >
            {{ $t("story.single_para1") }}
          </p>

          <!-- second text -->
          <div class="pt-4">
            <h2 class="font-bold text-2xl leading-[36px] mb-3">
              {{ $t("story.title_one") }}
            </h2>

            <p class="text-[20px] text-[#121212] leading-[32px] text-justify">
              {{ $t("story.title_one_desc") }}
            </p>
          </div>

          <!-- second text -->
          <div class="pt-4">
            <h2 class="font-bold text-2xl leading-[36px] mb-3">
              {{ $t("story.title_two") }}
            </h2>

            <p class="text-[20px] text-[#121212] leading-[32px] text-justify">
              {{ $t("story.title_two_desc") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <StorySimilarStories />
  </Container>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
</script>
