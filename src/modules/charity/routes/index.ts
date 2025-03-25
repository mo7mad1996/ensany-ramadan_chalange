import { resolve } from "pathe";

const dashbaordRoutes = [
  {
    name: "charity",
    path: "/dashboard/charity",
    file: resolve(__dirname, "../pages/Dashboard.vue"),
    meta: { middleware: ["require-auth", "only-charity", "valid-user"] },
  },
  {
    name: "charity-campaigns",
    path: "/dashboard/charity/campaigns",
    file: resolve(__dirname, "../pages/Campaigns/Index.vue"),
    meta: { middleware: ["require-auth", "only-charity", "valid-user"] },
  },
  {
    name: "edit-campaign",
    path: "/dashboard/charity/campaigns/:id/edit",
    file: resolve(__dirname, "../pages/Campaigns/Edit.vue"),
    meta: { middleware: ["require-auth", "only-charity", "valid-user"] },
  },
  {
    name: "charity-donations",
    path: "/dashboard/charity/donations",
    file: resolve(__dirname, "../pages/DonationsPage.vue"),
    meta: { middleware: ["require-auth", "only-charity", "valid-user"] },
  },
  {
    name: "charity-notification",
    path: "/dashboard/charity/notification",
    file: resolve(__dirname, "../pages/NotificationPage.vue"),
    meta: { middleware: ["require-auth", "only-charity", "valid-user"] },
  },
  {
    name: "charity-settings",
    path: "/dashboard/charity/settings",
    file: resolve(__dirname, "../pages/SettingsPage.vue"),
    meta: { middleware: ["require-auth", "only-charity", "valid-user"] },
  },
];

export default dashbaordRoutes;
