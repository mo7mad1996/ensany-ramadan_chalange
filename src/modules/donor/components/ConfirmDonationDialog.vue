<template>
  <div class="p-4">
    <div class="flex justify-center items-center flex-col w-full">
      <nuxt-img loading="lazy" src="/donor/customdialog.png" alt="custom" />
      <h1 class="font-bold text-xl">{{ $t("donor.how_to_donate") }}</h1>
      <v-radio-group v-model="pay_type" row>
        <v-radio
          :label="$t('donor.pay_full')"
          color="primary"
          value="full"
          class="custom-radio"
        ></v-radio>
        <v-radio
          :label="$t('donor.daily_payment')"
          color="primary"
          value="daily"
          class="custom-radio"
        ></v-radio>
      </v-radio-group>
      <div class="flex items-center justify-between gap-6">
        <v-btn
          class="text-capitalize rounded-lg"
          variant="flat"
          size="default"
          color="green-lighten-5"
        >
          {{ $t("donor.cancel") }}
        </v-btn>
        <v-btn
          class="text-capitalize rounded-lg"
          variant="flat"
          size="default"
          color="primary"
        >
          {{ $t("donor.save") }}
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script setup>
const pay_type = ref("full");
</script>
