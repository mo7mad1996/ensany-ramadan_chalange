import { api } from "~/helpers/axios";

export const useCurrencies = () => {
  const { locale } = useI18n();

  const {
    data: currenciesData,
    error: currencies_error,
    refresh,
    status,
  } = useFetch(() => `/currencies`, {
    baseURL: api.defaults.baseURL,
    params: { lang: locale.value || "en" },
    transform: (response) =>  response?.result,
    watch: [locale],  
  });

  
  if (currencies_error.value) {
    console.error("Error fetching currencies:", currencies_error.value);
  }

 
  return {
    currenciesData,
    currencies_error,
    refresh,
    status,   
  };
};
