import { api } from "~/helpers/axios";
import { useRouter } from "vue-router";
import { useCurrencyStore } from "../store/currancy";
import { storeToRefs } from "pinia";
import Swal from "sweetalert2";

export const useCallback = () => {
  const error = ref<string | null>(null);
  const isLoading = ref(false);
  const router = useRouter();
  const currencyStore = useCurrencyStore();
  const { isPaymentSuccess } = storeToRefs(currencyStore);

  const callBack = async (razorpay_payment_link_id: any) => {
    try {
      error.value = "";
      isLoading.value = true;
      const response = await api.post(
        `/donations/callback?razorpay_payment_link_id=${razorpay_payment_link_id}`
      );

      if (response.data.status) {
        router.push(`/campaigns/donate/${response.data.result.id}`);

        Swal.fire({
          title: "Thank you for your kindeness",
          icon: "success",
          draggable: true,
        });
      }

      isLoading.value = false;
    } catch (err: any) {
      error.value = err;
      isLoading.value = false;
    }
  };

  return {
    callBack,
    isLoading,
    error,
  };
};
