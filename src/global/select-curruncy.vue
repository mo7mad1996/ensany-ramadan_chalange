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
    style="border-bottom: none"
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
const { selectedCurrency } = storeToRefs(currencyStore);

function updateCurrency(newValue) {
  if (newValue) {
    localStorage.setItem("selectedCurrency", newValue);
    currencyStore.setCurrency(newValue);
  }
}

onMounted(() => {
  const storedCurrencies =
    localStorage.getItem("currenciesData") || currenciesData.value;
  const storedCurrency = localStorage.getItem("selectedCurrency");

  if (storedCurrencies) {
    currenciesData.value = JSON.parse(storedCurrencies);
    if (storedCurrency) {
      selectedCurrency.value = storedCurrency;
    }
  } else {
    refresh()
      .then(() => {
        localStorage.setItem(
          "currenciesData",
          JSON.stringify(currenciesData.value)
        );
      })
      .catch((error) => {
        console.error("Failed to fetch currencies data from API", error);
      });
  }

  if (!storedCurrency) {
    const defaultObj = currenciesData.value.find((i) => i.is_default === "yes");
    selectedCurrency.value = defaultObj ? defaultObj.id : "";
    updateCurrency(selectedCurrency.value);
  }
});
</script>
