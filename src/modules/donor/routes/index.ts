import { resolve } from "pathe";

const dashbaordDonorRoutes = [
  {
    name: "donor",
    path: "/dashboard/donor",
    file: resolve(__dirname, "../pages/Dashboard.vue"),
    meta: { middleware: ["require-auth", "only-donor", "valid-user"] },
  },
  {
    name: "donor-cart",
    path: "/dashboard/donor/cart",
    file: resolve(__dirname, "../pages/Cart.vue"), // Adjusted path
    meta: { middleware: ["require-auth", "only-donor", "valid-user"] },
  },
  {
    name: "donor-donations-cart",
    path: "/dashboard/donor/donations-cart",
    file: resolve(__dirname, "../pages/DonationCart.vue"),
    meta: { middleware: ["require-auth", "only-donor", "valid-user"] },
  },
  {
    name: "donor-campaigns",
    path: "/dashboard/donor/campaigns-history",
    file: resolve(__dirname, "../pages/CampaignHistory.vue"),
    meta: { middleware: ["require-auth", "only-donor", "valid-user"] },
  },
  {
    name: "donor-donation-history",
    path: "/dashboard/donor/donation-history",
    file: resolve(__dirname, "../pages/DonationHistory.vue"),
    meta: { middleware: ["require-auth", "only-donor", "valid-user"] },
  },
  {
    name: "donor-notification",
    path: "/dashboard/donor/notification",
    file: resolve(__dirname, "../pages/Notifications.vue"),
    meta: { middleware: ["require-auth", "only-donor", "valid-user"] },
  },
  {
    name: "donor-settings",
    path: "/dashboard/donor/settings",
    file: resolve(__dirname, "../pages/Setting.vue"),
    meta: { middleware: ["require-auth", "only-donor", "valid-user"] },
  },
];

export default dashbaordDonorRoutes;
