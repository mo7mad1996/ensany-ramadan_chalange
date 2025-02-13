<template>
  <div class="dashboard_campaigns pb-sm">
    <div class="flex justify-between items-center">
      <div>
        <select
          id="filter_status"
          class="block w-full px-2 py-2 outline-none text-gray-700 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
        >
          <option value="" disabled selected>
            {{ $t("dashboard.select") }}
          </option>
          <option value="active">{{ $t("dashboard.all_notif") }}</option>
          <option value="inactive">
            {{ $t("dashboard.campaigns_notif") }}
          </option>
          <option value="pending">{{ $t("dashboard.donation_notif") }}</option>
        </select>
      </div>

      <span class="underline text-primary text-sm cursor-pointer">{{
        $t("dashboard.mark_read")
      }}</span>
    </div>

    <div class="content pt-sm">
      <!-- donation notification card -->
      <div
        class="card donation-notify p-3 rounded-lg flex gap-x-3 items-start bg-[#FFF8E1]"
      >
        <div class="image">
          <img loading="lazy" src="../../../assets/images/doner.svg" alt="" />
          <img loading="lazy" src="../../../assets/images/doner.svg" alt="" />
        </div>

        <div class="text w-full">
          <h4 class="font-bold">{{ $t("dashboard.donation_title") }}</h4>
          <p>
            {{ $t("dashboard.donation_text") }}
          </p>

          <div class="w-full flex items-center justify-between">
            <nuxt-link
              to="/dashboard/donations"
              class="underline text-primary text-sm cursor-pointer"
              >{{ $t("dashboard.donation_action") }}</nuxt-link
            >

            <span class="text-sm text-[#4c4c4c]">{{
              $t("dashboard.donation_time")
            }}</span>
          </div>
        </div>
      </div>

      <!-- campaigns notification card -->
      <div
        class="card mt-5 donation-notify p-3 rounded-lg flex gap-x-3 items-start bg-[#F5F5F5]"
      >
        <div class="image">
          <img
            loading="lazy"
            src="../../../assets/images/dashboard/campaigns.svg"
            alt=""
          />
        </div>

        <div class="text w-full">
          <h4 class="font-bold">{{ $t("dashboard.campaign_title") }}</h4>
          <p>
            {{ $t("dashboard.campaign_text") }}
          </p>
          <div class="w-full flex items-center justify-between">
            <nuxt-link
              to="/dashboard/campaigns"
              class="underline text-primary text-sm cursor-pointer"
              >{{ $t("dashboard.campaign_action") }}</nuxt-link
            >

            <span class="text-sm text-[#4c4c4c]">{{
              $t("dashboard.campaign_time")
            }}</span>
          </div>
        </div>
      </div>

      <!-- security notification card -->
      <div
        class="card mt-5 donation-notify p-3 rounded-lg flex gap-x-3 items-start border-2 border-red-700 bg-[#F1E2E2]"
      >
        <div class="image">
          <img loading="lazy" src="../../../assets/images/dashboard/warning.svg" alt="" />
        </div>

        <div class="text w-full">
          <h4 class="font-bold">
            {{ $t("dashboard.security_title") }}
          </h4>
          <p>
            {{ $t("dashboard.security_text") }}
          </p>
          <div class="w-full flex items-center justify-between">
            <nuxt-link to="" class="underline text-primary text-sm cursor-pointer">{{
              $t("dashboard.security_action")
            }}</nuxt-link>

            <span class="text-sm text-[#4c4c4c]">{{
              $t("dashboard.security_time")
            }}</span>
          </div>
        </div>
      </div>

      <!-- campaigns notification card -->
      <div
        class="card mt-5 donation-notify p-3 rounded-lg flex gap-x-3 items-start bg-[#F5F5F5]"
      >
        <div class="image">
          <img
            loading="lazy"
            src="../../../assets/images/dashboard/campaigns.svg"
            alt=""
          />
        </div>

        <div class="text w-full">
          <h4 class="font-bold">{{ $t("dashboard.campaign_title") }}</h4>
          <p>
            {{ $t("dashboard.campaign_text") }}
          </p>
          <div class="w-full flex items-center justify-between">
            <nuxt-link
              to="/dashboard/campaigns"
              class="underline text-primary text-sm cursor-pointer"
              >{{ $t("dashboard.campaign_action") }}</nuxt-link
            >

            <divn class="text-sm text-[#4c4c4c]">{{
              $t("dashboard.campaign_time")
            }}</divn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "@vuepic/vue-datepicker/dist/main.css";
import { useGlobalVar } from "~/helpers/global-var";

definePageMeta({
  layout: "charity",
  middleware: "require-auth",
});

const { siteName } = useGlobalVar();
siteName("dashboard.page_title_notifications");
</script>
