<template>
  <div v-if="status === 'pending'">Loading...</div>
  <div v-else-if="status === 'error'">{{ currencies_error }}...</div>
  <v-select
    v-else
    v-model="selectedCurrency"
    @update:modelValue="updateCurrency"
    :items="currenciesData"
    item-title="currency_symbol"
    item-value="id"
    label="Currency"
    single-line
    item-props
    class="capitalize border rounded"
    bg-color="transparent select"
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
import { onMounted } from "vue";
import { useCurrencies } from "~/modules/campaigns/services/curunces";
import { useCurrencyStore } from "~/modules/campaigns/store/currancy";

const { currenciesData, refresh } = useCurrencies();
const currencyStore = useCurrencyStore();
const { selectedCurrency, selectedCurrencyLabel } = storeToRefs(currencyStore);

function updateCurrency(newValue) {
  if (newValue) {
    localStorage.setItem("selectedCurrency", newValue);
    const storedCurrencies = localStorage.getItem("currenciesData")
      ? JSON.parse(localStorage.getItem("currenciesData"))
      : currenciesData.value;
    const selectedCurrencyData = storedCurrencies.find(
      (currency) => currency.id == newValue
    );
    if (selectedCurrencyData) {
      selectedCurrencyLabel.value = selectedCurrencyData.currency_symbol;
    }

    currencyStore.setCurrency(newValue);
  }
}

onMounted(() => {
  const storedCurrencies = localStorage.getItem("currenciesData");
  const storedCurrency = localStorage.getItem("selectedCurrency");

  if (storedCurrencies) {
    currenciesData.value = localStorage.getItem("currenciesData")
      ? JSON.parse(localStorage.getItem("currenciesData"))
      : [];
  } else {
    refresh()
      .then(() => {
        localStorage.setItem(
          "currenciesData",
          JSON.stringify(currenciesData.value)
        );
        // console.log("locale currency is loaded");
      })
      .catch((error) => {
        console.error("Failed to fetch currencies data from API", error);
      });
  }

  if (!storedCurrency) {
    const defaultObj = currenciesData.value.find((i) => i.is_default == "yes");
    selectedCurrency.value = defaultObj ? defaultObj.id : "";
    updateCurrency(selectedCurrency.value);
  } else {
    updateCurrency(storedCurrency);
  }

  if (currenciesData.value) {
    const selectedCurrencyData = currenciesData.value.find(
      (currency) => currency.id === storedCurrency
    );
    if (selectedCurrencyData) {
      selectedCurrencyLabel.value = selectedCurrencyData.currency_symbol;
    }
  }
});
</script>
