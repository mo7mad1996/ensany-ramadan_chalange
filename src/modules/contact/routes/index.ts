import { resolve } from "pathe";

const contactRoutes = [
  {
    name: "contact",
    path: "/contact",
    file: resolve(__dirname, "../pages/ContactPage.vue"), // Adjusted path
  },
];

export default contactRoutes;
