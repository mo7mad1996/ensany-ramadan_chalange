import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token } = useAuth();
  const router = useRouter();

  try {
    const res: any = await $fetch("/me", {
      baseURL: api.defaults.baseURL,
      headers: { Authorization: `Bearer ${token.value}` },
    });
    if (res.errorCode == 301) return await navigateTo("/verify-email");
  } catch (err: any) {
    console.error(err);
  }
});
