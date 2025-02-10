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
      // تحقق من نوع المستخدم قبل إرسال الطلب
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

  // زيادة العدد في السلة
  const increaseCartCount = (amount = 1) => {
    cartStore.increaseCartCount(amount);
  };

  const decreaseCartCount = (amount = 1) => {
    cartStore.decreaseCartCount(amount);
  };

  return {
    cartCounter,
    refresh,
    status,
    clear,
    increaseCartCount,
    decreaseCartCount,
  };
};
