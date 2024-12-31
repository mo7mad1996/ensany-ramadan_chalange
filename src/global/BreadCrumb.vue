<template>
  <Container>
    <div class="bread-crumb flex items-center gap-x-2">
      <span class="text-sm leading-20 font-semibold text-[#12121299]">
        <slot name="first_page"></slot>
      </span>
      <UIcon name="ep:arrow-left-bold" class="w-3 h-3"></UIcon>
      <span class="text-sm leading-20 font-semibold">
        <slot name="second_page"></slot>
      </span>
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
</script>
