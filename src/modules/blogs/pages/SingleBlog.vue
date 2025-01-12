<template>
  <Container>
    <BreadCrumb>
      <template #first_page> {{ $t("global.home") }} </template>
      <template #second_page> {{ $t("blogs.blog") }} </template>
    </BreadCrumb>
    <div class="content">
      <div class="video">
        <video
          class="rounded-md object-cover cursor-pointer w-full lg:h-[500px] xl:h-[500px] md:h-full h-full"
          src="../../../assets/videos/contribution-vid.mp4"
          poster="../../../assets/videos/contribution-poster.svg"
          controls
        ></video>
      </div>

      <div class="flex justify-center">
        <div class="content_text py-5 w-[792px]">
          <!-- title -->
          <h1
            class="lg:text-4xl text-start xl:text-4xl md:text-3xl text-3xl font-bold leading-[54px]"
          >
            {{ $t("blogs.single_title") }}
          </h1>

          <div class="flex items-center pt-2 justify-between">
            <!-- writer -->
            <div class="flex items-center gap-x-2">
              <img src="../../../assets/images/honor-company.svg " alt="" />
              <span>{{ $t("blogs.single_writer") }}</span>
            </div>

            <!-- reading time and date -->
            <div class="flex items-center gap-x-sm">
              <span>{{ $t("blogs.single_time") }}</span>
              <span>{{ $t("blogs.single_date") }}</span>
            </div>
          </div>

          <!-- first text -->
          <p
            class="text_one text-justify text-[20px] text-[#121212] leading-[32px] pt-4"
          >
            {{ $t("blogs.single_para1") }}
          </p>

          <!-- second text -->
          <div class="pt-4">
            <h2 class="font-bold text-2xl leading-[36px] mb-3">
              {{ $t("blogs.title_one") }}
            </h2>

            <p class="text-[20px] text-[#121212] leading-[32px] text-justify">
              {{ $t("blogs.title_one_desc") }}
            </p>
          </div>

          <!-- third text -->
          <div class="pt-4">
            <h2 class="font-bold text-2xl leading-[36px] mb-3">
              {{ $t("blogs.title_two") }}
            </h2>

            <p class="text-[20px] text-[#121212] leading-[32px] text-justify">
              {{ $t("blogs.title_two_desc") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <BlogSimilarBlogs />
  </Container>
</template>

<script setup lang="ts">
import Container from "~/global/Container.vue";
import BreadCrumb from "~/global/BreadCrumb.vue";
</script>
