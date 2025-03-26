import { api } from "~/helpers/axios";
// import Swal from "sweetalert2/dist/sweetalert2.all.min.js";

export const useDonation = () => {
  const error = ref<string | null>(null);
  const isLoading = ref(false);
  const { t } = useI18n();

  const makeDonation = async (donationData: any) => {
    try {
      error.value = "";
      isLoading.value = true;
      const res = await api.post("/donations", donationData);

      const { gateway_url } = res.data.result;

      if (gateway_url) {
        window.location.href = gateway_url;
      } else {
        console.log(res);
      }
    } catch (err: any) {
      const Swal = () => import("sweetalert2");

      Swal.fire({
        title: err.response?.data?.message || err.message,
        html: Object.values(err.response?.data?.result?.errors)
          .flat()
          .map((e) => `<li class="text-start">${e}</li>`)
          .join(" "),
        icon: "error",
        confirmButtonText: t("home.ok"),
        customClass: {
          confirmButton: "my-custom-btn",
        },
      });
    } finally {
      isLoading.value = false;
    }
  };

  return {
    makeDonation,
    isLoading,
    error,
  };
};
