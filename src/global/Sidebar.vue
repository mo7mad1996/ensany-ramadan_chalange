<template>
  <div class="sidebar">
    <!-- user name -->
    <div class="user_name flex gap-x-3 items-center">
      <img src="../assets/images/dashboard/avatar.svg" width="30px" alt="" />
      <span>Sarah M.</span>
    </div>

    <!-- dashboard links -->
    <ul class="list-none mt-sm">
      <li class="cursor-pointer mb-3">
        <nuxt-link to="/dashboard" class="flex items-center gap-x-2 p-2">
          <img
            src="../assets/images/dashboard/dashboard.svg"
            width="15px"
            alt=""
          />
          <span>Dashboard</span>
        </nuxt-link>
      </li>

      <li class="cursor-pointer mb-3">
        <nuxt-link
          to="/dashboard/campaigns"
          class="flex items-center gap-x-2 p-2"
        >
          <img
            src="../assets/images/dashboard/campaigns.svg"
            width="15px"
            alt=""
          />
          <span>Campaigns</span>
        </nuxt-link>
      </li>

      <li class="cursor-pointer mb-3">
        <nuxt-link to="/" class="flex items-center gap-x-2 p-2">
          <img
            src="../assets/images/dashboard/donation.svg"
            width="15px"
            alt=""
          />
          <span>Donation</span>
        </nuxt-link>
      </li>

      <li class="cursor-pointer mb-3">
        <nuxt-link to="/" class="flex items-center gap-x-2 p-2">
          <img
            src="../assets/images/dashboard/notification.svg"
            width="15px"
            alt=""
          />
          <span>Notifications</span>
        </nuxt-link>
      </li>

      <li class="cursor-pointer mb-10">
        <nuxt-link to="/" class="flex items-center gap-x-2 p-2">
          <img
            src="../assets/images/dashboard/settings.svg"
            width="15px"
            alt=""
          />
          <span>Settings</span>
        </nuxt-link>
      </li>

      <li class="cursor-pointer">
        <nuxt-link to="/" class="flex items-center gap-x-2 p-2">
          <img
            src="../assets/images/dashboard/logout.svg"
            width="15px"
            alt=""
          />
          <span>Logo out</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar .router-link-active.router-link-exact-active {
  background-color: #dafeda;
  border-radius: 3px;
}
</style>
