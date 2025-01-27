import { useAuth } from "~/modules/auth/services/auth";
import { api } from "~/helpers/axios";
import { startLoader } from "~/helpers/nprogress";
import { stopLoader } from "~/helpers/nprogress";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token } = useAuth();
  interface MeResponse {
    status: boolean;
  }

  if (!token.value) {
    return navigateTo("/login");
  }

  try {
    if (process.client) {
      startLoader();
    }

    const response = await $fetch<MeResponse>(
      "https://be.ramadanchallenges.com/api/v1/me",
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    if (!response.status) {
      return navigateTo("/login");
    }

    if (process.client) {
      stopLoader();
    }
  } catch (err) {
    console.error("Token verification failed:", err);
    if (process.client) {
      stopLoader();
    }
    return navigateTo("/login");
  }
});
