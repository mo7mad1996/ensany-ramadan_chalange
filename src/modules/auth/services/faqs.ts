import { api } from "~/helpers/axios";

export const useFaqs = () => {
  const { locale } = useI18n();

  const {
    data: faqs,
    error: faqs_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "faqs",
    () => api.get("/faqs").then((response) => response.data.result.data),
    { watch: [locale] }
  );

  return {
    faqs,
    faqs_error,
    refresh,
    status,
    clear,
  };
};
