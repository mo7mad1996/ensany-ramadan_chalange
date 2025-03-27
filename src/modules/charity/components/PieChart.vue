<template>
  <VueApexCharts
    type="pie"
    :options="chartOptions"
    :series="series"
    width="400"
  />
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
const { t } = useI18n();

const series = ref([60, 20, 20]);

const chartOptions = computed(() => ({
  chart: {
    type: "pie",
  },
  labels: [
    t("dashboard.success_donations_chart"),
    t("dashboard.field_donations_chart"),
    t("dashboard.pending_donations"),
  ],
  colors: ["#83B949", "#1C441E", "#2C612E"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
}));
</script>
