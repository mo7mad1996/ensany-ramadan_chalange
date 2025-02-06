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
import { useCurrencies } from "~/modules/campaigns/services/curunces";
import { useCurrencyStore } from "~/modules/campaigns/store/currancy";
import { storeToRefs } from "pinia";

const { currenciesData, refresh } = useCurrencies();
const currencyStore = useCurrencyStore();

const { selectedCurrency } = storeToRefs(currencyStore);

const updateCurrency = () => {
  currencyStore.setCurrency(selectedCurrency.value);
};
</script>
