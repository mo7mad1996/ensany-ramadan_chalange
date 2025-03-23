import { api } from "~/helpers/axios";

export const useViewCampaign = (id: any) => {
  const { locale } = useI18n();
  const {
    data: viewCampaign,
    error: view_campaign_error,
    refresh,
    status,
    clear,
    execute,
  } = useAsyncData(
    `viewCampaign-${id}-${locale.value}`, // Dynamic key to ensure caching by ID
    async () => {
      const response = await api.get(`/campaigns/${id}`);
   
      return response.data.result;
    },
    { watch: [locale] }
  );

  const target = computed(() => viewCampaign.value?.price_target || "");
  const amount = computed(() => viewCampaign.value?.total_amount || "");
  const image = computed(() => viewCampaign.value?.image || {});
  const name = computed(() => viewCampaign.value?.name || {});
  const desc = computed(() => viewCampaign.value?.short_desc || {});
  const similarCampaigns = computed(() => viewCampaign.value?.similar_campaigns || []);

  return {
    viewCampaign,
    view_campaign_error,
    refresh,
    status,
    clear,
    target,
    amount,
    image,
    name,
    desc,
    execute,
    similarCampaigns,
  };
};
