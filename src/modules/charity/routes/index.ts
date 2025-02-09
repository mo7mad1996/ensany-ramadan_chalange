import { resolve } from "pathe";

const dashbaordRoutes = [
  {
    name: "charity",
    path: "/dashboard/charity",
    file: resolve(__dirname, "../pages/Dashboard.vue"),
  },
  {
    name: "charity-campaigns",
    path: "/dashboard/charity/campaigns",
    file: resolve(__dirname, "../pages/Campaigns/Index.vue"),
  },
  {
    name: "edit-campaign",
    path: "/dashboard/charity/campaigns/:id/edit",
    file: resolve(__dirname, "../pages/Campaigns/Edit.vue"),
  },
  {
    name: "charity-donations",
    path: "/dashboard/charity/donations",
    file: resolve(__dirname, "../pages/DonationsPage.vue"),
  },
  {
    name: "charity-notification",
    path: "/dashboard/charity/notification",
    file: resolve(__dirname, "../pages/NotificationPage.vue"),
  },
  {
    name: "charity-settings",
    path: "/dashboard/charity/settings",
    file: resolve(__dirname, "../pages/SettingsPage.vue"),
  },
];

export default dashbaordRoutes;
