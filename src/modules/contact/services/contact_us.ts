import Swal from "sweetalert2";
import { api } from "~/helpers/axios";

export const useContact = () => {
  const error = ref<string | null>(null);
  const isLoading = ref(false);
  const { t } = useI18n();

  const makeContact = async (contactData: any) => {
    error.value = "";
    isLoading.value = true;

    const response = await api.post("/contact", contactData);
    Swal.fire({
      icon: "success",
      title: t("contact.message_sent"),
      confirmButtonText: t("campaigns.ok"),
      confirmButtonColor: "#3E7E41",
      customClass: {
        confirmButton: "my-custom-btn",
      },
    });
    //   try {
    // } catch (err: any) {
    //   if (err.response.data?.errors?.currency_id) {
    //     Swal.fire({
    //       icon: "error",
    //       title: t("campaigns.currency_error"),
    //       confirmButtonText: t("campaigns.ok"),
    //       confirmButtonColor: "#3E7E41",
    //       customClass: {
    //         confirmButton: "my-custom-btn",
    //       },
    //     });
    //   }
    // } finally {
    // }
    isLoading.value = false;
  };

  return {
    makeContact,
    isLoading,
    error,
  };
};
