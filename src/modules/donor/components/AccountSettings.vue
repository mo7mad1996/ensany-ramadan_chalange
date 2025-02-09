<template>
  <section aria-label="account settings section">
    <v-tabs v-model="tab" align-tabs="start">
      <v-tab value="1" :ripple="false" style="text-transform: capitalize">{{
        $t("donor.profile")
      }}</v-tab>
      <!-- <v-tab value="2" :ripple="false" style="text-transform: capitalize">{{
        $t("donor.notification")
      }}</v-tab> -->
      <v-tab value="3" :ripple="false" style="text-transform: capitalize">{{
        $t("donor.privacy_security")
      }}</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="1" class="xl:w-1/2 lg:w-1/2 md:w-full w-full">
        <DonorProfile />
      </v-tabs-window-item>

      <!-- <v-tabs-window-item value="2">
        <DonorNotification />
      </v-tabs-window-item> -->

      <v-tabs-window-item value="3">
        <DonorPrivacy />
      </v-tabs-window-item>
    </v-tabs-window>
  </section>
</template>

<script setup>
const onSubmit = () => {};
const tab = ref(null);
</script>
