import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";
import { useCartStore } from "./CartStore";

export const useCartCounter = () => {
  const { locale } = useI18n();
  const { token, user } = useAuth();
  const cartStore = useCartStore();

  const cartCounter = computed(() => cartStore.getCartCount() || 0);

  const {
    data: cartCounterData,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "donorCampaigns",
    async () => {
     
   
      if (user.value.user_type === "dooner" && cartStore.totalCount === null) {
        const response = await api.get(`doner/cart/count`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        cartStore.setCartCount(response.data.result);
        return response.data.result;
      } else {
        return cartStore.totalCount;
      }
    },
    { watch: [locale] }
  );

  // console.log(cartStore.totalCount);
  function increaseCartCount() {
    cartStore.increaseCartCount(1);
  }

  function decreaseCartCount() {
    cartStore.decreaseCartCount(1);
  }

  return {
    cartCounter,
    refresh,
    status,
    clear,
    increaseCartCount,
    decreaseCartCount,
  };
};
