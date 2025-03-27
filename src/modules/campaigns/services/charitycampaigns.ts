import { api } from "~/helpers/axios";

export const useCharityCampaigns = (id: any) => {
  const currentPage = ref(1);
  const { locale } = useI18n();
  const {
    data: charitycampaignsData,
    error: campaigns_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "campaigns",
    () =>
      api.get(`/charity/referral/link/${id}?page=${currentPage.value}`).then((response) => {
        const { data, meta } = response.data.result;
        return { data, meta };
      }),
    { watch: [locale] }
  );

  const campaigns = computed(() => charitycampaignsData.value?.data || []);
  const campaignsMeta = computed(() => charitycampaignsData.value?.meta || {});

  return {
    campaigns,
    campaignsMeta,
    campaigns_error,
    refresh,
    status,
    clear,
    currentPage,
  };
};
