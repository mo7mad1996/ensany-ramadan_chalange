import { api } from "~/helpers/axios";

export const useBlogs = () => {
  const currentPage = ref(1);
  const {
    data: blogsData,
    error: blogs_error,
    refresh,
    status,
    clear,
  } = useAsyncData("blogs", () =>
    api.get(`/blogs?page=${currentPage.value}`).then((response) => {
      const { data, meta } = response.data.result;
      return { data, meta };
    })
  );

  const blogs = computed(() => blogsData.value?.data || []);
  const blogsMeta = computed(() => blogsData.value?.meta || {});

  return {
    blogs,
    blogsMeta,
    blogs_error,
    refresh,
    status,
    clear,
    currentPage,
  };
};
