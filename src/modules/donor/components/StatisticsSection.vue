<template>
      <v-row dense class="mt-4">
      <v-col cols="12" md="4">
        <v-card class="pa-4 elevation-2">
          <v-icon class="mb-2" color="success">mdi-currency-usd</v-icon>
          <p class="text-subtitle-1 font-weight-medium">Total donations this Ramadan</p>
          <h2 class="font-weight-bold">$250</h2>
          <span class="text-success">⬆ 8.5% Up from last month</span>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4 elevation-2">
          <v-icon class="mb-2" color="primary">mdi-cart</v-icon>
          <p class="text-subtitle-1 font-weight-medium">Active Campaigns in Cart</p>
          <h2 class="font-weight-bold">30</h2>
          <span>5 campaigns ready for donation</span>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4 elevation-2">
          <v-icon class="mb-2" color="success">mdi-calendar-check</v-icon>
          <p class="text-subtitle-1 font-weight-medium">Upcoming Scheduled Payments</p>
          <h2 class="font-weight-bold">$40,689</h2>
          <span>Next donation: $50 on April 5</span>
        </v-card>
      </v-col>
    </v-row>
</template>