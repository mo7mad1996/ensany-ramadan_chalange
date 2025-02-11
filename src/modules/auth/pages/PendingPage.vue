<template>
  <div class="error_page pt-xl pb-lg">
    <div class="image flex justify-center">
      <h1 class="text-[7rem] font-bold text-primary">301</h1>
    </div>

    <h1 class="text-4xl font-bold text-center leading-[48px]">
      {{ $t("auth.pending_msg") }}
    </h1>

    <!--
    <p class="text-center text-[#12121299] text-sm pt-3">
      {{ $t("global.error_desc") }}
    </p> 
    -->

    <div class="button flex justify-center mt-sm">
      <v-btn
        class="text-capitalize rounded-lg"
        variant="flat"
        append-icon="mdi-arrow-right"
        size="large"
        color="primary"
        @click="$router.push('/')"
      >
        {{ $t("global.return_home") }}
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { useGlobalVar } from "~/helpers/global-var";

const { siteName } = useGlobalVar();
siteName("auth.page_title_pending");
</script>
