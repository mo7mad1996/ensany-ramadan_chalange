import { resolve } from "pathe";

const campaignsRoutes = [
  {
    name: "campaigns",
    path: "/campaigns",
    file: resolve(__dirname, "../pages/AllCampaigns.vue"), // Adjusted path
  },

  {
    name: "campaign",
    path: "/campaigns/donate/:id",
    file: resolve(__dirname, "../pages/SingleCampaignDonate.vue"), // Adjusted path
  },

  {
    name: "view-campaign",
    path: "/campaigns/:id",
    file: resolve(__dirname, "../pages/ViewCampaign.vue"), // Adjusted path
  },
];

export default campaignsRoutes;
