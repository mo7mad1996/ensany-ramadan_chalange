import { api } from "~/helpers/axios";

export const useDonors = (id: any) => {
  const { locale } = useI18n();
  const currentPage = ref(1);
  const per_page = ref(15);
  const {
    data: donorsData,
    error: donorsData_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    `donors-${id}-${locale.value}`,
    () =>
      api
        .get(
          `/campaigns/${id}?page=${currentPage.value}&per_page=${per_page.value}`
        )
        .then((response) => response.data.result),
    { watch: [locale] }
  );

  const donors = computed(() => donorsData.value?.all_donors.data || []);
  const donorsMeta = computed(() => donorsData.value?.all_donors.meta || {});

  return {
    donors,
    donorsData_error,
    donorsMeta,
    refresh,
    status,
    clear,
    currentPage,
  };
};
