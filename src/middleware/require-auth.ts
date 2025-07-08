import { useAuth } from "~/modules/auth/services/auth";

export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuth();

  if (!user.value) {
    return navigateTo("/login");
  }
});
