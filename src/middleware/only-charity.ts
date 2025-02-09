import { useAuth } from "~/modules/auth/services/auth";

export default defineNuxtRouteMiddleware(() => {
  const { user }: any = useAuth();

  if (user.value.user_type != "charity") return navigateTo("/");
});
