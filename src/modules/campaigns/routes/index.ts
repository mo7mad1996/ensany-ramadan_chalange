import { resolve } from "pathe";

const campaignsRoutes = [
  {
    name: "campaigns",
    path: "/campaigns",
    file: resolve(__dirname, "../pages/AllCampaigns.vue"),
  },

  {
    name: "gift",
    path: "/gift/:id",
    file: resolve(__dirname, "../pages/ShowGift.vue"),
  },

  {
    name: "campaign",
    path: "/campaigns/donate/:id",
    file: resolve(__dirname, "../pages/SingleCampaignDonate.vue"),
  },
  {
    name: "affiliate-charity",
    path: "/charity/:id",
    file: resolve(__dirname, "../pages/AllCharityCampaigns.vue"),
  },
  {
    name: "view-campaign",
    path: "/campaigns/:id",
    file: resolve(__dirname, "../pages/ViewCampaign.vue"),
  },
  {
    name: "payment-return",
    path: "/payment/return",
    file: resolve(__dirname, "../pages/PaymentReturn.vue"),
  },
];

export default campaignsRoutes;
