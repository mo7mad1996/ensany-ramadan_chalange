import { api } from "~/helpers/axios";

export const useViewCampaign = (id: any) => {
  const { locale } = useI18n();
  const {
    data: viewCampaign,
    error: view_campaign_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    `viewCampaign-${id}-${locale.value}`, // Dynamic key to ensure caching by ID
    () =>
      api.get(`/campaigns/${id}`).then((response) => {
        return response.data.result;
      }),
    { watch: [locale] }
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
