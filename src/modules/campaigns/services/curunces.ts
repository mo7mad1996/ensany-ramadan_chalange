import { api } from "~/helpers/axios";

export const useCurrencies = () => {
  const { locale } = useI18n();
  const {
    data: currenciesData,
    error: currencies_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "currencies",
    () =>
      api.get(`/currencies`,{
        params: {
          lang: locale.value ?? 'en',   
        }
      }).then((response) => {
        return response.data.result;
      }),
    { watch: [locale] }
  );

  return {
    currenciesData,
    currencies_error,
    refresh,
    status,
    clear,
  };
};
