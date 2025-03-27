<template>
  <VueApexCharts
    :options="chartOptions"
    :series="series"
    type="line"
    height="350"
  />
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
const { t } = useI18n();

const series = computed(() => [
  {
    name: t("dashboard.donations"),
    data: [100, 200, 300, 250, 400, 350, 500],
  },
]);

const chartOptions = ref({
  chart: {
    type: "line",
    height: 350,
  },

  colors: ["#83B949"],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
});
</script>
