import { useCurrencyStore } from "~/modules/campaigns/store/currancy";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

export default defineNuxtRouteMiddleware((to, from) => {
  const currencyStore = useCurrencyStore();
  const { isPaymentSuccess } = storeToRefs(currencyStore);
  const router = useRouter();
  const route = useRoute();
  if (isPaymentSuccess.value) {
    router.push(`/campaigns`);
  }
});
