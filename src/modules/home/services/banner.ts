import { api } from "~/helpers/axios";

export const useBannerData = () => {
  const { locale } = useI18n();
  const {
    data: bannerData,
    error: banner_error,
    refresh,
    status,
  } = useFetch("/banner/statistics", {
    method: "GET",
    baseURL: api.defaults.baseURL,
    watch: [locale],
    transform: (response: any) => response.data.result,
  });

  return {
    bannerData,
    banner_error,
    refresh,
    status,
  };
};
