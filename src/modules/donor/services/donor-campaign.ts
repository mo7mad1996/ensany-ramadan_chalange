import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useDonorCamoaigns = () => {
  const currentPage = ref(1);
  const { locale } = useI18n();
  const { token } = useAuth();

  const {
    data: donorCampData,
    error: donorCamp_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "donorCampaigns",
    () =>
      api.get(`/doner/campaigns`).then((response) => {
        const { data, meta } = response.data.result || {};
        return { data, meta };
      }),
    { watch: [locale] }
  );

  const donorCampaigns = computed(() => donorCampData.value?.data || []);
  const donorCampMeta = computed(() => donorCampData.value?.meta || {});

  return {
    donorCampaigns,
    donorCampMeta,
    donorCamp_error,
    refresh,
    status,
    clear,
    currentPage,
  };
};
