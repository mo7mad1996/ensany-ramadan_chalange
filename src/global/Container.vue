<template>
  <v-container>
    <slot></slot>
  </v-container>
</template>

<style scoped>
.container {
  margin: 0 2rem;
}

[dir="rtl"] .v-container {
  direction: rtl;
}
</style>
