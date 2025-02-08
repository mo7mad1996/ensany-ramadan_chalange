import { api } from "~/helpers/axios";
import { useCharityCamoaigns } from "./charity-campaigns";

export const useCampaign = () => {
  const { refresh: refreshCampaigns } = useCharityCamoaigns();
  const error = ref("");

  return {
    async getCampaign(id: string) {
      return api.get(`/charity/campaigns/${id}`).then((res) => res.data.result);
    },
    async deleteCampaign(id: string) {
      try {
        const response = await api.delete(`/charity/campaigns/${id}`);

        if (response.data.status) {
          refreshCampaigns();
        }
      } catch (err: any) {
        error.value = err;
      }
    },
  };
};
