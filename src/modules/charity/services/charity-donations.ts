import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useCharityDonations = () => {
  const currentPage = ref(1);
  const itemsPerPage = ref(5);
  const totalItems = ref(0);
  const { locale } = useI18n();
  const { token } = useAuth();

  const {
    data: charityDonations,
    error: charityDonations_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "charityDonations",
    () =>
      api
        .get(
          `/charity/donations?page=${currentPage.value}&per_page=${itemsPerPage.value}`
        )
        .then((response) => {
          const { data, meta } = response.data.result;
          totalItems.value = meta.total; // Store total items from API
          return { data, meta };
        }),
    { watch: [locale, currentPage, itemsPerPage] }
  );

  const charityDonat = computed(() => charityDonations.value?.data || []);
  const charityDonatMeta = computed(() => charityDonations.value?.meta || {});

  return {
    charityDonat,
    charityDonatMeta,
    charityDonations_error,
    refresh,
    status,
    clear,
    currentPage,
    itemsPerPage,
    totalItems,
  };
};
