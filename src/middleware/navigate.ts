import { storeToRefs } from "pinia";
import { useCurrencyStore } from "~/modules/campaigns/store/currancy";

export default defineNuxtRouteMiddleware((to, from) => {
  const currencyStore = useCurrencyStore();
  const { isPaymentSuccess } = storeToRefs(currencyStore);
  // const router = useRouter();
  // const route = useRoute();
  if (isPaymentSuccess.value) {
    navigateTo(`/campaigns`);
  }
});
