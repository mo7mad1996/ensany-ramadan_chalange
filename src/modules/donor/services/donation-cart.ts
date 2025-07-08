import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useDonerCart = () => {
  const currentPage = ref(1);
  const { locale } = useI18n();
  const { token, user } = useAuth();

  const {
    data: donorCartData,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "donor-cart",
    async () => {
      const response = await api.get(`/doner/index?page=${currentPage.value}`);
      return response.data.result;
    },
    { watch: [locale] }
  );

  const donorCart = computed(() => donorCartData.value || "");

  return {
    donorCart,
    refresh,
    currentPage,
    status,
    clear,
  };
};
