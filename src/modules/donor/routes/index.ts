import { resolve } from "pathe";

const dashbaordDonorRoutes = [
  {
    name: "donor",
    path: "/dashboard/donor",
    file: resolve(__dirname, "../pages/Dashboard.vue"),
  },
  {
    name: "donor-donations-cart",
    path: "/dashboard/donor/donations-cart",
    file: resolve(__dirname, "../pages/DonationCart.vue"),
  },
  {
    name: "donor-campaigns",
    path: "/dashboard/donor/campaigns-history",
    file: resolve(__dirname, "../pages/CampaignHistory.vue"),
  },
  {
    name: "donor-donation-history",
    path: "/dashboard/donor/donation-history",
    file: resolve(__dirname, "../pages/DonationHistory.vue"),
  },
  {
    name: "donor-notification",
    path: "/dashboard/donor/notification",
    file: resolve(__dirname, "../pages/Notifications.vue"),
  },
  {
    name: "donor-settings",
    path: "/dashboard/donor/settings",
    file: resolve(__dirname, "../pages/Setting.vue"),
  },
];

export default dashbaordDonorRoutes;
