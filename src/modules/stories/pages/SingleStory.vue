<template>
  <Container>
    <BreadCrumb>
      <template #first_page> Home </template>
      <template #second_page> Stories </template>
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
            Your Contribution, Real Impact
          </h1>

          <!-- reading time and date -->
          <div class="flex items-center justify-end gap-x-sm">
            <span>3 min read</span>
            <span>Aug 9, 2024</span>
          </div>

          <!-- first text -->
          <p
            class="text_one text-justify text-[20px] text-[#121212] leading-[32px] pt-4"
          >
            A simple act of generosity can set off a chain reaction of hope and
            change. This is the story of how one donor’s kindness transformed
            lives forever.
          </p>

          <!-- second text -->
          <div class="pt-4">
            <h2 class="font-bold text-2xl leading-[36px] mb-3">
              The Journey of Your Donation
            </h2>

            <p class="text-[20px] text-[#121212] leading-[32px] text-justify">
              Every donation tells a story of hope and transformation. When you
              contribute, you're not just giving money; you're empowering lives,
              fostering education, and providing opportunities that were once
              out of reach. Imagine a young boy who dreamed of attending school
              but lacked the means—your support made that dream a reality. From
              the moment you give, your generosity sets in motion a chain of
              events that brings tangible, life-changing results to those in
              need.
            </p>
          </div>

          <!-- third text -->

          <!-- second text -->
          <div class="pt-4">
            <h2 class="font-bold text-2xl leading-[36px] mb-3">
              Impact Beyond Expectations
            </h2>

            <p class="text-[20px] text-[#121212] leading-[32px] text-justify">
              What starts as a simple act of kindness often grows into something
              far greater. Your donation doesn't just stop at providing
              immediate relief—it ripples outward, creating a lasting legacy.
              Families regain their footing, communities grow stronger, and
              individuals who once struggled now thrive. These stories of impact
              prove that even the smallest contribution has the power to build a
              brighter future for generations to come. When you give, you're not
              just changing lives; you're inspiring a movement of compassion and
              generosity.
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
