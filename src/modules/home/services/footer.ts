import { api } from "~/helpers/axios";

export const useFooter = () => {
  const { locale } = useI18n();
  const {
    data: footer,
    error: footer_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "footer",
    () => api.get("/socials").then((response) => response.data.result.data),
    { watch: [locale] }
  );

  return {
    footer,
    footer_error,
    refresh,
    status,
    clear,
  };
};
