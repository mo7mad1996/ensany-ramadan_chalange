import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useCharityOverview = () => {
  const currentPage = ref(1);
  const { locale } = useI18n();
  const { token } = useAuth();

  const {
    data: charityOverviewData,
    error: charityOverviewerror,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "overviewCharity",
    () =>
      api
        .get(`charity/statistics`, {
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

  const charityOverview = computed(() => charityOverviewData.value || {});

  return {
    charityOverview,
    charityOverviewerror,
    refresh,
    status,
    clear,
    currentPage,
  };
};
