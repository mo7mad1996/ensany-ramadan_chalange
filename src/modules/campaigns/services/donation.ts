import { api } from "~/helpers/axios";
import Swal from "sweetalert2";

export const useDonation = () => {
  const error = ref<string | null>(null);
  const isLoading = ref(false);
  const { t } = useI18n();

  const makeDonation = async (donationData: any) => {
    try {
      error.value = "";
      isLoading.value = true;
      const response = await api.post("/donations", donationData);

      if (response.data.status) {
        window.location.href = `${response.data.result.gateway_url}`;
      }

      isLoading.value = false;
    } catch (err: any) {
      if (err.response.data.errors.currency_id) {
        Swal.fire({
          icon: "error",
          title: t("campaigns.currency_error"),
        });
      }
      isLoading.value = false;
    }
  };

  return {
    makeDonation,
    isLoading,
    error,
  };
};
