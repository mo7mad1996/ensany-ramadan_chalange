import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useCartCounter = () => {
  const { locale } = useI18n();
  const { token } = useAuth();

  const {
    data: cartCounterData,
    // error: donorCamp_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "donorCampaigns",
    () =>
      api
        .get(`doner/cart/count`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
        .then((response) => {
          const data = response.data.result;
          return data;
        }),
    { watch: [locale] }
  );

  const cartCounter = computed(() => cartCounterData.value || "");

  return {
    cartCounter,
    refresh,
    status,
    clear,
  };
};
