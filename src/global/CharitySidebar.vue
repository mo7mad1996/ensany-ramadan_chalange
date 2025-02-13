<template>
  <div class="sidebar">
    <!-- user name -->
    <div class="user_name flex gap-x-3 items-center">
      <img
        loading="lazy"
        :src="user.photo || '../assets/images/dashboard/avatar.svg'"
        width="30px"
        class="rounded-full aspect-square object-cover"
        alt=""
      />
      <span v-if="user?.first_name">{{ user?.first_name }}</span>
      <span v-if="user?.charity_name">{{ user?.charity_name }}</span>
    </div>

    <!-- dashboard links -->
    <ul class="list-none mt-sm">
      <li class="cursor-pointer mb-3">
        <nuxt-link to="/dashboard/charity" class="flex items-center gap-x-2 p-2">
          <img loading="lazy"  src="../assets/images/dashboard/dashboard.svg" width="15px" alt="" />
          <span>{{ $t("dashboard.dashboard") }}</span>
        </nuxt-link>
      </li>

      <li class="cursor-pointer mb-3">
        <nuxt-link
          to="/dashboard/charity/campaigns"
          class="flex items-center gap-x-2 p-2"
        >
          <img loading="lazy"  src="../assets/images/dashboard/campaigns.svg" width="15px" alt="" />
          <span>{{ $t("dashboard.campaigns") }}</span>
        </nuxt-link>
      </li>

      <li class="cursor-pointer mb-3">
        <nuxt-link
          to="/dashboard/charity/donations"
          class="flex items-center gap-x-2 p-2"
        >
          <img loading="lazy"  src="../assets/images/dashboard/donation.svg" width="15px" alt="" />
          <span>{{ $t("dashboard.donations") }}</span>
        </nuxt-link>
      </li>

      <!-- 
      <li class="cursor-pointer mb-3">
        <nuxt-link
          to="/dashboard/charity/notification"
          class="flex items-center gap-x-2 p-2"
        >
          <img loading="lazy" 
            src="../assets/images/dashboard/notification.svg"
            width="15px"
            alt=""
          />
          <span>{{ $t("dashboard.notif") }}</span>
        </nuxt-link>
      </li> 
      -->

      <li class="cursor-pointer mb-10">
        <nuxt-link to="/dashboard/charity/settings" class="flex items-center gap-x-2 p-2">
          <img loading="lazy"  src="../assets/images/dashboard/settings.svg" width="15px" alt="" />
          <span>{{ $t("dashboard.settings") }}</span>
        </nuxt-link>
      </li>

      <li class="cursor-pointer">
        <nuxt-link to="" class="flex items-center gap-x-2 p-2">
          <img loading="lazy"  src="../assets/images/dashboard/logout.svg" width="15px" alt="" />
          <span>{{ $t("dashboard.logout") }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAuth } from "~/modules/auth/services/auth";

const { user } = useAuth();
</script>

<style scoped>
.sidebar .router-link-active.router-link-exact-active {
  background-color: #dafeda;
  border-radius: 3px;
}
</style>
