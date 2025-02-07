import { api } from "~/helpers/axios";

export const useShowPage = (id: any) => {
    const { locale } = useI18n();
    const {
        data: page,
        error: page_error,
        refresh,
        status,
        clear,
    } = useAsyncData(
        "page",
        () => api.get("/pages/" + id).then((response) => response.data.result),
        { watch: [locale] }
    );

    return {
        page,
        page_error,
        refresh,
        status,
        clear,
    };
};
