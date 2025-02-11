<template>
  <BreadCrumb>
    <template #first_page> {{ $t("global.home") }} </template>
    <template #second_page> {{ $t("auth.terms_condetions") }} </template>
  </BreadCrumb>

  <div class="flex justify-center pb-lg">
    <div class="content xl:w-[626px] lg:w-[626px] md:w-[90%] w-[90%]">
      <!-- terms & conditions -->
      <div>
        <h1 class="font-bold text-[32px] leading-[48px]">
          {{ $t("auth.terms_condetions") }}
        </h1>
        <p class="text-sm text-[#12121299] pt-1">{{ $t("auth.terms_desc") }}</p>
      </div>

      <!-- first term -->
      <div class="pt-sm">
        <span class="title text-2xl font-bold leading-[36px]">{{
          $t("auth.terms_glance")
        }}</span>
        <p class="text-sm text-[#12121299] pt-1">{{ $t("auth.glance_sub") }}</p>

        <p class="text-justify text-[#121212] text-sm leading-20 pt-4">
          {{ $t("auth.glance_desc") }}
        </p>
      </div>

      <!-- second term -->
      <div class="pt-sm">
        <span class="title text-2xl font-bold leading-[36px]">{{
          $t("auth.safe_respectfull")
        }}</span>
        <p class="text-sm text-[#12121299] pt-1">{{ $t("auth.safe_sub") }}</p>

        <p class="text-justify text-[#121212] text-sm leading-20 pt-4">
          {{ $t("auth.safe_desc") }}
        </p>
      </div>

      <!-- third term -->
      <div class="pt-sm">
        <span class="title text-2xl font-bold leading-[36px]">{{
          $t("auth.payment_refunds")
        }}</span>
        <p class="text-sm text-[#12121299] pt-1">
          {{ $t("auth.payment_sub") }}
        </p>

        <p class="text-justify text-[#121212] text-sm leading-20 pt-4">
          {{ $t("auth.payment_desc") }}
        </p>
      </div>

      <!-- fourth term -->
      <div class="pt-sm">
        <span class="title text-2xl font-bold leading-[36px]">{{
          $t("auth.account")
        }}</span>
        <p class="text-sm text-[#12121299] pt-1">
          {{ $t("auth.account_sub") }}
        </p>

        <p class="text-justify text-[#121212] text-sm leading-20 pt-4">
          {{ $t("auth.account_desc") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreadCrumb from "~/global/BreadCrumb.vue";
import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("auth.page_title_register_donor");
</script>
