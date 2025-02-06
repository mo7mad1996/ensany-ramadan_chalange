import { api } from "~/helpers/axios";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { useCurrencyStore } from "../store/currancy";
import { storeToRefs } from "pinia";
import successIcon from "../../../assets/images/success-icon.gif";

export const useCallback = () => {
  const error = ref<string | null>(null);
  const isLoading = ref(false);
  const router = useRouter();
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
        if (response.data.result.id)
          router.push(`/campaigns/donate/${response.data.result.id}`);
        else router.push(`/${response.data.result.id}`);

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
      }
    } catch (err: any) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    callBack,
    isLoading,
    error,
  };
};
