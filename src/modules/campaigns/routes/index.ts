import { resolve } from "pathe";

const campaignsRoutes = [
  {
    name: "campaigns",
    path: "/campaigns",
    file: resolve(__dirname, "../pages/AllCampaigns.vue"), // Adjusted path
  },

  {
    name: "campaign",
    path: "/campaigns/:id",
    file: resolve(__dirname, "../pages/SingleCampaign.vue"), // Adjusted path
  },
];

export default campaignsRoutes;
