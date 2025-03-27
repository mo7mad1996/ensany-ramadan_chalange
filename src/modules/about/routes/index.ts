import { resolve } from "pathe";

const aboutRoutes = [
  {
    name: "about",
    path: "/about",
    file: resolve(__dirname, "../pages/AboutPage.vue"), // Adjusted path
  },
];

export default aboutRoutes;
