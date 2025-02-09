import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useDonerCart = () => {
  const { locale } = useI18n();
  const { token, user } = useAuth();

  const {
    data: donorCartData,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "donorCart",
    async () => {
      const response = await api.get(`/doner/index`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      return response.data.result;
    },
    { watch: [locale] }
  );

  const donorCart = computed(() => donorCartData.value || "");

  return {
    donorCart,
    refresh,
    status,
    clear,
  };
};
