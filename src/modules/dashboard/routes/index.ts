import { resolve } from "pathe";

const dashbaordRoutes = [
  {
    name: "dashboard",
    path: "/dashboard",
    file: resolve(__dirname, "../pages/Dashboard.vue"),
  },
];

export default dashbaordRoutes;
