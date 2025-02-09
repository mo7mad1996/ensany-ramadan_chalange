import { api } from "~/helpers/axios";

export const useVideos = () => {
  const { locale } = useI18n();
  const currentPage = ref(1);
  const {
    data: videosData,
    error: videos_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "videos",
    () =>
      api.get(`/videos?page=${currentPage.value}`).then((response) => {
        const { data, meta } = response.data.result;
        return { data, meta };
      }),
    { watch: [locale] }
  );

  const videos = computed(() => videosData.value?.data || []);
  const videosMeta = computed(() => videosData.value?.meta || {});

  return {
    videos,
    videosMeta,
    videos_error,
    refresh,
    status,
    clear,
    currentPage,
  };
};
