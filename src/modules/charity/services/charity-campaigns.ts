import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useCharityCamoaigns = () => {
  const currentPage = ref(1);
  const itemsPerPage = ref(5);
  const totalItems = ref(0);
  const { locale } = useI18n();
  const { token } = useAuth();

  const {
    data: charityCampData,
    error: charityCamp_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "charityCampaigns",
    () =>
      api
        .get(
          `/charity/campaigns?page=${currentPage.value}&per_page=${itemsPerPage.value}`,
          {
            headers: {
              Authorization: `Bearer ${token.value}`,
            },
          }
        )
        .then((response) => {
          const { data, meta } = response.data.result;
          totalItems.value = meta.total; // Store total items from API
          return { data, meta };
        }),
    { watch: [locale, currentPage, itemsPerPage] }
  );

  const charityCampaigns = computed(() => charityCampData.value?.data || []);
  const charityCampMeta = computed(() => charityCampData.value?.meta || {});

  return {
    charityCampaigns,
    charityCampMeta,
    charityCamp_error,
    refresh,
    status,
    clear,
    currentPage,
    itemsPerPage,
    totalItems,
  };
};
