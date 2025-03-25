import { api } from "~/helpers/axios";

export const useCountries = () => {
  const { locale } = useI18n();
  const {
    data: countries,
    error: countries_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "countries",
    () => api.get("/countries").then((response) => response.data.result.data),
    { watch: [locale] }
  );

  return {
    countries,
    countries_error,
    refresh,
    status,
    clear,
  };
};
