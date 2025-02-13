<template>
  <div class="sidebar">
    <!-- user name -->
    <div class="user_name flex gap-x-3 items-center">
      <img loading="lazy" 
        :src="user.photo || '../assets/images/dashboard/avatar.svg'"
        width="30px"
        class="rounded-full aspect-square object-cover"
        alt=""
      />
      <span v-if="user?.first_name">{{ user?.first_name }}</span>
      <!-- <span v-if="user?.dooner_name">{{ user?.dooner_name }}</span> -->
    </div>

    <!-- dashboard links -->
    <ul class="list-none mt-sm">
      <li class="cursor-pointer mb-3">
        <nuxt-link to="/dashboard/donor" class="flex items-center gap-x-2 p-2">
          <img loading="lazy" 
            src="../assets/images/dashboard/dashboard.svg"
            width="15px"
            alt=""
          />
          <span>{{ $t("donor.dashboard") }}</span>
        </nuxt-link>
      </li>
      <li class="cursor-pointer mb-3">
        <nuxt-link
          to="/dashboard/donor/donations-cart"
          class="flex items-center gap-x-2 p-2"
        >
          <img loading="lazy" src="../assets/images/donor/icon.svg" width="15px" alt="" />
          <span>{{ $t("donor.donation_cart") }}</span>
        </nuxt-link>
      </li>
      <li class="cursor-pointer mb-3">
        <nuxt-link
          to="/dashboard/donor/campaigns-history"
          class="flex items-center gap-x-2 p-2"
        >
          <img loading="lazy" 
            src="../assets/images/dashboard/campaigns.svg"
            width="15px"
            alt=""
          />
          <span>{{ $t("donor.campaigns_history") }}</span>
        </nuxt-link>
      </li>
      <li class="cursor-pointer mb-3">
        <nuxt-link
          to="/dashboard/donor/donation-history"
          class="flex items-center gap-x-2 p-2"
        >
          <img loading="lazy" src="../assets/images/donor/Money.svg" width="15px" alt="" />
          <span>{{ $t("donor.donation_history") }}</span>
        </nuxt-link>
      </li>

      <!-- <li class="cursor-pointer mb-3">
        <nuxt-link
          to="/dashboard/donor/notification"
          class="flex items-center gap-x-2 p-2"
        >
          <img loading="lazy" 
            src="../assets/images/dashboard/notification.svg"
            width="15px"
            alt=""
          />
          <span>{{ $t("donor.notification") }}</span>
        </nuxt-link>
      </li> -->

      <li class="cursor-pointer mb-10">
        <nuxt-link
          to="/dashboard/donor/settings"
          class="flex items-center gap-x-2 p-2"
        >
          <img loading="lazy" 
            src="../assets/images/dashboard/settings.svg"
            width="15px"
            alt=""
          />
          <span>{{ $t("donor.settings") }}</span>
        </nuxt-link>
      </li>

      <li class="cursor-pointer">
        <div class="flex items-center gap-x-2 p-2" @click="logout">
          <img loading="lazy" 
            src="../assets/images/dashboard/logout.svg"
            width="15px"
            alt=""
          />
          <span>{{ $t("donor.logout") }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAuth } from "~/modules/auth/services/auth";
const { logout } = useAuth();
const { user } = useAuth();
</script>

<style scoped>
.sidebar .router-link-active.router-link-exact-active {
  background-color: #dafeda;
  border-radius: 3px;
}
</style>
