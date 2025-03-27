import { api } from "~/helpers/axios";

export const useDonors = () => {
  const { locale } = useI18n();
  const {
    data: donors,
    error: donors_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "donors",
    () =>
      api.get("/top/donors").then((response) => {
        const { top_donors, top_ten } = response.data.result;
        return { top_donors, top_ten };
      }),
    { watch: [locale] }
  );

  const topDonors = computed(() => donors?.value?.top_donors || []);
  const topTen = computed(() => donors?.value?.top_ten || []);

  return {
    topDonors,
    topTen,
    donors_error,
    refresh,
    status,
    clear,
  };
};
