import { api } from "~/helpers/axios";

export const useSingleStory = (id: any) => {
  const {
    data: singleStory,
    error: single_story_error,
    refresh,
    status,
    clear,
  } = useAsyncData(`singleStory-${id}`, () =>
    api.get(`/stories/${id}`).then((response) => {
      return response.data.result;
    })
  );

  return {
    singleStory,
    single_story_error,
    refresh,
    status,
    clear,
  };
};
