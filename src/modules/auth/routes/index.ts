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
    name: "resetpassword",
    path: "/resetpassword",
    file: resolve(__dirname, "../pages/ResetPassword.vue"),
  },

  {
    name: "terms",
    path: "/terms",
    file: resolve(__dirname, "../pages/Terms.vue"),
  },
];

export default authRoutes;
