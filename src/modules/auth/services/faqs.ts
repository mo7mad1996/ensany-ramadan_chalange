import { api } from "~/helpers/axios";

export const useFaqs = () => {
  const {
    data: faqs,
    error: faqs_error,
    refresh,
    status,
    clear,
  } = useAsyncData("faqs", () =>
    api.get("/faqs").then((response) => response.data.result.data)
  );

  return {
    faqs,
    faqs_error,
    refresh,
    status,
    clear,
  };
};
