import { api } from "~/helpers/axios";

export const useCurrencies = () => {
  const { locale } = useI18n();

  const {
    data: currenciesData,
    error: currencies_error,
    refresh,
  } = useFetch(() => `/currencies`, {
    baseURL: api.defaults.baseURL,
    params: { lang: locale.value ?? "en" },
    transform: (response) => response.result,
    watch: [locale],
  });

  return {
    currenciesData,
    currencies_error,
    refresh,
  };
};
