import { api } from "~/helpers/axios";

export const useParteners = () => {
  const { locale } = useI18n();
  const {
    data: Parteners,
    error: Parteners_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "partners",
    () => api.get("/partners").then((response) => response.data.result.data),
    { watch: [locale] }
  );

  return {
    Parteners,
    Parteners_error,
    refresh,
    status,
    clear,
  };
};
