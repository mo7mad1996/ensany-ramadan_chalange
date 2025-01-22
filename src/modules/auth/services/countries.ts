import { api } from "~/helpers/axios";

export const useCountries = () => {
  // for serverside fetching
  const { data: countries, error: countries_error } = useAsyncData(
    "countries",
    async () => {
      const response = await api.get("/countries");
      console.log(countries);
      return response.data.result.data;
    }
  );

  return {
    countries,
    countries_error,
  };
};
