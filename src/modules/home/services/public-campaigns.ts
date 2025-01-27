import { api } from "~/helpers/axios";

export const usePublicCmapaigns = () => {
  const {
    data: publicCampaigns,
    error: publicCampaigns_error,
    refresh,
    status,
    clear,
  } = useAsyncData("public_campaigns", () =>
    api.get("/public-campaigns").then((response) => response.data.result)
  );

  return {
    publicCampaigns,
    publicCampaigns_error,
    refresh,
    status,
    clear,
  };
};
