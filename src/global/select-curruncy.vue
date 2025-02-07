<template>
  <v-select
    v-model="selectedCurrency"
    @change="updateCurrency"
    :items="currenciesData"
    item-title="currency_name"
    item-value="id"
    label="Currency"
    single-line
    item-props
    class="min-w-36 px-2 py-2 text-sm"
    bg-color="transparent"
    flat
    size="sm"
  >
    <template v-slot:item="{ props }">
      <v-list-item
        v-bind="props"
        :title="props.currency_name"
        :subtitle="props.currency_symbol"
      />
    </template>
  </v-select>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCurrencies } from "~/modules/campaigns/services/curunces";
import { useCurrencyStore } from "~/modules/campaigns/store/currancy";

const { currenciesData, refresh } = useCurrencies();
const currencyStore = useCurrencyStore();

const { selectedCurrency } = storeToRefs(currencyStore);

const updateCurrency = () => {
  if (selectedCurrency.value) {
    currencyStore.setCurrency(selectedCurrency.value);
  }
};

onMounted(() => {
  if (currenciesData.value && currenciesData.value.length > 0) {
    const defaultObj = currenciesData.value.find((i) => i.is_default === "yes");
    selectedCurrency.value = defaultObj ? defaultObj.id : "";
    updateCurrency();
  } else {
    console.error("No currencies data available");
  }
  // const defultObj = currenciesData.value.filter((i) => {
  //   return i.is_default == "yes";
  // })[0];
  // selectedCurrency.value = defultObj ? defultObj.id : "";
  // updateCurrency();
});
</script>
