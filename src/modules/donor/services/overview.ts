import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useDonorOverview = () => {
  const currentPage = ref(1);
  const { locale } = useI18n();
  const { token } = useAuth();

  const {
    data: donorOverviewData,
    error: donorOverviewerror,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "overviewDonation",
    () =>
      api
        .get(`/doner/statistics`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
        .then((response) => {
          const data = response.data.result;

          return { data };
        }),
    { watch: [locale] }
  );

  const donorOverview = computed(() => donorOverviewData.value || {});

  return {
    donorOverview,
    donorOverviewerror,
    refresh,
    status,
    clear,
    currentPage,
  };
};
