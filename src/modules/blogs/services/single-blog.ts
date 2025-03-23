import { api } from "~/helpers/axios";

export const useSingleBlog = (id: any) => {
  const { locale } = useI18n();
  const {
    data: singleBlog,
    error: single_blog_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    `singleBlog-${id}-${locale.value}`,
    () =>
      api.get(`/blogs/${id}`).then((response) => {
        if (single_blog_error) {
        }
        return response.data.result;
      }),
    { watch: [locale] }
  );

  return {
    singleBlog,
    single_blog_error,
    refresh,
    status,
    clear,
  };
};
