import { api } from "~/helpers/axios";

export const useViewCampaign = (id: any) => {
  const {
    data: viewCampaign,
    error: view_campaign_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    `viewCampaign-${id}`, // Dynamic key to ensure caching by ID
    () =>
      api.get(`/campaigns/${id}`).then((response) => {
        return response.data.result;
      })
  );

  const target = computed(() => viewCampaign.value?.price_target || "");
  const amount = computed(() => viewCampaign.value?.total_amount || "");

  return {
    viewCampaign,
    view_campaign_error,
    refresh,
    status,
    clear,
    target,
    amount,
  };
};
