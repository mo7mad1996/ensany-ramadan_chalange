<template>
  <!-- <div v-if="status === 'pending'"></div>
  <div v-else-if="status === 'error'">{{ currencies_error }}</div> -->
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        color="default"
        class="capitalize border"
        style="text-transform: capitalize"
        v-bind="props"
      >
        {{ selectedCurrencyLabel }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(currency, index) in currenciesData">
        <v-list-item-title class="cursor-pointer">
          <div
            class="gap-x-0 border-b p-2 items-center w-200"
            @click="updateCurrency(currency.id)"
          >
            <span :title="currency.currency_name"
              >{{ currency.currency_symbol }}
              <!-- <small style="font-size: 10px"> : {{ currency.currency_name }}</small> -->
            </span>
          </div>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
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
        if (currenciesData.value != "") {
          localStorage.setItem("currenciesData", JSON.stringify(currenciesData.value));
        }
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
