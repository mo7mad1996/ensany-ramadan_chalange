import { api } from "~/helpers/axios";

export const useFooter = () => {
  const { locale } = useI18n();
  const {
    data: footer,
    error: footer_error,
    refresh,
  } = useFetch(() => `/socials`, {
    baseURL: api.defaults.baseURL,
    transform: (response: any) => response.result.data,
    watch: [locale],
  });
  return {
    footer,
    footer_error,
    refresh,
  };
};
