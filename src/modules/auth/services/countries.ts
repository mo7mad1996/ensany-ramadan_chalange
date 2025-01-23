import { api } from "~/helpers/axios";

export const useCountries = () => {
  const {
    data: countries,
    error: countries_error,
    refresh,
    status,
    clear,
  } = useAsyncData("countries", () =>
    api.get("/countries").then((response) => response.data.result.data)
  );

  return {
    countries,
    countries_error,
    refresh,
    status,
    clear,
  };
};
