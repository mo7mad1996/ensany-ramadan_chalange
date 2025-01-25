import { api } from "~/helpers/axios";

export const useCampaigns = () => {
  const currentPage = ref(1);
  const {
    data: campaignsData,
    error: campaigns_error,
    refresh,
    status,
    clear,
  } = useAsyncData("campaigns", () =>
    api.get(`/campaigns?page=${currentPage.value}`).then((response) => {
      const { data, meta } = response.data.result;
      return { data, meta };
    })
  );

  const campaigns = computed(() => campaignsData.value?.data || []);
  const campaignsMeta = computed(() => campaignsData.value?.meta || {});

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
