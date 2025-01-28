import { api } from "~/helpers/axios";

export const useSingleStory = (id: any) => {
  const { locale } = useI18n();
  const {
    data: singleStory,
    error: single_story_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    `singleStory-${id}-${locale.value}`,
    () =>
      api.get(`/stories/${id}`).then((response) => {
        return response.data.result;
      }),
    { watch: [locale] }
  );

  return {
    singleStory,
    single_story_error,
    refresh,
    status,
    clear,
  };
};
