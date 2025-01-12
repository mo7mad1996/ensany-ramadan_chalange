<template>
  <div class="bred-crumb flex justify-between items-center">
    <h1 class="text-3xl font-bold"><slot name="title"></slot></h1>

    <div class="buttons flex gap-x-3 items-center">
      <v-btn
        v-if="isButtons"
        class="text-capitalize rounded-lg"
        variant="flat"
        size="large"
        color="primary"
        @click="$router.push('/')"
      >
        <slot name="first_button"></slot>
      </v-btn>

      <v-btn
        v-if="isButtons"
        class="text-capitalize rounded-lg"
        variant="outlined"
        size="large"
        color="primary"
        @click="$router.push('/')"
        ><slot name="second_button"></slot
      ></v-btn>

      <span v-if="isLink" class="underline text-primary">
        <slot name="link"></slot>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { required } from "@vee-validate/rules";

const props = defineProps({
  isButtons: {
    type: Boolean,
    required: true,
  },

  isLink: {
    type: Boolean,
    required: true,
  },
});
</script>
