import { api } from "~/helpers/axios";

export const useCampaigns = () => {
  const currentPage = ref(1); // Track the current page
  const {
    data: campaignsData,
    error: campaigns_error,
    refresh,
    status,
    clear,
  } = useAsyncData(() =>
    api
      .get(`/campaigns?page=${currentPage.value}`) // Pass the page as a query param
      .then((response) => {
        const { data, meta } = response.data.result;
        console.log("worked", data);
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
    currentPage, // Expose currentPage for two-way binding
  };
};
