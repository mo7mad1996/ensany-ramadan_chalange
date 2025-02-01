<template>
  <div>
    <VueApexCharts
      :options="chartOptions"
      :series="series"
      type="line"
      height="350"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
  series: Array, // Chart data
  chartOptions: Object, // Chart configuration
});
</script>
