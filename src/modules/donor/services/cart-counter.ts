import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useCartCounter = () => {
  const { locale } = useI18n();
  const { token, user} = useAuth();


  const {
    data: cartCounterData,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "donorCampaigns",
    async () => {
      if (user.value.user_type !== 'dooner') return 0; 
      const response = await api.get(`doner/cart/count`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      return response.data.result;
    },
    { watch: [locale] }
  );

  const cartCounter = computed(() => cartCounterData.value || "");

  // Function to increment cart count locally
  const increaseCartCount = (amount = 1) => {
    if (!cartCounterData.value) {
      cartCounterData.value = 0;
    }
    cartCounterData.value = Number(cartCounterData.value) + amount;
  };

  // Function to Decrease cart count locally
  const DecreaseCartCount = (amount = 1) => {
    if (!cartCounterData.value) {
      cartCounterData.value = 0;
    }
    cartCounterData.value = Number(cartCounterData.value) - amount;
  };

  return {
    cartCounter,
    refresh,
    status,
    clear,
    increaseCartCount,
    DecreaseCartCount
  };
};
