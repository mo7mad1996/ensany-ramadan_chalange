import { useAuth } from "~/modules/auth/services/auth";
import { api } from "~/helpers/axios";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token }: any = useAuth();

  if (!token.value) {
    return navigateTo("/login");
  } else {
    try {
      const response = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      console.log("user verified", response.data.result);
      if (!response.data.status) {
        navigateTo("/login");
      }
    } catch (err) {
      console.error("Token verification failed:", err);
      return navigateTo("/login"); // Redirect if verification fails
    }
  }
});
