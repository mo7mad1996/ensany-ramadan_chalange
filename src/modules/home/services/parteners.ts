import { api } from "~/helpers/axios";

export const useParteners = () => {
  const {
    data: Parteners,
    error: Parteners_error,
    refresh,
    status,
    clear,
  } = useAsyncData("partners", () =>
    api.get("/partners").then((response) => response.data.result.data)
  );

  return {
    Parteners,
    Parteners_error,
    refresh,
    status,
    clear,
  };
};
