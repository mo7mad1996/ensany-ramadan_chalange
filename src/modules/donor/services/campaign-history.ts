import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useCampaignHistory = () => {
  const { locale } = useI18n();
  const { token, user} = useAuth();


  const {
    data: campaignHistoryData,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "donorCart",
    async () => {
      const response = await api.get(`/doner/campaigns`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      return response.data.result;
    },
    { watch: [locale] }
  );

  const campaignHistory = computed(() => campaignHistoryData.value || "");


  return {
    campaignHistory,
    refresh,
    status,
    clear,
  };
};
