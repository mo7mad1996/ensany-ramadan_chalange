import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";
import { useCharityCamoaigns } from "./charity-campaigns";

export const useDeleteCampaign = () => {
  const { token } = useAuth();
  const { refresh: refreshCampaigns } = useCharityCamoaigns();
  const error = ref("");

  const deleteCampaign = async (id: any) => {
    try {
      const response = await api.delete(`/charity/campaigns/${id}`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      if (response.data.status) {
        refreshCampaigns();
      }
    } catch (err: any) {
      error.value = err;
    }
  };

  return {
    deleteCampaign,
  };
};
