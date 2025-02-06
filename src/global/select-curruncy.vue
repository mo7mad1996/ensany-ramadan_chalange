<template>
  <div v-if="status === 'pending'">Loading...</div>
  <div v-else-if="status === 'error'">{{ currencies_error }}...</div>
  <v-select
    v-else
    v-model="selectedCurrency"
    @change="updateCurrency"
    :items="currenciesData || []"
    item-title="currency_name"
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
import { ref, onMounted } from "vue";
import { api } from "~/helpers/axios";

const selectedCurrency = ref(null);
const currenciesData = ref(null);
const currencies_error = ref(null);
const status = ref("pending");

const updateCurrency = () => {
  if (selectedCurrency.value) {
    console.log("Currency Updated:", selectedCurrency.value);
  }
};

const loadCurrencies = async () => {
  try {
    const response = await api.get("/currencies");
    currenciesData.value = response.data.result;
    status.value = "success";
  } catch (error) {
    currencies_error.value = error.message;
    status.value = "error";
  }
};

onMounted(async () => {
  await loadCurrencies();
  if (currenciesData.value) {
    const defaultObj = currenciesData.value.find((i) => i.is_default === "yes");
    selectedCurrency.value = defaultObj ? defaultObj.id : null;
    updateCurrency();
  }
});
</script>
