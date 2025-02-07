import { storeToRefs } from "pinia";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import { api } from "~/helpers/axios";
import successIcon from "../../../assets/images/success-icon.gif";
import { useCurrencyStore } from "../store/currancy";

export const useCallback = () => {
  const error = ref<string | null>(null);
  const isLoading = ref(false);
  // const router = useRouter();
  const { t } = useI18n();
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

        var url = response!.data!.result!.id != null ? `/campaigns/donate/${response.data.result.id}` : `/`;
        navigateTo(url);

        if (response.data.result.payment_status == "paid") {
          isPaymentSuccess.value = true;
          currencyStore.setPaymentStatus(isPaymentSuccess.value);
          Swal.fire({
            title: t("campaigns.success_msg"),
            imageUrl: successIcon,
            imageWidth: 200,
            imageHeight: 200,
            confirmButtonText: t("campaigns.ok"),
            confirmButtonColor: "#3E7E41",
            customClass: {
              confirmButton: "my-custom-btn",
            },
            draggable: true,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: t("campaigns.faild_msg"),
            confirmButtonText: t("campaigns.ok"),
            confirmButtonColor: "#3E7E41",
            customClass: {
              confirmButton: "my-custom-btn",
            },
          });
        }
        //
      }

      isLoading.value = false;
    } catch (err: any) {
      // error.value = err;
      error.value = err?.message || "An unknown error occurred";
      isLoading.value = false;
    }
  };

  return {
    callBack,
    isLoading,
    error,
  };
};
