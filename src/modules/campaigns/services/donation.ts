import { api } from "~/helpers/axios";

export const useDonation = () => {
  const error = ref<string | null>(null);
  const isLoading = ref(false);

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
      error.value = err;
      isLoading.value = false;
    }
  };

  return {
    makeDonation,
    isLoading,
    error,
  };
};
