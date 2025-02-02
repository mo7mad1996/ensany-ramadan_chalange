import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useCharityCamoaigns = () => {
  const currentPage = ref(1);
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
        .get(`/user/campaigns?page=${currentPage.value}`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
        .then((response) => {
          const { data, meta } = response.data.result;
          return { data, meta };
        }),
    { watch: [locale] }
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
  };
};
