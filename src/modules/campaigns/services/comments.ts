import { api } from "~/helpers/axios";

export const useComments = (id: any) => {
  const { locale } = useI18n();
  const {
    data: comments,
    error: comments_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    `comments-${id}-${locale.value}`,
    () =>
      api
        .get(`/get-comments/${id}`)
        .then((response) => response.data.result.data),
    { watch: [locale] }
  );

  return {
    comments,
    comments_error,
    refresh,
    status,
    clear,
  };
};
