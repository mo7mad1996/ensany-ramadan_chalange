<template>
  <Container>
    <div class="bread-crumb flex items-center gap-x-2">
      <span class="text-sm leading-20 font-semibold text-[#12121299]">
        <slot name="first_page"></slot>
      </span>
      <v-icon v-if="locale === 'ar'">mdi-chevron-left</v-icon>
      <v-icon v-else>mdi-chevron-right</v-icon>
      <span class="text-sm leading-20 font-semibold text-primary">
        <slot name="second_page"></slot>
      </span>
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
const { locale } = useI18n();
</script>
