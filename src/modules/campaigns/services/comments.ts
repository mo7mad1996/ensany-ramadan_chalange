import { api } from "~/helpers/axios";

export const useComments = (id: any) => {
  const { locale } = useI18n();
  const currentPage = ref(1);
  const per_page = ref(3);
  const {
    data: commentsData,
    error: commentsData_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    `comments-${id}-${locale.value}`,
    () =>
      api
        .get(
          `/get-comments/${id}?page=${currentPage.value}&per_page=${per_page.value}`
        )
        .then((response) => response.data.result),
    { watch: [locale] }
  );

  const comments = computed(() => commentsData.value?.data || []);
  const commentsMeta = computed(() => commentsData.value?.meta || {});

  return {
    comments,
    commentsData_error,
    commentsMeta,
    refresh,
    status,
    clear,
    currentPage,
  };
};
