import { defineStore } from "pinia";
import { ref } from "vue";

export const useCurrencyStore = defineStore("currency", () => {
  const selectedCurrency = ref("");
  const isPaymentSuccess = ref(false);

  function setCurrency(currencyId: any) {
    selectedCurrency.value = currencyId;
  }

  function setPaymentStatus(status: any) {
    selectedCurrency.value = status;
  }

  return { selectedCurrency, setCurrency, isPaymentSuccess, setPaymentStatus };
});
