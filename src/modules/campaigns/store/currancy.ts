import { defineStore } from "pinia";
import { ref } from "vue";

export const useCurrencyStore = defineStore("currency", () => {
  const selectedCurrency = ref("");

  function setCurrency(currencyId: any) {
    selectedCurrency.value = currencyId;
  }

  return { selectedCurrency, setCurrency };
});
