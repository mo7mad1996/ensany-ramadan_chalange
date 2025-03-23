<template>
  <v-layout>
    <Header />
  </v-layout>

  <Container>
    <div class="error_page pt-xl pb-lg">
      <div class="image flex justify-center">
        <nuxt-img loading="lazy" src="/404.svg" alt="404 error" />
      </div>

      <h1 class="text-4xl font-bold text-center leading-[48px]">
        {{ $t("global.error-msg") }}
      </h1>

      <p class="text-center text-[#12121299] text-sm pt-3">
        {{ $t("global.error_desc") }}
      </p>

      <div
        v-html="error?.message"
        class="text-left text-[#12121299] text-xl pt-3"
      />

      <div class="text-left p-3 bg-slate-50" v-html="error?.stack"></div>

      <div class="button flex justify-center mt-sm">
        <v-btn
          class="text-capitalize rounded-lg"
          variant="flat"
          append-icon="mdi-arrow-right"
          size="large"
          color="primary"
          @click="$router.push('/')"
          >{{ $t("global.return_home") }}</v-btn
        >
      </div>
    </div>
  </Container>

  <AppFooter />
</template>

<script setup>
const AppFooter = defineAsyncComponent(() => import("./global/AppFooter.vue"));
const Container = defineAsyncComponent(() => import("./global/Container.vue"));
const Header = defineAsyncComponent(() => import("./global/Header.vue"));

const props = defineProps(["error"]);

onMounted(() => {
  console.error(props.error);
});
</script>
