import { api } from "~/helpers/axios";

export const useStories = () => {
  const route = useRoute();
  const page = Number(route.query.page) || 1;
  const currentPage = ref(page);
  const { locale } = useI18n();

  const {
    data: storiesData,
    error: stories_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "stories",
    () =>
      api.get(`/stories?page=${currentPage.value}`).then((response) => {
        const { data, meta } = response.data.result;
        return { data, meta };
      }),
    { watch: [locale, currentPage] }  
  );

  const stories = computed(() => storiesData.value?.data || []);
  const storiesMeta = computed(() => storiesData.value?.meta || {});

   
 

  return {
    stories,
    storiesMeta,
    stories_error,
    refresh,
    status,
    clear,
    currentPage,
  };
};
