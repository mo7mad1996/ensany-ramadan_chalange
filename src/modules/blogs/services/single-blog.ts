import { api } from "~/helpers/axios";

export const useSingleBlog = (id: any) => {
  const {
    data: singleBlog,
    error: single_blog_error,
    refresh,
    status,
    clear,
  } = useAsyncData(`singleBlog-${id}`, () =>
    api.get(`/blogs/${id}`).then((response) => {
      if (single_blog_error) {
      }
      return response.data.result;
    })
  );

  return {
    singleBlog,
    single_blog_error,
    refresh,
    status,
    clear,
  };
};
