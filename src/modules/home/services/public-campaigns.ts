import { api } from "~/helpers/axios";

export const usePublicCmapaigns = () => {
  const { locale } = useI18n();
  const {
    data: publicCampaigns,
    error: publicCampaigns_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "public_campaigns",
    () => api.get("/public-campaigns").then((response) => response.data.result),
    { watch: [locale] }
  );

  return {
    publicCampaigns,
    publicCampaigns_error,
    refresh,
    status,
    clear,
  };
};
