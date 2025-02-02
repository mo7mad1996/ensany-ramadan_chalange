<template>
  <div class="currency-select">
    <select
      id="options"
      name="options"
      v-model="selectedCurrency"
      @change="updateCurrency"
      class="w-full py-[6px] px-[7px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
    >
      <option selected disabled value="">$ Select</option>
      <option
        v-for="(currency, index) in currenciesData"
        :key="index"
        :value="currency.id"
      >
        {{ currency?.currency_name }} - {{ currency?.currency_symbol }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useCurrencies } from "~/modules/campaigns/services/curunces";
import { useCurrencyStore } from "~/modules/campaigns/store/currancy";
import { storeToRefs } from "pinia";

const { currenciesData } = useCurrencies();
const currencyStore = useCurrencyStore();

const { selectedCurrency } = storeToRefs(currencyStore);

const updateCurrency = () => {
  currencyStore.setCurrency(selectedCurrency.value);
};

onMounted(() => {
  selectedCurrency.value = currenciesData.value[1]?.id;
  currencyStore.setCurrency(selectedCurrency.value);
});

// Set default currency when data is loaded
</script>
