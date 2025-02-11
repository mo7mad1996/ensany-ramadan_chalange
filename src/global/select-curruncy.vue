<template>
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
      <v-list-item v-for="(currency, index) in currenciesData" :key="index">
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
      : [];

    if (storedCurrencies && storedCurrencies.length > 0) {
      const selectedCurrencyData = storedCurrencies.find(
        (currency) => currency.id == newValue
      );
      if (selectedCurrencyData) {
        selectedCurrencyLabel.value = selectedCurrencyData.currency_symbol;
      }
    }

    currencyStore.setCurrency(newValue);
  }
}

onMounted(() => {
  const storedCurrencies = localStorage.getItem("currenciesData");
  const storedCurrency = localStorage.getItem("selectedCurrency");

  if (storedCurrencies) {
    currenciesData.value = JSON.parse(storedCurrencies);
  } else {
    refresh()
      .then(() => {
        if (currenciesData.value && currenciesData.value.length > 0) {
          localStorage.setItem(
            "currenciesData",
            JSON.stringify(currenciesData.value)
          );
        }
      })
      .catch((error) => {
        // console.error("فشل في جلب بيانات العملات من الـ API", error);
      });
  }

  const checkCurrencies = setInterval(() => {
    if (currenciesData.value && currenciesData.value.length > 0) {
      clearInterval(checkCurrencies);

      if (!storedCurrency) {
        const defaultObj = currenciesData.value.find(
          (i) => i.is_default === "yes"
        );
        selectedCurrency.value = defaultObj ? defaultObj.id : "";
        updateCurrency(selectedCurrency.value);
      } else {
        updateCurrency(storedCurrency);
      }

      const selectedCurrencyData = currenciesData.value.find(
        (currency) => currency.id === storedCurrency
      );
      if (selectedCurrencyData) {
        selectedCurrencyLabel.value = selectedCurrencyData.currency_symbol;
      }
    }
  }, 100);
});
</script>
