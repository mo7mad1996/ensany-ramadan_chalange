<template>
  <div
    v-if="status == 'success' && data.length == 0"
    class="flex justify-center items-center bg-gray-100"
    style="height: 300px"
  >
    <div class="text-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          {{ $t("global.no_data") }}
        </h2>
        <p class="text-gray-500">{{ $t("global.no_data_") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  status: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
