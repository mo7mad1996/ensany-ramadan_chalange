import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import { api } from "~/helpers/axios";

export const useContact = () => {
  const error = ref<string | null>(null);
  const isLoading = ref(false);
  const { t } = useI18n();
  const contactData = ref({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    content: "",
  });
  const makeContact = async (contactData: any) => {
    isLoading.value = true;
    try {
      const response = await api.post("/contact", contactData);
      resetForm();
      Swal.fire({
        icon: "success",
        title: t("contact.message_sent"),
        confirmButtonText: t("campaigns.ok"),
        confirmButtonColor: "#3E7E41",
        customClass: {
          confirmButton: "my-custom-btn",
        },
      });

      Object.keys(contactData).forEach((key) => (contactData[key] = ""));
      resetForm();
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: err.response.data?.message,
        confirmButtonText: t("campaigns.ok"),
        confirmButtonColor: "#3E7E41",
        customClass: {
          confirmButton: "my-custom-btn",
        },
      });
    }

    isLoading.value = false;
  };

  const resetForm = () => {
    contactData.value = {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      content: "",
    };
  };

  return {
    makeContact,
    isLoading,
    error,
  };
};
