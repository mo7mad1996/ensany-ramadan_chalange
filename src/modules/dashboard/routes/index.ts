import { resolve } from "pathe";

const dashbaordRoutes = [
  {
    name: "dashboard",
    path: "/dashboard",
    file: resolve(__dirname, "../pages/Dashboard.vue"),
  },
  {
    name: "dash-campaigns",
    path: "/dashboard/campaigns",
    file: resolve(__dirname, "../pages/CampaignsPage.vue"),
  },
  {
    name: "dash-donations",
    path: "/dashboard/donations",
    file: resolve(__dirname, "../pages/DonationsPage.vue"),
  },
];

export default dashbaordRoutes;
