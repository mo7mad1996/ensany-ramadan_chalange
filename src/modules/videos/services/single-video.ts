import { api } from "~/helpers/axios";

export const useShowVideo = (id: any) => {
  const { locale } = useI18n();
  const {
    data: video,
    error: video_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    `video-${id}-${locale.value}`,
    () =>
      api.get(`/videos/${id}`).then((response) => {
        if (video_error) {
        }
        return response.data.result;
      }),
    { watch: [locale] }
  );

  return {
    video,
    video_error,
    refresh,
    status,
    clear,
  };
};
