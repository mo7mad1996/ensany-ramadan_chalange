<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ page?.title }} </template>
  </BreadCrumb>

  <div class="flex justify-center pb-lg">
    <div class="content xl:w-[80%] lg:w-[90%] md:w-[80%] w-[80%]">
      <!-- terms & conditions -->
      <div>
        <h1 class="font-bold text-[32px] leading-[48px]">
          {{ page?.title }}
        </h1>

        <!-- fourth term -->
        <div class="pt-sm">
          <p class="text-justify text-[#121212] text-sm leading-20 pt-4">
            {{ page?.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import BreadCrumb from "~/global/BreadCrumb.vue";
import { useGlobalVar } from "~/helpers/global-var";
import { useShowPage } from "../services/page";
const route = useRoute();
const { page, status } = useShowPage(route.params.id);

const { siteName } = useGlobalVar();
siteName(null, page.value?.title);

useSeoMeta({
  description: page.value.content,
});
</script>
