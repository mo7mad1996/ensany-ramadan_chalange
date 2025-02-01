<template>
  <section class="current_campaign mt-sm mb-sm">
    <div class="card grid gap-md grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
      <div class="text">
        <h1 class="text-4xl">
          <span class="font-light" v-if="user?.first_name">{{
            user?.first_name
          }}</span>

          <span class="font-light" v-if="user?.charity_name">{{
            user?.charity_name
          }}</span>

          <span class="font-bold"> ,{{ $t("dashboard.current_title") }}</span>
        </h1>
        <p class="text-[#696969]">
          {{ $t("dashboard.current_desc1") }}
          <span class="text-[#BB9B49]">30%</span>
          {{ $t("dashboard.current_desc2") }}
        </p>

        <div class="progress-bar mt-5 mb-5">
          <v-progress-linear
            color="primary"
            :model-value="20"
            class="rounded mt-2"
            :height="10"
          ></v-progress-linear>
        </div>

        <v-btn
          class="text-capitalize rounded-lg"
          variant="flat"
          size="large"
          color="primary"
        >
          {{ $t("dashboard.continue_donation") }}
        </v-btn>
      </div>

      <div class="image flex justify-end">
        <img src="../../../assets/images/dashboard/home-image.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAuth } from "~/modules/auth/services/auth";

const { user } = useAuth();
</script>
