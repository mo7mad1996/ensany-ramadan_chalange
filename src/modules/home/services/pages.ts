import { api } from "~/helpers/axios";

export const usePages = () => {
  const { locale } = useI18n();
  const {
    data: pages,
    error: pages_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "pages",
    () => api.get("/pages").then((response) => response.data.result.data),
    { watch: [locale] }
  );

  return {
    pages,
    pages_error,
    refresh,
    status,
    clear,
  };
};
