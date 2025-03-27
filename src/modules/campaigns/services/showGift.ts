import { api } from "~/helpers/axios";

export const useShowGift = (id: any) => {
    const { locale } = useI18n();
    const {
        data: viewGift,
        error: view_gift_error,
        refresh,
        status,
        clear,
        execute,
    } = useAsyncData(
        `viewGift-${id}-${locale.value}`, // Dynamic key to ensure caching by ID
        async () => {
            const response = await api.get(`/gift/${id}`);

            return response.data.result;
        },
        { watch: [locale] }
    );

    return {
        viewGift,
        view_gift_error,
        refresh,
        status,
        clear,
        execute,
    };
};
