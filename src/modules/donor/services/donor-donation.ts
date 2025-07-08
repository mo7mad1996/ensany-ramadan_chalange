import { api } from "~/helpers/axios";
import { useAuth } from "~/modules/auth/services/auth";

export const useDonorDonationes = () => {
  const currentPage = ref(1);
  const { locale } = useI18n();
  const { token } = useAuth();

  const {
    data: donorDonationData,
    error: donorDonationerror,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "donorDonation",
    () =>
      api
        .get(`doner/donations`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
        .then((response) => {
          const { data, meta } = response.data.result;

          return { data, meta };
        }),
    { watch: [locale] }
  );

  const donorDonation = computed(() => donorDonationData.value?.data || []);
  const donorCampMeta = computed(() => donorDonationData.value?.meta || {});

  return {
    donorDonation,
    donorCampMeta,
    donorDonationerror,
    refresh,
    status,
    clear,
    currentPage,
  };
};
