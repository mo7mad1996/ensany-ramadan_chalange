import { useAuth } from "~/modules/auth/services/auth";
import { api } from "~/helpers/axios";
import { startLoader, stopLoader } from "~/helpers/nprogress";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token }: any = useAuth();

  if (!token.value) {
    return navigateTo("/login");
  } else {
    try {
      startLoader();
      const response = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      console.log("user verified", response.data.result);
      if (!response.data.status) {
        navigateTo("/login");
      }
      stopLoader();
    } catch (err) {
      console.error("Token verification failed:", err);
      stopLoader();
      return navigateTo("/login");
    }
  }
});
