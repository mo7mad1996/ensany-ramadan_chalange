import { resolve } from "pathe";

const authRoutes = [
  {
    name: "login",
    path: "/login",
    file: resolve(__dirname, "../pages/LoginPage.vue"),
  },

  {
    name: "signup",
    path: "/signup",
    file: resolve(__dirname, "../pages/RegisterPage.vue"),
  },

  {
    name: "forgetpassword",
    path: "/forgetpassword",
    file: resolve(__dirname, "../pages/ForgetPassword.vue"),
  },

  {
    name: "checkemail",
    path: "/checkemail",
    file: resolve(__dirname, "../pages/CheckingEmail.vue"),
  },

  {
    name: "terms",
    path: "/terms-conditions",
    file: resolve(__dirname, "../pages/Terms.vue"),
  },

  {
    name: "faqs",
    path: "/faqs",
    file: resolve(__dirname, "../pages/Faqs.vue"),
  },

  {
    name: "verrifyEmail",
    path: "/verrify-email",
    file: resolve(__dirname, "../pages/VerrifyEmail.vue"),
  },
];

export default authRoutes;
