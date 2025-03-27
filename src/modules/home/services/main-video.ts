import { api } from "~/helpers/axios";

export const useMainVideo = () => {
  const { locale } = useI18n();
  const {
    data: mainVideo,
    error: mainvideo_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "mainVideo",
    () => api.get("/main/video").then((response) => response.data.result),
    { watch: [locale] }
  );

  return {
    mainVideo,
    mainvideo_error,
    refresh,
    status,
    clear,
  };
};
