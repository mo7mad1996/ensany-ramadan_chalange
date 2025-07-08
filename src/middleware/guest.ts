import { useAuth } from "~/modules/auth/services/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token, user }: any = useAuth();
  if (token.value && user.value) {
    if (user?.value?.user_type === "charity") {
      return navigateTo("/dashboard/charity");
    } else {
      // here will be the dooner link
      return navigateTo("/dashboard/donor");
    }
  }
});
