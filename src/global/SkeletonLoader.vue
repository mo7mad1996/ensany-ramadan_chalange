<template>
  <div
    class="grid pt-sm pb-sm gap-sm lg:grid-cols-3 md:grid-cols-1 grid-cols-1"
    v-if="loading == 'pending'"
  >
    <v-card class="rounded-lg elevation-0">
      <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
    </v-card>

    <v-card class="rounded-lg elevation-0">
      <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
    </v-card>

    <v-card class="rounded-lg elevation-0">
      <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
    </v-card>

    <v-card class="rounded-lg elevation-0">
      <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
    </v-card>

    <v-card class="rounded-lg elevation-0">
      <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
    </v-card>

    <v-card class="rounded-lg elevation-0">
      <v-skeleton-loader class="" type="image, article"></v-skeleton-loader>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  loading: {
    type: String,
    required: true,
  },
});
</script>
