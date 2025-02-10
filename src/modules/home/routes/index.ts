import { resolve } from "pathe";

const homeRoutes = [
  {
    name: "home",
    path: "/",
    file: resolve(__dirname, "../pages/HomePage.vue"), // Adjusted path
  },
  {
    name: "start-campaign",
    path: "/start-campaign",
    file: resolve(__dirname, "../pages/StartCampaign.vue"), // Adjusted path
  },

  {
    name: "show-page",
    path: "/page/:id",
    file: resolve(__dirname, "../pages/showPage.vue"), // Adjusted path
  },
];

export default homeRoutes;
